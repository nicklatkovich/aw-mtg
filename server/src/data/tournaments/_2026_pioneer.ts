import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_pioneer: Tournament[] = [
  {
    id: 'p260205',
    format: Format.PIONEER,
    name: 'Daily | Pioneer (05.02.26)',
    date: '2026-02-05',
    standings: [
      { player: 'ispinyouround', rank: 1, deck: 'Rakdos Midrange', points: 6, mp: 3, mw: 2, match_record: '2-1-0' },
      { player: 'BRV', rank: 2, deck: 'Izzet Aggro', points: 6, mp: 3, mw: 2, match_record: '2-1-0' },
      { player: 'Tamplier007333', rank: 3, deck: 'Mono-Red Aggro', points: 3, mp: 3, mw: 1, match_record: '1-2-0' },
      { player: 'gerber2000', rank: 4, deck: 'Golgari Midrange', points: 3, mp: 3, mw: 1, match_record: '1-2-0' },
    ],
  },
  {
    id: 400202,
    format: Format.PIONEER,
    name: 'Daily | Pioneer (29.01.26)',
    date: '2026-01-29',
    standings: [
      { player: 'K1ppy', rank: 1, deck: 'Niv to Light', points: 7, mp: 3, mw: 2, match_record: '2-0-1', game_record: '4-1-0' },
      { player: 'BRV', rank: 2, deck: 'Izzet Aggro', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-2-0' },
      { player: 'Tamplier007333', rank: 3, deck: 'Mono-Red Aggro', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-3-0' },
      { player: 'AnklDen', rank: 4, deck: 'Niv to Light', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '2-4-0' },
      { player: 'ispinyouround', rank: 5, deck: 'Rakdos Midrange', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '2-4-0' },
      { player: 'Elishaa', rank: 6, deck: 'Izzet Aggro', points: 1, mp: 3, mw: 0, match_record: '0-2-1', game_record: '1-5-0' },
    ],
    rounds: [
      [
        { players: ['AnklDen', 'Tamplier007333'], winner: 1, record: '2-1-0' },
        { players: ['K1ppy', 'Elishaa'], winner: 0, record: '1-1-0' },
        { players: ['ispinyouround', 'BRV'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['BRV', 'AnklDen'], winner: 1, record: '2-0-0' },
        { players: ['Elishaa', 'Tamplier007333'], winner: 2, record: '2-0-0' },
        { players: ['K1ppy', 'ispinyouround'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['BRV', 'Tamplier007333'], winner: 2, record: '2-1-0' },
        { players: ['K1ppy', 'AnklDen'], winner: 1, record: '1-0-0' },
        { players: ['Elishaa', 'ispinyouround'], winner: 2, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 398594,
    format: Format.PIONEER,
    name: 'Daily | Pioneer (22.01.26)',
    date: '2026-01-22',
    standings: [
      { player: 'ispinyouround', rank: 1, deck: 'Rakdos Midrange', points: 7, mp: 3, mw: 2, match_record: '2-0-1', game_record: '5-3-1' },
      { player: 'K1ppy', rank: 2, deck: 'Selesnya Company', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-4-0' },
      { player: 'Akel', rank: 3, deck: 'Jund Sacrifice', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-4-0' },
      { player: 'Tamplier007333', rank: 4, deck: 'Gruul Aggro', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-4-0' },
      { player: 'AnklDen', rank: 5, deck: 'Niv to Light', points: 4, mp: 3, mw: 1, match_record: '1-1-1', game_record: '3-3-1' },
      { player: 'NickLatkovich', rank: 6, deck: 'Orzhov Monument', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '4-5-0' },
      { player: 'Elishaa', rank: 7, deck: 'Izzet Aggro', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '4-4-0' },
      { player: 'Very_Bad_Man', rank: 8, deck: 'Orzhov Midrange', points: 0, mp: 3, mw: 0, match_record: '0-3-0', game_record: '2-6-0' },
    ],
    rounds: [
      [
        { players: ['K1ppy', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
        { players: ['Tamplier007333', 'NickLatkovich'], winner: 2, record: '2-1-0' },
        { players: ['ispinyouround', 'AnklDen'], winner: 0, record: '1-1-1' },
        { players: ['Elishaa', 'Akel'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['NickLatkovich', 'ispinyouround'], winner: 2, record: '2-1-0' },
        { players: ['K1ppy', 'Akel'], winner: 1, record: '2-1-0' },
        { players: ['AnklDen', 'Elishaa'], winner: 2, record: '2-0-0' },
        { players: ['Very_Bad_Man', 'Tamplier007333'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['K1ppy', 'ispinyouround'], winner: 2, record: '2-1-0' },
        { players: ['Akel', 'NickLatkovich'], winner: 1, record: '2-1-0' },
        { players: ['Tamplier007333', 'Elishaa'], winner: 1, record: '2-1-0' },
        { players: ['AnklDen', 'Very_Bad_Man'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 397115,
    format: Format.PIONEER,
    name: 'Daily | Pioneer (15.01.26)',
    date: '2026-01-15',
    standings: [
      { player: 'MiFlyer', rank: 1, deck: 'Gruul Aggro', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '4-3-0' },
      { player: 'Tamplier007333', rank: 2, deck: 'Gruul Aggro', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-4-0' },
      { player: 'NickLatkovich', rank: 3, deck: 'Bant Lotus Field', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-4-0' },
      { player: 'Bubuntailo', rank: 4, deck: 'Mono-Black Midrange', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-4-0' },
    ],
    rounds: [
      [
        { players: ['NickLatkovich', 'MiFlyer'], winner: 2, record: '2-0-0' },
        { players: ['Bubuntailo', 'Tamplier007333'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['MiFlyer', 'Tamplier007333'], winner: 1, record: '2-1-0' },
        { players: ['NickLatkovich', 'Bubuntailo'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['MiFlyer', 'Bubuntailo'], winner: 2, record: '2-0-0' },
        { players: ['Tamplier007333', 'NickLatkovich'], winner: 1, record: '2-1-0' },
      ],
    ],
  },
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
