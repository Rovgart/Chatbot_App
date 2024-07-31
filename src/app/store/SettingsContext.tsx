"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

type Settings = {
  background: backgrounds;
  theme: "light" | "dark";
};
type backgrounds = {
  default: string;
  darker: string;
  lighter: string;
};
type SettingsContextProps = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

// CreateContext

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

// Provider
// Provider
export function SettingsContextProvider({ children }: { children: ReactNode }) {
  const initialBackgrounds: backgrounds = {
    default: "#00405c",
    darker: "#121316",
    lighter: "#c7eeff",
  };

  const [settings, setSettings] = useState<Settings>({
    background: initialBackgrounds,
    theme: "light",
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("Context outside of Provider");
  }
  return ctx;
};

export default SettingsContext;
