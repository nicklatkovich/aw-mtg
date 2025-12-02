import { mkdir, writeFile, rm } from 'fs/promises';
import path from 'path';
import { buildRecentTournamentsData } from './recent-tournaments.builder';
import { buildTournamentResults } from './tournament-results.builder';
import { buildPlayersData } from './players-data.builder';
import { buildPioneerLadder } from './pioneer-ladder.builder';
import { buildPlayersList } from './players-list.builder';
import { buildStandardLadder } from './standard-ladder.builder';
import { buildLeague } from './league.builder';

const CONTENT_PATH = path.resolve(process.cwd(), './dist/client/data');
const TOURNAMENTS_PATH = path.resolve(CONTENT_PATH, 'tournaments/');
const PLAYERS_PATH = path.resolve(CONTENT_PATH, 'players/');

export async function buildData() {
  await rm(CONTENT_PATH, { recursive: true, force: true });
  await mkdir(CONTENT_PATH, { recursive: true });

  const playersMap = buildPlayersData();
  await mkdir(PLAYERS_PATH, { recursive: true });
  await Promise.all(
    [...playersMap.entries()].map(async ([_, dto]) => {
      await writeFile(
        path.resolve(PLAYERS_PATH, `${dto.id}.json`),
        `{
  "guid": "${dto.guid}",
  "id": "${dto.id}",
  "display_name": "${dto.display_name}",
  "color_stats": ${JSON.stringify(dto.color_stats)},
  "recent_events": [
    ${dto.recent_events.map((e) => JSON.stringify(e)).join(',\n    ')}
  ],
  "events_count": ${dto.events_count},
  "match_played": ${dto.match_played},
  "match_wins": ${dto.match_wins},
  "favorite_format": ${dto.favorite_format ? `["${dto.favorite_format[0]}", ${dto.favorite_format[1]}]` : 'null'}
}\n`,
      );
    }),
  );

  const recentTournaments = buildRecentTournamentsData(playersMap);
  await writeFile(
    path.resolve(CONTENT_PATH, 'recent-tournaments.json'),
    `[\n  ${recentTournaments.map((t) => JSON.stringify(t)).join(',\n  ')}\n]\n`,
  );

  const tournamentResults = buildTournamentResults(playersMap);
  await mkdir(TOURNAMENTS_PATH, { recursive: true });
  await Promise.all(
    Object.entries(tournamentResults).map(async ([id, content]) => {
      await writeFile(path.resolve(TOURNAMENTS_PATH, `${id}.json`), `${JSON.stringify(content)}\n`);
    }),
  );

  const playersList = buildPlayersList(playersMap);
  await writeFile(
    path.resolve(CONTENT_PATH, 'players-list.json'),
    `[\n  ${playersList.map((item) => JSON.stringify(item)).join(',\n  ')}\n]\n`,
  );

  const pioneerLadder = buildPioneerLadder(playersMap);
  await writeFile(
    path.resolve(CONTENT_PATH, 'pioneer-ladder.json'),
    `{
  "totalEvents": ${pioneerLadder.totalEvents},
  "table": [\n    ${pioneerLadder.table.map((r) => JSON.stringify(r)).join(',\n    ')}\n  ]\n}\n`,
  );

  const standardLadder = buildStandardLadder(playersMap);
  await writeFile(
    path.resolve(CONTENT_PATH, `standard-ladder.json`),
    `{
  "totalEvents": ${standardLadder.totalEvents},
  "standings": [
    ${standardLadder.standings.map((r) => JSON.stringify(r)).join(',\n    ')}
  ]\n}\n`,
  );

  const leagues = buildLeague(playersMap);
  await writeFile(
    path.resolve(CONTENT_PATH, 'leagues.json'),
    `[
${leagues
  .map(
    (l) => `  {
    "format": ${JSON.stringify(l.format)},
    "name": "${l.name}",
    "id": "${l.id}",
    "total_events": ${l.total_events},
    "top": ${l.top},
    "prize_fund": ${l.prize_fund},
    "players": [
      ${l.players.map((p) => JSON.stringify(p)).join(',\n      ')}
    ],
    "event_ids": [${l.event_ids
      .map((id) => (id === null ? 'null' : typeof id === 'string' ? `"${id}"` : id))
      .join(', ')}]
  }`,
  )
  .join(',\n')}\n]\n`,
  );
}

if (require.main === module) {
  buildData()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
