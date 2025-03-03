import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: "GJ, World | 김혁진",
  description: "프론트엔드 기술 학습 및 공유를 합니다.",
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
