import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PlateCard } from "@/components/plate-card";
import { Stars } from "@/components/stars";

const facts = ["Sem aplicação", "iPhone e Android", "QR Code de reserva"];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="rise">
          <p className="inline-flex items-center gap-2 text-sm text-muted">
            <Stars size={14} />
            <span>Placa NFC para avaliações no Google</span>
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.7rem] leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.35rem]">
            Mais avaliações de 5 estrelas no Google.{" "}
            <span className="italic text-gold">Em segundos.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Uma placa de acrílico para o balcão, a mesa ou a receção. O cliente
            aproxima o telemóvel e a página de avaliação do seu negócio abre
            sozinha. Sem aplicação. Se o NFC não responder, o QR Code impresso
            faz o mesmo caminho.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#precos" className="btn btn-solid">
              Comprar agora
            </Link>
            <Link href="/#como-funciona" className="btn btn-ghost">
              Como funciona
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise rise-delay relative mx-auto w-full max-w-xl">
          <Image
            src="/images/hero-placa.jpg"
            alt="Placa de acrílico com estrelas douradas e QR Code, em cima de um balcão de madeira"
            width={1024}
            height={1024}
            priority
            className="aspect-square w-full rounded-[32px] object-cover shadow-[var(--shadow)]"
          />
          <div className="absolute -left-2 bottom-6 hidden sm:block lg:-left-10">
            <PlateCard float phrase="Avalie-nos" business="O seu negócio" />
          </div>
          <div className="mt-6 flex justify-center sm:hidden">
            <PlateCard phrase="Avalie-nos" business="O seu negócio" />
          </div>
          <figure className="absolute right-3 top-3 max-w-[210px] rounded-2xl bg-card/95 p-3 shadow-[var(--shadow)] sm:right-4 sm:top-4">
            <Stars size={13} />
            <blockquote className="mt-2 text-sm leading-5">
              «Volto sempre pelo croissant.»
            </blockquote>
            <figcaption className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted">
              Exemplo · há 2 minutos
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
