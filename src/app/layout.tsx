import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const revalidate = 3600

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMAGE",
  description: "the world of jpg's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
