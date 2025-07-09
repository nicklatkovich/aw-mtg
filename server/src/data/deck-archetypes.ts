import { DeckType } from '@dtos';
import { _assertType } from '@server/utils';

export type ArchetypeInfo = string | readonly [colors: string, type: DeckType];

export const ARCHETYPES = {
  // c
  // W
  'Mono-White Control': ['W', DeckType.CONTROL],
  'Mono-White Weenie': ['W', DeckType.AGGRO],
  // WU
  'Azorius Control': ['WU', DeckType.CONTROL],
  'Azorius Spirits': ['WU', DeckType.TEMPO],
  'Azorius Enchantments': ['WU', DeckType.AGGRO],
  'Azorius Omniscience': ['WU', DeckType.COMBO],
  'Azorius Oculus': ['WU', DeckType.MIDRANGE],
  'Azorius Ensoul': ['WU', DeckType.AGGRO],
  'Azorius Artifacts': ['WU', DeckType.MIDRANGE],
  'Azorius Familiar': 'WU',
  // WUB
  'Esper Control': ['WUB', DeckType.CONTROL],
  'Esper Bounce': ['WUB', DeckType.MIDRANGE],
  'Esper Oculus': ['WUB', DeckType.MIDRANGE],
  'Esper Midrange': ['WUB', DeckType.MIDRANGE],
  // WUR
  'Jeskai Fires': ['WUR', DeckType.COMBO],
  'Jeskai Oculus': ['WUR', DeckType.MIDRANGE],
  'Jeskai Monument': ['WUR', DeckType.MIDRANGE],
  'Jeskai Control': ['WUR', DeckType.CONTROL],
  'Jeskai Solution': ['WUR', DeckType.MIDRANGE],
  // WUG
  'Bant Poison': ['WUG', DeckType.AGGRO],
  'Bant Enchantments': ['WUG', DeckType.AGGRO],
  'Bant Lotus Field': ['WUG', DeckType.COMBO],
  'Bant Bogles': ['WUG', DeckType.AGGRO],
  // WB
  'Orzhov Bounce': ['WB', DeckType.MIDRANGE],
  'Orzhov Control': ['WB', DeckType.CONTROL],
  'Orzhov Tokens': ['WB', DeckType.CONTROL],
  'Death and Taxes': 'WB',
  'Orzhov Blade': 'WB',
  'Orzhov Deadguy Ale': 'WB',
  'Orzhov Gates': 'WB',
  // WBR
  'Mardu Greasefang': ['WBR', DeckType.COMBO],
  'Mardu Raise the Past': ['WBR', DeckType.COMBO],
  'Mardu Gates': 'WBR',
  'Mardu Energy': ['WBR', DeckType.AGGRO],
  // WBG
  'Amalia Combo': ['WBG', DeckType.COMBO],
  'Abzan Greasefang': ['WBG', DeckType.COMBO],
  'Abzan Bounce': ['WBG', DeckType.MIDRANGE],
  // WR
  'Boros Heroic': ['WR', DeckType.AGGRO],
  'Boros Goblins': ['WR', DeckType.AGGRO],
  'Boros Aggro': ['WR', DeckType.AGGRO],
  'Boros Control': ['WR', DeckType.CONTROL],
  'Boros Convoke': ['WR', DeckType.AGGRO],
  'Boros Equipment': ['WR', DeckType.AGGRO],
  'Boros Monument': ['WR', DeckType.MIDRANGE],
  'Boros Raise the Past': ['WR', DeckType.COMBO],
  'Boros Synthesizer': 'WR',
  'Boros Bully': 'WR',
  'Boros Energy': ['WR', DeckType.AGGRO],
  'Boros Burn': ['WR', DeckType.AGGRO],
  'Boros Weenie': ['WR', DeckType.AGGRO],
  // WRG
  'Naya Adventures': 'WRG',
  'Naya Maverick': 'WRG',
  // WG
  'Selesnya Company': 'WG',
  'Selesnya Cage': 'WG',
  'Selesnya Enchantments': ['WG', DeckType.AGGRO],
  'Selesnya Rabbits': ['WG', DeckType.AGGRO],
  'Selesnya Bogles': ['WG', DeckType.AGGRO],
  'Selesnya Angels': ['WG', DeckType.MIDRANGE],
  // U
  'Mono-Blue Tempo': ['U', DeckType.TEMPO],
  'Mono-Blue Petitioners Combo': ['U', DeckType.COMBO],
  'Mono-Blue Faeries': ['U', DeckType.TEMPO],
  'Mono-Blue Terror': ['U', DeckType.TEMPO],
  'Mono-Blue High Tide': ['U', DeckType.COMBO],
  'Mono-Blue Ninjas': ['U', DeckType.TEMPO],
  // UB
  'Dimir Control': ['UB', DeckType.CONTROL],
  'Dimir Doomsday': ['UB', DeckType.CONTROL],
  'Dimir Bounce': ['UB', DeckType.MIDRANGE],
  'Dimir Midrange': ['UB', DeckType.MIDRANGE],
  'Dimir Ninjas': ['UB', DeckType.TEMPO],
  'Dimir Faeries': ['UB', DeckType.TEMPO],
  'Dimir Oculus': ['UB', DeckType.MIDRANGE],
  // UBR
  'Grixis Affinity': 'UBR',
  'Grixis Madness Burn': 'UBR',
  'Grixis Control': ['UBR', DeckType.CONTROL],
  'Grixis Midrange': ['UBR', DeckType.MIDRANGE],
  'Grixis Cycle Storm': ['UBR', DeckType.COMBO],
  'Grixis Hidetsugu Combo': ['UBR', DeckType.COMBO],
  // UBG
  'Sultai Acererak': ['UBG', DeckType.COMBO],
  'Sultai Beanstalk': ['UBG', DeckType.CONTROL],
  'Sultai Reanimator': ['UBG', DeckType.COMBO],
  'Sultai Dragons': ['UBG', DeckType.CONTROL],
  // UR
  'Izzet Phoenix': ['UR', DeckType.TEMPO],
  'Izzet Monument': ['UR', DeckType.MIDRANGE],
  'Izzet Aggro': ['UR', DeckType.AGGRO],
  'Izzet Otters': ['UR', DeckType.AGGRO],
  // URG
  'Temur Creativity': ['URG', DeckType.COMBO],
  'Temur Beanstalk': ['URG', DeckType.CONTROL],
  'Temur Aggro': ['URG', DeckType.AGGRO],
  // UG
  'Simic Lotus Field': ['UG', DeckType.COMBO],
  'Simic Artifacts': ['UG', DeckType.AGGRO],
  'Simic Petitioners Combo': ['UG', DeckType.COMBO],
  'Simic Madness': 'UG',
  // B
  'Mono-Black Discard': ['B', DeckType.MIDRANGE],
  'Mono-Black Midrange': ['B', DeckType.MIDRANGE],
  'Mono-Black Pactdoll': 'B',
  'Mono-Black Pit Rack': 'B',
  // BR
  'Rakdos Vampires': ['BR', DeckType.MIDRANGE],
  'Rakdos Midrange': ['BR', DeckType.MIDRANGE],
  'Rakdos Sacrifice': ['BR', DeckType.MIDRANGE],
  'Rakdos Aggro': ['BR', DeckType.AGGRO],
  'Rakdos Lizards': ['BR', DeckType.AGGRO],
  'Rakdos Transmogrify': ['BR', DeckType.COMBO],
  'Rakdos Madness Burn': 'BR',
  // BRG
  'Jund Sacrifice': ['BRG', DeckType.COMBO],
  'Jund Dredge': ['BRG', DeckType.COMBO],
  'Jund Wildfire': ['BRG', DeckType.CONTROL],
  // BG
  'Golgari Obliterator': ['BG', DeckType.MIDRANGE],
  'Golgari Aggro': ['BG', DeckType.AGGRO],
  'Golgari Midrange': ['BG', DeckType.MIDRANGE],
  'Golgari Pactdoll': 'BG',
  'Golgari Saprolings': 'BG',
  // R
  'Mono-Red Aggro': ['R', DeckType.AGGRO],
  'Mono-Red Resonance': ['R', DeckType.AGGRO],
  'Mono-Red Goblins': ['R', DeckType.AGGRO],
  'Mono-Red Burn': ['R', DeckType.AGGRO],
  'Mono-Red Bushwhacker': ['R', DeckType.AGGRO],
  'Mono-Red Synthesizer': 'R',
  // RG
  'Gruul Aggro': ['RG', DeckType.AGGRO],
  'Gruul Resonance': ['RG', DeckType.AGGRO],
  'Gruul Bard Class': ['RG', DeckType.AGGRO],
  'Gruul Dinosaurs': ['RG', DeckType.AGGRO],
  'Gruul Ramp': ['RG', DeckType.MIDRANGE],
  'Gruul Madness': 'RG',
  // G
  'Mono-Green Devotion': ['G', DeckType.COMBO],
  'Mono-Green Elves': 'G',
  'Mono-Green Infect': 'G',
  'Walls Combo': ['G', DeckType.COMBO],
  // 4c
  Dredge: ['WBRG', DeckType.COMBO],
  Tron: 'WBRG',
  Caves: ['WBRG', DeckType.CONTROL],
  Bogles: ['WUBG', DeckType.AGGRO],
  // 5c
  "Lich's Mastery": ['WUBRG', DeckType.COMBO],
  'Niv to Light': ['WUBRG', DeckType.CONTROL],
  'Quintorius Combo': ['WUBRG', DeckType.COMBO],
  'Enigmatic Incarnation': ['WUBRG', DeckType.CONTROL],
  'Domain Zur': ['WUBRG', DeckType.CONTROL],
  'Domain Control': ['WUBRG', DeckType.CONTROL],
  'Domain Zoo': ['WUBRG', DeckType.MIDRANGE],
  'Ephemerate Tron': 'WUBRG',
  'Cycle Storm': ['WUBRG', DeckType.COMBO],
} as const;

_assertType<{ readonly [name: string]: ArchetypeInfo }>(ARCHETYPES);
