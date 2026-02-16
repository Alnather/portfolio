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
  title: "Ahmed Hani Yousef | Software Engineer",
  description: "Recent Computer Science graduate passionate about building impactful software solutions. Full-stack developer experienced with React, Node.js, and modern web technologies.",
  keywords: ["Software Engineer", "Web Developer", "React", "Node.js", "Full Stack", "Portfolio"],
  authors: [{ name: "Ahmed Hani Yousef" }],
  openGraph: {
    title: "Ahmed Hani Yousef | Software Engineer",
    description: "Recent Computer Science graduate passionate about building impactful software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
