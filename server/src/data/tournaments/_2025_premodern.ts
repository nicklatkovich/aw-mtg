import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

export const _2025_premodern: Tournament[] = [
  {
    id: 324258,
    format: Format.PREMODERN,
    name: 'Summer League 2025 | Premodern #1',
    date: '2025-06-14',
    standings: [
      { player: 'ArtB9', deck: 'Mono-Black Pit Rack', rank: 1, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '7-3-0' },
      { player: 'AntonG', deck: 'Gruul Madness', rank: 2, points: 9, mp: 4, mw: 3, match_record: '3-1-0', game_record: '6-5-0' },
      { player: 'aklshk', deck: 'Jeskai Solution', rank: 3, points: 6, mp: 4, mw: 2, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'pidlik', deck: 'Mono-Red Goblins', rank: 4, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'Candybober', deck: 'Mono-Red Aggro', rank: 5, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '5-4-0' },
      { player: 'gerber2000', deck: 'Simic Madness', rank: 6, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '4-4-0' },
      { player: 'qvertion', deck: 'Orzhov Deadguy Ale', rank: 7, points: 6, mp: 3, mw: 1, match_record: '2-2-0', game_record: '4-4-0' },
    ],
    rounds: [
      [
        { players: ['Candybober', null], winner: 1, record: 'bye' },
        { players: ['pidlik', 'ArtB9'], winner: 2, record: '2-1-0' },
        { players: ['AntonG', 'aklshk'], winner: 1, record: '2-1-0' },
        { players: ['qvertion', 'gerber2000'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['pidlik', null], winner: 1, record: 'bye' },
        { players: ['AntonG', 'Candybober'], winner: 1, record: '2-1-0' },
        { players: ['gerber2000', 'ArtB9'], winner: 2, record: '2-0-0' },
        { players: ['qvertion', 'aklshk'], winner: 2, record: '2-0-0' },
      ],
      [
        { players: ['qvertion', null], winner: 1, record: 'bye' },
        { players: ['ArtB9', 'AntonG'], winner: 2, record: '2-1-0' },
        { players: ['pidlik', 'aklshk'], winner: 2, record: '2-0-0' },
        { players: ['Candybober', 'gerber2000'], winner: 1, record: '2-0-0' },
      ],
      [
        { players: ['gerber2000', null], winner: 1, record: 'bye' },
        { players: ['AntonG', 'qvertion'], winner: 2, record: '2-0-0' },
        { players: ['Candybober', 'pidlik'], winner: 2, record: '2-0-0' },
        { players: ['ArtB9', 'aklshk'], winner: 1, record: '2-0-0' },
      ],
    ],
  },
];
