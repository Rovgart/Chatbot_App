"use client";
import { useSettings } from "@/app/store/SettingsContext";
import { Switch } from "@mui/material";
import React, { ChangeEvent, useEffect } from "react";

function ChatbotSettings() {
  const { settings, setSettings, selectedBackground } = useSettings();

  // Handle background change
  const handleBackgroundChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = e.target.value as keyof Backgrounds;
    console.log(`Background selected: ${selectedKey}`);

    // Update the default background and textColor to match the selected option
    const selectedBackground = settings.background[selectedKey];

    setSettings((prevSettings) => ({
      ...prevSettings,
      background: {
        ...prevSettings.background,
        default: selectedBackground,
      },
    }));
  };

  // Handle theme change
  const handleThemeChange = () => {
    const newTheme = settings.theme === "light" ? "dark" : "light";
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: newTheme,
    }));
  };

  // Log settings change
  useEffect(() => {
    console.log("Settings updated", settings);
    // Optionally update CSS variables or styles here
  }, [settings]);

  const currentBackgroundColor = settings.background.default.backgroundColor;
  const currentTextColor = settings.background.default.textColor;

  return (
    <main
      style={{
        backgroundColor: selectedBackground,
        color: currentTextColor,
      }}
      className="md:flex md:flex-col hidden justify-around h-full w-full sm:col-[1/2] row-[1] p-4 relative"
    >
      <h1 className="text-center sm:text-4xl text-2xl">Styles</h1>
      <div className="flex flex-col gap-4 pl-4">
        <h3>Background Fill</h3>
        <select
          style={{ backgroundColor: currentBackgroundColor }}
          className="p-2 border-anti-flash_white-600 border"
          onChange={handleBackgroundChange}
        >
          <option value="darker">Darker</option>
          <option value="default">Default</option>
          <option value="lighter">Lighter</option>
        </select>
      </div>
      <div className="pl-5 flex items-center gap-3">
        <span>Dark Mode</span>
        <Switch
          checked={settings.theme === "dark"}
          onChange={handleThemeChange}
        />
      </div>
    </main>
  );
}

export default ChatbotSettings;
