import { Deck, DeckArchetype } from './data.types';
import { ArchetypeInfo, ARCHETYPES } from './deck-archetypes';

export function getArchetypeInfo(archetype: DeckArchetype): ArchetypeInfo;
export function getArchetypeInfo(archetype: string): ArchetypeInfo | null;
export function getArchetypeInfo(archetype: string): ArchetypeInfo | null {
  return (ARCHETYPES as Record<string, ArchetypeInfo | undefined>)[archetype] ?? null;
}

export function getDeckArchetype(deck?: Deck | null): string | null {
  if (!deck) return null;
  return typeof deck === 'string' ? deck : deck.archetype;
}

export function getDeckColor(deck?: Deck | null): string | null {
  if (deck && typeof deck === 'object' && deck.colors) return deck.colors;
  const archetype = getDeckArchetype(deck);
  if (!archetype) return null;
  const info = getArchetypeInfo(archetype);
  return !info || typeof info === 'string' ? info : info[0];
}

export function getDeckType(deck?: Deck | null): string | null {
  if (deck && typeof deck === 'object' && deck.type) return deck.type;
  const archetype = getDeckArchetype(deck);
  if (!archetype) return null;
  const info = getArchetypeInfo(archetype);
  return !info || typeof info === 'string' ? null : (info[1] ?? null);
}
