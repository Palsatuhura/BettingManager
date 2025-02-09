export interface BetMetric {
  id: string;
  metricType: "profit" | "roi" | "winRate" | "activeBets";
  value: number;
  timeStamp: Date;
}
