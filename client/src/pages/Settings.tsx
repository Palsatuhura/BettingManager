// Settings.tsx
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";

const Settings: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <SettingsIcon
            size={24}
            className="text-lightText dark:text-darkText"
          />
          <h3 className="text-lg font-bold text-lightText dark:text-darkText">
            Settings
          </h3>
        </div>
        <p className="text-lightText dark:text-darkText">
          This is the settings panel. Customize your preferences here.
        </p>
        {/* Add additional settings options as needed */}
      </CardContent>
    </Card>
  );
};

export default Settings;
