import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';
import { _2026_legacy } from '@server/data/tournaments/_2026_legacy';
import { _2026_limited } from '@server/data/tournaments/_2026_limited';
import { _2026_modern } from '@server/data/tournaments/_2026_modern';
import { _2026_pauper } from '@server/data/tournaments/_2026_pauper';
import { _2026_pioneer } from '@server/data/tournaments/_2026_pioneer';
import { _2026_standard } from '@server/data/tournaments/_2026_standard';

import { LeagueInfo } from './league.types';

const STARTED_AT = new Date('2026-06-01').getTime();

function slice(events: Tournament[], count: number): Tournament[] {
  return events
    .filter((t) => new Date(t.date).getTime() >= STARTED_AT)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, count);
}

const standardEvents: (Tournament | null)[] = slice(_2026_standard, 11);
standardEvents.splice(8, 0, null);

export const summer2026League: LeagueInfo[] = [
  {
    format: Format.STANDARD,
    display_name: 'Standard',
    table_id: 'standard',
    total_events: 12,
    top: 4,
    prize_pool_inc_by_player: 2,
    events: standardEvents,
  },
  {
    format: Format.PAUPER,
    display_name: 'Pauper',
    table_id: 'pauper',
    total_events: 12,
    top: 8,
    prize_pool_inc_by_player: 2,
    events: slice(_2026_pauper, 12),
  },
  {
    format: Format.PIONEER,
    display_name: 'Pioneer',
    table_id: 'pioneer',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: slice(_2026_pioneer, 12),
  },
  {
    format: Format.MODERN,
    display_name: 'Modern',
    table_id: 'modern',
    total_events: 8,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: slice(_2026_modern, 9),
  },
  {
    format: Format.DRAFT,
    display_name: 'Limited',
    table_id: 'limited',
    total_events: 17,
    top: 8,
    top_events: 7,
    events_to_extra_point: 0,
    events: slice(_2026_limited, 18),
  },
  {
    format: Format.LEGACY,
    display_name: 'Legacy',
    table_id: 'legacy',
    total_events: 3,
    top: 4,
    events_to_extra_point: Number.MAX_SAFE_INTEGER,
    top_events: 4,
    disable_4_0_extra_point: true,
    display_tiebreakers: true,
    events: slice(_2026_legacy, 3),
    rank_override: [
      '037e76b0-88c8-4458-94a8-d63c2f9a8155', // Kolyshko Alexander
      'a52d83e2-0c2f-4fe0-bc03-1d03a54a4170', // Charniauski Mikita
      'aad9350f-6810-4e07-8e70-86669d0936fa', // Duzhev Ivan
    ],
    determined_top: 4,
  },
];
