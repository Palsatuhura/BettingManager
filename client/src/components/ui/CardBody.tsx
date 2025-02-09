import React from "react";

interface CardBodyProps {
  team1: string;
  team2: string;
  odds: [string, string, string];
  isFeatured: boolean;
}

const CardBody: React.FC<CardBodyProps> = ({
  team1,
  team2,
  odds,
  isFeatured,
}) => {
  return (
    <div className="p-4">
      <p className="text-lg font-bold">
        {team1} vs {team2}
      </p>
      <div className="flex gap-4 mt-2">
        <div className="text-center">
          <span className="block font-bold">W1</span>
          <span>{odds[0]}</span>
        </div>
        <div className="text-center">
          <span className="block font-bold">X</span>
          <span>{odds[1]}</span>
        </div>
        <div className="text-center">
          <span className="block font-bold">W2</span>
          <span>{odds[2]}</span>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
