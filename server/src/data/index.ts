import { archiveTournaments } from './tournaments/archive';

import { _2025_commander } from './tournaments/_2025_commander';
import { _2025_draft } from './tournaments/_2025_draft';
import { _2025_legacy } from './tournaments/_2025_legacy';
import { _2025_sealed } from './tournaments/_2025_sealed';
import { _2026_legacy } from './tournaments/_2026_legacy';
import { _2026_limited } from './tournaments/_2026_limited';
import { _2026_modern } from './tournaments/_2026_modern';
import { _2026_pauper } from './tournaments/_2026_pauper';
import { _2026_pioneer } from './tournaments/_2026_pioneer';
import { _2026_premodern } from './tournaments/_2026_premodern';
import { _2026_specials } from './tournaments/_2026_specials';
import { _2026_standard } from './tournaments/_2026_standard';

export const allTournaments = [
  ...archiveTournaments,
  ..._2025_commander,
  ..._2025_draft,
  ..._2025_legacy,
  ..._2025_sealed,
  ..._2026_modern,
  ..._2026_pauper,
  ..._2026_pioneer,
  ..._2026_premodern,
  ..._2026_specials,
  ..._2026_standard,
  ..._2026_limited,
  ..._2026_legacy,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() || b.standings.length - a.standings.length);
