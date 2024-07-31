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
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(`Background selected: ${e.target.value}`);
    setSettings({ ...settings, background: e.target.value });
  };
  useEffect(() => {
    console.log("Settings updated", settings);
    // Update the background color in the CSS
  }, [settings.background]);
  const backgroundStyle = {
    backgroundColor: settings.background.default,
    color: settings.theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "8px",
  };
  return (
    <main
      style={backgroundStyle}
      className={`md:flex md:flex-col  hidden justify-around text-anti-flash_white-500 h-full w-full sm:col-[1/2] row-[1] p-4 relative`}
    >
      <h1 className="text-center sm:text-4xl text-2xl">Styles</h1>
      <div className="flex flex-col gap-4 pl-4">
        <h3 className="">Background Fill</h3>
        <select
          className={`bg-${settings.background} p-2 border-anti-flash_white-600 border`}
          onChange={handleChange}
        >
          <option value="celestial_blue-800">Darker</option>
          <option value="dark_pastel_green-900">Default</option>
          <option value="payne_gray-600">Lighter</option>
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
