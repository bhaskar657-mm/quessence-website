import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { StyledComponentsRegistry } from "@/lib/styled-registry";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Quessence — AI-First Digital Company | Content, Websites, AI Creative & Automation",
  description:
    "Quessence is an AI-first digital company that builds social media content, high-performance websites, AI-generated creative, and custom digital products. We ship faster because AI powers everything we do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-primary antialiased bg-[var(--q-page-bg)]">
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
