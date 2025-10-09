import assert from 'assert';
import { PioneerLadderInfoDto, PioneerLadderItemDto, PlayerDTO } from '@dtos';
import { DeckArchetype } from '@server/data/data.types';
import { getDeckArchetypeStrict, toDeckDTO } from '@server/data/data.utils';
import { playersByUsername } from '@server/data/players';
import { _2025_pioneer } from '@server/data/tournaments/_2025_pioneer';

const tournaments = _2025_pioneer
  .filter((t) => new Date(t.date).getTime() < new Date('2025-10-10').getTime())
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

const winner = '824039fa-f433-42e7-845c-7c0fd61a21c2'; // Vorotinsky Vitaliy

type PlayerDecks = Map<
  DeckArchetype,
  { events: number; lastTimestamp: number; mp: number; mw: number; archetype: DeckArchetype }
>;

export function buildPioneerLadder(playersMap: Map<string, PlayerDTO>): PioneerLadderInfoDto {
  const result = new Map<
    string,
    { points: number; events: number; mp: number; mw: number; _4_0s: number; decks: PlayerDecks }
  >();
  for (const t of tournaments) {
    for (const s of t.standings) {
      const pid = playersByUsername[s.player] ?? s.player;
      const prevRes = result.get(pid);
      const decks: PlayerDecks = prevRes?.decks ?? new Map();
      const archetype = getDeckArchetypeStrict(s.deck);
      if (archetype) {
        const prevDeckRes = decks.get(archetype);
        decks.set(archetype, {
          events: (prevDeckRes?.events ?? 0) + 1,
          lastTimestamp: Math.max(new Date(t.date).getTime(), prevDeckRes?.lastTimestamp ?? 0),
          mp: (prevDeckRes?.events ?? 0) + 1,
          mw: (prevDeckRes?.mw ?? 0) + 1,
          archetype,
        });
      }
      result.set(pid, {
        points: (prevRes?.points ?? 0) + (s.ignoreResults ? 0 : s.points),
        events: (prevRes?.events ?? 0) + 1,
        mp: (prevRes?.mp ?? 0) + (s.mp ?? 0),
        mw: (prevRes?.mw ?? 0) + (s.mw ?? 0),
        _4_0s: (prevRes?._4_0s ?? 0) + (s.points >= 12 ? 1 : 0),
        decks,
      });
    }
  }
  // points DESC, 4-0s DESC, events ASC, mw DESC, mp ASC, guid ASC
  const rows = [...result.entries()].sort(([apid, a], [bpid, b]) => {
    if (apid === winner) return -1;
    if (bpid === winner) return 1;
    if (a.points !== b.points) return b.points - a.points;
    if (a._4_0s !== b._4_0s) return b._4_0s - a._4_0s;
    if (a.events !== b.events) return a.events - b.events;
    if (a.mw !== b.mw) return b.mw - a.mw;
    if (a.mp !== b.mp) return a.mp - b.mp;
    return apid < bpid ? -1 : 1;
  });
  const table: PioneerLadderItemDto[] = rows.map(([pid, row], i) => {
    const player = playersMap.get(pid);
    assert(player);
    const totalSubmittedDecks = [...row.decks.values()].reduce((acc, e) => acc + e.events, 0);
    const favorite_deck =
      [...row.decks.values()].sort((a, b) => {
        if (a.events !== b.events) return b.events - a.events;
        if (a.mp !== b.mp) return b.mp - a.mp;
        if (a.mw !== b.mw) return b.mw - a.mw;
        if (a.lastTimestamp !== b.lastTimestamp) return b.lastTimestamp - a.lastTimestamp;
        return a.archetype < b.archetype ? -1 : 1;
      })[0] ?? null;
    return {
      rank: i + 1,
      player: { display_name: player.display_name, id: player.id },
      points: row.points,
      events: row.events,
      mp: row.mp,
      mw: row.mw,
      _4_0s: row._4_0s,
      favorite_deck: favorite_deck
        ? { deck: toDeckDTO(favorite_deck.archetype), percentage: favorite_deck.events / totalSubmittedDecks }
        : null,
    };
  });
  return { totalEvents: tournaments.length, table };
}
