import { db } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { BetMetric } from "../types/bet";

export const listenToBetMetrics = (
  userId: string,
  callback: (metrics: BetMetric[]) => void
) => {
  const q = query(
    collection(db, "users", userId, "metrics"),
    where("metricType", "in", ["profit", "roi", "winRate", "activeBets"])
  );

  return onSnapshot(q, (querySnapshot) => {
    const metrics = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as BetMetric)
    );
    callback(metrics);
  });
};

export const getLiveOdds = async (sport: string) => {
  // Implement odds API integration here
};
