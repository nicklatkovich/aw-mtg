import assert from 'assert';
import { LeagueDto, LeaguePlayerDto, PlayerDTO } from '@dtos';
import { playersByUsername } from '@server/data/players';
import { LeagueInfo } from './leagues/league.types';

export function buildLeague(leagueInfo: LeagueInfo[], playersMap: Map<string, PlayerDTO>): LeagueDto[] {
  return leagueInfo.map<LeagueDto>((league) => {
    const players = new Map<string, LeaguePlayerDto & { pid: string }>();
    const next_events = league.total_events - league.events.length;
    let prize_pool = 0;
    assert(league.events.length <= league.total_events);
    for (const [eventIndex, event] of league.events.entries()) {
      if (!event) continue;
      prize_pool += league.prize_pool_inc_by_player * event.standings.length;
      for (const s of event.standings) {
        assert(typeof s.player === 'string', `League is not supported for unknown players`);
        const pid = playersByUsername[s.player] ?? s.player;
        const playerInfo = playersMap.get(pid);
        assert(playerInfo, `Player not found: ${s.player} (${pid})`);
        const prev = players.get(pid);
        const points = prev?.points ?? Array.from({ length: league.total_events }, () => null);
        points[eventIndex] = s.leaguePoints ?? s.points;
        players.set(pid, {
          pid,
          display_name: playerInfo.display_name,
          id: playerInfo.id,
          total_points: 0,
          max_points: 0,
          event_count: (prev?.event_count ?? 0) + 1,
          points,
        });
      }
    }
    const pointsSum = new Map<string, number>();
    for (const p of players.values()) {
      pointsSum.set(
        p.id,
        p.points.reduce<number>((acc, v) => acc + (v ?? 0), 0),
      );
      p.total_points = calculateTotalPoints(p.points);
      p.max_points = calculateTotalPoints([...p.points, ...Array.from({ length: next_events }, () => 12)]);
    }
    let sortedPlayers = [...players.values()].sort((a, b) => {
      if (a.total_points !== b.total_points) return b.total_points - a.total_points;
      if (a.event_count !== b.event_count) return a.event_count - b.event_count;
      const [pa, pb] = [a, b].map((p) => pointsSum.get(p.id) ?? 0);
      if (pa !== pb) return pb - pa;
      for (let offset = league.total_events - 1; offset > 0; offset -= 1) {
        const [tpa, tpb] = [a, b].map((p) => calculateTotalPoints(p.points.slice(0, offset)));
        if (tpa !== tpb) return tpb - tpa;
      }
      return a.display_name.localeCompare(b.display_name);
    });
    for (const [newIndex, pid] of (league.rank_override ?? []).entries()) {
      if (!pid) continue;
      const prevIndex = sortedPlayers.findIndex((p) => p.pid === pid);
      assert(prevIndex >= 0, `league ${league.display_name}: rank_override: ${pid} not found`);
      if (prevIndex === newIndex) continue;
      const otherPlayers = [...sortedPlayers.slice(0, prevIndex), ...sortedPlayers.slice(prevIndex + 1)];
      sortedPlayers = [...otherPlayers.slice(0, newIndex), sortedPlayers[prevIndex], ...otherPlayers.slice(newIndex)];
    }
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
      is_finished: league.is_finished,
    };
    return result;
  });
}

function calculateTotalPoints(points: (number | null)[]): number {
  const pts = points.filter((v) => v !== null);
  const topPoints = pts
    .sort((a, b) => b - a)
    .slice(0, 6)
    .reduce((a, b) => a + b, 0);
  return topPoints + Math.max(0, pts.length - 6) + pts.filter((v) => v === 12).length;
}
