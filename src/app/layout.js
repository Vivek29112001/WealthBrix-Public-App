import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "./(Dashboard)/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wealth Brix",
  description: "Wealth Brix -> Building future, brick by brick",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderNavbar/>{children}
      </body>
    </html>
  );
}
