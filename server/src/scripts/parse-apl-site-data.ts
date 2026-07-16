import { allTournaments } from '@server/data';
import { Match, Standing } from '@server/data/data.types';
import { readFile } from 'fs/promises';
import path from 'path';

const APL_SITE_DATA_FILE = process.env.APL_SITE_DATA_FILE || null;
const TOURNAMENT_NAME = process.env.TOURNAMENT_NAME || null;
const EXTEND_EVENT_ID = process.env.EXTEND_EVENT_ID || null;
const CUSTOM_STANDINGS_FILE = process.env.CUSTOM_STANDINGS_FILE || null;

type AplSiteData = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly players: ReadonlyArray<{
    readonly id: string;
    readonly discordUsername: string;
    readonly archetype: string;
    readonly matchPoints: number;
    readonly gameWins: number;
    readonly gameLosses: number;
    readonly gameDraws: number;
    readonly matchWins: number;
    readonly matchLosses: number;
    readonly matchDraws: number;
    readonly rank: number;
  }>;
  readonly rounds: ReadonlyArray<{
    readonly id: string;
    readonly matches: ReadonlyArray<{
      readonly id: string;
      readonly roundId: string;
      readonly player1Id: string;
      readonly player2Id: string;
      readonly p1Wins: number;
      readonly p2Wins: number;
      readonly draws: number;
      readonly isCompleted: boolean;
    }>;
  }>;
}>;

type CustomStandings = ReadonlyArray<{
  readonly player: string;
  readonly rank: number;
  readonly points: number;
}>;

async function getAplSiteData(): Promise<AplSiteData | null> {
  if (!APL_SITE_DATA_FILE) return null;
  const content = await readFile(path.resolve(process.cwd(), APL_SITE_DATA_FILE), 'utf-8');
  return JSON.parse(content);
}

async function main(): Promise<void> {
  const aplSiteData = await getAplSiteData();
  const tournament = aplSiteData?.find((t) => t.name === TOURNAMENT_NAME);
  if (!tournament) console.error(`Tournament "${TOURNAMENT_NAME}" not found`);
  const eventToExtend = allTournaments.find((t) => t.id === EXTEND_EVENT_ID) ?? null;
  const customStandings: CustomStandings = CUSTOM_STANDINGS_FILE
    ? await readFile(path.resolve(process.cwd(), CUSTOM_STANDINGS_FILE), 'utf-8').then((res) => JSON.parse(res))
    : null;
  const playerIdToPlayerDisplayNameMap = new Map<string, string>();
  const standings: Standing[] = [];
  for (const st of customStandings ?? []) {
    const deck = eventToExtend?.standings.find(
      (ep) => typeof ep.player === 'object' && ep.player.display_name === st.player,
    )?.deck;
    standings.push({ rank: st.rank, player: { display_name: st.player }, points: st.points, deck });
  }
  for (const p of tournament?.players ?? []) {
    playerIdToPlayerDisplayNameMap.set(p.id, p.discordUsername);
    if (standings.some((s) => typeof s.player === 'object' && s.player.display_name === p.discordUsername)) continue;
    const match_record = `${p.matchWins}-${p.matchLosses}-${p.matchDraws}`;
    const game_record = `${p.gameWins}-${p.gameLosses}-${p.gameDraws}`;
    const deck = eventToExtend?.standings.find(
      (ep) => typeof ep.player === 'object' && ep.player.display_name === p.discordUsername,
    )?.deck;
    standings.push({
      rank: p.rank,
      player: { display_name: p.discordUsername },
      deck,
      points: p.matchPoints,
      match_record,
      game_record,
    });
  }
  const rounds: Match[][] = [];
  const roundsCount = Math.max(tournament?.rounds.length ?? 0, eventToExtend?.rounds?.length ?? 0);
  for (let roundIndex = 0; roundIndex < roundsCount; roundIndex += 1) {
    const round = tournament?.rounds[roundIndex] ?? null;
    const matches: Match[] = eventToExtend?.rounds?.[roundIndex] ?? [];
    for (const match of round?.matches ?? []) {
      const p1 = playerIdToPlayerDisplayNameMap.get(match.player1Id);
      const p2 = match.player2Id === 'bye' ? null : playerIdToPlayerDisplayNameMap.get(match.player2Id);
      if (!p1 || p2 === undefined) throw new Error(`Player not found for match ${match.id}`);
      const prevMatch = matches.find((m) => m.players.includes(p1) || (p2 && m.players.includes(p2)));
      const winnerWins = Math.max(match.p1Wins, match.p2Wins);
      const loserWins = Math.min(match.p1Wins, match.p2Wins);
      const record = p2 === null ? 'bye' : `${winnerWins}-${loserWins}-${match.draws}`;
      if (prevMatch) {
        const playersMatching =
          (prevMatch.players[0] === p1 && prevMatch.players[1] === p2) ||
          (prevMatch.players[0] === p2 && prevMatch.players[1] === p1);
        if (!playersMatching) throw new Error(`Players not matching for match ${match.id}`);
        const expectedWinner =
          p2 === null
            ? 1
            : match.p1Wins > match.p2Wins
              ? prevMatch.players.indexOf(p1) + 1
              : match.p2Wins > match.p1Wins
                ? prevMatch.players.indexOf(p2) + 1
                : 0;
        if (prevMatch.winner !== expectedWinner) throw new Error(`Unexpected winner in match ${match.id}`);
        if (prevMatch.record !== record) throw new Error(`Unexpected record in match ${match.id}`);
        continue;
      }
      if (p2 === null) matches.push({ players: [p1, p2], winner: 1, record: 'bye' });
      else {
        const winner = p2 === null ? 1 : match.p1Wins > match.p2Wins ? 1 : match.p2Wins > match.p1Wins ? 2 : 0;
        matches.push({ players: [p1, p2], winner, record });
      }
    }
    rounds.push(matches);
  }
  console.log(`  {`);
  console.log(`    hidden: true,`);
  console.log(`    id: '${eventToExtend?.id ?? tournament?.id}',`);
  console.log(`    format: Format.PIONEER,`);
  console.log(`    name: '${eventToExtend?.name ?? tournament?.name}',`);
  console.log(`    date: '${eventToExtend?.date ?? tournament?.date.split('/').reverse().join('-')}',`);
  console.log(`    standings: [`);
  for (const st of standings) {
    let stStr = `      { player: `;
    if (typeof st.player === 'string') stStr += `'${st.player}'`;
    else {
      stStr += `{ display_name: '${st.player.display_name}'`;
      if (st.player.id !== undefined) stStr += `, id: '${st.player.id}'`;
      stStr += ` }`;
    }
    stStr += `, `;
    if (st.deck) {
      stStr += `deck: `;
      if (typeof st.deck === 'string') stStr += st.deck.includes("'") ? `"${st.deck}"` : `'${st.deck}'`;
      else throw new Error('Non string deck is not implemented');
      stStr += `, `;
    }
    stStr += `rank: ${st.rank}, points: ${st.points} },`;
    console.log(stStr);
  }
  console.log(`    ],`);
  console.log(`    rounds: [`);
  for (const round of rounds) {
    if (round.length === 0) {
      console.log(`      [],`);
      continue;
    }
    console.log(`      [`);
    for (const match of round) {
      const p1 = match.players[0];
      const p2 = match.players[1];
      let mStr = `        { players: ['${p1}', ${p2 ? `'${p2}'` : 'null'}], winner: ${match.winner}`;
      if (match.record) mStr += `, record: '${match.record}'`;
      mStr += ` },`;
      console.log(mStr);
    }
    console.log(`      ],`);
  }
  console.log(`    ],`);
  console.log(`  },`);
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('ERROR');
      console.error(error);
      process.exit(1);
    });
}
