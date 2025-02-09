import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark"; // Default to dark mode
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all bg-lightInput dark:bg-darkInput text-lightText dark:text-darkText hover:scale-105"
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;
