import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";

export function FaqSection() {
  return (
    <section id="perguntas" className="pb-20 sm:pb-24">
      <Container className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm text-gold">Perguntas</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em]">
            Antes de encomendar.
          </h2>
        </div>
        <FaqList />
      </Container>
    </section>
  );
}
