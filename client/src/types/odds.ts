export interface LiveOdds {
  id: string;
  match: string;
  bookmaker: string;
  home: number;
  draw?: number;
  away: number;
  timestamp: Date;
}
