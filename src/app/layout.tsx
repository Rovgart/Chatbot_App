import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { SettingsContextProvider } from "./store/SettingsContext";
import AuthProvider from "./store/Auth/AuthProvider";
import UIStateProvider from "./store/UIStateProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DialogueFlow",
  description: "Chat Smarter, Connect Faster",
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
      <body className={`${inter.className} bg-payne_gray-100`}>
        <AuthProvider>
          <SettingsContextProvider>
            <UIStateProvider>
              {children}
              {modal}
            </UIStateProvider>
          </SettingsContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
