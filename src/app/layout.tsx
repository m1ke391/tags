import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Suspense } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Placas NFC para avaliações no Google`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "placa NFC",
    "avaliações Google",
    "reviews Google",
    "QR Code balcão",
    "reputação local",
    "ReviewTap",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName,
    title: `${siteName} — Mais avaliações de 5 estrelas no Google`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Placas NFC para avaliações no Google`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("reviewtap-theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      data-theme="light"
      suppressHydrationWarning
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
        >
          Saltar para o conteúdo
        </a>
        <Suspense fallback={<div className="h-16 border-b border-line bg-paper/90" />}>
          <SiteHeader />
        </Suspense>
        <div id="conteudo" className="flex-1">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
