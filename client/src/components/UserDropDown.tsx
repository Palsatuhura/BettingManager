// src/components/Dropdowns/UserDropdown.tsx
import { FC, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { auth } from "../firebase";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const UserDropdown: FC = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="h-9 w-9 rounded-full bg-electric flex items-center justify-center">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          ) : (
            <span className="text-darkCard font-bold">
              {user.email?.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      </button>

      {isOpen && (
        <>
          {/* Overlay to close dropdown when clicking outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-lg bg-darkCard shadow-lg ring-1 ring-darkInput focus:outline-none">
            <div className="p-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="h-6 w-6 text-electric" />
                <div>
                  <p className="text-sm text-darkText">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-darkInput">
              <button
                onClick={() => {
                  // Navigate to settings
                  setIsOpen(false);
                }}
                className="flex w-full items-center space-x-3 px-4 py-3 text-sm text-darkText hover:bg-darkBackground hover:text-electric transition-colors"
              >
                <Cog6ToothIcon className="h-5 w-5" />
                <span>Settings</span>
              </button>

              <button
                onClick={handleLogout}
                className="flex w-full items-center space-x-3 px-4 py-3 text-sm text-darkText hover:bg-darkBackground hover:text-electric transition-colors"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDropdown;
