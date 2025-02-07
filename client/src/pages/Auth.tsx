import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the eye icons
import ThemeToggle from "../components/themeToogle";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSnackbar } from "../components/SnackbarProvider";

// zod for validation
const schema = z.object({
  email: z
    .string()
    .email("Please enter a valid email")
    .min(1, "Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useSnackbar(); // Use the custom hook
  const navigate = useNavigate();

  // Use react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Function to handle authentication
  const handleAuth = async (data: FormData) => {
    setLoading(true);

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        showSnackbar("Account created successfully!", "success");
      } else {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        showSnackbar("Login successful!", "success");
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during authentication:", error);
      showSnackbar("Authentication failed. Check your credentials", "error");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      showSnackbar("Google sign-in successful!", "success");
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in failed:", error);
      showSnackbar("Google sign-in failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText transition-all duration-300">
      <div className="bg-lightCard p-8 rounded-lg shadow-lg w-full max-w-sm dark:bg-darkCard transition-all duration-300">
        {/* Theme toggle button */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Create an Account" : "Login"}
        </h2>
        <form onSubmit={handleSubmit(handleAuth)} className="space-y-4">
          <div>
            <Input
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-lightInput text-darkText focus:outline-none focus:border-blue-500 dark:bg-darkInput dark:text-white transition-all duration-300"
              placeholder="Email"
              type="email"
              {...register("email")}
              autoComplete="username"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="relative">
            <Input
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-lightInput text-darkText focus:outline-none focus:border-blue-500 dark:bg-darkInput dark:text-white transition-all duration-300"
              placeholder="Password"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              {...register("password")}
              autoComplete="current-password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 dark:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none transition-all duration-300"
            disabled={loading}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>
        <Button
          onClick={handleGoogleSignIn}
          className="w-full bg-gray-200 text-gray-900 py-2 rounded-lg flex items-center justify-center hover:bg-gray-300 focus:outline-none dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-all duration-300"
          disabled={loading}
        >
          <FcGoogle size={20} className="mr-2" /> Sign in with Google
        </Button>
        <p className="mt-4 text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}
