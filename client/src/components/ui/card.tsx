import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

// Card container for generic usage
export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 dark:bg-darkCard dark:border-gray-700">
      {children}
    </div>
  );
};

// Card content component
export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-2">{children}</div>;
};

// MatchCard: combines header, body, and footer for match details
export const MatchCard = ({ match }: { match: any }) => {
  const { leagueName, matchDate, time, team1, team2, odds, isFeatured } = match;

  const handleReadMore = () => {
    console.log("Read more button clicked");
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 dark:bg-darkCard dark:border-gray-700">
      <CardHeader
        leagueName={match.leagueName}
        matchDate={match.matchDate}
        time={match.time}
      />
      <CardBody
        team1={team1}
        team2={team2}
        odds={odds}
        isFeatured={isFeatured}
      />
      <CardFooter buttonText="Read More" onButtonClick={handleReadMore} />
    </div>
  );
};
