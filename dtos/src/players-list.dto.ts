import { Format } from './format';

export interface PlayersListItemDto {
  id: string;
  display_name: string;
  events_count: number;
  match_played: number;
  match_wins: number;
  color_stats: Record<string, number>;
  favorite_format: [Format, percentage: number] | null;
}
