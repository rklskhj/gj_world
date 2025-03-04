"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ClientThemeWrapper({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 서버 사이드 렌더링 시에는 children만 렌더링
  if (!mounted) {
    return <>{children}</>;
  }

  // 클라이언트 사이드에서만 테마 관련 속성 적용
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      disableTransitionOnChange
    >
      <div id="theme-wrapper">{children}</div>
    </NextThemesProvider>
  );
}
