import { Format } from '@dtos';
import { Tournament } from '../data.types';

export const _2026_pauper: Tournament[] = [
  {
    id: 395139,
    format: Format.PAUPER,
    name: 'Daily | Pauper (07.01.26)',
    date: '2026-01-07',
    standings: [
      { player: 'NickLatkovich', rank: 1, deck: 'Jund Wildfire', points: 9, mp: 2, mw: 2, match_record: '3-0-0', game_record: '6-1-0' },
      { player: 'diuzhev', rank: 2, deck: 'Rakdos Persist Combo', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '4-3-0' },
      { player: 'Aliaksandr', rank: 3, deck: 'Mono-Red Aggro', points: 6, mp: 2, mw: 1, match_record: '2-1-0', game_record: '5-3-0' },
      { player: 'Azurenia', rank: 4, deck: 'Grixis Terror', points: 6, mp: 3, mw: 2, match_record: '2-1-0', game_record: '5-2-0' },
      { player: 'AmericanSoup', rank: 5, deck: 'Mono-White Aggro', points: 4, mp: 3, mw: 1, match_record: '1-1-1', game_record: '4-3-0' },
      { player: 'PolR', rank: 6, deck: 'Mono-Red Burn', points: 3, mp: 2, mw: 0, match_record: '1-2-0', game_record: '2-4-0' },
      { player: 'Melamasta', rank: 7, deck: 'Simic Petitioners Mill', points: 1, mp: 3, mw: 0, match_record: '0-2-1', game_record: '1-5-0' },
    ],
    rounds: [
      [
        { players: ['NickLatkovich', null], winner: 1, record: 'bye' },
        { players: ['Melamasta', 'AmericanSoup'], winner: 0, record: '1-1-0' },
        { players: ['PolR', 'Azurenia'], winner: 2, record: '2-0-0' },
        { players: ['diuzhev', 'Aliaksandr'], winner: 1, record: '2-1-0' },
      ],
      [
        { players: ['Aliaksandr', null], winner: 1, record: 'bye' },
        { players: ['diuzhev', 'Melamasta'], winner: 1, record: '2-0-0' },
        { players: ['Azurenia', 'NickLatkovich'], winner: 2, record: '2-1-0' },
        { players: ['AmericanSoup', 'PolR'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['PolR', null], winner: 1, record: 'bye' },
        { players: ['NickLatkovich', 'diuzhev'], winner: 1, record: '2-0-0' },
        { players: ['AmericanSoup', 'Aliaksandr'], winner: 2, record: '2-1-0' },
        { players: ['Azurenia', 'Melamasta'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
];
