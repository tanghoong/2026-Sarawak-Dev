import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarawak.Dev — Build. Learn. Grow Together.",
  description: "Community-driven platform for builders in Sarawak. Join Vibe Coding and start building with AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
