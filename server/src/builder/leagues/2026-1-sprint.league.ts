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
