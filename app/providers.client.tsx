"use client";
import { Toaster, TooltipProvider } from "@whop/frosted-ui";
import { FC, PropsWithChildren } from "react";

export const ClientProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  );
};
