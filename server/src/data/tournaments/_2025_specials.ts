import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2025_specials: Tournament[] = [
  {
    id: 370371,
    format: Format.PIONEER,
    name: 'MTGA Pioneer (05.10)',
    date: '2025-10-05',
    standings: [
      { player: 'Tamplier007333', rank: 1, deck: 'Gruul Aggro', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-3-0' },
      { player: 'BRV', rank: 2, deck: 'Gruul Aggro', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'ispinyouround', rank: 3, deck: 'Rakdos Midrange', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: 'Shatunov', rank: 4, deck: 'Mono-Black Midrange', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'Slava_bel', rank: 5, deck: 'Rakdos Midrange', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-6-0' },
      { player: 'qvertion', rank: 6, deck: 'Simic Scapeshift', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '6-4-0' },
      { player: 'NickLatkovich', rank: 7, deck: 'Azorius Control', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '5-7-0' },
      { player: 'ykcyc', rank: 8, deck: 'Mono-Red Aggro', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-6-0' },
      { player: 'Norbi', rank: 9, deck: 'Izzet Phoenix', points: 3, mp: 2, mw: 0, match_record: '1-2-0', game_record: '2-4-0' },
      { player: 'Very_Bad_Man', rank: 10, deck: 'Mono-Black Midrange', points: 0, mp: 2, mw: 0, match_record: '0-2-0', game_record: '1-4-0' },
    ],
    rounds: [
      [
        { players: ['qvertion', 'NickLatkovich'], winner: 2, record: '2-1-0' },
        { players: ['Very_Bad_Man', 'ispinyouround'], winner: 2, record: '2-0-0' },
        { players: ['Slava_bel', 'BRV'], winner: 2, record: '2-0-0' },
        { players: ['ykcyc', 'Norbi'], winner: 1, record: '2-0-0' },
        { players: ['Tamplier007333', 'Shatunov'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['Tamplier007333', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
        { players: ['ykcyc', 'ispinyouround'], winner: 2, record: '2-0-0' },
        { players: ['BRV', 'NickLatkovich'], winner: 1, record: '2-1-0' },
        { players: ['Norbi', 'qvertion'], winner: 2, record: '2-0-0' },
        { players: ['Slava_bel', 'Shatunov'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['Norbi', null], winner: 1, record: 'bye' },
        { players: ['Tamplier007333', 'NickLatkovich'], winner: 1, record: '2-1-0' },
        { players: ['ispinyouround', 'BRV'], winner: 2, record: '2-0-0' },
        { players: ['ykcyc', 'Shatunov'], winner: 2, record: '2-0-0' },
        { players: ['qvertion', 'Slava_bel'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['BRV', 'Tamplier007333'], winner: 2, record: '2-1-0' },
        { players: ['qvertion', 'ispinyouround'], winner: 2, record: '2-1-0' },
        { players: ['Shatunov', 'NickLatkovich'], winner: 1, record: '2-1-0' },
        { players: ['ykcyc', 'Slava_bel'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 362305,
    format: Format.PAUPER,
    name: 'MTGA Vintage Pauper (07.09)',
    date: '2025-09-07',
    standings: [
      { player: 'qvertion', rank: 1, deck: 'Mono-Red Aggro', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-2-0' },
      { player: 'RomanKohan14', rank: 2, deck: 'Rakdos Madness Burn', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'Aleksandr_KoLishk', rank: 3, deck: 'Mono-Blue Terror', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'NickLatkovich', rank: 4, deck: 'Jund Wildfire', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
      { player: '4onoki', rank: 5, deck: 'Jund Wildfire', points: 6, mp: 2, mw: 2, match_record: '2-0-0', game_record: '4-1-0' },
      { player: 'Very_Bad_Man', rank: 6, deck: 'Grixis Affinity', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-6-0' },
      { player: 'Damingez', rank: 7, deck: 'Rakdos Madness Burn', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '4-6-0' },
      { player: 'Shatunov', rank: 8, deck: 'Azorius Ephemerate', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-7-0' },
      { player: 'Yisan77', rank: 9, deck: 'Abzan Lifegain', points: 0, mp: 2, mw: 0, match_record: '0-2-0', game_record: '1-4-0' },
    ],
    rounds: [
      [
        { players: ['Yisan77', 'NickLatkovich'], winner: 2, record: '2-1-0' },
        { players: ['Very_Bad_Man', 'RomanKohan14'], winner: 2, record: '2-1-0' },
        { players: ['Aleksandr_KoLishk', 'qvertion'], winner: 2, record: '2-0-0' },
        { players: ['Damingez', 'Shatunov'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['RomanKohan14', 'NickLatkovich'], winner: 1, record: '2-0-0' },
        { players: ['Shatunov', 'qvertion'], winner: 2, record: '2-1-0' },
        { players: ['Yisan77', 'Aleksandr_KoLishk'], winner: 2, record: '2-0-0' },
        { players: ['Damingez', 'Very_Bad_Man'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['qvertion', 'RomanKohan14'], winner: 1, record: '2-1-0' },
        { players: ['Aleksandr_KoLishk', 'Damingez'], winner: 1, record: '2-0-0' },
        { players: ['Shatunov', 'NickLatkovich'], winner: 2, record: '2-0-0' },
        { players: ['Very_Bad_Man', '4onoki'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['qvertion', 'NickLatkovich'], winner: 1, record: '2-0-0' },
        { players: ['Aleksandr_KoLishk', 'RomanKohan14'], winner: 2, record: '2-1-0' },
        { players: ['Shatunov', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
        { players: ['Damingez', '4onoki'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
  // {
  //   id: 'trios250713',
  //   format: Format.TRIOS,
  //   name: 'Special Event: Trios (13.07.25)',
  //   date: '2025-07-13',
  //   standings: [
  //     // 7 - 5
  //     { rank: 1, player: 'Alex88', format: Format.PIONEER, deck: 'Mono-Red Aggro', points: 12 }, // ptmw: 100%
  //     { rank: 1, player: 'RomanKohan14', format: Format.STANDARD, deck: 'Dimir Midrange', points: 12 }, // ptmw: 75.00%
  //     { rank: 1, player: 'Tanti', format: Format.LEGACY, deck: 'Domain Control', points: 12 }, // ptmw: 66.67%
  //     // 4 - 2
  //     { rank: 2, player: 'TroV1', format: Format.PIONEER, deck: 'Niv to Light', points: 9 },
  //     { rank: 2, player: 'aspelled', format: Format.STANDARD, deck: 'Jeskai Oculus', points: 9 },
  //     { rank: 2, player: 'farsmac', format: Format.LEGACY, deck: 'Colorless Cloudpost', points: 9 },
  //     // 3 - 6
  //     { rank: 3, player: 'McRais', format: Format.PIONEER, deck: 'Orzhov Control', points: 9 },
  //     { rank: 3, player: 'Damingez', format: Format.STANDARD, deck: 'Golgari Midrange', points: 9 },
  //     { rank: 3, player: 'Melamasta', format: Format.LEGACY, deck: 'Mississippi River', points: 9 },
  //     // 5 - 3
  //     { rank: 4, player: 'AnklDen', format: Format.PIONEER, deck: 'Niv to Light', points: 6 },
  //     { rank: 4, player: 'BRV', format: Format.STANDARD, deck: 'Boros Convoke', points: 6 },
  //     { rank: 4, player: 'NickLatkovich', format: Format.LEGACY, deck: 'Mono-Blue Oracle', points: 6 },

  //     // 1 - 8 (omw: 64.44%)
  //     { rank: 5, player: 'Very_Bad_Man', format: Format.PIONEER, deck: 'Rakdos Midrange', points: 3 },
  //     { rank: 5, player: 'OMGProfunny', format: Format.STANDARD, deck: 'Dimir Midrange', points: 3 },
  //     { rank: 5, player: 'OMGSummie', format: Format.LEGACY, deck: 'Domain Control', points: 3 },
  //     // 6 - 1 (omw: 38.89%)
  //     { rank: 6, player: 'gerber2000', format: Format.PIONEER, deck: 'Jund Sacrifice', points: 3 },
  //     { rank: 6, player: 'Shadowest', format: Format.STANDARD, deck: 'Mono-Black Midrange', points: 3 },
  //     { rank: 6, player: 'aklshk', format: Format.LEGACY, deck: 'Azorius Dreadnought', points: 3 },

  //     // 2 - 4 (omw: 66.67%)
  //     { rank: 7, player: 'qvertion', format: Format.PIONEER, deck: 'Mono-Red Aggro', points: 0 },
  //     { rank: 7, player: 'Azurenia', format: Format.STANDARD, deck: 'Dimir Midrange', points: 0 },
  //     { rank: 7, player: 'K1ppy', format: Format.LEGACY, deck: 'Mono-Red Prison', points: 0 },
  //     // 8 - 7 (omw: 60.00%)
  //     { rank: 8, player: 'GlebK', format: Format.PIONEER, deck: 'Mono-Red Aggro', points: 0 },
  //     { rank: 8, player: 'SoXa', format: Format.STANDARD, deck: 'Azorius Enchantments', points: 0 },
  //     { rank: 8, player: 'Sutko', format: Format.LEGACY, deck: 'Mono-Blue Omni-Tell', points: 0 },
  //   ],
  //   rounds: [
  //     // Round 1
  //     [
  //       // (1 vs 8)
  //       { players: ['aklshk', 'OMGSummie'], winner: 2, record: '2-1-0', teamWinner: 2 },
  //       { players: ['gerber2000', 'Very_Bad_Man'], winner: 0, record: '1-1-0', teamWinner: 2, notFinished: true },
  //       { players: ['Shadowest', 'OMGProfunny'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //       // (4 vs 5)
  //       { players: ['K1ppy', 'Tanti'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //       { players: ['qvertion', 'Alex88'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //       { players: ['Azurenia', 'RomanKohan14'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //       // (2 vs 7)
  //       { players: ['farsmac', 'Sutko'], winner: 1, teamWinner: 1 },
  //       { players: ['TroV1', 'GlebK'], winner: 1, teamWinner: 1 },
  //       { players: ['aspelled', 'SoXa'], winner: 1, teamWinner: 1 },
  //       // (3 vs 6)
  //       { players: ['NickLatkovich', 'Melamasta'], winner: 1, record: '2-1-0', teamWinner: 1 },
  //       { players: ['AnklDen', 'McRais'], winner: 1, record: '2-1-0', teamWinner: 1 },
  //       { players: ['BRV', 'Damingez'], winner: 1, record: '2-1-0', teamWinner: 1 },
  //     ],
  //     // Round 2
  //     [
  //       // (8 vs 5) 5 wins (2-1)
  //       { players: ['OMGSummie', 'Tanti'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //       { players: ['Very_Bad_Man', 'Alex88'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //       { players: ['OMGProfunny', 'RomanKohan14'], winner: 1, record: '2-0-0', teamWinner: 2 },
  //       // (2 vs 3)
  //       { players: ['farsmac', 'NickLatkovich'], winner: 2, record: '2-1-0', teamWinner: 1 },
  //       { players: ['TroV1', 'AnklDen'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       { players: ['aspelled', 'BRV'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       // (1 vs 4)
  //       { players: ['aklshk', 'K1ppy'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       { players: ['gerber2000', 'qvertion'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       { players: ['Shadowest', 'Azurenia'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       // (7 vs 6) 6 wins (2-1)
  //       { players: ['Sutko', 'Melamasta'], winner: 0, teamWinner: 2, notFinished: true },
  //       { players: ['GlebK', 'McRais'], winner: 0, teamWinner: 2, notFinished: true },
  //       { players: ['SoXa', 'Damingez'], winner: 0, teamWinner: 2, notFinished: true },
  //     ],
  //     // Round 3
  //     [
  //       // (5 vs 2)
  //       { players: ['Tanti', 'farsmac'], winner: 0, record: '1-1-0', teamWinner: 1, notFinished: true },
  //       { players: ['Alex88', 'TroV1'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       { players: ['RomanKohan14', 'aspelled'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       // (3 vs 1)
  //       { players: ['NickLatkovich', 'aklshk'], winner: 2, record: '2-1-0', teamWinner: 1 },
  //       { players: ['AnklDen', 'gerber2000'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       { players: ['BRV', 'Shadowest'], winner: 1, record: '2-1-0', teamWinner: 1 },
  //       // (8 vs 6) 6 wins (2-1)
  //       { players: ['OMGSummie', 'Melamasta'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //       { players: ['Very_Bad_Man', 'McRais'], winner: 1, record: '2-1-0', teamWinner: 2 },
  //       { players: ['OMGProfunny', 'Damingez'], winner: 2, record: '2-1-0', teamWinner: 2 },
  //     ],
  //     // Round 4
  //     [
  //       // (3 vs 6)
  //       { players: ['NickLatkovich', 'Melamasta'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //       { players: ['AnklDen', 'McRais'], winner: 0, record: '1-0-0', teamWinner: 2, notFinished: true },
  //       { players: ['BRV', 'Damingez'], winner: 2, record: '2-0-0', teamWinner: 2 },
  //     ],
  //     // Round 5
  //     [
  //       // (2 vs 6) 2 wins (2-1)
  //       { players: ['farsmac', 'Melamasta'], winner: 1, teamWinner: 1 },
  //       { players: ['TroV1', 'McRais'], winner: 1, record: '2-0-0', teamWinner: 1 },
  //       { players: ['aspelled', 'Damingez'], winner: 2, teamWinner: 1 },
  //     ],
  //     // Round 6
  //     [
  //       // (5 vs 2) 5 wins (2-1)
  //       { players: ['Tanti', 'farsmac'], winner: 2, teamWinner: 1 },
  //       { players: ['Alex88', 'TroV1'], winner: 1, record: '2-1-0', teamWinner: 1 },
  //       { players: ['RomanKohan14', 'aspelled'], winner: 1, record: '2-1-0', teamWinner: 1 },
  //     ],
  //   ],
  // },
];
