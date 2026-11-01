import { Container } from "@/components/container";
import { PricingGrid } from "@/components/pricing-grid";

export function PricingSection() {
  return (
    <section id="precos" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-gold">Preços</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Um balcão, ou uma rede inteira.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            IVA incluído. Produção em 3 a 5 dias úteis depois de confirmarmos o
            link do Google e a arte. O pagamento é feito no Whop.
          </p>
        </div>
        <div className="mt-12">
          <PricingGrid />
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-muted">
          A ReviewTap não vende avaliações nem esconde estrelas baixas. A placa
          abre a página oficial do Google. A pessoa escreve o que quiser,
          incluindo o que correu menos bem. É assim que a ficha ganha crédito.
        </p>
      </Container>
    </section>
  );
}
