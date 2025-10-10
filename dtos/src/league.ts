import { Format } from './format';

export type LeaguePlayerDto = {
  display_name: string;
  id: string;
  total_points: number;
  event_count: number;
  points: (number | null)[];
};

export type LeagueDto = {
  format: Format;
  name: string;
  id: string;
  total_events: number;
  top: number;
  prize_fund: number;
  players: LeaguePlayerDto[];
};
