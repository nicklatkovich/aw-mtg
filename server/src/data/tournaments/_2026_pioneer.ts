import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_pioneer: Tournament[] = [
  {
    id: 395512,
    format: Format.PIONEER,
    name: 'Daily | Pioneer (08.01.26)',
    date: '2026-01-08',
    standings: [
      { player: 'ispinyouround', rank: 1, deck: 'Rakdos Midrange', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'NickLatkovich', rank: 2, deck: 'Quintorius Combo', points: 9, mp: 3, mw: 2, match_record: '3-1-0', game_record: '6-4-0' },
      { player: 'AlexKhan', rank: 3, deck: 'Selesnya Company', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'Tamplier007333', rank: 4, deck: 'Gruul Aggro', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-4-0' },
      { player: 'Slava_bel', rank: 5, deck: 'Rakdos Midrange', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-4-0' },
      { player: 'K1ppy', rank: 6, deck: 'Selesnya Company', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '6-6-0' },
      { player: 'AnklDen', rank: 7, deck: 'Gruul Aggro', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '6-4-0' },
      { player: 'McRais', rank: 8, deck: 'Esper Control', points: 3, mp: 2, mw: 0, match_record: '1-2-0', game_record: '4-4-0' },
      { player: 'Elishaa', rank: 9, deck: 'Izzet Aggro', points: 0, mp: 4, mw: 0, match_record: '0-4-0', game_record: '2-8-0' },
    ],
    rounds: [
      [
        { players: ['McRais', null], winner: 1, record: 'bye' },
        { players: ['Tamplier007333', 'AnklDen'], winner: 1, record: '2-1-0' },
        { players: ['ispinyouround', 'Elishaa'], winner: 1, record: '2-1-0' },
        { players: ['K1ppy', 'AlexKhan'], winner: 2, record: '2-1-0' },
        { players: ['Slava_bel', 'NickLatkovich'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['NickLatkovich', null], winner: 1, record: 'bye' },
        { players: ['Slava_bel', 'Elishaa'], winner: 1, record: '2-0-0' },
        { players: ['McRais', 'Tamplier007333'], winner: 2, record: '2-1-0' },
        { players: ['AlexKhan', 'ispinyouround'], winner: 2, record: '2-1-0' },
        { players: ['K1ppy', 'AnklDen'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['AnklDen', null], winner: 1, record: 'bye' },
        { players: ['ispinyouround', 'NickLatkovich'], winner: 2, record: '2-1-0' },
        { players: ['Slava_bel', 'Tamplier007333'], winner: 2, record: '2-0-0' },
        { players: ['K1ppy', 'Elishaa'], winner: 1, record: '2-1-0' },
        { players: ['McRais', 'AlexKhan'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['Tamplier007333', 'ispinyouround'], winner: 2, record: '2-0-0' },
        { players: ['AlexKhan', 'Slava_bel'], winner: 1, record: '2-0-0' },
        { players: ['NickLatkovich', 'K1ppy'], winner: 1, record: '2-1-0' },
        { players: ['AnklDen', 'Elishaa'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
];
