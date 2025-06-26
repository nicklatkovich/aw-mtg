import { DeckArchetype, DeckType, Format } from '@types';

export type Tournament = {
  id: number | string; // number = melee tournament id
  format: Format;
  date: string;
  standings: Array<{
    rank: number;
    player: string; // guid or melee username
    points: number;
    mp?: number;
    mw?: number;
    deck?: DeckArchetype | { archetype: DeckArchetype; colors?: string; type?: DeckType };
    match_record?: string;
    game_record?: string;
    ignoreResults?: boolean; // true if this result should be ignored for ladder
    omw?: number;
    tgw?: number;
    ogw?: number;
  }>;
  rounds?: Array<
    Array<
      ({ players: [string, string]; winner: 0 | 1 | 2 } | { players: [string, null]; winner: 1 }) & {
        record?: string;
      }
    >
  >;
};
