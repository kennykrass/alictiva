import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandTitle = "ALICTIVA";
const brandDescription =
  "Salsas artesanales mexicanas que combinan técnicas ancestrales con ingredientes locales.";

export const metadata: Metadata = {
  title: {
    default: `${brandTitle} | Salsas artesanales mexicanas`,
    template: `%s | ${brandTitle}`,
  },
  description: brandDescription,
  metadataBase: new URL("https://alictiva.mx"),
  openGraph: {
    title: `${brandTitle} | Salsas artesanales mexicanas`,
    description: brandDescription,
    url: "https://alictiva.mx",
    siteName: brandTitle,
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://alictiva.mx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-secondary/10">
          <a
            href="#contenido-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-soft"
          >
            Saltar al contenido principal
          </a>
          <Navbar />
          <main id="contenido-principal" className="flex-1 bg-transparent">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
