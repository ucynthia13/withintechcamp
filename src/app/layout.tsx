import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WSC 2025 - COHORT 2",
  description: "Withintech Summer Camp 2025 - Cohort 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
