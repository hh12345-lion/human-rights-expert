import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import { isProductionSite } from "@/lib/seo/is-production";
import "./globals.css";

const newsreader = localFont({
  src: [
    { path: "./fonts/newsreader.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/newsreader-it-italic.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

const afacad = localFont({
  src: [{ path: "./fonts/afacad.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-afacad",
  display: "swap",
});

/** Every page is rendered on the server per request. */
export const dynamic = "force-dynamic";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Human Rights Expert Witness UK | Asylum, Article 3 & Immigration Tribunal Reports",
    template: "%s | Human Rights Experts",
  },
  description:
    "Find a qualified human rights expert witness in the UK. Independent expert reports on torture, Article 3 deportation risk, human rights violations, HR defenders, women's rights, and LGBT human rights for asylum and immigration tribunals.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  robots: isProductionSite() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${newsreader.variable} ${afacad.variable} h-full`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden font-sans antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
