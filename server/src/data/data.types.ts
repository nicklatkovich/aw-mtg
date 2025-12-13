import { DeckType, Format } from '@dtos';
import { ARCHETYPES } from './deck-archetypes';

export type DeckArchetype = keyof typeof ARCHETYPES;

export type Deck = DeckArchetype | { archetype?: DeckArchetype; colors?: string; type?: DeckType; name?: string };

// null;win:2 - bye without 3 points (to prevent mocked bye to be counted as a drop,
// eg in case of 5 players each-vs-each)
export type Match = (
  | { players: [string, string]; winner: 0 | 1 | 2; pod?: null }
  | { players: [string, null]; winner: 1 | 2; pod?: null }
  | { pod: number; players: string[]; winner: number }
) & {
  record?: string;
  teamWinner?: number; // for team events, which team won the match
  notFinished?: boolean;
};

export type Standing = {
  rank: number;
  player: string; // guid or melee username
  points: number;
  mp?: number;
  mw?: number;
  deck?: Deck;
  match_record?: string;
  game_record?: string;
  ignoreResults?: boolean; // true if this result should be ignored for ladder
  omw?: number;
  tgw?: number;
  ogw?: number;
  format?: Format; // only for trios
};

export type Tournament = {
  id: number | string; // number = melee tournament id
  name?: string;
  format: Format;
  date: string;
  standings: Standing[];
  rounds?: Match[][];
};
