import React, { useState } from "react";
import { Card } from "../components/ui/card";
import CardBody from "../components/ui/CardBody";
import CardFooter from "../components/ui/CardFooter";
import CardHeader from "../components/ui/CardHeader";
import { Calendar, Clock } from "lucide-react";

// Define the Match type
interface Match {
  leagueName: string;
  leagueIcon: string;
  matchDate: string;
  time: string;
  team1: string;
  team2: string;
  odds: [string, string, string]; // Array of three strings for W1, X, W2 odds
  isFeatured: boolean;
}

// Define the grouped matches type
type GroupedMatches = {
  [leagueName: string]: Match[];
};

const UpcomingMatches = () => {
  const [matches] = useState<Match[]>([
    {
      leagueName: "Serie A",
      leagueIcon: "⚽",
      matchDate: "09.02",
      time: "14:30",
      team1: "Venezia FC",
      team2: "AS Roma",
      odds: ["4.35", "4.01", "1.86"],
      isFeatured: false,
    },
    {
      leagueName: "Serie A",
      leagueIcon: "⚽",
      matchDate: "09.02",
      time: "20:00",
      team1: "Lecce",
      team2: "Bologna",
      odds: ["5.06", "3.72", "1.82"],
      isFeatured: false,
    },
    {
      leagueName: "FA Cup",
      leagueIcon: "🏆",
      matchDate: "09.02",
      time: "15:30",
      team1: "Blackburn Rovers",
      team2: "Wolverhampton W",
      odds: ["4.99", "3.94", "1.75"],
      isFeatured: false,
    },
    {
      leagueName: "FA Cup",
      leagueIcon: "🏆",
      matchDate: "09.02",
      time: "20:35",
      team1: "Aston Villa",
      team2: "Tottenham Hotspur",
      odds: ["1.77", "4.32", "4.37"],
      isFeatured: true,
    },
    {
      leagueName: "La Liga",
      leagueIcon: "🇪🇸",
      matchDate: "09.02",
      time: "16:00",
      team1: "Alaves",
      team2: "Getafe",
      odds: ["2.42", "2.88", "3.92"],
      isFeatured: false,
    },
  ]);

  // Group matches by league
  const groupedMatches: GroupedMatches = matches.reduce((acc, match) => {
    if (!acc[match.leagueName]) acc[match.leagueName] = [];
    acc[match.leagueName].push(match);
    return acc;
  }, {} as GroupedMatches);

  const handleReadMore = () => {
    console.log("Read More button clicked");
  };

  return (
    <div className="space-y-6">
      {Object.entries(groupedMatches).map(
        ([leagueName, leagueMatches], index) => (
          <div key={index} className="space-y-4">
            {/* League Header */}
            <div className="flex items-center space-x-2 text-lg font-bold text-lightText dark:text-darkText">
              <span>{leagueMatches[0].leagueIcon}</span>
              <span>{leagueName}</span>
            </div>

            {/* Matches */}
            <div className="space-y-4">
              {leagueMatches.map((match, idx) => (
                <Card
                  key={idx}
                  className={`relative border rounded-lg shadow-md ${
                    match.isFeatured
                      ? "border-crimson bg-lightHighlight dark:bg-darkHighlight"
                      : "border-gray-300 bg-lightBackground dark:bg-darkBackground"
                  }`}
                >
                  {match.isFeatured && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-crimson text-white text-xs px-2 py-1 rounded-b-md">
                      Match of the Day
                    </div>
                  )}

                  {/* Card Header */}
                  <CardHeader
                    leagueName={match.leagueName}
                    matchDate={match.matchDate}
                    time={match.time}
                  />

                  {/* Card Body */}
                  <CardBody
                    team1={match.team1}
                    team2={match.team2}
                    odds={match.odds}
                    isFeatured={match.isFeatured}
                  />

                  {/* Card Footer */}
                  <CardFooter
                    buttonText="Read Tip"
                    onButtonClick={handleReadMore}
                  />
                </Card>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default UpcomingMatches;
