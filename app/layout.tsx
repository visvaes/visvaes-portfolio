import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PageLoader } from "./components/PageLoader";
import { CursorGlow } from "./components/CursorGlow";
import { BackgroundFX } from "./components/BackgroundFX";
import { FloatingContact } from "./components/FloatingContact";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Visvaeswaraiya Jayakumar | Full Stack Web Developer",
  description: "Portfolio of Visvaeswaraiya Jayakumar, a Full Stack Web Developer in India.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <PageLoader />
        <BackgroundFX />
        <CursorGlow />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
