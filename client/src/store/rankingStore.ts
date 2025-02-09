import { create } from "zustand";

interface UserRanking {
  name: string;
  wins: number;
  losses: number;
  winRate: number; // Percentage (0-100)
  winningStreak: number; // Number of consecutive wins
}

interface RankingsState {
  rankings: UserRanking[];
  setRankings: (rankings: UserRanking[]) => void;
}

export const useRankingsStore = create<RankingsState>((set) => ({
  rankings: [
    { name: "John Doe", wins: 30, losses: 10, winRate: 75, winningStreak: 5 },
    { name: "Jane Smith", wins: 25, losses: 12, winRate: 67, winningStreak: 7 },
    {
      name: "Alex Johnson",
      wins: 20,
      losses: 15,
      winRate: 57,
      winningStreak: 2,
    },
    {
      name: "Emily Carter",
      wins: 15,
      losses: 20,
      winRate: 43,
      winningStreak: 1,
    },
    {
      name: "Michael Brown",
      wins: 10,
      losses: 25,
      winRate: 28,
      winningStreak: 0,
    },
  ],
  setRankings: (rankings) => set({ rankings }),
}));
