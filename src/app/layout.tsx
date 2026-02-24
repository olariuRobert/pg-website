import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";
import { getContactConfig } from "@/lib/env";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Property Guardian verifies renters and apartments, coordinates reparations, and monitors utility payment risk on a flexible cadence for landlords and renters.";

export const metadata: Metadata = {
  title: {
    default: "Property Guardian | Rental Oversight Between Landlords and Renters",
    template: "%s | Property Guardian",
  },
  description,
  openGraph: {
    title: "Property Guardian",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Guardian",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { plausibleDomain } = getContactConfig();

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        {children}
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
