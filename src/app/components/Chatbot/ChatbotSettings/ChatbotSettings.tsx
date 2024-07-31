"use client";
import { useSettings } from "@/app/store/SettingsContext";
import { Switch } from "@mui/material";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
type Settings = {
  background: {
    lighter: string;
    default: string;
    darker: string;
  };
  theme: {
    light: string;
    dark: string;
  };
};
function ChatbotSettings({}) {
  const { settings, setSettings } = useSettings();

  // Handle background change
  const handleBackgroundChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBackground = e.target.value;
    console.log(`Background selected: ${selectedBackground}`);
    setSettings({
      ...settings,
      background: {
        ...settings.background,
        default: selectedBackground,
      },
    });
  };

  const handleThemeChange = () => {
    const newTheme = settings.theme === "light" ? "dark" : "light";
    setSettings({
      ...settings,
      theme: newTheme,
    });
  };
  // Log settings change
  useEffect(() => {
    console.log("Settings updated", settings);
    // Optionally update CSS variables or styles here
  }, [settings]);

  const currentBackgroundColor = settings.background.default;

  return (
    <main
      style={{ backgroundColor: currentBackgroundColor }}
      className={`md:flex md:flex-col  hidden justify-around text-anti-flash_white-500 h-full w-full sm:col-[1/2] row-[1] p-4 relative`}
    >
      <h1 className="text-center sm:text-4xl text-2xl">Styles</h1>
      <div className="flex flex-col gap-4 pl-4">
        <h3 className="">Background Fill</h3>
        <select
          className={`bg-${settings.background} p-2 border-anti-flash_white-600 border`}
          onChange={handleBackgroundChange}
        >
          <option value={settings.background.darker}>Darker</option>
          <option value={settings.background.default}>Default</option>
          <option value={settings.background.lighter}>Lighter</option>
        </select>
      </div>
      <div className="pl-5 flex items-center gap-3">
        <span>Dark Mode</span>
        <Switch />
      </div>
    </main>
  );
}

export default ChatbotSettings;
