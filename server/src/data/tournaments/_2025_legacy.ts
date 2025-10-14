import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

export const _2025_legacy: Tournament[] = [
  {
    id: 'l251005',
    format: Format.LEGACY,
    name: 'Fall League 2025 | Legacy #1/6',
    date: '2025-10-05',
    standings: [
      { player: 'farsmac', rank: 1, points: 9 },
      { player: 'Norbi', rank: 2, points: 6 },
      { player: '4onoki', rank: 3, points: 6 },
      { player: 'Tanti', rank: 4, points: 6 },
      { player: 'aklshk', rank: 5, points: 3 },
    ],
  },
  {
    id: 'l250921',
    format: Format.LEGACY,
    name: 'Daily | Legacy (21.09)',
    date: '2025-09-21',
    standings: [
      { player: 'farsmac', rank: 1, deck: 'Mono-Blue Cloudpost', points: 9, match_record: '3-1-0', game_record: '7-2-0' },
      { player: 'Tanti', rank: 2, deck: 'Bant Nadu', points: 6, match_record: '2-2-0', game_record: '4-6-0', omw: 56.25 /*9/16*/ },
      { player: 'aklshk', rank: 3, deck: 'Azorius Stoneblade', points: 6, match_record: '2-2-0', game_record: '6-5-0', omw: 43.75 /*7/16*/ },
      { player: '4onoki', rank: 4, deck: 'Abzan Maverick', points: 3, match_record: '1-3-0', game_record: '3-7-0' },
    ],
    rounds: [
      [
        { players: ['farsmac', '4onoki'], winner: 1, record: '2-0-0' },
        { players: ['Tanti', 'aklshk'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['farsmac', 'Tanti'], winner: 1, record: '2-0-0' },
        { players: ['aklshk', '4onoki'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['farsmac', 'aklshk'], winner: 2, record: '2-1-0' },
        { players: ['Tanti', '4onoki'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['farsmac', 'Tanti'], winner: 1, record: '2-0-0' },
        { players: ['4onoki', 'aklshk'], winner: 2, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 'l250810',
    format: Format.LEGACY,
    name: 'Summer League 2025 | Legacy #4',
    date: '2025-08-10',
    standings: [
      { player: 'aklshk', rank: 1, deck: 'Mono-Black Depths', points: 9, match_record: '3-1-0', game_record: '6-3-0', tgw: 66.67 /*6/9*/ },
      { player: 'NickLatkovich', rank: 2, deck: 'Dimir Omni-Tell', points: 9, match_record: '3-1-0', game_record: '7-4-0', tgw: 63.64 /*7/11*/ },
      { player: 'farsmac', rank: 3, deck: 'Colorless Tron', points: 6, match_record: '2-2-0', game_record: '6-5-0', tgw: 54.55 /*6/11*/ },
      { player: 'K1ppy', rank: 4, deck: 'Mono-Red Prison', points: 6, match_record: '2-2-0', game_record: '5-6-0', tgw: 45.45 /*5/11*/ },
      { player: 'TroV1', rank: 5, deck: 'Death and Taxes', points: 0, match_record: '0-4-0', game_record: '2-8-0', tgw: 20 /*2/10*/ },
    ],
    rounds: [
      [
        { players: ['farsmac', 'NickLatkovich'], winner: 2, record: '2-1-0' },
        { players: ['TroV1', 'aklshk'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['farsmac', 'TroV1'], winner: 1, record: '2-0-0' },
        { players: ['NickLatkovich', 'K1ppy'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['farsmac', 'aklshk'], winner: 2, record: '2-1-0' },
        { players: ['TroV1', 'K1ppy'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['farsmac', 'K1ppy'], winner: 1, record: '2-1-0' },
        { players: ['NickLatkovich', 'aklshk'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['NickLatkovich', 'TroV1'], winner: 1, record: '2-1-0' },
        { players: ['aklshk', 'K1ppy'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 342699,
    format: Format.LEGACY,
    name: 'Summer League 2025 | Legacy #3',
    date: '2025-07-27',
    standings: [
      { player: 'K1ppy', rank: 1, deck: 'Mono-Red Prison', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'aklshk', rank: 2, deck: 'Mono-Black Pox', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'farsmac', rank: 3, deck: 'Colorless Tron', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'Tanti', rank: 4, deck: 'Domain Control', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-6-0' },
      { player: 'NickLatkovich', rank: 5, deck: 'Domain Enchantments', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-4-0' },
      { player: '4onoki', rank: 6, deck: 'Selesnya Depths', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
      { player: 'qvertion', rank: 7, deck: 'Cephalid Breakfast', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '4-6-0' },
      { player: 'ykcyc', rank: 8, deck: 'Mono-Red Prison', points: 0, mp: 4, mw: 0, match_record: '0-4-0', game_record: '1-8-0' },
    ],
    rounds: [
      [
        { players: ['farsmac', 'Tanti'], winner: 2, record: '2-1-0' },
        { players: ['aklshk', 'ykcyc'], winner: 1, record: '2-1-0' },
        { players: ['NickLatkovich', '4onoki'], winner: 1, record: '2-0-0' },
        { players: ['K1ppy', 'qvertion'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['Tanti', 'NickLatkovich'], winner: 1, record: '2-1-0' },
        { players: ['K1ppy', 'aklshk'], winner: 1, record: '2-1-0' },
        { players: ['4onoki', 'farsmac'], winner: 2, record: '2-0-0' },
        { players: ['qvertion', 'ykcyc'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['Tanti', 'K1ppy'], winner: 2, record: '2-0-0' },
        { players: ['NickLatkovich', 'aklshk'], winner: 2, record: '2-0-0' },
        { players: ['qvertion', 'farsmac'], winner: 2, record: '2-0-0' },
        { players: ['ykcyc', '4onoki'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['K1ppy', 'farsmac'], winner: 2, record: '2-1-0' },
        { players: ['Tanti', 'aklshk'], winner: 2, record: '2-0-0' },
        { players: ['qvertion', '4onoki'], winner: 2, record: '2-1-0' },
        { players: ['NickLatkovich', 'ykcyc'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
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
