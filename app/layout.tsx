import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { validateToken } from "@whop-apps/sdk";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whop Apps Template",
  description: "A template for building Whop Apps in Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    await validateToken({ headers }); // This will ensure only authenticated users can access this page
  } catch (error) {
    console.log(error);
  }
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
