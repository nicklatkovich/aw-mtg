import assert from 'assert';
import { Format, LeagueDto, LeaguePlayerDto, PlayerDTO } from '@dtos';
import { Tournament } from '@server/data/data.types';
import { _2025_pioneer } from '@server/data/tournaments/_2025_pioneer';
import { _2025_standard } from '@server/data/tournaments/_2025_standard';
import { playersByUsername } from '@server/data/players';
import { _2025_pauper } from '@server/data/tournaments/_2025_pauper';
import { _2025_legacy } from '@server/data/tournaments/_2025_legacy';
import { _2025_modern } from '@server/data/tournaments/_2025_modern';

const fall2025StandardEvents: (Tournament | null)[] = _2025_standard
  .filter((t) => new Date(t.date).getTime() >= new Date('2025-09-30').getTime())
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, 11);
fall2025StandardEvents.splice(6, 0, null);

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
        points[eventIndex] = s.points;
        players.set(pid, {
          display_name: playerInfo.display_name,
          id: playerInfo.id,
          total_points: 0,
          event_count: (prev?.event_count ?? 0) + 1,
          points,
        });
      }
    }
    for (const p of players.values()) {
      const top_points = [...p.points]
        .sort((a, b) => (b ?? 0) - (a ?? 0))
        .slice(0, 6)
        .reduce<number>((a, b) => a + (b ?? 0), 0);
      p.total_points = top_points + Math.max(0, p.event_count - 6) + p.points.filter((v) => v === 12).length;
    }
    const sortedPlayers = [...players.values()].sort((a, b) => {
      if (b.total_points !== a.total_points) return b.total_points - a.total_points;
      if (b.event_count !== a.event_count) return a.event_count - b.event_count;
      return a.display_name.localeCompare(b.display_name);
    });
    return {
      format: league.format,
      name: league.name,
      id: league.id,
      total_events: league.total_events,
      top: league.top,
      prize_fund: prize_pool,
      players: sortedPlayers,
    };
  });
}
