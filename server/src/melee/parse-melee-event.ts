import assert from 'assert';
import { MeleeRounds, MeleeStandings } from './melee-types';
import { readFileSync } from 'fs';
import { Match, Standing } from '@server/data/data.types';
import { playersByGuid, playersByUsername } from '@server/data/players';
import path from 'path';
import { randomUUID } from 'crypto';
import { toValidPropertyKey } from '@server/utils';

const meleeStandings: MeleeStandings = JSON.parse(readFileSync(path.resolve(__dirname, './standings.json'), 'utf-8'));
const meleeRounds: MeleeRounds = JSON.parse(readFileSync(path.resolve(__dirname, './rounds.json'), 'utf-8'));

const rounds: Match[][] = [];
for (const round of meleeRounds) {
  const matches: Match[] = [];
  for (const match of round.data) {
    const p1 = match.Competitors[0]?.Team.Players[0];
    assert(p1);
    const p2 = match.Competitors[1]?.Team.Players[0] ?? null;
    const p1id = p1.Username;
    const p2id = p2?.Username ?? null;
    if (p2 === null || p2id === null) {
      assert(match.ResultString.startsWith(p1.DisplayName + ' '));
      assert(/^.+ (was (assigned|awarded) a bye|(won 2-0))$/.test(match.ResultString), match.ResultString);
      matches.push({ players: [p1id, null], winner: 1, record: 'bye' });
      continue;
    }
    if (match.ResultString.startsWith(`${p1.DisplayName} won`)) {
      const record = match.ResultString.match(/^.* won (\d+-\d+-\d+)$/)?.[1];
      assert(record);
      matches.push({ players: [p1id, p2id], winner: 1, record });
    } else if (match.ResultString.startsWith(`${p2.DisplayName} won`)) {
      const record = match.ResultString.match(/^.* won (\d+-\d+-\d+)$/)?.[1];
      assert(record);
      matches.push({ players: [p1id, p2id], winner: 2, record });
    } else if (match.ResultString.endsWith('Draw')) {
      const record = match.ResultString.match(/^(\d+-\d+-\d+) Draw$/)?.[1];
      assert(record);
      matches.push({ players: [p1id, p2id], winner: 0, record });
    } else throw new Error(match.ResultString);
  }
  rounds.push(matches);
}

const mpMap = new Map<string, number>();
const mwMap = new Map<string, number>();

for (const round of rounds) {
  for (const match of round) {
    const p1 = match.players[0];
    const p2 = match.players[1];
    if (p2) {
      mpMap.set(p1, (mpMap.get(p1) ?? 0) + 1);
      mpMap.set(p2, (mpMap.get(p2) ?? 0) + 1);
      if (match.winner === 1) mwMap.set(p1, (mwMap.get(p1) ?? 0) + 1);
      else if (match.winner === 2) mwMap.set(p2, (mwMap.get(p2) ?? 0) + 1);
    }
  }
}

const unknownPlayers = new Map<string, string>();
const standings: Standing[] = [];

for (const data of meleeStandings.data) {
  const { Team, Points, Rank } = data;
  const usernameOrGuid = Team.Players[0].Username;
  if (!usernameOrGuid) throw new Error(`Unknown player: ${usernameOrGuid}`);
  if (!playersByGuid[usernameOrGuid] && !playersByUsername[usernameOrGuid]) {
    const playerName = Team.Players[0].DisplayName ?? `${Team.Players[0].LastName} ${Team.Players[0].FirstName}`;
    unknownPlayers.set(usernameOrGuid, playerName);
  }
  const mp = mpMap.get(usernameOrGuid) ?? 0;
  const mw = mwMap.get(usernameOrGuid) ?? 0;
  standings.push({
    player: usernameOrGuid,
    rank: Rank,
    points: Points,
    mp,
    mw,
    match_record: data.MatchRecord,
    game_record: data.GameRecord,
  });
}

function matchToString(m: Match): string {
  return `{ ${[
    `players: ['${m.players[0]}', ${m.players[1] ? `'${m.players[1]}'` : 'null'}]`,
    `winner: ${m.winner}`,
    `record: '${m.record}'`,
  ].join(', ')} },`;
}

function roundToString(r: Match[]): string {
  return `[
        ${r.map((m) => matchToString(m)).join('\n        ')}
      ],`;
}

console.log(`  {
    id: ${meleeStandings.data[0].TournamentId},
    format: Format.${meleeStandings.data[0].FormatName.toUpperCase()},
    name: 'Event ${meleeStandings.data[0].TournamentId}',
    date: '${meleeRounds[0].data[0].DateCreated.slice(0, 10)}',
    standings: [
      ${standings
        .map(
          (s) =>
            `{ ${[
              `player: '${s.player}'`,
              `rank: ${s.rank}`,
              `points: ${s.points}`,
              `mp: ${s.mp}`,
              `mw: ${s.mw}`,
              `match_record: '${s.match_record}'`,
              `game_record: '${s.game_record}'`,
            ].join(', ')} },`,
        )
        .join('\n      ')}
    ],
    rounds: [
      ${rounds.map((r) => roundToString(r)).join('\n      ')}
    ],
  },\n`);

if (unknownPlayers.size > 0) {
  console.log(`NEW/UNKNOWN PLAYERS:`);
  console.log();
  const guids = new Map<string, string>();
  for (const [username] of unknownPlayers.entries()) {
    const uuid = randomUUID();
    guids.set(username, uuid);
    console.log(`  ${toValidPropertyKey(username)}: '${uuid}',`);
  }
  console.log();
  for (const [username, displayname] of unknownPlayers.entries()) {
    const uuid = guids.get(username);
    assert(uuid);
    console.log(`  '${uuid}': '${displayname}',`);
  }
  console.log();
}
