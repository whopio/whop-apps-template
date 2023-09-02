"use client";
import { Toaster, TooltipProvider } from "@whop/frosted-ui";
import "@whop/frosted-ui/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  );
}
