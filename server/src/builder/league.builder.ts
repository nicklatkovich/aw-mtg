import assert from 'assert';
import { LeagueDto, LeaguePlayerDto, PlayerDTO } from '@dtos';
import { playersByUsername } from '@server/data/players';
import { LeagueInfo } from './leagues/league.types';

export function buildLeague(leagueInfo: LeagueInfo[], playersMap: Map<string, PlayerDTO>): LeagueDto[] {
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
      display_name: league.display_name,
      table_id: league.table_id,
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
