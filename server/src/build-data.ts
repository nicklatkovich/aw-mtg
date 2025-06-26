import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { RecentTournamentsTableRow } from '@types';
import { playersByGuid, playersByUsername } from './data/players';
import { allTournaments } from './data';

const RECENT_TOURNAMENTS_PER_PAGE = 100;
const CONTENT_PATH = path.resolve(__dirname, '../../dist/client/data');

export async function buildData() {
  const recentTournaments: RecentTournamentsTableRow[] = allTournaments
    .slice(0, RECENT_TOURNAMENTS_PER_PAGE)
    .map((tournament) => {
      const winner = tournament.standings[0].player;
      const winner_guid = playersByUsername[winner] ?? winner;
      return {
        id: tournament.id,
        format: tournament.format,
        date: tournament.date,
        players_count: tournament.standings.length,
        winner: { player: playersByGuid[winner_guid] ?? winner, deck: tournament.standings[0].deck },
      };
    });
  await mkdir(CONTENT_PATH, { recursive: true });
  await writeFile(path.resolve(CONTENT_PATH, 'recent-tournaments.json'), JSON.stringify(recentTournaments));
}

if (require.main === module) {
  buildData()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
