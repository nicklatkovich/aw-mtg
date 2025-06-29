import { RecentTournamentsTableRowDTO } from '@dtos';
import { allTournaments } from '@server/data';
import { toDeckDTO } from '@server/data/data.utils';
import { playersByGuid, playersByUsername } from '@server/data/players';

export function buildRecentTournamentsData(): RecentTournamentsTableRowDTO[] {
  const recentTournaments: RecentTournamentsTableRowDTO[] = allTournaments.map((tournament) => {
    const winner = tournament.standings[0].player;
    return {
      id: tournament.id,
      format: tournament.format,
      date: tournament.date,
      name: tournament.name,
      players_count: tournament.standings.length,
      winner: {
        player: playersByGuid[playersByUsername[winner] ?? winner] ?? winner,
        deck: toDeckDTO(tournament.standings[0].deck) ?? undefined,
      },
    };
  });
  if (recentTournaments.length > 200)
    console.warn('\nWARNING:\nMore than 200 events found. Consider adding pagination\n');
  return recentTournaments;
}
