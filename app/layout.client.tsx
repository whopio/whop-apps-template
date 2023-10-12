"use client"; // this line is important
import { FC, PropsWithChildren } from "react";
import "@/lib/iframe";

export const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
