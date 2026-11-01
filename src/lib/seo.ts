import { siteDescription, siteName, siteUrl } from "@/lib/site";

export const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ReviewTap — Placa NFC para avaliações no Google",
  description: siteDescription,
  image: [`${siteUrl}/images/hero-placa.jpg`, `${siteUrl}/images/placa-detalhe.jpg`],
  brand: {
    "@type": "Brand",
    name: siteName,
  },
  category: "Placa NFC",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "34",
    highPrice: "229",
    offerCount: "3",
    availability: "https://schema.org/InStock",
  },
};
