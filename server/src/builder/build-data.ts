import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { buildRecentTournamentsData } from './recent-tournaments-builder';

export const CONTENT_PATH = path.resolve(process.cwd(), './dist/client/data');

export async function buildData() {
  await mkdir(CONTENT_PATH, { recursive: true });
  const recentTournaments = buildRecentTournamentsData();
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
