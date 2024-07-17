
import "./globals.css";

import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Movie Ratings",
  description: "Movie Ratings with NextJS and Shadcn UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>{children}</body>
    </html>
  );
}
