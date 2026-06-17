import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tora.agency"),
  title: {
    default: "Tora | Software and MVP development agency in Dubai",
    template: "%s | Tora"
  },
  description:
    "Tora is a Dubai-based full-stack software and MVP development agency for startups and enterprises that need the right stack for the work.",
  openGraph: {
    title: "Tora | Software and MVP development agency in Dubai",
    description:
      "A precision-engineering software partner for MVPs, custom platforms, AI integration, product design, cloud, and SaaS.",
    url: "https://tora.agency",
    siteName: "Tora",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
