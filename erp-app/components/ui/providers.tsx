"use client"

import { SidebarProvider } from "./sidebar";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}