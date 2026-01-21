import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Skills That Matter Most: Preparing Your Workforce & Leaders for the AI Era | Simplilearn",
  description: "Join CHRO, CL&D, and enterprise workforce leaders for a candid discussion on preparing your workforce for the AI era. February 20, 2026 at Chamberlain's Steak & Fish House, Dallas.",
  keywords: ["AI", "workforce", "leadership", "Simplilearn", "skills development"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
