import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the schema for a bet entry
const betSchema = z.object({
  match: z.string().min(1, "Match is required"),
  stake: z.number().min(1, "Stake must be at least 1"),
  odds: z.number().min(1, "Odds must be at least 1"),
});

type BetFormValues = z.infer<typeof betSchema>;

interface BetEntryFormProps {
  onSubmit: (data: BetFormValues) => void;
}

const BetEntryForm: React.FC<BetEntryFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BetFormValues>({
    resolver: zodResolver(betSchema),
  });

  const submitHandler = (data: BetFormValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-4 p-4 bg-white dark:bg-gray-800 rounded shadow"
    >
      <div>
        <label className="block">Match</label>
        <input
          {...register("match")}
          className="w-full border rounded p-2"
          placeholder="Team A vs Team B"
        />
        {errors.match && <p className="text-red-500">{errors.match.message}</p>}
      </div>
      <div>
        <label className="block">Stake</label>
        <input
          type="number"
          {...register("stake", { valueAsNumber: true })}
          className="w-full border rounded p-2"
          placeholder="Stake amount"
        />
        {errors.stake && <p className="text-red-500">{errors.stake.message}</p>}
      </div>
      <div>
        <label className="block">Odds</label>
        <input
          type="number"
          {...register("odds", { valueAsNumber: true })}
          className="w-full border rounded p-2"
          placeholder="Odds"
        />
        {errors.odds && <p className="text-red-500">{errors.odds.message}</p>}
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit Bet
      </button>
    </form>
  );
};

export default BetEntryForm;
