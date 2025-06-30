import { DeckDTO } from './deck';
import { Format } from './format';

export interface PlayerTournamentDTO {
  id: number | string;
  name?: string;
  date: string;
  format: Format;
  points: number;
  rank: [number, number];
  deck?: DeckDTO;
  match_record?: string;
  game_record?: string;
}

export interface PlayerDTO {
  guid: string;
  id: string;
  display_name: string;
  recent_events: PlayerTournamentDTO[];
  color_stats: Record<string, number>; // key = color code (eg.'W','U',etc). value = [0-1]
}
