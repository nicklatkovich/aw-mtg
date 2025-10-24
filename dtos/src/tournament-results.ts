import { DeckDTO } from './deck';
import { Format } from './format';

export type MatchPlayerResultDTO =
  | 'bye'
  | (({ vs: number; pod?: undefined } | { pod: number }) & {
      record?: string;
      res: 1 | -1 | 0; // 1=win; -1=lose; 0=draw
    });

export type TournamentResultDTO = {
  id: number | string; // number = melee tournament id
  format: Format;
  date: string;
  name?: string;
  standings: Array<{
    rank: number;
    player: { display_name: string; id: string };
    points: number;
    deck?: DeckDTO;
    match_record?: string;
    game_record?: string;
    rounds?: Array<null | MatchPlayerResultDTO>;
  }>;
};
