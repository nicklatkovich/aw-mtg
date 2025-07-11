import { _2025_commander } from './tournaments/_2025_commander';
import { _2025_draft } from './tournaments/_2025_draft';
import { _2025_legacy } from './tournaments/_2025_legacy';
import { _2025_modern } from './tournaments/_2025_modern';
import { _2025_pauper } from './tournaments/_2025_pauper';
import { _2025_pioneer } from './tournaments/_2025_pioneer';
import { _2025_premodern } from './tournaments/_2025_premodern';
import { _2025_sealed } from './tournaments/_2025_sealed';
import { _2025_standard } from './tournaments/_2025_standard';
import { archiveTournaments } from './tournaments/archive';

export const allTournaments = [
  ...archiveTournaments,
  ..._2025_standard,
  ..._2025_pioneer,
  ..._2025_pauper,
  ..._2025_modern,
  ..._2025_legacy,
  ..._2025_premodern,
  ..._2025_draft,
  ..._2025_sealed,
  ..._2025_commander,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
