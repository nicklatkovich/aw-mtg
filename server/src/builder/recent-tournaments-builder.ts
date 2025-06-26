import { RecentTournamentsTableRowDTO } from '@dtos';
import { allTournaments } from '@server/data';
import { getDeckArchetype, getDeckColor, getDeckType } from '@server/data/data.utils';
import { playersByGuid, playersByUsername } from '@server/data/players';

const RECENT_TOURNAMENTS_PER_PAGE = 100;

export function buildRecentTournamentsData(): RecentTournamentsTableRowDTO[] {
  const recentTournaments: RecentTournamentsTableRowDTO[] = allTournaments
    .slice(0, RECENT_TOURNAMENTS_PER_PAGE)
    .map((tournament) => {
      const winner = tournament.standings[0].player;
      const winner_guid = playersByUsername[winner] ?? winner;
      const winner_deck = tournament.standings[0].deck;
      return {
        id: tournament.id,
        format: tournament.format,
        date: tournament.date,
        players_count: tournament.standings.length,
        winner: {
          player: playersByGuid[winner_guid] ?? winner,
          deck: {
            archetype: getDeckArchetype(winner_deck),
            colors: getDeckColor(winner_deck),
            type: getDeckType(winner_deck),
          },
        },
      };
    });
  return recentTournaments;
}
