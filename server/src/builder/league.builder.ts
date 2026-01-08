import assert from 'assert';
import { Format, LeagueDto, LeaguePlayerDto, PlayerDTO } from '@dtos';
import { Tournament } from '@server/data/data.types';
import { _2025_pioneer } from '@server/data/tournaments/archive/_2025_pioneer';
import { _2025_standard } from '@server/data/tournaments/archive/_2025_standard';
import { playersByUsername } from '@server/data/players';
import { _2025_pauper } from '@server/data/tournaments/archive/_2025_pauper';
import { _2025_legacy } from '@server/data/tournaments/_2025_legacy';
import { _2025_modern } from '@server/data/tournaments/_2025_modern';

const fall2025StandardEvents: (Tournament | null)[] = _2025_standard
  .filter((t) => new Date(t.date).getTime() >= new Date('2025-09-30').getTime())
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, 12);
//   .slice(0, 10);
// fall2025StandardEvents.splice(6, 0, null);
// fall2025StandardEvents.splice(8, 0, null);

const leagueInfo: {
  format: Format | Format[];
  name: string;
  id: string;
  total_events: number;
  top: number;
  prize_pool_inc_by_player: number;
  events: (Tournament | null)[];
}[] = [
  {
    format: Format.STANDARD,
    name: 'Fall League 2025 | Standard',
    id: 'fall-league-2025-standard',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 2,
    events: fall2025StandardEvents,
  },
  {
    format: Format.PIONEER,
    name: 'Fall League 2025 | Pioneer',
    id: 'fall-league-2025-pioneer',
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
    name: 'Fall League 2025 | Pauper',
    id: 'fall-league-2025-pauper',
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
    name: 'Fall League 2025 | Eternal',
    id: 'fall-league-2025-eternal',
    total_events: 12,
    top: 6,
    prize_pool_inc_by_player: 0,
    events: [..._2025_modern, ..._2025_legacy]
      .filter((t) => new Date(t.date).getTime() >= new Date('2025-10-05').getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 12),
  },
];

export function buildLeague(playersMap: Map<string, PlayerDTO>): LeagueDto[] {
  return leagueInfo.map<LeagueDto>((league) => {
    const players = new Map<string, LeaguePlayerDto>();
    const next_events = league.total_events - league.events.length;
    let prize_pool = 0;
    assert(league.events.length <= league.total_events);
    for (const [eventIndex, event] of league.events.entries()) {
      if (!event) continue;
      prize_pool += league.prize_pool_inc_by_player * event.standings.length;
      for (const s of event.standings) {
        const pid = playersByUsername[s.player] ?? s.player;
        const playerInfo = playersMap.get(pid);
        assert(playerInfo, `Player not found: ${s.player} (${pid})`);
        const prev = players.get(pid);
        const points = prev?.points ?? Array.from({ length: league.total_events }, () => null);
        points[eventIndex] = s.leaguePoints ?? s.points;
        players.set(pid, {
          display_name: playerInfo.display_name,
          id: playerInfo.id,
          total_points: 0,
          max_points: 0,
          event_count: (prev?.event_count ?? 0) + 1,
          points,
        });
      }
    }
    for (const p of players.values()) {
      p.total_points = calculateTotalPoints(p.points);
      p.max_points = calculateTotalPoints([...p.points, ...Array.from({ length: next_events }, () => 12)]);
    }
    const sortedPlayers = [...players.values()].sort((a, b) => {
      if (b.total_points !== a.total_points) return b.total_points - a.total_points;
      if (b.event_count !== a.event_count) return a.event_count - b.event_count;
      return a.display_name.localeCompare(b.display_name);
    });
    const result: LeagueDto = {
      format: league.format,
      name: league.name,
      id: league.id,
      total_events: league.total_events,
      past_events: league.events.length,
      top: league.top,
      prize_fund: prize_pool,
      players: sortedPlayers,
      event_ids: league.events.map((e) => e?.id ?? null),
    };
    return result;
  });
}

function calculateTotalPoints(points: (number | null)[]): number {
  const pts = points.filter((v) => v !== null);
  const topPoints = pts
    .sort((a, b) => b - a)
    .slice(0, 6)
    .reduce((a, b) => a + b);
  return topPoints + Math.max(0, pts.length - 6) + pts.filter((v) => v === 12).length;
}
