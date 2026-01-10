import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_premodern: Tournament[] = [
  {
    id: 395983,
    format: Format.PREMODERN,
    name: 'Daily | Premodern (10.01.26)',
    date: '2026-01-10',
    standings: [
      { player: 'AndP13', rank: 1, deck: 'Gruul Elves', points: 9, mp: 3, mw: 3, match_record: '3-0-0', game_record: '6-1-0' },
      { player: 'Aliaksandr', rank: 2, deck: 'Mono-Blue Tide Control', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '4-2-0' },
      { player: 'ArtB9', rank: 3, deck: 'Orzhov Infestation', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '4-2-0' },
      { player: 'Candybober', rank: 4, deck: 'Golgari Reanimator', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-3-0' },
      { player: 'Dukalis1985', rank: 5, deck: 'Selesnya Clerics', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-5-0' },
      { player: '4onoki', rank: 6, deck: 'Golgari Rock', points: 3, mp: 2, mw: 0, match_record: '1-2-0', game_record: '2-4-0' },
      { player: 'NickLatkovich', rank: 7, deck: 'Mono-Blue Stasis', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-4-0' },
      { player: 'EugB2', rank: 8, deck: 'Mono-Black Discard', points: 0, mp: 2, mw: 0, match_record: '0-2-0', game_record: '0-4-0' },
    ],
    rounds: [
      [
        { players: ['4onoki', 'Aliaksandr'], winner: 2, record: '2-0-0' },
        { players: ['NickLatkovich', 'Dukalis1985'], winner: 2, record: '2-1-0' },
        { players: ['AndP13', 'EugB2'], winner: 1, record: '2-0-0' },
        { players: ['Candybober', 'ArtB9'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['Aliaksandr', 'ArtB9'], winner: 1, record: '1-0-0' },
        { players: ['Dukalis1985', 'AndP13'], winner: 2, record: '2-0-0' },
        { players: ['NickLatkovich', 'EugB2'], winner: 1, record: '2-0-0' },
        { players: ['Candybober', '4onoki'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['4onoki', null], winner: 1, record: 'bye' },
        { players: ['Aliaksandr', 'AndP13'], winner: 2, record: '2-1-0' },
        { players: ['Dukalis1985', 'Candybober'], winner: 2, record: '2-1-0' },
        { players: ['ArtB9', 'NickLatkovich'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
];
