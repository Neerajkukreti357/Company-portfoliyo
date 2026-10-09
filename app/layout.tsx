import type { ReactNode } from "react";
import { Big_Shoulders, Public_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://company-portfoliyo.vercel.app/"),

  title: `${site.name.en} | Chemical plant and storage tank builders`,
  description: site.tagline.en,

  openGraph: {
    title: `FertiCraft FabTech`,
    description:
      "Discover our website and explore our services.",
    url: "https://company-portfoliyo.vercel.app/",
    siteName: `FertiCraft FabTech`,
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: `FertiCraft FabTech`,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `FertiCraft FabTech`,
    description:
      "Discover our website and explore our services.",
    images: ["/opengraph-image.jpeg"],
  },
};

const display = Big_Shoulders({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-big-shoulders" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-deva" });



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
