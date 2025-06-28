import { DeckDTO } from './deck';
import { Format } from './format';

export type RecentTournamentsTableRowDTO = {
  id: number | string;
  format: Format;
  date: string;
  name?: string;
  players_count: number;
  winner: { player: string; deck?: DeckDTO };
};
