import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "../styles.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

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
  title: "Future Vision — Luxury Event Atelier",
  description: "An international atelier crafting luxury weddings, corporate events and world-class entertainment.",
  authors: [{ name: "Future Vision" }],
  openGraph: {
    title: "Future Vision — Luxury Event Atelier",
    description: "An international atelier crafting luxury weddings, corporate events and world-class entertainment.",
    type: "website",
    siteName: "Future Vision",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/87b47754-1438-4f37-b580-5ab281bf3bc6/id-preview-c4117534--80c25c06-2dcc-454b-815e-db587f29c6e0.lovable.app-1780632839222.png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Future Vision — Luxury Event Atelier",
    description: "An international atelier crafting luxury weddings, corporate events and world-class entertainment.",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/87b47754-1438-4f37-b580-5ab281bf3bc6/id-preview-c4117534--80c25c06-2dcc-454b-815e-db587f29c6e0.lovable.app-1780632839222.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}

