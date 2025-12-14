import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

export const _2025_modern: Tournament[] = [
  {
    id: 390834,
    format: Format.MODERN,
    name: 'Fall League 2025 | Modern #5/6',
    date: '2025-12-14',
    standings: [
      { player: 'RostislavB', rank: 1, points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-2-0' },
      { player: 'IvaD', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'aspelled', rank: 3, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'ispinyouround', rank: 4, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-7-0' },
      { player: 'Aleksandr_KoLoshk', rank: 5, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-6-0' },
      { player: 'Azurenia', rank: 6, points: 0, mp: 4, mw: 0, match_record: '0-4-0', game_record: '1-8-0' },
    ],
    rounds: [
      [
        { players: ['ispinyouround', 'aspelled'], winner: 2, record: '2-1-0' },
        { players: ['IvaD', 'Azurenia'], winner: 1, record: '2-0-0' },
        { players: ['Aleksandr_KoLoshk', 'RostislavB'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['IvaD', 'ispinyouround'], winner: 1, record: '2-0-0' },
        { players: ['aspelled', 'RostislavB'], winner: 2, record: '2-1-0' },
        { players: ['Azurenia', 'Aleksandr_KoLoshk'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['IvaD', 'RostislavB'], winner: 2, record: '2-1-0' },
        { players: ['aspelled', 'Aleksandr_KoLoshk'], winner: 1, record: '2-0-0' },
        { players: ['ispinyouround', 'Azurenia'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['RostislavB', 'ispinyouround'], winner: 1, record: '2-0-0' },
        { players: ['aspelled', 'Azurenia'], winner: 1, record: '2-0-0' },
        { players: ['IvaD', 'Aleksandr_KoLoshk'], winner: 1, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 385541,
    format: Format.MODERN,
    name: 'Fall League 2025 | Modern #4/6',
    date: '2025-11-30',
    standings: [
      { player: 'diuzhev', rank: 1, deck: 'Abzan Birthing Ritual', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-3-0' },
      { player: '4onoki', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'Tanti', rank: 3, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-5-0' },
      { player: 'BRV', rank: 4, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'qvertion', rank: 5, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'aspelled', rank: 6, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'EggsLicker', rank: 7, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'farsmac', rank: 8, points: 4, mp: 4, mw: 1, match_record: '1-2-1', game_record: '5-6-0' },
      { player: 'DanilaNabeshko', rank: 9, points: 4, mp: 3, mw: 0, match_record: '1-2-1', game_record: '4-5-0' },
      { player: 'ispinyouround', rank: 10, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '2-6-0' },
      { player: 'Azurenia', rank: 11, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '5-6-0' },
      { player: 'Aleksandr_KoLoshk', rank: 12, points: 0, mp: 3, mw: 0, match_record: '0-3-0', game_record: '2-6-0' },
    ],
    rounds: [
      [
        { players: ['EggsLicker', 'ispinyouround'], winner: 2, record: '2-0-0' },
        { players: ['Tanti', 'qvertion'], winner: 1, record: '2-1-0' },
        { players: ['diuzhev', 'Aleksandr_KoLoshk'], winner: 1, record: '2-1-0' },
        { players: ['DanilaNabeshko', 'farsmac'], winner: 0, record: '1-1-0' },
        { players: ['aspelled', '4onoki'], winner: 2, record: '2-1-0' },
        { players: ['BRV', 'Azurenia'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['4onoki', 'DanilaNabeshko'], winner: 1, record: '2-1-0' },
        { players: ['diuzhev', 'ispinyouround'], winner: 1, record: '2-0-0' },
        { players: ['BRV', 'Tanti'], winner: 2, record: '2-1-0' },
        { players: ['farsmac', 'Aleksandr_KoLoshk'], winner: 1, record: '2-1-0' },
        { players: ['Azurenia', 'qvertion'], winner: 2, record: '2-1-0' },
        { players: ['EggsLicker', 'aspelled'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['diuzhev', 'farsmac'], winner: 1, record: '2-1-0' },
        { players: ['Tanti', '4onoki'], winner: 2, record: '2-0-0' },
        { players: ['qvertion', 'ispinyouround'], winner: 1, record: '2-0-0' },
        { players: ['BRV', 'EggsLicker'], winner: 1, record: '2-1-0' },
        { players: ['DanilaNabeshko', 'Azurenia'], winner: 2, record: '2-0-0' },
        { players: ['aspelled', 'Aleksandr_KoLoshk'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['DanilaNabeshko', null], winner: 1, record: 'bye' },
        { players: ['diuzhev', '4onoki'], winner: 1, record: '2-1-0' },
        { players: ['Tanti', 'farsmac'], winner: 1, record: '2-1-0' },
        { players: ['BRV', 'qvertion'], winner: 1, record: '2-0-0' },
        { players: ['ispinyouround', 'aspelled'], winner: 2, record: '2-0-0' },
        { players: ['EggsLicker', 'Azurenia'], winner: 1, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 383408,
    format: Format.MODERN,
    name: 'Fall League 2025 | Modern #3/6',
    date: '2025-11-16',
    standings: [
      { player: '4onoki', rank: 1, deck: 'Boros Energy', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-3-0' },
      { player: 'Azurenia', rank: 2, deck: 'Domain Zoo', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'ispinyouround', rank: 3, deck: 'Dimir Tempo', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-5-0' },
      { player: 'farsmac', rank: 4, deck: 'Esper Blink', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-6-0' },
      { player: 'Norbi', rank: 5, deck: 'Jeskai Blink', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '6-5-0' },
      { player: 'aspelled', rank: 6, deck: 'Domain Ritual', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '6-5-0' },
      { player: 'BRV', rank: 7, deck: 'Izzet Prowess', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '5-6-0' },
      { player: 'DanilaNabeshko', rank: 8, deck: 'Azorius Control', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-7-0' },
      { player: 'qvertion', rank: 9, deck: 'Izzet Affinity', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '4-6-0' },
      { player: 'Aleksandr_KoLoshk', rank: 10, deck: 'Dimir Necrodominance', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-7-0' },
    ],
    rounds: [
      [
        { players: ['Norbi', 'aspelled'], winner: 1, record: '2-1-0' },
        { players: ['Aleksandr_KoLoshk', 'BRV'], winner: 2, record: '2-0-0' },
        { players: ['4onoki', 'farsmac'], winner: 1, record: '2-0-0' },
        { players: ['ispinyouround', 'DanilaNabeshko'], winner: 1, record: '2-1-0' },
        { players: ['qvertion', 'Azurenia'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['Azurenia', 'DanilaNabeshko'], winner: 1, record: '2-0-0' },
        { players: ['4onoki', 'BRV'], winner: 1, record: '2-1-0' },
        { players: ['Norbi', 'ispinyouround'], winner: 2, record: '2-1-0' },
        { players: ['aspelled', 'farsmac'], winner: 2, record: '2-1-0' },
        { players: ['Aleksandr_KoLoshk', 'qvertion'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['ispinyouround', 'BRV'], winner: 1, record: '2-1-0' },
        { players: ['Azurenia', '4onoki'], winner: 2, record: '2-1-0' },
        { players: ['Norbi', 'Aleksandr_KoLoshk'], winner: 2, record: '2-1-0' },
        { players: ['farsmac', 'qvertion'], winner: 1, record: '2-1-0' },
        { players: ['DanilaNabeshko', 'aspelled'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['ispinyouround', '4onoki'], winner: 2, record: '2-1-0' },
        { players: ['Azurenia', 'farsmac'], winner: 1, record: '2-1-0' },
        { players: ['BRV', 'DanilaNabeshko'], winner: 2, record: '2-1-0' },
        { players: ['Norbi', 'qvertion'], winner: 1, record: '2-0-0' },
        { players: ['Aleksandr_KoLoshk', 'aspelled'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 374673,
    format: Format.MODERN,
    name: 'Fall League 2025 | Modern #2/6',
    date: '2025-10-26',
    standings: [
      { player: 'Norbi', rank: 1, deck: 'Jeskai Blink', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: 'BRV', rank: 2, deck: 'Izzet Prowess', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'aspelled', rank: 3, deck: 'Jeskai Blink', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-4-0' },
      { player: 'DanilaNabeshko', rank: 4, deck: 'Azorius Control', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '6-4-0' },
      { player: 'qvertion', rank: 5, deck: 'Boros Energy', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'Tanti', rank: 6, deck: 'Dimir Midrange', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-5-0' },
      { player: 'EggsLicker', rank: 7, deck: 'Amulet Titan', points: 3, mp: 3, mw: 0, match_record: '1-3-0', game_record: '3-6-0' },
    ],
    rounds: [
      [
        { players: ['qvertion', null], winner: 1, record: 'bye' },
        { players: ['DanilaNabeshko', 'Norbi'], winner: 2, record: '2-1-0' },
        { players: ['BRV', 'Tanti'], winner: 1, record: '2-0-0' },
        { players: ['EggsLicker', 'aspelled'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['DanilaNabeshko', null], winner: 1, record: 'bye' },
        { players: ['aspelled', 'BRV'], winner: 1, record: '2-1-0' },
        { players: ['Norbi', 'qvertion'], winner: 1, record: '2-0-0' },
        { players: ['EggsLicker', 'Tanti'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['EggsLicker', null], winner: 1, record: 'bye' },
        { players: ['aspelled', 'Norbi'], winner: 2, record: '2-0-0' },
        { players: ['DanilaNabeshko', 'BRV'], winner: 2, record: '2-1-0' },
        { players: ['Tanti', 'qvertion'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['Norbi', 'BRV'], winner: 2, record: '2-0-0' },
        { players: ['aspelled', 'qvertion'], winner: 1, record: '2-1-0' },
        { players: ['DanilaNabeshko', 'EggsLicker'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 370849,
    format: Format.MODERN,
    name: 'Fall League 2025 | Modern #1/6',
    date: '2025-10-12',
    standings: [
      { player: '4onoki', rank: 1, points: 12, mp: 3, mw: 3, match_record: '4-0-0', game_record: '8-2-0' },
      { player: 'Norbi', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-2-0' },
      { player: 'farsmac', rank: 3, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'aspelled', rank: 4, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-4-0' },
      { player: 'BRV', rank: 5, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '4-4-0' },
      { player: 'NikitaC1', rank: 6, points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '2-4-0' },
      { player: 'Aleksandr_KoLishk', rank: 7, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-6-0' },
    ],
    rounds: [
      [
        { players: ['4onoki', null], winner: 1, record: 'bye' },
        { players: ['farsmac', 'Norbi'], winner: 2, record: '2-0-0' },
        { players: ['Aleksandr_KoLishk', 'aspelled'], winner: 2, record: '2-0-0' },
        { players: ['BRV', 'NikitaC1'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['farsmac', null], winner: 1, record: 'bye' },
        { players: ['NikitaC1', 'aspelled'], winner: 2, record: '2-0-0' },
        { players: ['4onoki', 'Norbi'], winner: 1, record: '2-1-0' },
        { players: ['BRV', 'Aleksandr_KoLishk'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['BRV', null], winner: 1, record: 'bye' },
        { players: ['aspelled', '4onoki'], winner: 2, record: '2-0-0' },
        { players: ['NikitaC1', 'Norbi'], winner: 2, record: '2-0-0' },
        { players: ['Aleksandr_KoLishk', 'farsmac'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['4onoki', 'farsmac'], winner: 1, record: '2-1-0' },
        { players: ['Norbi', 'aspelled'], winner: 1, record: '2-0-0' },
        { players: ['BRV', 'Aleksandr_KoLishk'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
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
