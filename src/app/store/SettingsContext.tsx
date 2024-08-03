"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the types for backgrounds and settings
type Background = { backgroundColor: string; textColor: string };

type Backgrounds = {
  default: Background;
  darker: Background;
  lighter: Background;
};

type Settings = {
  background: Backgrounds;
  theme: "light" | "dark";
};

type SettingsContextProps = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

// Create Context
const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

// Provider Component
export function SettingsContextProvider({ children }: { children: ReactNode }) {
  const initialBackgrounds: Backgrounds = {
    default: { backgroundColor: "#00405c", textColor: "#fafbfb" },
    darker: { backgroundColor: "#0e1125", textColor: "#fafbfb" },
    lighter: { backgroundColor: "#c7cceb", textColor: "#070813" },
  };
  const [settings, setSettings] = useState<Settings>({
    background: initialBackgrounds,
    theme: "light",
  });
  const selectedBackground = settings.background.default.backgroundColor;
  return (
    <SettingsContext.Provider
      value={{ settings, setSettings, selectedBackground }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

// Custom Hook to use Settings Context
export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("Context must be used within a Provider");
  }
  return ctx;
};

export default SettingsContext;
