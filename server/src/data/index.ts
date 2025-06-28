import { _2025_standard } from './tournaments/_2025_standard';
import { _2025_pioneer } from './tournaments/_2025_pioneer';
import { _2025_pauper } from './tournaments/_2025_pauper';
import { _2025_modern } from './tournaments/_2025_modern';
import { _2025_legacy } from './tournaments/_2025_legacy';
import { _2025_draft } from './tournaments/_2025_draft';
import { _2025_premodern } from './tournaments/_2025_premodern';

export const allTournaments = [
  ..._2025_standard,
  ..._2025_pioneer,
  ..._2025_pauper,
  ..._2025_modern,
  ..._2025_legacy,
  ..._2025_premodern,
  ..._2025_draft,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
