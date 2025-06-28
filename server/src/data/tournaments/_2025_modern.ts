import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

export const _2025_modern: Tournament[] = [
  {
    id: 'm250622',
    format: Format.MODERN,
    name: 'Summer League 2025 | Modern #2',
    date: '2025-06-22',
    standings: [
      { player: '87b2e968-0921-4623-9fcc-66925edb1a01' /*Chernyavsky Nikita*/, deck: 'Grixis Control', rank: 1, points: 12 },
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
        { players: ['87b2e968-0921-4623-9fcc-66925edb1a01', 'aklshk'], winner: 1, record: '2-0-0' },
        { players: ['qvertion', '5a1a3197-1193-4637-a2ad-01fe86d05a4e'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['87b2e968-0921-4623-9fcc-66925edb1a01', 'McRais'], winner: 1, record: '2-0-0' },
        { players: ['qvertion', 'aklshk'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['87b2e968-0921-4623-9fcc-66925edb1a01', '5a1a3197-1193-4637-a2ad-01fe86d05a4e'], winner: 1, record: '2-1-0' },
        { players: ['aklshk', 'McRais'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['87b2e968-0921-4623-9fcc-66925edb1a01', 'qvertion'], winner: 1, record: '2-0-0' },
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
      { player: '87b2e968-0921-4623-9fcc-66925edb1a01' /*Chernyavsky Nikita*/, deck: 'Grixis Control', rank: 5, points: 0 },
    ],
  },
];
