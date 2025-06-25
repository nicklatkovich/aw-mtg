import { mkdir, writeFile } from 'fs/promises';
import { DeckArchetype, DeckType } from './types/deck-archetypes';
import { Format } from './types/formats';
import { _2025_standard } from './data/_2025_standard';
import path from 'path';
import { playersByGuid, playersByUsername } from './data/players';

const RECENT_TOURNAMENTS_PER_PAGE = 100;
const CONTENT_PATH = path.resolve(__dirname, '../../dist/client/data');

export const tournaments = [..._2025_standard].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type TournamentsTableRow = {
  id: number | string;
  format: Format;
  date: string;
  players_count: number;
  winner: { player: string; deck?: DeckArchetype | { archetype: DeckArchetype; colors?: string; type?: DeckType } };
};

export async function buildData() {
  const recentTournaments: TournamentsTableRow[] = tournaments
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
