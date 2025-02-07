import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { create } from "zustand";

type Auth = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
};

export const useAuth = create<Auth>((set) => ({
  user: null,
  loading: true,
  logout: async () => {
    await auth.signOut();
  },
}));

onAuthStateChanged(auth, (user) => {
  useAuth.setState({ user, loading: false });
});
