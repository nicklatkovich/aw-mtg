import assert from 'assert';
import { PlayerDTO, PlayerTournamentDTO } from '@dtos';
import { playersByGuid, playersByUsername } from '@server/data/players';
import { allTournaments } from '@server/data';
import { toDeckDTO } from '@server/data/data.utils';

export function buildPlayersData(): Map<string, PlayerDTO> {
  const usedIds = new Map<string, string>();
  const result = new Map<string, PlayerDTO>();
  for (const [guid, value] of Object.entries(playersByGuid)) {
    if (!value) continue;
    const display_name = typeof value === 'string' ? value : value[0];
    const meleeNames = Object.entries(playersByUsername)
      .filter(([_, _guid]) => guid === _guid)
      .map(([name]) => name);
    const normNames = meleeNames
      .map((name) => (/^[a-z\d-]+$/i.test(name) ? name.toLowerCase() : null))
      .filter((e): e is NonNullable<typeof e> => !!e);
    const id = (typeof value !== 'string' ? value[1].id : null) ?? normNames[0] ?? null;
    assert(id, `Failed to create id for ${display_name} (${guid})`);
    {
      const dupGuid = usedIds.get(id);
      assert(!dupGuid, `User id duplicate: ${id} ${guid} !== ${dupGuid})`);
    }
    usedIds.set(id, guid);
    const recent_events = allTournaments
      .map<PlayerTournamentDTO | null>((t) => {
        const s = t.standings.find((s) => (playersByUsername[s.player] ?? s.player) === guid);
        if (!s) return null;
        const result: PlayerTournamentDTO = {
          name: t.name,
          date: t.date,
          format: t.format,
          points: s.points,
          rank: [s.rank, t.standings.length],
          deck: toDeckDTO(s.deck) ?? undefined,
          match_record: s.match_record,
          game_record: s.game_record,
        };
        return result;
      })
      .filter((e): e is NonNullable<typeof e> => !!e);
    result.set(guid, { display_name, guid, id, recent_events });
  }
  return result;
}
