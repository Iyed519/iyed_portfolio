import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iyed Omri | Full-Stack Engineer Portfolio",
  description: "Innovative full-stack engineer Iyed Omri specializing in React, Next.js, Node.js, and cutting-edge web technologies. Explore my projects and experience.",
  keywords: ["Iyed Omri", "full-stack developer", "React", "Next.js", "Node.js", "TypeScript", "portfolio"],
  authors: [{ name: "Iyed Omri" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
