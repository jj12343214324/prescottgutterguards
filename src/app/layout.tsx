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
  title: "Prescott Gutter Guards | #1 Gutter Protection in Prescott, AZ",
  description: "Protect your home with Prescott's most trusted gutter guard installation. Lifetime warranty, free estimates, and 100% satisfaction guaranteed. Keep leaves, debris, and pests out forever.",
  keywords: "gutter guards Prescott, gutter protection Arizona, leaf guards, gutter installation, clog-free gutters",
  openGraph: {
    title: "Prescott Gutter Guards | #1 Gutter Protection in Prescott, AZ",
    description: "Protect your home with Prescott's most trusted gutter guard installation. Lifetime warranty, free estimates, and 100% satisfaction guaranteed.",
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
