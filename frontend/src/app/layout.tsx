import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Manthan Dadhania | Academic Portfolio",
  description:
    "Academic portfolio for Manthan Dadhania, highlighting learning philosophy, interdisciplinary projects, and future-ready aspirations.",
  metadataBase: new URL("https://portfolio.manthandadhania.dev"),
  openGraph: {
    title: "Manthan Dadhania | Academic Portfolio",
    description:
      "Learning beyond boundaries through innovation, integration, and inspiration.",
    url: "https://portfolio.manthandadhania.dev",
    siteName: "Manthan Dadhania Portfolio",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio.manthandadhania.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
