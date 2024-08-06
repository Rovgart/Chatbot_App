"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import { UIStateContextType } from "../../../types/types";

const UIStateContext = createContext<UIStateContextType | undefined>(undefined);

const UIStateProvider = ({ children }: { children: ReactNode }) => {
  const [uiState, setUiState] = useState({
    mobileMenu: false,
    settingsCloud: false,
  });
  const closeMobileMenuHandler = () => {
    setUiState((prevState) => ({ ...prevState, mobileMenu: false }));
  };
  const openMobileMenuHandler = () => {
    setUiState((prev) => ({
      ...prev,
      mobileMenu: true,
    }));
  };
  const openSettingsCloudHandler = () => {
    setUiState((prev) => ({
      ...prev,
      settingsCloud: true,
    }));
  };
  const closeSettingsCloudHandler = () => {
    setUiState((prev) => ({
      ...prev,
      settingsCloud: false,
    }));
  };
  return (
    <UIStateContext.Provider
      value={{
        closeSettingsCloudHandler,
        openSettingsCloudHandler,
        closeMobileMenuHandler,
        openMobileMenuHandler,
        uiState,
      }}
    >
      {children}
    </UIStateContext.Provider>
  );
};
export const useUI = () => {
  const uiStateContext = useContext(UIStateContext);
  if (!uiStateContext) {
    throw new Error("useUI must be used within a UIStateProvider");
  }
  return uiStateContext;
};

export default UIStateProvider;
