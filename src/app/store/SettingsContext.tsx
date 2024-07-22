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
export function SettingsContextProvider({ children }: { children: ReactNode }) {
  const backgrounds = {
    default: "space_cadet-100",
    darker: "celestial_blue-200",
    lighter: "dark_pastel_green-200",
  };
  const { darker, lighter } = backgrounds;
  const [settings, setSettings] = useState<Settings>({
    background: "celestial_blue-200",
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
