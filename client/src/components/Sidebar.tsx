import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChartBarIcon,
  ClipboardListIcon,
  CurrencyDollarIcon,
  CogIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");

  const NavItem = ({
    path,
    icon,
    label,
  }: {
    path: string;
    icon: React.ReactElement;
    label: string;
  }) => {
    return (
      <li className="items-center">
        <Link
          to={path}
          className="text-darkText hover:text-electric flex items-center py-3 space-x-2 transition-colors"
        >
          {icon}
          <span>{label}</span>
        </Link>
      </li>
    );
  };

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-darkCard flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      {/**Toggler and Brand */}
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="text-electric font-bold text-lg">
          BetMaster
        </Link>
      </div>

      {/**Navigatiom */}
      <div className="md:flex md:flex-col md:items-stretch mt-8">
        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <NavItem
            path="/dashboard"
            icon={<ChartBarIcon className="h-5 w-5" />}
            label="Dashboard"
          />
          <NavItem
            path="/tracker"
            icon={<ClipboardListIcon className="h-5 w-5" />}
            label="Bet Tracker"
          />
          <NavItem
            path="/odds"
            icon={<CurrencyDollarIcon className="h-5 w-5" />}
            label="Odds Comparison"
          />
          <NavItem
            path="/settings"
            icon={<CogIcon className="h-5 w-5" />}
            label="Settings"
          />
        </ul>
      </div>
    </nav>
  );
}
