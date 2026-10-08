import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Big_Shoulders, Public_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

const display = Big_Shoulders({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-big-shoulders" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-deva" });

export const metadata: Metadata = {
  title: `${site.name.en} | Chemical plant and storage tank builders`,
  description: site.tagline.en,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${deva.variable}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
