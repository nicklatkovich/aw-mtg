import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_standard: Tournament[] = [
  {
    id: 394842,
    format: Format.STANDARD,
    name: 'Daily | Standard (06.01.26)',
    date: '2026-01-06',
    standings: [
      { player: '[OMG]Summie', rank: 1, deck: 'Sultai Control', points: 9, mp: 3, mw: 3, match_record: '3-0-0', game_record: '5-0-0' },
      { player: 'Damingez', rank: 2, deck: 'Sultai Control', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '4-3-0' },
      { player: 'NickLatkovich', rank: 3, deck: 'Simic Artifacts', points: 4, mp: 2, mw: 0, match_record: '1-1-1', game_record: '3-3-0' },
      { player: 'qvertion', rank: 4, deck: 'Dimir Midrange', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-4-0' },
      { player: 'McRais', rank: 5, deck: 'Golgari Midrange', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-5-0' },
      { player: 'profunny', rank: 6, deck: 'Dimir Midrange', points: 1, mp: 2, mw: 0, match_record: '0-1-1', game_record: '2-3-0' },
    ],
    rounds: [
      [
        { players: ['McRais', '[OMG]Summie'], winner: 2, record: '2-0-0' },
        { players: ['profunny', 'NickLatkovich'], winner: 0, record: '1-1-0' },
        { players: ['qvertion', 'Damingez'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['[OMG]Summie', 'Damingez'], winner: 1, record: '1-0-0' },
        { players: ['profunny', 'McRais'], winner: 2, record: '2-1-0' },
        { players: ['NickLatkovich', 'qvertion'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['NickLatkovich', null], winner: 1, record: 'bye' },
        { players: ['[OMG]Summie', 'qvertion'], winner: 1, record: '2-0-0' },
        { players: ['McRais', 'Damingez'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
];
