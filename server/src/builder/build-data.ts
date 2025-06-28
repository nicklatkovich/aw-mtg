import { mkdir, writeFile, rm } from 'fs/promises';
import path from 'path';
import { buildRecentTournamentsData } from './recent-tournaments.builder';
import { buildTournamentResults } from './tournament-results.builder';

const CONTENT_PATH = path.resolve(process.cwd(), './dist/client/data');
const TOURNAMENTS_PATH = path.resolve(CONTENT_PATH, 'tournaments/');

export async function buildData() {
  await rm(CONTENT_PATH, { recursive: true, force: true });
  await mkdir(CONTENT_PATH, { recursive: true });
  const recentTournaments = buildRecentTournamentsData();
  await writeFile(
    path.resolve(CONTENT_PATH, 'recent-tournaments.json'),
    `[\n  ${recentTournaments.map((t) => JSON.stringify(t)).join(',\n  ')}\n]\n`,
  );
  const tournamentResults = buildTournamentResults();
  await mkdir(TOURNAMENTS_PATH, { recursive: true });
  await Promise.all(
    Object.entries(tournamentResults).map(async ([id, content]) => {
      await writeFile(path.resolve(TOURNAMENTS_PATH, `${id}.json`), `${JSON.stringify(content)}\n`);
    }),
  );
}

if (require.main === module) {
  buildData()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
