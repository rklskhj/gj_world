"use client";

import { ReactNode } from "react";
import { ClientThemeWrapper } from "./ClientThemeWrapper";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ClientThemeWrapper>{children}</ClientThemeWrapper>;
}
