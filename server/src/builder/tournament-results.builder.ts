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
        let display_name: string;
        let player_id: string | undefined;
        let player_guid: string | undefined;
        if (typeof standings.player === 'string') {
          player_guid = playersByUsername[standings.player] ?? standings.player;
          const player_dto = playersMap.get(player_guid);
          assert(player_dto, `Failed to get player: ${player_guid}`);
          display_name = player_dto.display_name;
          player_id = player_dto.id;
        } else {
          display_name = standings.player.display_name;
          player_id = standings.player.id;
        }
        return {
          rank: standings.rank,
          player: { display_name, id: player_id },
          points: standings.points,
          deck: toDeckDTO(standings.deck) ?? undefined,
          match_record: standings.match_record,
          game_record: standings.game_record,
          format: standings.format,
          rounds: tournament.rounds?.map<MatchPlayerResultDTO | null>((round) => {
            const matchesWithSelfInd = round.map((m) => ({
              match: m,
              selfInd: m.players.findIndex(
                (p) => (p && (playersByUsername[p] ?? p) === player_guid) || p === display_name,
              ),
            }));
            const filteredMatches = matchesWithSelfInd.filter(({ selfInd }) => selfInd >= 0);
            if (filteredMatches.length === 0) return null;
            assert(filteredMatches.length === 1);
            const { match, selfInd } = filteredMatches[0]!;
            if (match.players[1] === null && match.winner === 2) return null;
            if (match.players[1] === null) return 'bye';
            assert(selfInd >= 0);
            const win = match.winner === selfInd + 1;
            const teamWin = match.teamWinner === undefined ? undefined : match.teamWinner === selfInd + 1;
            const res = match.winner === 0 ? 0 : win ? 1 : -1;
            if (typeof match.pod === 'number') return { pod: match.pod, res };
            const op = match.players[1 - selfInd];
            const op_guid = playersByUsername[op] ?? op;
            const vs = tournament.standings.find((s) =>
              typeof s.player === 'string'
                ? (playersByUsername[s.player] ?? s.player) === op_guid
                : s.player.display_name === op,
            )?.rank;
            assert(typeof vs === 'number', `Op "${op}" not found`);
            let record;
            if (match.record) record = win ? match.record : flipRecord(match.record);
            else record = res === 1 ? 'win' : res === 0 ? (match.notFinished ? '-' : 'draw') : 'lose';
            return { vs, record, res, teamWin: teamWin, notFinished: match.notFinished };
          }),
        };
      }),
    };
  }
  return result;
}
