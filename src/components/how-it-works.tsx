import { QrCode } from "lucide-react";
import { Container } from "@/components/container";
import { comparison, steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-gold">Como funciona</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Do toque à estrela, sem desvios.
          </h2>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="bg-card p-7">
              <p className="font-serif text-3xl text-gold">{step.number}</p>
              <h3 className="mt-6 text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-4 flex items-start gap-3 rounded-[28px] bg-foam px-6 py-5 text-sm leading-6">
          <QrCode className="mt-0.5 shrink-0 text-navy" size={18} aria-hidden />
          <p>
            Todas as placas saem com NFC e QR Code. O NFC é o atalho. O QR é a
            garantia, impresso no acrílico e não num talão que ao fim de uma
            semana já não se lê.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[28px] border border-line bg-paper-2 p-7">
            <h3 className="font-serif text-2xl">Sem placa</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {comparison.without.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] bg-[#143049] p-7 text-[#f6f1e7]">
            <h3 className="font-serif text-2xl">Com a ReviewTap</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#e4dccf]">
              {comparison.with.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
