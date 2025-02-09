import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";
import { useUpcomingMatchesStore } from "../store/upcomingMatchesStore";

const UpcomingMatchesPreview: React.FC = () => {
  const navigate = useNavigate();
  const matches = useUpcomingMatchesStore((state) => state.matches);

  return (
    <div className="bg-lightBackground dark:bg-darkCard p-6 rounded-2xl shadow-lg transition-colors flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-lightText dark:text-darkText">
          Upcoming Matches
        </h3>
      </div>

      <ul className="space-y-4 flex-grow">
        {matches.slice(0, 5).map((match, index) => (
          <li
            key={index}
            className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md transition-all"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lightText dark:text-darkText">
                {match.leagueName}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {match.matchDate} - {match.time}
              </span>
            </div>

            <div className="mt-2 text-lg font-medium text-center text-gray-900 dark:text-gray-300">
              {match.team1} 🆚 {match.team2}
            </div>

            {/* Odds Section */}
            <div className="mt-2 flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <span>Odds:</span>
              <div className="flex gap-4">
                <span className="font-semibold">W1: {match.odds[0]}</span>
                <span className="font-semibold">X: {match.odds[1]}</span>
                <span className="font-semibold">W2: {match.odds[2]}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Show All Button */}
      <button
        onClick={() => navigate("/upcoming")}
        className="mt-4 w-full flex items-center justify-center bg-electric text-white py-2 rounded-lg hover:opacity-80 transition-all"
      >
        Show All <ChevronRight className="ml-2" />
      </button>
    </div>
  );
};

export default UpcomingMatchesPreview;
