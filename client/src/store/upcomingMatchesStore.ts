import { create } from "zustand";

interface Match {
  leagueName: string;
  team1: string;
  team2: string;
  matchDate: string;
  time: string;
  odds: string[]; // Use string[] to define an array of strings
  isFeatured: boolean;
}

interface MatchesState {
  matches: Match[];
  setMatches: (matches: Match[]) => void;
}

export const useUpcomingMatchesStore = create<MatchesState>((set) => ({
  matches: [
    {
      leagueName: "Serie A",
      matchDate: "09.02",
      time: "14:30",
      team1: "Venezia FC",
      team2: "AS Roma",
      odds: ["4.35", "4.01", "1.86"],
      isFeatured: false,
    },
    {
      leagueName: "Serie A",
      matchDate: "09.02",
      time: "20:00",
      team1: "Lecce",
      team2: "Bologna",
      odds: ["5.06", "3.72", "1.82"],
      isFeatured: false,
    },
    {
      leagueName: "FA Cup",
      matchDate: "09.02",
      time: "15:30",
      team1: "Blackburn Rovers",
      team2: "Wolverhampton Wanderers",
      odds: ["4.99", "3.94", "1.75"],
      isFeatured: false,
    },
    {
      leagueName: "FA Cup",
      matchDate: "09.02",
      time: "20:35",
      team1: "Aston Villa",
      team2: "Tottenham Hotspur",
      odds: ["1.77", "4.32", "4.37"],
      isFeatured: true,
    },
    {
      leagueName: "La Liga",
      matchDate: "09.02",
      time: "16:00",
      team1: "Alaves",
      team2: "Getafe",
      odds: ["2.42", "2.88", "3.92"],
      isFeatured: false,
    },
  ],
  setMatches: (matches) => set({ matches }),
}));
