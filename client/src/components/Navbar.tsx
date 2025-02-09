import { signOut } from "firebase/auth";
import { useAuthStore } from "../store";
import ThemeToggle from "./themeToogle";
import UserDropDown from "./UserDropDown";
import { auth } from "../firebase";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log("Error signing out", error);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-darkCard md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
      <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <span className="text-electric text-sm uppercase hidden lg:inline-block font-bold">
          Betting Manager
        </span>
        <div className="md:flex hidden flex-row items-center lg:ml-auto mr-3">
          <ThemeToggle />
          <UserDropDown />
        </div>
        <div>
          {user && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
