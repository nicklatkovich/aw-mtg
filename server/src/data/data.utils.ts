import { DeckDTO } from '@dtos';
import { Deck, DeckArchetype } from './data.types';
import { ArchetypeInfo, ARCHETYPES } from './deck-archetypes';

export function getArchetypeInfo(archetype: DeckArchetype): ArchetypeInfo;
export function getArchetypeInfo(archetype: string): ArchetypeInfo | null;
export function getArchetypeInfo(archetype: string): ArchetypeInfo | null {
  return (ARCHETYPES as Record<string, ArchetypeInfo | undefined>)[archetype] ?? null;
}

export function getDeckArchetypeStrict(deck?: Deck | null): DeckArchetype | null {
  if (!deck) return null;
  return typeof deck === 'string' ? deck : (deck.archetype ?? null);
}

export function getDeckArchetype(deck?: Deck | null): string | null {
  if (!deck) return null;
  return typeof deck === 'string' ? deck : (deck.name ?? deck.archetype ?? null);
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

export function toDeckDTO(deck: Deck): DeckDTO;
export function toDeckDTO(deck?: Deck | null): DeckDTO | null;
export function toDeckDTO(deck?: Deck | null): DeckDTO | null {
  if (!deck) return null;
  return { archetype: getDeckArchetype(deck), colors: getDeckColor(deck), type: getDeckType(deck) };
}

export function flipRecord(record: string): string {
  const split = record.split('-');
  return [split[1], split[0], split.slice(2)].join('-');
}
