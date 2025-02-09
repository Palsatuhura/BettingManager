import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useRankingsStore } from "../store/rankingStore";

const RankingsPreview: React.FC = () => {
  const navigate = useNavigate();
  const rankings = useRankingsStore((state) => state.rankings);

  // Get color for progress bar based on win rate
  const getProgressColor = (winRate: number) => {
    if (winRate < 30) return "bg-red-400";
    if (winRate < 60) return "bg-yellow-400";
    return "bg-green-400";
  };

  return (
    <div className="bg-lightBackground dark:bg-darkCard p-6 rounded-2xl shadow-lg transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-lightText dark:text-darkText">
          Top Rankings
        </h3>
      </div>

      <ul className="space-y-4">
        {rankings.slice(0, 3).map((user, index) => (
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

      {/* Show All Button */}
      <button
        onClick={() => navigate("/rankings")}
        className="mt-4 w-full flex items-center justify-center bg-electric text-white py-2 rounded-lg hover:opacity-80 transition-all"
      >
        Show All <ChevronRight className="ml-2" />
      </button>
    </div>
  );
};

export default RankingsPreview;
