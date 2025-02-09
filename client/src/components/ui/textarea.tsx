import React, { useState } from "react";

const UpcomingGames = () => {
  const [notes, setNotes] = useState<{ [key: string]: string }>({});

  const games = [
    { id: "1", teamA: "Team A", teamB: "Team B", odds: "1.5 - 2.5" },
    { id: "2", teamA: "Team C", teamB: "Team D", odds: "1.8 - 2.2" },
  ];

  const handleNoteChange = (gameId: string, value: string) => {
    setNotes((prevNotes) => ({ ...prevNotes, [gameId]: value }));
  };

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upcoming Games</h2>
      <ul className="space-y-4">
        {games.map((game) => (
          <li key={game.id} className="border-b pb-4">
            <p className="text-lg font-medium">
              {game.teamA} vs {game.teamB}
            </p>
            <p className="text-sm text-gray-600">Odds: {game.odds}</p>
            <textarea
              className="w-full mt-2 p-2 border rounded-md bg-lightInput dark:bg-darkInput text-darkText dark:text-lightText"
              placeholder="Add your notes here..."
              value={notes[game.id] || ""}
              onChange={(e) => handleNoteChange(game.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingGames;
