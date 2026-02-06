import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_modern: Tournament[] = [
  {
    id: 401337,
    format: Format.MODERN,
    name: 'Daily | Modern (01.02.26)',
    date: '2026-02-01',
    standings: [
      { player: 'Norbi', rank: 1, deck: 'Jeskai Blink', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-2-0' },
      { player: 'BRV', rank: 2, deck: 'Izzet Prowess', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'Tanti', rank: 3, deck: 'Jeskai Blink', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'Asafas', rank: 4, deck: 'Izzet Prowess', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
      { player: 'AmericanSoup', rank: 5, deck: 'Jeksai Hammer', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '6-5-0' },
      { player: 'diuzhev', rank: 6, deck: 'Abzan Birthing Ritual', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-6-0' },
      { player: 'HeartlessHero', rank: 7, deck: 'Dredge', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '5-6-0' },
      { player: 'ispinyouround', rank: 8, deck: 'Dimir Tempo', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '4-7-0' },
      { player: 'PolR', rank: 9, deck: 'Domain Zoo', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-6-0' },
      { player: 'Aleksandr_KoLoshk', rank: 10, deck: 'Jeskai Splinter Twin', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-7-0' },
    ],
    rounds: [
      [
        { players: ['BRV', 'PolR'], winner: 1, record: '2-0-0' },
        { players: ['Norbi', 'ispinyouround'], winner: 1, record: '2-0-0' },
        { players: ['diuzhev', 'Tanti'], winner: 2, record: '2-0-0' },
        { players: ['AmericanSoup', 'Asafas'], winner: 2, record: '2-1-0' },
        { players: ['HeartlessHero', 'Aleksandr_KoLoshk'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['BRV', 'AmericanSoup'], winner: 1, record: '2-1-0' },
        { players: ['Tanti', 'HeartlessHero'], winner: 1, record: '2-1-0' },
        { players: ['Asafas', 'Norbi'], winner: 2, record: '2-0-0' },
        { players: ['diuzhev', 'PolR'], winner: 2, record: '2-0-0' },
        { players: ['Aleksandr_KoLoshk', 'ispinyouround'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['Norbi', 'HeartlessHero'], winner: 1, record: '2-1-0' },
        { players: ['BRV', 'Tanti'], winner: 1, record: '2-1-0' },
        { players: ['Aleksandr_KoLoshk', 'AmericanSoup'], winner: 2, record: '2-0-0' },
        { players: ['PolR', 'Asafas'], winner: 2, record: '2-0-0' },
        { players: ['diuzhev', 'ispinyouround'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['Norbi', 'BRV'], winner: 1, record: '2-1-0' },
        { players: ['Tanti', 'Asafas'], winner: 1, record: '2-0-0' },
        { players: ['PolR', 'ispinyouround'], winner: 2, record: '2-1-0' },
        { players: ['diuzhev', 'Aleksandr_KoLoshk'], winner: 1, record: '2-1-0' },
        { players: ['AmericanSoup', 'HeartlessHero'], winner: 1, record: '2-1-0' },
      ],
    ],
  },
];
