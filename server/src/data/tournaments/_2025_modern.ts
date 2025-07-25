import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

export const _2025_modern: Tournament[] = [
  {
    id: 335225,
    format: Format.MODERN,
    name: 'Summer League 2025 | Modern #3',
    date: '2025-07-06',
    standings: [
      { player: 'qvertion', rank: 1, points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-1-0' },
      { player: 'DanilaNabeshko', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-2-0' },
      { player: 'Tanti', rank: 3, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-4-0' },
      { player: 'aklshk', rank: 4, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
      { player: 'BRV', rank: 5, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-7-0' },
      { player: 'IvaD', rank: 6, points: 0, mp: 4, mw: 0, match_record: '0-4-0', game_record: '1-7-0' },
    ],
    rounds: [
      [
        { players: ['qvertion', 'IvaD'], winner: 1, record: '2-0-0' },
        { players: ['BRV', 'DanilaNabeshko'], winner: 2, record: '2-0-0' },
        { players: ['Tanti', 'aklshk'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['qvertion', 'BRV'], winner: 1, record: '2-0-0' },
        { players: ['Tanti', 'DanilaNabeshko'], winner: 2, record: '2-0-0' },
        { players: ['aklshk', 'IvaD'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['DanilaNabeshko', 'qvertion'], winner: 2, record: '2-0-0' },
        { players: ['Tanti', 'IvaD'], winner: 1, record: '1-0-0' },
        { players: ['aklshk', 'BRV'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['qvertion', 'Tanti'], winner: 1, record: '2-1-0' },
        { players: ['aklshk', 'DanilaNabeshko'], winner: 2, record: '2-0-0' },
        { players: ['IvaD', 'BRV'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 'm250622',
    format: Format.MODERN,
    name: 'Summer League 2025 | Modern #2',
    date: '2025-06-22',
    standings: [
      { player: 'Tanti', deck: 'Grixis Control', rank: 1, points: 12 },
      { player: 'McRais', deck: 'Dimir Oculus', rank: 2, points: 6 }, // tgw: 50%
      { player: 'aklshk', deck: 'Esper Midrange', rank: 3, points: 6 }, // tgw: 45%
      { player: 'qvertion', deck: 'Mardu Energy', rank: 4, points: 3 }, // tgw: 40%
      { player: '5a1a3197-1193-4637-a2ad-01fe86d05a4e' /*Nebezhko Daniil*/, deck: 'Jeskai Control', rank: 5, points: 3 }, // tgw: 30%
    ],
    rounds: [
      [
        { players: ['aklshk', '5a1a3197-1193-4637-a2ad-01fe86d05a4e'], winner: 2, record: '2-1-0' },
        { players: ['McRais', 'qvertion'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['Tanti', 'aklshk'], winner: 1, record: '2-0-0' },
        { players: ['qvertion', '5a1a3197-1193-4637-a2ad-01fe86d05a4e'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['Tanti', 'McRais'], winner: 1, record: '2-0-0' },
        { players: ['qvertion', 'aklshk'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['Tanti', '5a1a3197-1193-4637-a2ad-01fe86d05a4e'], winner: 1, record: '2-1-0' },
        { players: ['aklshk', 'McRais'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['Tanti', 'qvertion'], winner: 1, record: '2-0-0' },
        { players: ['McRais', '5a1a3197-1193-4637-a2ad-01fe86d05a4e'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 'm250608',
    format: Format.MODERN,
    name: 'Summer League 2025 | Modern #1',
    date: '2025-06-08',
    standings: [
      { player: '4onoki', deck: 'Boros Energy', rank: 1, points: 12 },
      { player: 'aklshk', deck: 'Domain Zoo', rank: 2, points: 9 },
      { player: 'Norbi', rank: 3, points: 6 },
      { player: 'McRais', rank: 4, points: 3 },
      { player: 'a52d83e2-0c2f-4fe0-bc03-1d03a54a4170' /*Chernyavsky Nikita*/, deck: 'Grixis Control', rank: 5, points: 0 },
    ],
  },
];
