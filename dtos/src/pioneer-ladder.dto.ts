import { DeckDTO } from './deck';

export interface PioneerLadderItemDto {
  rank: number;
  player: { display_name: string; id: string };
  points: number;
  events: number;
  mp: number;
  mw: number;
  _4_0s: number;
  favorite_deck: null | { deck: DeckDTO; percentage: number };
}

export interface PioneerLadderInfoDto {
  totalEvents: number;
  table: PioneerLadderItemDto[];
  finished?: boolean;
}
