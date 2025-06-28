import { DeckType, Format } from '@dtos';
import { ARCHETYPES } from './deck-archetypes';

export type DeckArchetype = keyof typeof ARCHETYPES;

export type Deck = DeckArchetype | { archetype?: DeckArchetype; colors?: string; type?: DeckType; name?: string };

export type Match = ({ players: [string, string]; winner: 0 | 1 | 2 } | { players: [string, null]; winner: 1 }) & {
  record?: string;
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
};

export type Tournament = {
  id: number | string; // number = melee tournament id
  name?: string;
  format: Format;
  date: string;
  standings: Standing[];
  rounds?: Match[][];
};
