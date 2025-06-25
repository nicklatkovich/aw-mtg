import { _2025_standard } from './_2025_standard';

export const allTournaments = [
  ..._2025_standard,
  // ...
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
