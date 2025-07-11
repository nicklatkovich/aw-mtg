import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

export const _2025_legacy: Tournament[] = [
  {
    id: 'l250629',
    format: Format.LEGACY,
    name: 'Summer League 2025 | Legacy #2',
    date: '2025-06-29',
    standings: [
      { rank: 1, player: 'K1ppy', points: 12, match_record: '4-0-0', game_record: '8-2-0' },
      { rank: 2, player: 'Tanti', points: 9, match_record: '3-1-0', game_record: '7-4-0' },
      { rank: 3, player: 'farsmac', points: 6, match_record: '2-2-0', game_record: '5-5-0' },
      { rank: 4, player: 'aklshk', points: 3, match_record: '1-3-0', game_record: '2-7-0' },
      { rank: 5, player: 'Very_Bad_Man', points: 0, match_record: '0-4-0', game_record: '4-8-0' },
    ],
    rounds: [
      [
        { players: ['farsmac', 'K1ppy'], winner: 2, record: '2-0-0' },
        { players: ['aklshk', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['farsmac', 'aklshk'], winner: 1, record: '2-0-0' },
        { players: ['K1ppy', 'Tanti'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['farsmac', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
        { players: ['aklshk', 'Tanti'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['farsmac', 'Tanti'], winner: 2, record: '2-1-0' },
        { players: ['K1ppy', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['K1ppy', 'aklshk'], winner: 1, record: '2-0-0' },
        { players: ['Very_Bad_Man', 'Tanti'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 324254,
    format: Format.LEGACY,
    name: 'Summer League 2025 | Legacy #1',
    date: '2025-06-15',
    standings: [
      { player: 'SasK3', rank: 1, points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-0-0' },
      { player: 'qvertion', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: '4onoki', rank: 3, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '4-5-0' },
      { player: 'Very_Bad_Man', rank: 4, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'farsmac', deck: 'Sultai Reanimator', rank: 5, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'Melamasta', rank: 6, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '2-7-0' },
      { player: 'andrei', rank: 7, points: 3, mp: 2, mw: 0, match_record: '1-2-0', game_record: '3-4-0' },
    ],
    rounds: [
      [
        { players: ['Very_Bad_Man', null], winner: 1, record: 'bye' },
        { players: ['4onoki', 'qvertion'], winner: 2, record: '2-0-0' },
        { players: ['SasK3', 'farsmac'], winner: 1, record: '2-0-0' },
        { players: ['andrei', 'Melamasta'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['4onoki', null], winner: 1, record: 'bye' },
        { players: ['Melamasta', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
        { players: ['SasK3', 'qvertion'], winner: 1, record: '2-0-0' },
        { players: ['farsmac', 'andrei'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['andrei', null], winner: 1, record: 'bye' },
        { players: ['Very_Bad_Man', 'SasK3'], winner: 2, record: '2-0-0' },
        { players: ['Melamasta', 'qvertion'], winner: 2, record: '2-0-0' },
        { players: ['4onoki', 'farsmac'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['SasK3', '4onoki'], winner: 1, record: '2-0-0' },
        { players: ['qvertion', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
        { players: ['farsmac', 'Melamasta'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    format: Format.LEGACY,
    date: '2025-06-01',
    id: 315138,
    standings: [
      { player: 'Tanti', deck: 'Domain Control', rank: 1, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: 'aklshk', deck: 'Death and Taxes', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-4-0' },
      { player: 'NickLatkovich', deck: 'Domain Control', rank: 3, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'Norbi', deck: 'Sultai Beanstalk', rank: 4, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-4-0' },
      { player: '4onoki', deck: 'Naya Maverick', rank: 5, points: 0, mp: 3, mw: 0, match_record: '0-3-0', game_record: '1-6-0' },
    ],
    rounds: [
      [
        { players: ['4onoki', 'Tanti'], winner: 2, record: '2-0-0' },
        { players: ['NickLatkovich', 'aklshk'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['4onoki', 'aklshk'], winner: 2, record: '2-1-0' },
        { players: ['NickLatkovich', 'Norbi'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['4onoki', 'Norbi'], winner: 2, record: '2-0-0' },
        { players: ['Tanti', 'aklshk'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['Tanti', 'NickLatkovich'], winner: 1, record: '2-1-0' },
        { players: ['aklshk', 'Norbi'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['NickLatkovich', null], winner: 1, record: 'bye' },
        { players: ['Tanti', 'Norbi'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
];
