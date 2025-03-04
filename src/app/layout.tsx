import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: "GJ, World | 김혁진",
  description: "안녕하세요! 프론트엔드 개발자 김혁진입니다.",
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
