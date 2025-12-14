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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
