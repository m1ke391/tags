import { Container } from "@/components/container";
import { Stars } from "@/components/stars";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="testemunhos-titulo">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-gold">No balcão</p>
          <h2
            id="testemunhos-titulo"
            className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl"
          >
            O que se diz quando a review cabe na despedida.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            Exemplos ilustrativos, no tom de quem põe a placa ao lado da caixa.
            Quando tiver clientes reais, estes textos saem e entram os deles.
          </p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="flex flex-col rounded-[28px] border border-line bg-card p-7">
              <Stars size={14} />
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-8 tracking-tight">
                «{item.quote}»
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="block">{item.name}</span>
                <span className="text-muted">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
