import { Format } from '@dtos';
import { _2026_modern } from '@server/data/tournaments/_2026_modern';
import { _2026_pauper } from '@server/data/tournaments/_2026_pauper';
import { _2026_pioneer } from '@server/data/tournaments/_2026_pioneer';
import { _2026_standard } from '@server/data/tournaments/_2026_standard';
import { LeagueInfo } from './league.types';

export const spring2026League: LeagueInfo[] = [
  {
    format: Format.STANDARD,
    display_name: 'Standard',
    table_id: 'standard',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2026_standard
      .filter((t) => new Date(t.date).getTime() >= new Date('2026-02-17').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
  },
  {
    format: Format.PAUPER,
    display_name: 'Pauper',
    table_id: 'pauper',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2026_pauper
      .filter((t) => new Date(t.date).getTime() >= new Date('2026-02-18').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
    is_finished: true,
    rank_override: [
      'aad9350f-6810-4e07-8e70-86669d0936fa', // 1) Duzhev Ivan
      'ba897ea4-1d49-44ff-8cd7-c7b21e27205f', // 2) Raptunovich Aleksei
      'ba66e5e2-1e4b-4cd3-9ce9-24b4d222f2a7', // 3) Martseniuk Maksim
      '1cac0dfc-55ad-42dd-9d8a-f7812cf73013', // 4) Smoktunovich Kirill
      '037e76b0-88c8-4458-94a8-d63c2f9a8155', // 5) Kolyshko Alexander
      '2c52b58c-ecae-40a7-b4d8-77f1a9d0cc2f', // 6) Novikov Valentine
    ],
  },
  {
    format: Format.PIONEER,
    display_name: 'Pioneer',
    table_id: 'pioneer',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2026_pioneer
      .filter((t) => new Date(t.date).getTime() >= new Date('2026-02-19').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
    rank_override: [
      null,
      '824039fa-f433-42e7-845c-7c0fd61a21c2', // Vorotinsky Vitaliy (won a tiebreaker game for bye in finals)
    ],
  },
  {
    format: Format.MODERN,
    display_name: 'Modern',
    table_id: 'modern',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2026_modern
      .filter((t) => new Date(t.date).getTime() >= new Date('2026-02-22').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
  },
];
