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
};
