import { Format } from '@dtos';
import { Tournament } from '@server/data/data.types';

export type LeagueInfo = {
  format: Format | Format[];
  display_name: string;
  table_id: string;
  total_events: number;
  top: number;
  prize_pool_inc_by_player: number;
  events: (Tournament | null)[];
  rank_override?: (string | null)[]; // array of player's guids to override default sorting
  is_finished?: boolean;
};
