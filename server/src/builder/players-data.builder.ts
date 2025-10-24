import assert from 'assert';
import { Format, PlayerDTO, PlayerTournamentDTO } from '@dtos';
import { playersByGuid, playersByUsername } from '@server/data/players';
import { allTournaments } from '@server/data';
import { getDeckColor, toDeckDTO } from '@server/data/data.utils';

export function buildPlayersData(): Map<string, PlayerDTO> {
  const usedIds = new Map<string, string>();
  const result = new Map<string, PlayerDTO>();
  for (const [guid, value] of Object.entries(playersByGuid)) {
    if (!value) continue;
    const display_name = typeof value === 'string' ? value : value[0];
    const meleeNames = Object.entries(playersByUsername)
      .filter(([_, _guid]) => guid === _guid)
      .map(([name]) => name);
    const normNames = meleeNames
      .map((name) => (/^[a-z\d-]+$/i.test(name) ? name.toLowerCase() : null))
      .filter((e): e is NonNullable<typeof e> => !!e);
    const id = (typeof value !== 'string' ? value[1].id : null) ?? normNames[0] ?? null;
    assert(id, `Failed to create id for ${display_name} (${guid})`);
    {
      const dupGuid = usedIds.get(id);
      assert(!dupGuid, `User id duplicate: ${id} ${guid} !== ${dupGuid})`);
    }
    usedIds.set(id, guid);
    const color_stats_values: Record<string, number> = {};
    const formatStats = new Map<Format, { events: number; lastPlayed: Date }>();
    let mp = 0;
    let mw = 0;
    const recent_events = allTournaments
      .map<PlayerTournamentDTO | null>((t) => {
        const s = t.standings.find((s) => (playersByUsername[s.player] ?? s.player) === guid);
        if (!s) return null;
        const colors = [...(getDeckColor(s.deck)?.toUpperCase() ?? '')].filter((c) => 'WUBRG'.includes(c));
        if (colors.length > 0) {
          const color_stat_inc = 1 / colors.length;
          for (const c of colors) color_stats_values[c] = (color_stats_values[c] ?? 0) + color_stat_inc;
        }
        for (const m of t.rounds?.flat() ?? []) {
          const idx = m.players.findIndex((p) => p && (playersByUsername[p] ?? p) === guid);
          if (idx < 0) continue;
          const win = m.winner === idx + 1;
          if (m.pod !== undefined) {
            mp += win ? m.players.length : 1;
            mw += win ? m.players.length : 0;
          } else {
            mp += 1;
            mw += win ? 1 : 0;
          }
        }
        // FIXME: use format from standings (in case of trios tournament)
        // const format = s.format ?? t.format;
        const format = t.format;
        formatStats.set(format, {
          events: (formatStats.get(format)?.events ?? 0) + 1,
          lastPlayed: new Date(t.date),
        });
        const result: PlayerTournamentDTO = {
          id: t.id,
          name: t.name,
          date: t.date,
          format: t.format,
          points: s.points,
          rank: [s.rank, t.standings.length],
          deck: toDeckDTO(s.deck) ?? undefined,
          match_record: s.match_record,
          game_record: s.game_record,
        };
        return result;
      })
      .filter((e): e is NonNullable<typeof e> => !!e);
    const max_color_stat_value = Math.max(...Object.values(color_stats_values));
    const colors_stats = Object.fromEntries(
      Object.entries(color_stats_values).map(([c, v]) => [c, v / max_color_stat_value]),
    );
    const events_count = recent_events.length;
    const favorite_format =
      [...formatStats.entries()].sort(
        (a, b) => b[1].events - a[1].events || b[1].lastPlayed.getTime() - a[1].lastPlayed.getTime(),
      )[0]?.[0] ?? null;
    const favorite_format_percentage =
      events_count > 0 ? (formatStats.get(favorite_format)?.events ?? 0) / events_count : 0;
    result.set(guid, {
      display_name,
      guid,
      id,
      recent_events,
      color_stats: colors_stats,
      events_count,
      match_played: mp,
      match_wins: mw,
      favorite_format: [favorite_format, favorite_format_percentage],
    });
  }
  return result;
}
