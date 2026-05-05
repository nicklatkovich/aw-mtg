import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_standard: Tournament[] = [
  {
    id: 426916,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #12/12',
    date: '2026-05-05',
    standings: [
      { player: 'BRV', rank: 1, deck: 'Izzet Spellementals', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-1-0' },
      { player: 'Very_Bad_Man', rank: 2, deck: 'Mono-Green Landfall', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: 'Barbossa', rank: 3, deck: 'Mono-White Momo', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'profunny', rank: 4, deck: 'Dimir Midrange', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'McRais', rank: 5, deck: 'Golgari Midrange', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
      { player: 'mnihc', rank: 6, deck: 'Mono-Green Landfall', points: 6, mp: 2, mw: 0, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'KonstantinPerevezenov', rank: 7, deck: 'Izzet Pirates', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '4-7-0' },
    ],
    rounds: [
      [
        { players: ['Barbossa', null], winner: 1, record: 'bye' },
        { players: ['KonstantinPerevezenov', 'BRV'], winner: 2, record: '2-0-0' },
        { players: ['mnihc', 'McRais'], winner: 2, record: '2-0-0' },
        { players: ['profunny', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['profunny', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'Barbossa'], winner: 1, record: '2-0-0' },
        { players: ['McRais', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
        { players: ['KonstantinPerevezenov', 'mnihc'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['mnihc', null], winner: 1, record: 'bye' },
        { players: ['Very_Bad_Man', 'BRV'], winner: 2, record: '2-0-0' },
        { players: ['profunny', 'KonstantinPerevezenov'], winner: 1, record: '2-1-0' },
        { players: ['McRais', 'Barbossa'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['mnihc', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'profunny'], winner: 1, record: '2-1-0' },
        { players: ['Very_Bad_Man', 'Barbossa'], winner: 1, record: '2-1-0' },
        { players: ['McRais', 'KonstantinPerevezenov'], winner: 1, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 424726,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #11/12',
    date: '2026-04-28',
    standings: [
      { player: 'Barbossa', rank: 1, deck: 'Mono-White Momo', points: 9, mp: 3, mw: 2, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'McRais', rank: 2, deck: 'Dimir Oculus', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'profunny', rank: 3, deck: 'Dimir Midrange', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '4-4-0' },
      { player: 'mnihc', rank: 4, deck: 'Mono-Green Landfall', points: 6, mp: 2, mw: 0, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'BRV', rank: 5, deck: 'Izzet Spellementals', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-5-0' },
    ],
    rounds: [
      [
        { players: ['Barbossa', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'profunny'], winner: 2, record: '2-0-0' },
        { players: ['McRais', 'mnihc'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['mnihc', null], winner: 1, record: 'bye' },
        { players: ['Barbossa', 'BRV'], winner: 2, record: '2-1-0' },
        { players: ['profunny', 'McRais'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['profunny', null], winner: 1, record: 'bye' },
        { players: ['McRais', 'Barbossa'], winner: 2, record: '2-1-0' },
        { players: ['BRV', 'mnihc'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['mnihc', null], winner: 1, record: 'bye' },
        { players: ['Barbossa', 'profunny'], winner: 1, record: '2-0-0' },
        { players: ['McRais', 'BRV'], winner: 1, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 423320,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #10/12',
    date: '2026-04-21',
    standings: [
      { player: 'BRV', rank: 1, deck: 'Izzet Spellementals', points: 10, mp: 3, mw: 2, match_record: '3-0-1', game_record: '7-2-0' },
      { player: '4onoki', rank: 2, points: 7, mp: 2, mw: 0, match_record: '2-1-1', game_record: '6-3-0' },
      { player: 'ykcyc', rank: 3, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-5-0' },
    ],
    rounds: [
      [
        { players: ['4onoki', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'ykcyc'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['ykcyc', null], winner: 1, record: 'bye' },
        { players: ['4onoki', 'BRV'], winner: 0, record: '1-1-0' },
      ],
      [
        { players: ['BRV', null], winner: 1, record: 'bye' },
        { players: ['4onoki', 'ykcyc'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['4onoki', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'ykcyc'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 421620,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #9/12',
    date: '2026-04-14',
    standings: [
      { player: '4onoki', rank: 1, deck: 'Selesnya Ouroboroid', points: 9, mp: 3, mw: 2, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'BRV', rank: 2, deck: 'Izzet Spellementals', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: 'McRais', rank: 3, deck: 'Sultai Dragons', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '6-4-0' },
      { player: 'ykcyc', rank: 4, deck: 'Orzhov Midrange', points: 6, mp: 2, mw: 0, match_record: '2-2-0', game_record: '4-4-0' },
      { player: 'Barbossa', rank: 5, deck: 'Mono-White Control', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
    ],
    rounds: [
      [
        { players: ['McRais', null], winner: 1, record: 'bye' },
        { players: ['4onoki', 'BRV'], winner: 2, record: '2-1-0' },
        { players: ['ykcyc', 'Barbossa'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['4onoki', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'ykcyc'], winner: 1, record: '2-0-0' },
        { players: ['Barbossa', 'McRais'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['ykcyc', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'Barbossa'], winner: 1, record: '2-0-0' },
        { players: ['McRais', '4onoki'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['ykcyc', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'McRais'], winner: 2, record: '2-0-0' },
        { players: ['4onoki', 'Barbossa'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 420048,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #8/12',
    date: '2026-04-07',
    standings: [
      { player: 'BRV', rank: 1, deck: 'Izzet Spellementals', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'profunny', rank: 2, deck: 'Dimir Midrange', points: 7, mp: 4, mw: 2, match_record: '2-1-1', game_record: '6-4-0' },
      { player: 'jor1k', rank: 3, deck: 'Boros Burn', points: 4, mp: 3, mw: 1, match_record: '1-1-1', game_record: '3-4-0' },
      { player: 'Very_Bad_Man', rank: 4, deck: 'Mono-Green Landfall', points: 3, mp: 3, mw: 0, match_record: '1-3-0', game_record: '4-6-0' },
    ],
    rounds: [
      [
        { players: ['Very_Bad_Man', 'jor1k'], winner: 2, record: '2-1-0' },
        { players: ['BRV', 'profunny'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['jor1k', 'BRV'], winner: 2, record: '2-0-0' },
        { players: ['profunny', 'Very_Bad_Man'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['BRV', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
        { players: ['jor1k', 'profunny'], winner: 0, record: '1-1-0' },
      ],
      [
        { players: ['Very_Bad_Man', null], winner: 1, record: 'bye' },
        { players: ['BRV', 'profunny'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 418040,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #7/12',
    date: '2026-03-31',
    standings: [
      { player: 'BRV', rank: 1, deck: 'Izzet Spellementals', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-1-0' },
      { player: 'jor1k', rank: 2, deck: 'Golgari Elves', points: 0, mp: 4, mw: 0, match_record: '0-4-0', game_record: '1-8-0' },
    ],
    rounds: [
      [{ players: ['BRV', 'jor1k'], winner: 1, record: '2-0-0' }],
      [{ players: ['BRV', 'jor1k'], winner: 1, record: '2-0-0' }],
      [{ players: ['BRV', 'jor1k'], winner: 1, record: '2-1-0' }],
      [{ players: ['BRV', 'jor1k'], winner: 1, record: '2-0-0' }],
      //
    ],
  },
  {
    id: 416279,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #6/12',
    date: '2026-03-24',
    standings: [
      { player: 'profunny', rank: 1, deck: 'Dimir Midrange', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-2-0' },
      { player: '[OMG]Summie', rank: 2, deck: 'Bant Rhythm', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-2-0' },
      { player: 'IvaD', rank: 3, deck: 'Mono-Green Landfall', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '3-4-0' },
      { player: 'Very_Bad_Man', rank: 4, deck: 'Mono-Green Landfall', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
      { player: 'ykcyc', rank: 5, deck: 'Mono-Red Aggro', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-4-0' },
      { player: 'BRV', rank: 6, deck: 'Temur Aggro', points: 4, mp: 3, mw: 0, match_record: '1-2-1', game_record: '4-5-0' },
      { player: 'McRais', rank: 7, deck: 'Esper Midrange', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '4-7-0' },
      { player: 'jor1k', rank: 8, deck: 'Golgari Elves', points: 1, mp: 3, mw: 0, match_record: '0-2-1', game_record: '1-4-0' },
    ],
    rounds: [
      [
        { players: ['IvaD', 'jor1k'], winner: 1, record: '1-0-0' },
        { players: ['[OMG]Summie', 'BRV'], winner: 1, record: '2-0-0' },
        { players: ['ykcyc', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
        { players: ['McRais', 'profunny'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['Very_Bad_Man', 'profunny'], winner: 2, record: '2-0-0' },
        { players: ['IvaD', '[OMG]Summie'], winner: 2, record: '2-0-0' },
        { players: ['jor1k', 'BRV'], winner: 0, record: '1-1-0' },
        { players: ['McRais', 'ykcyc'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['[OMG]Summie', 'profunny'], winner: 2, record: '2-1-0' },
        { players: ['ykcyc', 'jor1k'], winner: 1, record: '2-0-0' },
        { players: ['Very_Bad_Man', 'IvaD'], winner: 2, record: '2-0-0' },
        { players: ['BRV', 'McRais'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['BRV', null], winner: 1, record: 'bye' },
        { players: ['profunny', 'IvaD'], winner: 1, record: '2-0-0' },
        { players: ['[OMG]Summie', 'ykcyc'], winner: 1, record: '2-0-0' },
        { players: ['Very_Bad_Man', 'McRais'], winner: 1, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 414406,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #5/12',
    date: '2026-03-17',
    standings: [
      { player: 'Barbossa', rank: 1, deck: 'Mono-White Control', points: 9, mp: 3, mw: 2, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'BRV', rank: 2, deck: 'Temur Aggro', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-4-0' },
      { player: 'Very_Bad_Man', rank: 3, deck: 'Dimir Midrange', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '5-4-0' },
      { player: 'McRais', rank: 4, deck: 'Golgari Elves', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '6-5-0' },
      { player: '[OMG]Summie', rank: 5, deck: 'Bant Rhythm', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '6-5-0' },
      { player: 'BregoXX', rank: 6, deck: 'Esper Midrange', points: 3, mp: 3, mw: 0, match_record: '1-3-0', game_record: '2-5-0' },
      { player: 'diuzhev', rank: 7, deck: 'Dimir Midrange', points: 3, mp: 2, mw: 0, match_record: '1-2-0', game_record: '4-4-0' },
    ],
    rounds: [
      [
        { players: ['Barbossa', null], winner: 1, record: 'bye' },
        { players: ['BregoXX', 'Very_Bad_Man'], winner: 2, record: '1-0-0' },
        { players: ['McRais', 'diuzhev'], winner: 1, record: '2-1-0' },
        { players: ['BRV', '[OMG]Summie'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['BregoXX', null], winner: 1, record: 'bye' },
        { players: ['Very_Bad_Man', 'McRais'], winner: 2, record: '2-0-0' },
        { players: ['BRV', 'Barbossa'], winner: 2, record: '2-1-0' },
        { players: ['diuzhev', '[OMG]Summie'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['diuzhev', null], winner: 1, record: 'bye' },
        { players: ['McRais', 'Barbossa'], winner: 2, record: '2-1-0' },
        { players: ['[OMG]Summie', 'Very_Bad_Man'], winner: 2, record: '2-1-0' },
        { players: ['BregoXX', 'BRV'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['Barbossa', 'Very_Bad_Man'], winner: 2, record: '2-1-0' },
        { players: ['McRais', 'BRV'], winner: 2, record: '2-1-0' },
        { players: ['[OMG]Summie', 'BregoXX'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 408607,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #4/12',
    date: '2026-03-10',
    standings: [
      { player: 'Very_Bad_Man', rank: 1, deck: 'Dimir Midrange', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: 'ykcyc', rank: 2, deck: 'Mono-Red Aggro', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: '[OMG]Summie', rank: 3, deck: 'Bant Rhythm', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-6-0' },
      { player: 'McRais', rank: 4, deck: 'Esper Midrange', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'BRV', rank: 5, deck: 'Izzet Aggro', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'jor1k', rank: 6, deck: { name: 'Selesnya', colors: 'WG' }, points: 0, mp: 3, mw: 0, match_record: '0-3-0', game_record: '0-6-0' },
    ],
    rounds: [
      [
        { players: ['[OMG]Summie', 'BRV'], winner: 1, record: '2-1-0' },
        { players: ['McRais', 'jor1k'], winner: 1, record: '2-0-0' },
        { players: ['ykcyc', 'Very_Bad_Man'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['[OMG]Summie', 'ykcyc'], winner: 2, record: '2-1-0' },
        { players: ['McRais', 'Very_Bad_Man'], winner: 1, record: '2-0-0' },
        { players: ['BRV', 'jor1k'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['McRais', '[OMG]Summie'], winner: 2, record: '2-1-0' },
        { players: ['ykcyc', 'jor1k'], winner: 1, record: '2-0-0' },
        { players: ['BRV', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['BRV', null], winner: 1, record: 'bye' },
        { players: ['Very_Bad_Man', '[OMG]Summie'], winner: 1, record: '2-0-0' },
        { players: ['McRais', 'ykcyc'], winner: 2, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 408605,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #3/12',
    date: '2026-03-03',
    standings: [
      { player: 'BRV', rank: 1, deck: 'Izzet Aggro', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-3-0' },
      { player: 'Barbossa', rank: 2, points: 7, mp: 4, mw: 2, match_record: '2-1-1', game_record: '6-4-1' },
      { player: 'Very_Bad_Man', rank: 3, points: 7, mp: 4, mw: 2, match_record: '2-1-1', game_record: '5-3-1' },
      { player: 'ykcyc', rank: 4, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-4-0' },
      { player: '[OMG]Summie', rank: 5, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-5-0' },
      { player: 'EugF', rank: 6, points: 0, mp: 4, mw: 0, match_record: '0-4-0', game_record: '1-8-0' },
    ],
    rounds: [
      [
        { players: ['[OMG]Summie', 'EugF'], winner: 1, record: '2-0-0' },
        { players: ['ykcyc', 'Barbossa'], winner: 2, record: '2-0-0' },
        { players: ['BRV', 'Very_Bad_Man'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['[OMG]Summie', 'ykcyc'], winner: 2, record: '2-0-0' },
        { players: ['Barbossa', 'BRV'], winner: 2, record: '2-1-0' },
        { players: ['EugF', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['BRV', '[OMG]Summie'], winner: 1, record: '2-1-0' },
        { players: ['ykcyc', 'EugF'], winner: 1, record: '2-0-0' },
        { players: ['Barbossa', 'Very_Bad_Man'], winner: 0, record: '1-1-1' },
      ],
      [
        { players: ['BRV', 'ykcyc'], winner: 1, record: '2-0-0' },
        { players: ['Barbossa', 'EugF'], winner: 1, record: '2-1-0' },
        { players: ['Very_Bad_Man', '[OMG]Summie'], winner: 1, record: '1-0-0' },
      ],
    ],
  },
  {
    id: 407488,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #2/12',
    date: '2026-02-24',
    standings: [
      { player: 'Very_Bad_Man', rank: 1, deck: 'Dimir Midrange', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-3-0' },
      { player: 'gvasalia', rank: 2, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'BRV', rank: 3, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'ykcyc', rank: 4, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'EugF', rank: 5, points: 3, mp: 1, mw: 0, match_record: '1-1-0', game_record: '2-2-0' },
    ],
    rounds: [
      [
        { players: ['BRV', 'EugF'], winner: 1, record: '2-0-0' },
        { players: ['gvasalia', 'Very_Bad_Man'], winner: 2, record: '2-1-0' },
        { players: ['ykcyc', null], winner: 1, record: 'bye' },
      ],
      [
        { players: ['EugF', null], winner: 1, record: 'bye' },
        { players: ['ykcyc', 'gvasalia'], winner: 2, record: '2-1-0' },
        { players: ['BRV', 'Very_Bad_Man'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['Very_Bad_Man', 'ykcyc'], winner: 1, record: '2-0-0' },
        { players: ['gvasalia', 'BRV'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['BRV', 'ykcyc'], winner: 2, record: '2-1-0' },
        { players: ['Very_Bad_Man', 'gvasalia'], winner: 2, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 405306,
    format: Format.STANDARD,
    name: 'Spring League 2026 | Standard #1/12',
    date: '2026-02-17',
    standings: [
      { player: 'profunny', rank: 1, deck: 'Dimir Midrange', points: 12, mp: 4, mw: 4, match_record: '4-0-0', game_record: '8-2-0' },
      { player: 'qvertion', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '5-3-0' },
      { player: '[OMG]Summie', rank: 3, points: 4, mp: 4, mw: 1, match_record: '1-2-1', game_record: '3-4-0' },
      { player: 'DamK6', rank: 4, points: 4, mp: 4, mw: 1, match_record: '1-2-1', game_record: '3-6-0' },
      { player: 'Barbossa', rank: 5, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '5-6-0' },
      { player: 'BRV', rank: 6, points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '3-6-0' },
    ],
    rounds: [
      [
        { players: ['DamK6', 'qvertion'], winner: 2, record: '2-0-0' },
        { players: ['BRV', '[OMG]Summie'], winner: 2, record: '2-0-0' },
        { players: ['profunny', 'Barbossa'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['[OMG]Summie', 'DamK6'], winner: 0, record: '1-1-0' },
        { players: ['profunny', 'qvertion'], winner: 1, record: '2-0-0' },
        { players: ['Barbossa', 'BRV'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['profunny', '[OMG]Summie'], winner: 1, record: '2-0-0' },
        { players: ['qvertion', 'Barbossa'], winner: 1, record: '2-1-0' },
        { players: ['DamK6', 'BRV'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['profunny', 'BRV'], winner: 1, record: '2-1-0' },
        { players: ['qvertion', '[OMG]Summie'], winner: 1, record: '1-0-0' },
        { players: ['Barbossa', 'DamK6'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
  {
    id: 401511,
    format: Format.STANDARD,
    name: 'Daily | Standard (03.02.26)',
    date: '2026-02-03',
    standings: [
      { player: 'qvertion', rank: 1, deck: 'Dimir Doomsday', points: 9, mp: 3, mw: 2, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'NickLatkovich', rank: 2, deck: 'Bant Airbending', points: 9, mp: 3, mw: 2, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'Barbossa', rank: 3, deck: 'Mono-White Control', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-4-0' },
      { player: 'BRV', rank: 4, deck: 'Boros Aggro', points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'DamK6', rank: 5, deck: 'Izzet Lessons', points: 3, mp: 3, mw: 0, match_record: '1-3-0', game_record: '4-6-0' },
    ],
    rounds: [
      [
        { players: ['NickLatkovich', null], winner: 1, record: 'bye' },
        { players: ['DamK6', 'BRV'], winner: 2, record: '2-1-0' },
        { players: ['Barbossa', 'qvertion'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['qvertion', null], winner: 1, record: 'bye' },
        { players: ['NickLatkovich', 'DamK6'], winner: 1, record: '2-1-0' },
        { players: ['BRV', 'Barbossa'], winner: 2, record: '2-1-0' },
      ],
      [
        { players: ['DamK6', null], winner: 1, record: 'bye' },
        { players: ['NickLatkovich', 'Barbossa'], winner: 1, record: '2-0-0' },
        { players: ['qvertion', 'BRV'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['BRV', null], winner: 1, record: 'bye' },
        { players: ['NickLatkovich', 'qvertion'], winner: 2, record: '2-1-0' },
        { players: ['Barbossa', 'DamK6'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
  {
    id: 399909,
    format: Format.STANDARD,
    name: 'Daily | Standard (27.01.26)',
    date: '2026-01-27',
    standings: [
      { player: 'NickLatkovich', rank: 1, deck: 'Simic Artifacts', points: 10, mp: 4, mw: 3, match_record: '3-0-1', game_record: '7-2-0' },
      { player: 'profunny', rank: 2, deck: 'Dimir Midrange', points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-4-0' },
      { player: 'BRV', rank: 3, deck: 'Boros Aggro', points: 9, mp: 3, mw: 2, match_record: '3-1-0', game_record: '6-3-0' },
      { player: '[OMG]Summie', rank: 4, deck: 'Sultai Control', points: 7, mp: 3, mw: 1, match_record: '2-1-1', game_record: '5-3-0' },
      { player: 'Barbossa', rank: 5, deck: 'Mono-White Control', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-5-0' },
      { player: 'RomanKohan14', rank: 6, deck: 'Dimir Midrange', points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '4-5-0' },
      { player: 'Alex88', rank: 7, deck: 'Jeskai Bounce', points: 3, mp: 3, mw: 1, match_record: '1-2-0', game_record: '3-4-0' },
      { player: 'Very_Bad_Man', rank: 8, deck: 'Dimir Midrange', points: 3, mp: 4, mw: 1, match_record: '1-3-0', game_record: '4-7-0' },
      { player: 'ykcyc', rank: 9, deck: 'Mono-Red Aggro', points: 3, mp: 3, mw: 0, match_record: '1-3-0', game_record: '5-6-0' },
    ],
    rounds: [
      [
        { players: ['[OMG]Summie', null], winner: 1, record: 'bye' },
        { players: ['ykcyc', 'NickLatkovich'], winner: 2, record: '2-1-0' },
        { players: ['BRV', 'RomanKohan14'], winner: 2, record: '2-0-0' },
        { players: ['Very_Bad_Man', 'Barbossa'], winner: 2, record: '2-1-0' },
        { players: ['profunny', 'Alex88'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['BRV', null], winner: 1, record: 'bye' },
        { players: ['[OMG]Summie', 'Alex88'], winner: 2, record: '2-0-0' },
        { players: ['Barbossa', 'RomanKohan14'], winner: 1, record: '2-0-0' },
        { players: ['profunny', 'NickLatkovich'], winner: 2, record: '2-0-0' },
        { players: ['Very_Bad_Man', 'ykcyc'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['ykcyc', null], winner: 1, record: 'bye' },
        { players: ['NickLatkovich', 'Barbossa'], winner: 1, record: '2-0-0' },
        { players: ['Very_Bad_Man', 'profunny'], winner: 2, record: '2-1-0' },
        { players: ['[OMG]Summie', 'RomanKohan14'], winner: 1, record: '2-0-0' },
        { players: ['BRV', 'Alex88'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['NickLatkovich', '[OMG]Summie'], winner: 0, record: '1-1-0' },
        { players: ['BRV', 'Very_Bad_Man'], winner: 1, record: '2-0-0' },
        { players: ['profunny', 'Barbossa'], winner: 1, record: '2-1-0' },
        { players: ['ykcyc', 'RomanKohan14'], winner: 2, record: '2-1-0' },
      ],
    ],
  },
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
