import React, { useState } from "react";

const BetNotes: React.FC = () => {
  // For a rich text editor integration, you might later use libraries such as Slate or TipTap.
  // For now, we use a simple textarea.
  const [notes, setNotes] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    // Save changes to Firestore as needed.
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bet Notes</h1>
      <textarea
        value={notes}
        onChange={handleChange}
        className="w-full h-64 border rounded p-4"
        placeholder="Write your notes here..."
      ></textarea>
    </div>
  );
};

export default BetNotes;
