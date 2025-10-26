import assert from 'assert';
import { MatchPlayerResultDTO, PlayerDTO, TournamentResultDTO } from '@dtos';
import { allTournaments } from '@server/data';
import { flipRecord, toDeckDTO } from '@server/data/data.utils';
import { playersByUsername } from '@server/data/players';

export function buildTournamentResults(playersMap: Map<string, PlayerDTO>): Record<string, TournamentResultDTO> {
  const result: Record<string, TournamentResultDTO> = {};
  for (const tournament of allTournaments) {
    const id = tournament.id.toString(10);
    result[id] = {
      id,
      date: tournament.date,
      name: tournament.name,
      format: tournament.format,
      standings: tournament.standings.map((standings) => {
        const player_guid = playersByUsername[standings.player] ?? standings.player;
        const player_dto = playersMap.get(player_guid);
        assert(player_dto, `Failed to get player: ${player_guid}`);
        return {
          rank: standings.rank,
          player: { display_name: player_dto.display_name, id: player_dto.id },
          points: standings.points,
          deck: toDeckDTO(standings.deck) ?? undefined,
          match_record: standings.match_record,
          game_record: standings.game_record,
          rounds: tournament.rounds?.map<MatchPlayerResultDTO | null>((round) => {
            const match = round.find((m) => m.players.some((p) => p && (playersByUsername[p] ?? p) === player_guid));
            if (!match || (match.players[1] === null && match.winner === 2)) return null;
            if (match.players[1] === null) return 'bye';
            const selfInd = match.players.findIndex((p) => (playersByUsername[p] ?? p) === player_guid);
            assert(selfInd >= 0);
            const win = match.winner === selfInd + 1;
            const res = match.winner === 0 ? 0 : win ? 1 : -1;
            if (typeof match.pod === 'number') return { pod: match.pod, res };
            const op = match.players[1 - selfInd];
            const op_guid = playersByUsername[op] ?? op;
            const vs = tournament.standings.find((s) => (playersByUsername[s.player] ?? s.player) === op_guid)?.rank;
            assert(typeof vs === 'number');
            let record;
            if (match.record) record = win ? match.record : flipRecord(match.record);
            else record = res === 1 ? 'win' : res === 0 ? 'draw' : 'lose';
            return { vs, record, res };
          }),
        };
      }),
    };
  }
  return result;
}
