import React from "react";
import { CalendarDays } from "lucide-react";

interface CardHeaderProps {
  leagueName: string;
  matchDate: string;
  time: string;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  leagueName,
  matchDate,
  time,
  className = "",
}) => {
  return (
    <div
      className={`flex justify-between items-center p-3 bg-lightBackground dark:bg-darkBackground rounded-t-lg ${className}`}
    >
      <div className="flex items-center space-x-2">
        <CalendarDays className="text-electric w-5 h-5" />
        <span className="text-sm font-bold text-lightText dark:text-darkText">
          {leagueName}
        </span>
      </div>
      <div className="text-sm text-lightText dark:text-darkText">
        {matchDate} - {time}
      </div>
    </div>
  );
};

export default CardHeader;
