import { _2025_pauper } from './_2025_pauper';
import { _2025_pioneer } from './_2025_pioneer';
import { _2025_standard } from './_2025_standard';

export const allTournaments = [
  ..._2025_standard,
  ..._2025_pioneer,
  ..._2025_pauper,
  // ...
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
