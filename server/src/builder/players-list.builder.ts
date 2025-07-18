import { PlayerDTO, PlayersListItemDto } from '@dtos';

export function buildPlayersList(playersData: Map<string, PlayerDTO>): PlayersListItemDto[] {
  const result: [guid: string, PlayersListItemDto][] = [];

  for (const dto of playersData.values()) {
    result.push([
      dto.guid,
      {
        id: dto.id,
        display_name: dto.display_name,
        events_count: dto.events_count,
        match_played: dto.match_played,
        match_wins: dto.match_wins,
        color_stats: dto.color_stats,
        favorite_format: dto.favorite_format,
      },
    ]);
  }

  result.sort((a, b) => a[0].localeCompare(b[0]));

  return result.map(([, item]) => item);
}
