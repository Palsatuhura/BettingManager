// components/Cards/CardStats.tsx
import { useEffect } from "react";
import { listenToBetMetrics } from "../services/betService";
import { useAuthStore } from "../store";

// (Assuming iconColors is defined somewhere in your project)
import { iconColors } from "../styles/iconColors";

export const CardStats = ({
  statTitle,
  statSubtitle,
  statPercent,
  statIconName,
}: {
  statTitle: string;
  statSubtitle: string;
  statPercent: string;
  statIconName: string;
}) => {
  // Retrieve the current user from the store
  const user = useAuthStore((state) => state.user);
  const userId = user?.uid; // This will be undefined if no user is logged in

  useEffect(() => {
    if (!userId) return; // Skip subscription if userId is not available

    const unsubscribe = listenToBetMetrics(userId, (metrics) => {
      // Handle metrics update
    });

    return () => unsubscribe();
  }, [userId]);

  return (
    <div className="bg-darkCard rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-darkText text-sm">{statSubtitle}</span>
          <h3 className="text-electric text-2xl font-bold">{statTitle}</h3>
          <span className="text-neon text-sm">{statPercent}</span>
        </div>
        <div
          className={`p-3 rounded-full bg-opacity-20 ${iconColors[statIconName]}`}
        >
          {/* Icon implementation */}
        </div>
      </div>
    </div>
  );
};
