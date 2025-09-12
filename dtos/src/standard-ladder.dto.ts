import { DeckDTO } from './deck';

export interface StandardLadderItemDto {
  rank: number;
  lvl: number;
  player: { display_name: string; id: string };
  points: number;
  events: number;
  mw: number;
  mp: number;
  ml: number;
  draw: number;
  vmw: number; // mw + bye
  vml: number; // ml + drops
  vmp: number; // mp + drops + bye
  events_won: number;
  major_events_won: number;
  favorite_deck: null | { deck: DeckDTO; percentage: number };
}

export interface StandardLadderDto {
  totalEvents: number;
  standings: StandardLadderItemDto[];
}
