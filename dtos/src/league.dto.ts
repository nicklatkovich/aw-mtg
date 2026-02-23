import { Format } from './format';

export type LeaguePlayerDto = {
  display_name: string;
  id: string;
  total_points: number;
  max_points: number;
  event_count: number;
  points: (number | null)[];
};

export type LeagueDto = {
  format: Format | Format[];
  display_name: string;
  table_id: string;
  total_events: number;
  past_events: number;
  top: number;
  prize_fund: number;
  event_ids: (string | number | null)[];
  players: LeaguePlayerDto[];
};
