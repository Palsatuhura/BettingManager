import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { Button } from "@radix-ui/themes";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error while logging in", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error while logging in with Google", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-navy rounded-lg">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 rounded"
      />
      <Button onClick={handleLogin} className="w-full mb-4 bg-electric">
        Login
      </Button>
      <Button onClick={handleGoogleLogin} className="w-full mb-4 bg-crimson">
        Login with Google
      </Button>
    </div>
  );
};
