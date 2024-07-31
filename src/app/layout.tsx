import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Hamburger from "./components/Hamburger/Hamburger";
import SettingsContext, {
  SettingsContextProvider,
} from "./store/SettingsContext";
import AuthProvider from "./store/Auth/AuthProvider";
import { useLayoutEffect } from "react";
import { getUserData } from "./actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imaginative",
  description: "",
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-space_cadet-100`}>
        <AuthProvider>
          <SettingsContextProvider>
            <Header auth={children} />
            {children}
            {modal}
          </SettingsContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
