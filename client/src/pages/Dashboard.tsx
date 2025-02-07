import { useAuth } from "../hooks/useAuth";
import { auth } from "../firebase";
import { Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PlusIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../components/themeToogle";

export const Dashboard = () => {
  const { user } = useAuth();

  // Temporary data - replace with real data later
  const stats = [
    { title: "Total Profit", value: "+$1,240", color: "text-green-500" },
    { title: "ROI", value: "24.5%", color: "text-green-500" },
    { title: "Win Rate", value: "62%", color: "text-green-500" },
    { title: "Total Bets", value: "89", color: "text-blue-500" },
  ];

  const recentBets = [
    {
      id: 1,
      event: "Man City vs Arsenal",
      odds: 2.1,
      stake: 100,
      result: "Win",
    },
    {
      id: 2,
      event: "LA Lakers vs Celtics",
      odds: 1.8,
      stake: 50,
      result: "Loss",
    },
  ];

  const chartData = [
    { date: "Jan", profit: 400 },
    { date: "Feb", profit: 620 },
    { date: "Mar", profit: 890 },
  ];

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div className="min-h-screen bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText p-6 transition-all duration-300">
      {/* Header */}
      <Flex justify="between" align="center" className="mb-8">
        <Heading size="7" className="text-blue-500">
          Bet Dashboard
        </Heading>
        <div className="flex gap-4">
          <ThemeToggle />
          <Button
            onClick={handleLogout}
            className="bg-red-500 text-white cursor-pointer"
          >
            Logout
          </Button>
        </div>
      </Flex>

      {/* Stats Grid */}
      <Grid columns="4" gap="5" className="mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-darkCard p-6 rounded-lg transition-colors duration-300"
          >
            <Text size="4" className="text-gray-400 mb-2">
              {stat.title}
            </Text>
            <Text size="6" className={`font-bold ${stat.color}`}>
              {stat.value}
            </Text>
          </div>
        ))}
      </Grid>

      {/* Chart + Recent Bets */}
      <Grid columns="2" gap="5" className="mb-8">
        {/* Profit Chart */}
        <div className="bg-darkCard p-6 rounded-lg h-80 transition-colors duration-300">
          <Heading size="5" className="mb-4 text-blue-500">
            Profit Trend
          </Heading>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={chartData}>
              <XAxis dataKey="date" stroke="currentColor" />
              <YAxis stroke="currentColor" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--darkCard)",
                  border: "none",
                  color: "var(--darkText)",
                }}
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#3b82f6" // Using Tailwind's blue-500
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Bets */}
        <div className="bg-darkCard p-6 rounded-lg transition-colors duration-300">
          <Flex justify="between" align="center" className="mb-4">
            <Heading size="5" className="text-blue-500">
              Recent Bets
            </Heading>
            <Button className="bg-blue-500 text-white cursor-pointer">
              <PlusIcon className="h-4 w-4 mr-2" />
              New Bet
            </Button>
          </Flex>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400">
                <th className="pb-2">Event</th>
                <th className="pb-2">Odds</th>
                <th className="pb-2">Stake</th>
                <th className="pb-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {recentBets.map((bet) => (
                <tr key={bet.id} className="border-t border-gray-700">
                  <td className="py-3">{bet.event}</td>
                  <td>{bet.odds}</td>
                  <td>${bet.stake}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded ${
                        bet.result === "Win"
                          ? "bg-green-900 text-green-300"
                          : "bg-red-900 text-red-300"
                      }`}
                    >
                      {bet.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Grid>

      {/* Quick Notes Section */}
      <div className="bg-darkCard p-6 rounded-lg transition-colors duration-300">
        <Heading size="5" className="mb-4 text-blue-500">
          Quick Notes
        </Heading>
        <textarea
          placeholder="Add notes about today's matches..."
          className="w-full bg-darkInput text-darkText rounded p-4 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          rows={3}
        />
      </div>
    </div>
  );
};
