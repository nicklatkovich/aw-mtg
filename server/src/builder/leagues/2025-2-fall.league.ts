import { Format } from '@dtos';
import { _2025_legacy } from '@server/data/tournaments/_2025_legacy';
import { _2025_modern } from '@server/data/tournaments/archive/_2025_modern';
import { _2025_pauper } from '@server/data/tournaments/archive/_2025_pauper';
import { _2025_pioneer } from '@server/data/tournaments/archive/_2025_pioneer';
import { _2025_standard } from '@server/data/tournaments/archive/_2025_standard';
import { LeagueInfo } from './league.types';

export const fall2025League: LeagueInfo[] = [
  {
    format: Format.STANDARD,
    display_name: 'Standard',
    table_id: 'standard',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: _2025_standard
      .filter((t) => new Date(t.date).getTime() >= new Date('2025-09-30').getTime())
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
    events: _2025_pioneer
      .filter((t) => new Date(t.date).getTime() >= new Date('2025-10-02').getTime())
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
    events: _2025_pauper
      .filter((t) => new Date(t.date).getTime() >= new Date('2025-10-01').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
  },
  {
    format: [Format.MODERN, Format.LEGACY],
    display_name: 'Eternal',
    table_id: 'eternal',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 0,
    events: [..._2025_modern, ..._2025_legacy]
      .filter((t) => new Date(t.date).getTime() >= new Date('2025-10-05').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
  },
];
