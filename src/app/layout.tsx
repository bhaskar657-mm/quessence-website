import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { StyledComponentsRegistry } from "@/lib/styled-registry";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0H42X616ML"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-0H42X616ML');`,
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "vm21br7zr1");`,
          }}
        />
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
          <SpeedInsights />
          <Analytics />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
