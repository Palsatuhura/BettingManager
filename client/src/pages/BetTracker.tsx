import React, { useState } from "react";
import BetEntryForm from "../components/BetEntryForm";
import BetCard from "../components/BetCard";

interface Bet {
  id: number;
  match: string;
  stake: number;
  odds: number;
}

const BetTracker: React.FC = () => {
  const [bets, setBets] = useState<Bet[]>([]);

  const addBet = (betData: Omit<Bet, "id">) => {
    const newBet = { id: Date.now(), ...betData };
    setBets((prevBets) => [...prevBets, newBet]);
    // Here you can also add code to save to Firestore
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bet Tracker</h1>
      <BetEntryForm onSubmit={addBet} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {bets.map((bet) => (
          <BetCard
            key={bet.id}
            match={bet.match}
            stake={bet.stake}
            odds={bet.odds}
          />
        ))}
      </div>
    </div>
  );
};

export default BetTracker;
