import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Hamburger from "./components/Hamburger/Hamburger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imaginative",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-space_cadet-100`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
