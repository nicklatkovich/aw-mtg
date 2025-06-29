import { PlayerDTO, RecentTournamentsTableRowDTO } from '@dtos';
import { allTournaments } from '@server/data';
import { toDeckDTO } from '@server/data/data.utils';
import { playersByUsername } from '@server/data/players';
import assert from 'assert';

export function buildRecentTournamentsData(playersMap: Map<string, PlayerDTO>): RecentTournamentsTableRowDTO[] {
  const recentTournaments: RecentTournamentsTableRowDTO[] = allTournaments.map((tournament) => {
    const winner = tournament.standings[0].player;
    const winner_guid = playersByUsername[winner] ?? winner;
    const winner_dto = playersMap.get(winner_guid);
    assert(winner_dto, `Failed to get winner of tournament ${tournament.id} (${tournament.format})`);
    return {
      id: tournament.id,
      format: tournament.format,
      date: tournament.date,
      name: tournament.name,
      players_count: tournament.standings.length,
      winner: {
        player: { display_name: winner_dto.display_name, id: winner_dto.id },
        deck: toDeckDTO(tournament.standings[0].deck) ?? undefined,
      },
    };
  });
  if (recentTournaments.length > 200)
    console.warn('\nWARNING:\nMore than 200 events found. Consider adding pagination\n');
  return recentTournaments;
}
