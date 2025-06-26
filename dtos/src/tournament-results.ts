import { DeckDTO } from './deck';
import { Format } from './format';

export type TournamentResultDTO = {
  id: number | string; // number = melee tournament id
  format: Format;
  date: string;
  standings: Array<{
    rank: number;
    player: string;
    points: number;
    deck?: DeckDTO;
    match_record?: string;
    game_record?: string;
    rounds: Array<
      | null
      | 'bye'
      | {
          vs: number;
          record: string;
          res: number; // 1=win; -1=lose; 0=draw
        }
    >;
  }>;
};
