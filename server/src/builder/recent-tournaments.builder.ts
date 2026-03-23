import { PlayerDTO, RecentTournamentsTableRowDTO } from '@dtos';
import { allTournaments } from '@server/data';
import { toDeckDTO } from '@server/data/data.utils';
import { playersByUsername } from '@server/data/players';
import assert from 'assert';

export function buildRecentTournamentsData(playersMap: Map<string, PlayerDTO>): RecentTournamentsTableRowDTO[] {
  const notHiddenEvents = allTournaments.filter((t) => !t.hidden);
  const recentTournaments: RecentTournamentsTableRowDTO[] = notHiddenEvents.map((tournament) => {
    const winner = tournament.standings[0].player;
    const winner_info = typeof winner === 'string' ? playersMap.get(playersByUsername[winner] ?? winner) : winner;
    assert(winner_info);
    return {
      id: tournament.id,
      format: tournament.format,
      date: tournament.date,
      name: tournament.name,
      players_count: tournament.standings.length,
      winner: {
        player: { display_name: winner_info.display_name, id: winner_info.id },
        deck: toDeckDTO(tournament.standings[0].deck) ?? undefined,
      },
    };
  });
  if (recentTournaments.length > 200)
    console.warn('\nWARNING:\nMore than 200 events found. Consider adding pagination\n');
  return recentTournaments;
}
