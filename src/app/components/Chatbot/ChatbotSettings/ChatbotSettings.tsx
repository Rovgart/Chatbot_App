"use client";
import { useSettings } from "@/app/store/SettingsContext";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
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
  return (
    <main
      className={`md:flex bg-red-500 md:flex-col hidden justify-around bg-${settings.background} text-anti-flash_white-500 h-full w-full sm:col-[1/2] row-[1] p-4 relative`}
    >
      <h1 className="text-center text-2xl">Styles</h1>
      <div className="flex flex-col gap-4">
        <h3>Background Fill</h3>
        <select
          className={`bg-${settings.background} p-2`}
          onChange={handleChange}
        >
          <option value="celestial_blue-800">Darker</option>
          <option value="dark_pastel_green-900">Default</option>
          <option value="payne_gray-600">Lighter</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <span>Color Mode</span>
        <select
          name=""
          id=""
          value={settings.theme}
          className="bg-space_cadet-900 p-2 text-space_cadet-100"
          onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </main>
  );
}

export default ChatbotSettings;
