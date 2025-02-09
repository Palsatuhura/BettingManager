import React from "react";

interface BetCardProps {
  match: string;
  stake: number;
  odds: number;
}

const BetCard: React.FC<BetCardProps> = ({ match, stake, odds }) => {
  return (
    <div className="border p-4 rounded shadow bg-white dark:bg-gray-800">
      <h2 className="font-bold">{match}</h2>
      <p>Stake: {stake}</p>
      <p>Odds: {odds}</p>
      {/* You can calculate potential profit, etc. */}
    </div>
  );
};

export default BetCard;
