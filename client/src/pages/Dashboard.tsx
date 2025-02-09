// Dashboard.tsx
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "../components/ui/card";
import {
  Menu,
  X,
  Settings as SettingsIcon,
  List,
  FileText,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { Button } from "../components/ui/button";
import ThemeToggle from "../components/themeToogle";
import UserDropDown from "../components/UserDropDown";
import BetTracker from "./BetTracker";
import RankingsPreview from "../components/RankingsPreview";
import Settings from "./Settings";
import { useDarkMode } from "../hooks/useDarkMode"; // Adjust the hook path if necessary
import UpcomingMatchesPreview from "../components/UpcomingMatchesPreview";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isDark = useDarkMode(); // Get current theme

  // Define chart colors based on the current theme:
  const gridStrokeColor = isDark ? "#4a5568" : "#ccc";
  const axisTickColor = isDark ? "#87898c" : "#333333";
  const tooltipBgColor = isDark ? "#212836" : "#ffffff";
  const tooltipBorderColor = isDark ? "#4a5568" : "#ccc";
  const legendTextColor = isDark ? "#87898c" : "#333333";

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Sample Data for charts
  const lineChartData = [
    { name: "Jan", tracked: 40, profits: 24 },
    { name: "Feb", tracked: 30, profits: 13 },
    { name: "Mar", tracked: 20, profits: 98 },
    { name: "Apr", tracked: 27, profits: 39 },
    { name: "May", tracked: 18, profits: 48 },
    { name: "Jun", tracked: 23, profits: 38 },
  ];

  const barChartData = [
    { name: "Football", "2025": 2400, "2024": 1398 },
    { name: "Basketball", "2025": 2210, "2024": 1400 },
    { name: "Tennis", "2025": 2290, "2024": 1700 },
    { name: "Cricket", "2025": 2000, "2024": 1200 },
  ];

  return (
    <div className="min-h-screen flex bg-lightBackground dark:bg-darkBackground transition-colors duration-300">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-darkCard text-white p-4 z-50 transition-transform duration-300 
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Bet Manager Pro</h2>
          <Button
            className="lg:hidden p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
            onClick={closeSidebar}
          >
            <X size={24} />
          </Button>
        </div>

        <nav>
          <ul className="space-y-4">
            <li>
              <Button className="w-full">Dashboard</Button>
            </li>
            <li>
              <Button className="w-full">Bet Tracker</Button>
            </li>
            <li>
              <Button className="w-full">Notes</Button>
            </li>
            <li>
              <Button className="w-full">Rankings</Button>
            </li>
            <li>
              <Button className="w-full">Settings</Button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Fixed Navbar */}
        <header
          className={`fixed top-0 left-0 w-full lg:left-64 lg:w-[calc(100%-16rem)] bg-lightBackground dark:bg-darkBackground p-4 shadow-md z-40 flex justify-between items-center transition-transform duration-300 ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center space-x-4">
            <Button
              className="lg:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </Button>
            <ThemeToggle />
          </div>
          <div className="flex items-center space-x-4">
            <Button className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
              <SettingsIcon size={24} />
            </Button>
            <UserDropDown />
          </div>
        </header>

        {/* Page Content */}
        <div className="mt-16 p-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Card 1: Total Bets Tracked */}
            <Card>
              <CardContent>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-lightText dark:text-darkText">
                    Total Bets Tracked
                  </h3>
                  <List
                    size={20}
                    className="text-lightText dark:text-darkText"
                  />
                </div>
                <p className="text-2xl font-bold text-electric">350</p>
                <span className="text-green-500">+12% this month</span>
              </CardContent>
            </Card>
            {/* Card 2: Active Notes */}
            <Card>
              <CardContent>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-lightText dark:text-darkText">
                    Active Notes
                  </h3>
                  <FileText
                    size={20}
                    className="text-lightText dark:text-darkText"
                  />
                </div>
                <p className="text-2xl font-bold text-crimson">24</p>
                <span className="text-red-500">-4% this week</span>
              </CardContent>
            </Card>
            {/* Card 3: Profit/Loss */}
            <Card>
              <CardContent>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-lightText dark:text-darkText">
                    Profit/Loss
                  </h3>
                  <TrendingUp
                    size={20}
                    className="text-lightText dark:text-darkText"
                  />
                </div>
                <p className="text-2xl font-bold text-neon">+4.5%</p>
                <span className="text-green-500">+3% since yesterday</span>
              </CardContent>
            </Card>
            {/* Card 4: Rankings Updated */}
            <Card>
              <CardContent>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-lightText dark:text-darkText">
                    Rankings Updated
                  </h3>
                  <Trophy size={20} className="text-yellow-500 animate-pulse" />
                </div>
                <p className="text-2xl font-bold text-electric">16</p>
                <span className="text-blue-500">+6 new today</span>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent>
                <h3 className="text-lg font-bold mb-4 text-lightText dark:text-darkText">
                  Bet Analytics
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineChartData}>
                    <Line
                      type="monotone"
                      dataKey="tracked"
                      stroke="#00A8E8"
                      strokeWidth={3}
                    />
                    <Line
                      type="monotone"
                      dataKey="profits"
                      stroke="#7CFC00"
                      strokeWidth={3}
                    />
                    <CartesianGrid stroke={gridStrokeColor} />
                    <XAxis dataKey="name" tick={{ fill: axisTickColor }} />
                    <YAxis tick={{ fill: axisTickColor }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: tooltipBgColor,
                        borderColor: tooltipBorderColor,
                      }}
                      labelStyle={{ color: axisTickColor }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-lg font-bold mb-4 text-lightText dark:text-darkText">
                  Betting Markets
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={gridStrokeColor}
                    />
                    <XAxis dataKey="name" tick={{ fill: axisTickColor }} />
                    <YAxis tick={{ fill: axisTickColor }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: tooltipBgColor,
                        borderColor: tooltipBorderColor,
                      }}
                      labelStyle={{ color: axisTickColor }}
                    />
                    <Legend wrapperStyle={{ color: legendTextColor }} />
                    <Bar dataKey="2025" fill="#00A8E8" barSize={20} />
                    <Bar dataKey="2024" fill="#7CFC00" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Additional Components */}
          <div className="grid grid-cols-1 gap-6 mt-6">
            <BetTracker />
            {/* Upcoming Matches and Rankings side by side on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <UpcomingMatchesPreview />
              <RankingsPreview />
            </div>
            <Settings />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
