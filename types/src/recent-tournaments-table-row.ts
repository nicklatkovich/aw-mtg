import { DeckArchetype, DeckType } from './deck-archetypes';
import { Format } from './format';

export type RecentTournamentsTableRow = {
  id: number | string;
  format: Format;
  date: string;
  players_count: number;
  winner: { player: string; deck?: DeckArchetype | { archetype: DeckArchetype; colors?: string; type?: DeckType } };
};
