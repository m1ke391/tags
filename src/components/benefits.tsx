import { Container } from "@/components/container";
import { benefits } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Benefits() {
  return (
    <section id="beneficios" className="pb-20 sm:pb-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-gold">O que muda no balcão</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            A review deixa de depender de boa memória.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={cn(
                "rounded-[28px] border border-line bg-card p-7",
                index < 2 ? "lg:col-span-3" : "lg:col-span-2",
              )}
            >
              <h3 className="font-serif text-2xl tracking-tight">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{benefit.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
