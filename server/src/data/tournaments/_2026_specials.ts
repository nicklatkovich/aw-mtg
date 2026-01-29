import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_specials: Tournament[] = [
  {
    id: 396569,
    format: Format.PIONEER,
    name: '\u2605\u2605\u2605 Fall League 2025 | Pioneer Finals',
    date: '2026-01-18',
    standings: [
      { player: 'AlexKhan', rank: 1, deck: 'Selesnya Company', points: 21, mp: 5, mw: 4, match_record: '7-2-0', game_record: '16-6-0' },
      { player: 'Very_Bad_Man', rank: 2, deck: 'Orzhov Midrange', points: 18, mp: 5, mw: 4, match_record: '6-3-0', game_record: '12-9-0' },
      { player: 'BRV', rank: 3, deck: 'Izzet Aggro', points: 15, mp: 5, mw: 4, match_record: '5-4-0', game_record: '12-12-0' },
      { player: 'Alex88', rank: 4, deck: 'Boros Equipment', points: 6, mp: 5, mw: 2, match_record: '2-3-0', game_record: '5-7-0' },
      { player: 'ispinyouround', rank: 5, deck: 'Rakdos Midrange', points: 3, mp: 5, mw: 1, match_record: '1-4-0', game_record: '6-8-0' },
      { player: 'Tamplier007333', rank: 6, deck: 'Gruul Aggro', points: 0, mp: 5, mw: 0, match_record: '0-2-0', game_record: '1-4-0' },
    ],
    rounds: [
      [
        { players: ['BRV', 'Tamplier007333'], winner: 1, record: '2-1-0' },
        { players: ['Alex88', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
        { players: ['AlexKhan', 'ispinyouround'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['BRV', 'Very_Bad_Man'], winner: 2, record: '2-1-0' },
        { players: ['Tamplier007333', 'ispinyouround'], winner: 2, record: '2-0-0' },
        { players: ['Alex88', 'AlexKhan'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['BRV', 'ispinyouround'], winner: 1, record: '2-1-0' },
        { players: ['Very_Bad_Man', 'AlexKhan'], winner: 2, record: '2-0-0' },
        { players: ['Alex88', null], winner: 1, record: 'bye' },
      ],
      [
        { players: ['BRV', 'AlexKhan'], winner: 1, record: '2-1-0' },
        { players: ['ispinyouround', 'Alex88'], winner: 2, record: '2-1-0' },
        { players: ['Very_Bad_Man', null], winner: 1, record: 'bye' },
      ],
      [
        { players: ['BRV', 'Alex88'], winner: 1, record: '2-0-0' },
        { players: ['AlexKhan', null], winner: 1, record: 'bye' },
        { players: ['ispinyouround', 'Very_Bad_Man'], winner: 2, record: '2-1-0' },
      ],
      [{ players: ['Very_Bad_Man', 'BRV'], winner: 1, record: '2-1-0' }],
      [{ players: ['AlexKhan', 'Very_Bad_Man'], winner: 1, record: '2-0-0' }],
      [{ players: ['AlexKhan', 'BRV'], winner: 2, record: '2-1-0' }],
      [{ players: ['Very_Bad_Man', 'BRV'], winner: 1, record: '2-0-0' }],
      [{ players: ['AlexKhan', 'Very_Bad_Man'], winner: 1, record: '2-0-0' }],
      [{ players: ['AlexKhan', 'BRV'], winner: 1, record: '2-0-0' }],
    ],
  },
  {
    id: 396568,
    format: Format.PAUPER,
    name: '\u2605\u2605\u2605 Fall League 2025 | Pauper Finals',
    date: '2026-01-17',
    standings: [
      { player: 'RomanKohan14', rank: 1, deck: 'Mono-White Aggro', points: 15, mp: 5, mw: 5, match_record: '5-0-0', game_record: '10-1-0' },
      { player: 'Aleksandr_KoLoshk', rank: 2, deck: 'Mono-Blue Terror', points: 12, mp: 5, mw: 4, match_record: '4-1-0', game_record: '9-3-0' },
      { player: 'Azurenia', rank: 3, deck: 'Izzet Monarch', points: 6, mp: 5, mw: 2, match_record: '2-3-0', game_record: '5-7-0' },
      { player: 'aspelled', rank: 4, deck: 'Dimir Control', points: 6, mp: 5, mw: 2, match_record: '2-3-0', game_record: '4-8-0' },
      { player: 'Kiryl_Smaktunovich', rank: 5, deck: 'Esper Affinity', points: 3, mp: 5, mw: 1, match_record: '1-4-0', game_record: '5-9-0' },
      { player: 'Alex88', rank: 6, deck: 'Rakdos Madness Burn', points: 3, mp: 5, mw: 1, match_record: '1-4-0', game_record: '3-8-0' },
    ],
    rounds: [
      [
        { players: ['Alex88', 'Azurenia'], winner: 2, record: '2-0-0' },
        { players: ['Kiryl_Smaktunovich', 'Aleksandr_KoLoshk'], winner: 2, record: '2-1-0' },
        { players: ['aspelled', 'RomanKohan14'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['Alex88', 'Aleksandr_KoLoshk'], winner: 2, record: '2-0-0' },
        { players: ['Azurenia', 'RomanKohan14'], winner: 2, record: '2-0-0' },
        { players: ['Kiryl_Smaktunovich', 'aspelled'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['Alex88', 'RomanKohan14'], winner: 2, record: '2-0-0' },
        { players: ['Aleksandr_KoLoshk', 'aspelled'], winner: 1, record: '2-0-0' },
        { players: ['Azurenia', 'Kiryl_Smaktunovich'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['Alex88', 'aspelled'], winner: 1, record: '2-0-0' },
        { players: ['RomanKohan14', 'Kiryl_Smaktunovich'], winner: 1, record: '2-0-0' },
        { players: ['Aleksandr_KoLoshk', 'Azurenia'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['Alex88', 'Kiryl_Smaktunovich'], winner: 2, record: '2-1-0' },
        { players: ['aspelled', 'Azurenia'], winner: 1, record: '2-1-0' },
        { players: ['RomanKohan14', 'Aleksandr_KoLoshk'], winner: 1, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 396565,
    format: Format.STANDARD,
    name: '\u2605\u2605\u2605 Fall League 2025 | Standard Finals',
    date: '2026-01-15',
    standings: [
      { player: 'Very_Bad_Man', rank: 1, deck: 'Dimir Midrange', points: 15, mp: 7, mw: 5, match_record: '5-2-0', game_record: '12-8-0' },
      { player: 'qvertion', rank: 2, deck: 'Sultai Reanimator', points: 9, mp: 6, mw: 3, match_record: '3-3-0', game_record: '9-9-0' },
      { player: 'McRais', rank: 3, deck: 'Sultai Control', points: 9, mp: 6, mw: 3, match_record: '3-3-0', game_record: '7-9-0' },
      { player: 'BRV', rank: 4, deck: 'Boros Aggro', points: 6, mp: 5, mw: 2, match_record: '2-3-0', game_record: '7-7-0' },
      { player: '[OMG]Summie', rank: 5, deck: 'Sultai Control', points: 6, mp: 5, mw: 2, match_record: '2-3-0', game_record: '7-8-0' },
      { player: 'warded_bye', rank: 6, deck: 'Izzet Aggro', points: 6, mp: 5, mw: 2, match_record: '2-3-0', game_record: '6-7-0' },
    ],
    rounds: [
      [
        { players: ['BRV', '[OMG]Summie'], winner: 2, record: '2-1-0' },
        { players: ['McRais', 'warded_bye'], winner: 2, record: '2-0-0' },
        { players: ['Very_Bad_Man', 'qvertion'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['BRV', 'warded_bye'], winner: 1, record: '2-0-0' },
        { players: ['[OMG]Summie', 'qvertion'], winner: 2, record: '2-1-0' },
        { players: ['McRais', 'Very_Bad_Man'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['BRV', 'qvertion'], winner: 1, record: '2-1-0' },
        { players: ['warded_bye', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
        { players: ['[OMG]Summie', 'McRais'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['BRV', 'Very_Bad_Man'], winner: 2, record: '2-1-0' },
        { players: ['qvertion', 'McRais'], winner: 2, record: '2-1-0' },
        { players: ['warded_bye', '[OMG]Summie'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['BRV', 'McRais'], winner: 2, record: '2-1-0' },
        { players: ['Very_Bad_Man', '[OMG]Summie'], winner: 1, record: '2-1-0' },
        { players: ['qvertion', 'warded_bye'], winner: 1, record: '2-1-0' },
      ],
      [{ players: ['Very_Bad_Man', 'qvertion'], winner: 1, record: '2-1-0' }],
      [{ players: ['Very_Bad_Man', 'McRais'], winner: 1, record: '2-0-0' }],
    ],
  },
];
