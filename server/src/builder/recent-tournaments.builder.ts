import { RecentTournamentsTableRowDTO } from '@dtos';
import { allTournaments } from '@server/data';
import { toDeckDTO } from '@server/data/data.utils';
import { playersByGuid, playersByUsername } from '@server/data/players';

const RECENT_TOURNAMENTS_PER_PAGE = 100;

export function buildRecentTournamentsData(): RecentTournamentsTableRowDTO[] {
  const recentTournaments: RecentTournamentsTableRowDTO[] = allTournaments
    .slice(0, RECENT_TOURNAMENTS_PER_PAGE)
    .map((tournament) => {
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
  return recentTournaments;
}
