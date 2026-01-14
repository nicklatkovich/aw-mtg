import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_standard: Tournament[] = [
  {
    id: 396543,
    format: Format.STANDARD,
    name: 'Daily | Standard (13.01.26)',
    date: '2026-01-13',
    standings: [
      { player: 'BRV', rank: 1, deck: 'Boros Aggro', points: 9, mp: 3, mw: 3, match_record: '3-0-0', game_record: '6-2-0' },
      { player: 'NickLatkovich', rank: 2, deck: 'Simic Artifacts', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-3-0' },
      { player: 'McRais', rank: 3, deck: 'Esper Oculus', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '4-4-0' },
      { player: 'qvertion', rank: 4, deck: 'Sultai Reanimator', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '4-4-0' },
      { player: 'Azurenia', rank: 5, deck: 'Simic Terror', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-4-0' },
      { player: 'AmericanSoup', rank: 6, deck: 'Dimir Midrange', points: 0, mp: 3, mw: 0, match_record: '0-3-0', game_record: '1-6-0' },
    ],
    rounds: [
      [
        { players: ['NickLatkovich', 'Azurenia'], winner: 1, record: '2-1-0' },
        { players: ['BRV', 'qvertion'], winner: 1, record: '2-1-0' },
        { players: ['McRais', 'AmericanSoup'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['BRV', 'Azurenia'], winner: 1, record: '2-0-0' },
        { players: ['McRais', 'NickLatkovich'], winner: 2, record: '2-0-0' },
        { players: ['qvertion', 'AmericanSoup'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['NickLatkovich', 'BRV'], winner: 2, record: '2-1-0' },
        { players: ['McRais', 'qvertion'], winner: 1, record: '2-1-0' },
        { players: ['AmericanSoup', 'Azurenia'], winner: 2, record: '2-0-0' },
      ],
    ],
  },
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
