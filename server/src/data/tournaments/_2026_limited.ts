import { Format } from '@dtos';

import { Tournament } from '../data.types';

export const _2026_limited: Tournament[] = [
  {
    id: 437878,
    format: Format.DRAFT,
    name: 'Summer League 2026 | Draft #1 (ECL)',
    date: '2026-06-19',
    standings: [
      { player: 'NikitaP', rank: 1, points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-1-0' },
      { player: 'Odis89', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: 'Roman_B', rank: 3, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'Danik1998', rank: 4, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
      { player: 'BigBoris', rank: 5, points: 4, mp: 4, mw: 1, match_record: '1-2-1', game_record: '3-4-3' },
      { player: 'Norbi', rank: 6, points: 4, mp: 4, mw: 1, match_record: '1-2-1', game_record: '3-5-3' },
      { player: 'serj', rank: 7, points: 4, mp: 4, mw: 1, match_record: '1-2-1', game_record: '4-4-3' },
      { player: 'vladislavyurel', rank: 8, points: 3, mp: 2, mw: 0, match_record: '1-2-0', game_record: '2-4-0' },
      { player: 'Ayyyvan', rank: 9, points: 2, mp: 4, mw: 0, match_record: '0-2-2', game_record: '1-4-3' },
      { player: 'Torongil', rank: 10, points: 1, mp: 2, mw: 0, match_record: '0-1-1', game_record: '1-3-0' },
    ],
    rounds: [
      [
        { players: ['NikitaP', 'vladislavyurel'], winner: 1, record: '2-0-0' },
        { players: ['Norbi', 'serj'], winner: 1, record: '2-1-0' },
        { players: ['BigBoris', 'Roman_B'], winner: 2, record: '2-1-0' },
        { players: ['Odis89', 'Torongil'], winner: 1, record: '2-0-0' },
        { players: ['Ayyyvan', 'Danik1998'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['NikitaP', 'BigBoris'], winner: 1, record: '2-1-0' },
        { players: ['Odis89', 'Roman_B'], winner: 1, record: '2-1-0' },
        { players: ['Danik1998', 'Norbi'], winner: 1, record: '2-1-0' },
        { players: ['Ayyyvan', 'Torongil'], winner: 0, record: '1-1-0' },
        { players: ['vladislavyurel', 'serj'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['vladislavyurel', null], winner: 1, record: 'bye' },
        { players: ['NikitaP', 'Norbi'], winner: 1, record: '2-0-0' },
        { players: ['Odis89', 'Danik1998'], winner: 1, record: '2-0-0' },
        { players: ['Roman_B', 'serj'], winner: 1, record: '2-1-0' },
        { players: ['Ayyyvan', 'BigBoris'], winner: 2, record: '1-0-0' },
      ],
      [
        { players: ['Odis89', 'NikitaP'], winner: 2, record: '2-0-0' },
        { players: ['Roman_B', 'Danik1998'], winner: 1, record: '2-0-0' },
        { players: ['Norbi', 'Ayyyvan'], winner: 0, record: '0-0-3' },
        { players: ['serj', 'BigBoris'], winner: 0, record: '0-0-3' },
      ],
    ],
  },
  {
    id: 436294,
    format: Format.DRAFT,
    name: 'Summer League 2026 | Draft #1 (SOS)',
    date: '2026-06-12',
    standings: [
      { player: 'Roman_B', rank: 1, points: 9, mp: 3, mw: 3, match_record: '3-0-0', game_record: '6-0-0' },
      { player: 'Danik1998', rank: 2, points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '4-3-0' },
      { player: 'BigBoris', rank: 3, points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-3-0' },
      { player: 'serj', rank: 4, points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-2-0' },
      { player: 'Torongil', rank: 5, points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '2-4-0' },
      { player: 'NikitaP', rank: 6, points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '2-5-0' },
      { player: 'Shadowest', rank: 7, points: 0, mp: 2, mw: 0, match_record: '0-2-0', game_record: '1-4-0' },
      { player: 'Odis89', rank: 8, points: 0, mp: 2, mw: 0, match_record: '0-2-0', game_record: '0-4-0' },
    ],
    rounds: [
      [
        { players: ['Shadowest', 'NikitaP'], winner: 2, record: '2-1-0' },
        { players: ['Danik1998', 'Odis89'], winner: 1, record: '2-0-0' },
        { players: ['serj', 'BigBoris'], winner: 2, record: '2-1-0' },
        { players: ['Torongil', 'Roman_B'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['Roman_B', 'NikitaP'], winner: 1, record: '2-0-0' },
        { players: ['Danik1998', 'BigBoris'], winner: 1, record: '2-1-0' },
        { players: ['Shadowest', 'serj'], winner: 2, record: '2-0-0' },
        { players: ['Odis89', 'Torongil'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['Roman_B', 'Danik1998'], winner: 1, record: '2-0-0' },
        { players: ['serj', 'Torongil'], winner: 1, record: '2-0-0' },
        { players: ['NikitaP', 'BigBoris'], winner: 2, record: '2-0-0' },
      ],
    ],
  },
];
