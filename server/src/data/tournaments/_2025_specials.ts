import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2025_specials: Tournament[] = [
  {
    id: 'trios250713',
    format: Format.TRIOS,
    name: 'Special Event: Trios (13.07.25)',
    date: '2025-07-13',
    standings: [
      // 7 - 5
      { rank: 1, player: 'Alex88', format: Format.PIONEER, deck: 'Mono-Red Aggro', points: 12 }, // ptmw: 100%
      { rank: 1, player: 'RomanKohan14', format: Format.STANDARD, deck: 'Dimir Midrange', points: 12 }, // ptmw: 75.00%
      { rank: 1, player: 'Tanti', format: Format.LEGACY, deck: 'Domain Control', points: 12 }, // ptmw: 66.67%
      // 4 - 2
      { rank: 2, player: 'TroV1', format: Format.PIONEER, deck: 'Niv to Light', points: 9 },
      { rank: 2, player: 'aspelled', format: Format.STANDARD, deck: 'Jeskai Oculus', points: 9 },
      { rank: 2, player: 'farsmac', format: Format.LEGACY, deck: 'Colorless Cloudpost', points: 9 },
      // 3 - 6
      { rank: 3, player: 'McRais', format: Format.PIONEER, deck: 'Orzhov Control', points: 9 },
      { rank: 3, player: 'Damingez', format: Format.STANDARD, deck: 'Golgari Midrange', points: 9 },
      { rank: 3, player: 'Melamasta', format: Format.LEGACY, deck: 'Mississippi River', points: 9 },
      // 5 - 3
      { rank: 4, player: 'AnklDen', format: Format.PIONEER, deck: 'Niv to Light', points: 6 },
      { rank: 4, player: 'BRV', format: Format.STANDARD, deck: 'Boros Convoke', points: 6 },
      { rank: 4, player: 'NickLatkovich', format: Format.LEGACY, deck: 'Mono-Blue Oracle', points: 6 },

      // 1 - 8 (omw: 64.44%)
      { rank: 5, player: 'Very_Bad_Man', format: Format.PIONEER, deck: 'Rakdos Midrange', points: 3 },
      { rank: 5, player: 'OMGProfunny', format: Format.STANDARD, deck: 'Dimir Midrange', points: 3 },
      { rank: 5, player: 'OMGSummie', format: Format.LEGACY, deck: 'Domain Control', points: 3 },
      // 6 - 1 (omw: 38.89%)
      { rank: 6, player: 'gerber2000', format: Format.PIONEER, deck: 'Jund Sacrifice', points: 3 },
      { rank: 6, player: 'Shadowest', format: Format.STANDARD, deck: 'Mono-Black Midrange', points: 3 },
      { rank: 6, player: 'aklshk', format: Format.LEGACY, deck: 'Azorius Dreadnought', points: 3 },

      // 2 - 4 (omw: 66.67%)
      { rank: 7, player: 'qvertion', format: Format.PIONEER, deck: 'Mono-Red Aggro', points: 0 },
      { rank: 7, player: 'Azurenia', format: Format.STANDARD, deck: 'Dimir Midrange', points: 0 },
      { rank: 7, player: 'K1ppy', format: Format.LEGACY, deck: 'Mono-Red Prison', points: 0 },
      // 8 - 7 (omw: 60.00%)
      { rank: 8, player: 'GlebK', format: Format.PIONEER, deck: 'Mono-Red Aggro', points: 0 },
      { rank: 8, player: 'SoXa', format: Format.STANDARD, deck: 'Azorius Enchantments', points: 0 },
      { rank: 8, player: 'Sutko', format: Format.LEGACY, deck: 'Mono-Blue Omni-Tell', points: 0 },
    ],
    rounds: [
      // Round 1
      [
        // (1 vs 8)
        { players: ['aklshk', 'OMGSummie'], winner: 2, record: '2-1-0', teamWinner: 2 },
        { players: ['gerber2000', 'Very_Bad_Man'], winner: 0, record: '1-1-0', teamWinner: 2, notFinished: true },
        { players: ['Shadowest', 'OMGProfunny'], winner: 2, record: '2-0-0', teamWinner: 2 },
        // (4 vs 5)
        { players: ['K1ppy', 'Tanti'], winner: 2, record: '2-0-0', teamWinner: 2 },
        { players: ['qvertion', 'Alex88'], winner: 2, record: '2-0-0', teamWinner: 2 },
        { players: ['Azurenia', 'RomanKohan14'], winner: 2, record: '2-0-0', teamWinner: 2 },
        // (2 vs 7)
        { players: ['farsmac', 'Sutko'], winner: 1, teamWinner: 1 },
        { players: ['TroV1', 'GlebK'], winner: 1, teamWinner: 1 },
        { players: ['aspelled', 'SoXa'], winner: 1, teamWinner: 1 },
        // (3 vs 6)
        { players: ['NickLatkovich', 'Melamasta'], winner: 1, record: '2-1-0', teamWinner: 1 },
        { players: ['AnklDen', 'McRais'], winner: 1, record: '2-1-0', teamWinner: 1 },
        { players: ['BRV', 'Damingez'], winner: 1, record: '2-1-0', teamWinner: 1 },
      ],
      // Round 2
      [
        // (8 vs 5) 5 wins (2-1)
        { players: ['OMGSummie', 'Tanti'], winner: 2, record: '2-0-0', teamWinner: 2 },
        { players: ['Very_Bad_Man', 'Alex88'], winner: 2, record: '2-0-0', teamWinner: 2 },
        { players: ['OMGProfunny', 'RomanKohan14'], winner: 1, record: '2-0-0', teamWinner: 2 },
        // (2 vs 3)
        { players: ['farsmac', 'NickLatkovich'], winner: 2, record: '2-1-0', teamWinner: 1 },
        { players: ['TroV1', 'AnklDen'], winner: 1, record: '2-0-0', teamWinner: 1 },
        { players: ['aspelled', 'BRV'], winner: 1, record: '2-0-0', teamWinner: 1 },
        // (1 vs 4)
        { players: ['aklshk', 'K1ppy'], winner: 1, record: '2-0-0', teamWinner: 1 },
        { players: ['gerber2000', 'qvertion'], winner: 1, record: '2-0-0', teamWinner: 1 },
        { players: ['Shadowest', 'Azurenia'], winner: 1, record: '2-0-0', teamWinner: 1 },
        // (7 vs 6) 6 wins (2-1)
        { players: ['Sutko', 'Melamasta'], winner: 0, teamWinner: 2, notFinished: true },
        { players: ['GlebK', 'McRais'], winner: 0, teamWinner: 2, notFinished: true },
        { players: ['SoXa', 'Damingez'], winner: 0, teamWinner: 2, notFinished: true },
      ],
      // Round 3
      [
        // (5 vs 2)
        { players: ['Tanti', 'farsmac'], winner: 0, record: '1-1-0', teamWinner: 1, notFinished: true },
        { players: ['Alex88', 'TroV1'], winner: 1, record: '2-0-0', teamWinner: 1 },
        { players: ['RomanKohan14', 'aspelled'], winner: 1, record: '2-0-0', teamWinner: 1 },
        // (3 vs 1)
        { players: ['NickLatkovich', 'aklshk'], winner: 2, record: '2-1-0', teamWinner: 1 },
        { players: ['AnklDen', 'gerber2000'], winner: 1, record: '2-0-0', teamWinner: 1 },
        { players: ['BRV', 'Shadowest'], winner: 1, record: '2-1-0', teamWinner: 1 },
        // (8 vs 6) 6 wins (2-1)
        { players: ['OMGSummie', 'Melamasta'], winner: 2, record: '2-0-0', teamWinner: 2 },
        { players: ['Very_Bad_Man', 'McRais'], winner: 1, record: '2-1-0', teamWinner: 2 },
        { players: ['OMGProfunny', 'Damingez'], winner: 2, record: '2-1-0', teamWinner: 2 },
      ],
      // Round 4
      [
        // (3 vs 6)
        { players: ['NickLatkovich', 'Melamasta'], winner: 2, record: '2-0-0', teamWinner: 2 },
        { players: ['AnklDen', 'McRais'], winner: 0, record: '1-0-0', teamWinner: 2, notFinished: true },
        { players: ['BRV', 'Damingez'], winner: 2, record: '2-0-0', teamWinner: 2 },
      ],
      // Round 5
      [
        // (2 vs 6) 2 wins (2-1)
        { players: ['farsmac', 'Melamasta'], winner: 1, teamWinner: 1 },
        { players: ['TroV1', 'McRais'], winner: 1, record: '2-0-0', teamWinner: 1 },
        { players: ['aspelled', 'Damingez'], winner: 2, teamWinner: 1 },
      ],
      // Round 6
      [
        // (5 vs 2) 5 wins (2-1)
        { players: ['Tanti', 'farsmac'], winner: 2, teamWinner: 1 },
        { players: ['Alex88', 'TroV1'], winner: 1, record: '2-1-0', teamWinner: 1 },
        { players: ['RomanKohan14', 'aspelled'], winner: 1, record: '2-1-0', teamWinner: 1 },
      ],
    ],
  },
];
