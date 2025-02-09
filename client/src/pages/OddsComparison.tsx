import React from "react";

const OddsComparison: React.FC = () => {
  // Stub data for odds comparison. Later integrate with an Odds API.
  const oddsData = [
    { bookmaker: "Bookie A", odds: 2.5 },
    { bookmaker: "Bookie B", odds: 2.4 },
    { bookmaker: "Bookie C", odds: 2.6 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Odds Comparison</h1>
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Bookmaker</th>
            <th className="py-2 px-4 border">Odds</th>
          </tr>
        </thead>
        <tbody>
          {oddsData.map((data, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{data.bookmaker}</td>
              <td className="py-2 px-4 border">{data.odds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OddsComparison;
