import { CardStats } from "./Cardstats";

export default function StatsHeader() {
  // Sample data - connect to your state management
  const stats = [
    {
      title: "Total Profit",
      value: "+$2,450",
      change: "+12.3%",
      icon: "profit",
    },
    { title: "ROI", value: "24.5%", change: "+3.2%", icon: "roi" },
    { title: "Win Rate", value: "68%", change: "-1.4%", icon: "winrate" },
    { title: "Active Bets", value: "7", change: "+2", icon: "active" },
  ];

  return (
    <div className="relative bg-darkCard pt-8 pb-12">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap justify-around">
          {stats.map((stat, idx) => (
            <div key={idx} className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statTitle={stat.value}
                statSubtitle={stat.title}
                statPercent={stat.change}
                statIconName={stat.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
