export type MeleeTeam = {
  Players: Array<{
    DisplayName: string;
    Username: string;
    LastName: string;
    FirstName: string;
  }>;
};

export type MeleeStandings = {
  data: Array<{
    Rank: number;
    MatchCount: number;
    MatchWins: number;
    Points: number;
    Team: MeleeTeam;
    OpponentGameWinPercentage: number;
    OpponentMatchWinPercentage: number;
    TeamGameWinPercentage: number;
    GameRecord: string;
    MatchRecord: string;
    TournamentId: number;
    FormatName: string;
  }>;
};

export type MeleeRounds = Array<{
  data: Array<{
    ResultString: string;
    Competitors: Array<undefined | { Team: MeleeTeam }>;
    DateCreated: string;
  }>;
}>;
