import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "../styles.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { Toaster } from "@/components/ui/sonner";
import { SITE } from "@/data/contact";
import { DEFAULT_DESCRIPTION, UAE_KEYWORDS } from "@/data/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Dubai, UAE`,
    template: `%s | ${SITE.shortName}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...UAE_KEYWORDS],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.name} — Dubai, UAE`,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Dubai, UAE`,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Event Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col" suppressHydrationWarning>
        <StructuredData />
        <SiteNav />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
