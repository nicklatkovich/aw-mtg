import { Format } from './format';

export type LeaguePlayerDto = {
  display_name: string;
  id: string;
  total_points: number;
  max_points: number;
  event_count: number;
  points: (number | null)[];
  avg_tgw?: number | null;
  avg_omw?: number | null;
  avg_ogw?: number | null;
};

export type LeagueDto = {
  format: Format | Format[];
  display_name: string;
  table_id: string;
  total_events: number;
  past_events: number;
  top: number;
  prize_fund: number;
  disable_4_0_extra_point?: boolean;
  display_tiebreakers?: boolean;
  event_ids: (string | number | null)[];
  players: LeaguePlayerDto[];
  is_finished?: boolean;
  determined_top?: number;
};
