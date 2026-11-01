import { Benefits } from "@/components/benefits";
import { B2BSection } from "@/components/b2b-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { IndustryMarquee } from "@/components/industry-marquee";
import { JsonLd } from "@/components/json-ld";
import { PricingSection } from "@/components/pricing-section";
import { ProductBand } from "@/components/product-band";
import { Testimonials } from "@/components/testimonials";
import { productJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={productJsonLd} />
      <Hero />
      <IndustryMarquee />
      <HowItWorks />
      <Benefits />
      <ProductBand />
      <PricingSection />
      <Testimonials />
      <B2BSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
