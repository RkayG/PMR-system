import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PMR System - Patient Medication Record",
  description: "Cloud-based PMR system for UK pharmacies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
