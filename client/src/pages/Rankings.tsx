import React from "react";
import { useRankingsStore } from "../store/rankingStore";

const Rankings: React.FC = () => {
  const rankings = useRankingsStore((state) => state.rankings);

  // Function to get progress bar color
  const getProgressColor = (winRate: number) => {
    if (winRate < 30) return "bg-red-400";
    if (winRate < 60) return "bg-yellow-400";
    return "bg-green-400";
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold text-lightText dark:text-darkText mb-4">
        Full Rankings
      </h2>

      <ul className="space-y-4">
        {rankings.map((user, index) => (
          <li
            key={index}
            className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md transition-all"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lightText dark:text-darkText">
                {user.name}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {user.winningStreak} Wins Streak
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-2 relative">
              <div
                className={`h-3 rounded-full ${getProgressColor(
                  user.winRate
                )} transition-all`}
                style={{ width: `${user.winRate}%` }}
              ></div>
            </div>

            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="mr-4">🏆 {user.wins} Wins</span>
              <span>❌ {user.losses} Losses</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rankings;
