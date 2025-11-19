import assert from 'assert';
import { _2025_standard } from '@server/data/tournaments/_2025_standard';
import { DeckArchetype } from '@server/data/data.types';
import { playersByUsername } from '@server/data/players';
import { getDeckArchetypeStrict, getDeckColor, getPlayerNameByGuid } from '@server/data/data.utils';
import { PlayerDTO, StandardLadderDto, StandardLadderItemDto } from '@dtos';

const tournaments = _2025_standard;

const majorEventWinners = new Map([
  ['ba897ea4-1d49-44ff-8cd7-c7b21e27205f', 1], // Raptunovich Aleksei
  ['80d52a7c-b225-4438-9779-52897511fd5a', 1], // Kondibor Nikita
  ['05f46aac-a10a-4e78-a27c-ee8d8778996c', 1], // Zubovich Valery
]);

type PlayerStats = {
  readonly pid: string;
  readonly playerName: string;
  readonly events: number;
  readonly points: number;
  readonly lvl: number;
  readonly mp: number;
  readonly mw: number;
  readonly ml: number;
  readonly bye: number;
  readonly draw: number;
  readonly drops: number;
  readonly events_won: number;
  readonly decks: Map<
    DeckArchetype,
    { archetype: DeckArchetype; events: number; mp: number; mw: number; lastTournamentTimestamp: number }
  >;
};

export function buildStandardLadder(playersMap: Map<string, PlayerDTO>): StandardLadderDto {
  const stats = new Map<string, PlayerStats>();

  for (const { rounds, standings, date } of tournaments.sort((a, b) => {
    const aT = new Date(a.date).getTime();
    const bT = new Date(b.date).getTime();
    assert(aT !== bT);
    return aT - bT;
  })) {
    const midRank = Math.ceil(standings.length / 2);
    const evenPlayers = standings.length % 2 === 0;
    const updatedPids = new Set<string>();
    for (const { player, rank, deck, mp: tMP, mw: tMW } of standings) {
      const pid = playersByUsername[player];
      assert(pid);
      const prev = stats.get(pid) ?? null;
      const playerName = getPlayerNameByGuid(pid);
      const tPoints = midRank - rank + (rank <= midRank && evenPlayers ? 1 : 0);
      const points = Math.max(0, (prev?.points ?? 0) - (prev?.lvl ?? 0) + tPoints + 1);
      let mp = prev?.mp ?? 0;
      let mw = prev?.mw ?? 0;
      let ml = prev?.ml ?? 0;
      let bye = prev?.bye ?? 0;
      let draw = prev?.draw ?? 0;
      let drops = prev?.drops ?? 0;
      for (const matches of rounds ?? []) {
        const match = matches.find((match) => match.players.includes(player));
        if (!match) {
          drops += 1;
          continue;
        } else if (match.players[1] === null && match.winner === 2) {
          // bye without 3 points
          // (to prevent mocked bye to be counted as a drop, eg in case of 5 players each-vs-each)
          continue;
        }
        mp += 1;
        if (!match.players[1]) bye += 1;
        else if (match.winner === 0) draw += 1;
        else if ((match.players[0] === player) === (match.winner === 1)) mw += 1;
        else ml += 1;
      }
      const decks: PlayerStats['decks'] = prev?.decks ?? new Map();
      const archetype = getDeckArchetypeStrict(deck);
      if (archetype) {
        const prevDeckStats = decks.get(archetype) ?? null;
        decks.set(archetype, {
          archetype,
          events: (prevDeckStats?.events ?? 0) + 1,
          mp: (prevDeckStats?.mp ?? 0) + (tMP ?? 0),
          mw: (prevDeckStats?.mw ?? 0) + (tMW ?? 0),
          lastTournamentTimestamp: Math.max(prevDeckStats?.lastTournamentTimestamp ?? 0, new Date(date).getTime()),
        });
      }
      stats.set(pid, {
        pid,
        playerName,
        events: (prev?.events ?? 0) + 1,
        points,
        lvl: points >= 40 ? Math.floor(points / 10) - 3 : 0,
        mp,
        mw,
        ml,
        bye: bye,
        draw,
        drops,
        events_won: (prev?.events_won ?? 0) + (rank === 1 ? 1 : 0),
        decks,
      });
      updatedPids.add(pid);
    }
    for (const [pid, value] of stats.entries()) {
      if (updatedPids.has(pid)) continue;
      if (value.lvl === 0) continue;
      const newPoints = Math.max(0, value.points - value.lvl);
      const newLvl = newPoints >= 40 ? Math.floor(newPoints / 10) - 3 : 0;
      stats.set(pid, { ...value, points: newPoints, lvl: newLvl });
    }
  }
  const result: StandardLadderItemDto[] = [];
  for (const [index, row] of [...stats.values()]
    .sort((a, b) => {
      if (a.points !== b.points) return b.points - a.points;
      if (a.events !== b.events) return a.events - b.events;
      const virtualWRa = (a.mw + a.bye) / (a.mp + a.bye + a.drops);
      const virtualWRb = (b.mw + b.bye) / (b.mp + b.bye + b.drops);
      if (virtualWRa !== virtualWRb) return virtualWRb - virtualWRa;
      const aMW = a.mw / a.mp;
      const bMW = b.mw / b.mp;
      if (aMW !== bMW) return bMW - aMW;
      if (a.mp !== b.mp) return b.mp - a.mp;
      return a.playerName < b.playerName ? -1 : 1;
    })
    .entries()) {
    const mainDeck = [...row.decks.values()].sort((a, b) => {
      if (a.events !== b.events) return b.events - a.events;
      if (a.mp !== b.mp) return b.mp - a.mp;
      if (a.mw !== b.mw) return b.mw - a.mw;
      if (a.lastTournamentTimestamp !== b.lastTournamentTimestamp) {
        return b.lastTournamentTimestamp - a.lastTournamentTimestamp;
      }
      return a.archetype < b.archetype ? -1 : 1;
    })[0];
    // console.log(mainDeck);
    const totalSubmittedDecks = [...row.decks.values()].reduce((acc, e) => acc + e.events, 0);
    const archetype = mainDeck?.archetype ?? null;
    const virtualWins = row.mw + row.bye;
    const virtualLose = row.ml + row.drops;
    const virtualTotalGames = virtualWins + virtualLose + row.draw;
    const player = playersMap.get(row.pid);
    assert(player, `playerId not found: ${row.pid}`);
    result.push({
      rank: index + 1,
      lvl: row.lvl,
      player: { display_name: row.playerName, id: player.id },
      points: row.points,
      events: row.events,
      mw: row.mw,
      ml: row.ml,
      draw: row.draw,
      mp: row.mp,
      vmw: virtualWins,
      vml: virtualLose,
      vmp: virtualTotalGames,
      events_won: row.events_won,
      major_events_won: majorEventWinners.get(row.pid) ?? 0,
      favorite_deck: archetype && {
        deck: { archetype, colors: getDeckColor(archetype) },
        percentage: (mainDeck?.events / totalSubmittedDecks) * 100,
      },
    });
  }
  return { totalEvents: tournaments.length, standings: result };
}
