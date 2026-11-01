import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { PlateCard } from "@/components/plate-card";
import { colorways, specs } from "@/lib/content";
import type { ColorwayId } from "@/lib/content";

export const metadata: Metadata = {
  title: "A placa",
  description:
    "Placa de acrílico de 5 mm com chip NFC NTAG215, QR Code de reserva e personalização de logótipo, cor e frase.",
  alternates: { canonical: "/produto" },
};

export default function ProductPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Produto"
        title="Uma placa que se aguenta no balcão."
        lede="Acrílico fundido, chip regravável e um QR Code impresso no mesmo objeto. Personaliza-se com o logótipo, a cor e uma frase curta. Depois disso, não pede manutenção."
      />

      <Container className="grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <Image
          src="/images/hero-placa.jpg"
          alt="Placa ReviewTap fotografada num balcão de café"
          width={1024}
          height={1024}
          className="aspect-square w-full rounded-[28px] object-cover sm:col-span-2 lg:col-span-1"
        />
        <Image
          src="/images/placa-detalhe.jpg"
          alt="Pormenor da espessura do acrílico, das estrelas e do QR Code"
          width={1152}
          height={864}
          className="aspect-[4/3] h-full w-full rounded-[28px] object-cover"
        />
        <Image
          src="/images/lifestyle-balcao.jpg"
          alt="Placa ao lado de uma chávena, na luz da manhã de um café"
          width={1280}
          height={720}
          className="aspect-[4/3] h-full w-full rounded-[28px] object-cover"
        />
      </Container>

      <section className="pb-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl tracking-tight">O que leva cada placa</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {specs.map((spec) => (
                <div key={spec.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
                  <dt className="text-sm text-muted">{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-[28px] border border-line bg-card p-7">
            <h2 className="font-serif text-3xl tracking-tight">Personalização</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted">
              <li>Logótipo numa cor, enviado em vetor ou PNG com fundo transparente.</li>
              <li>Fundo em atlântico, areia, verde-sálvia ou tinta. Outras cores no plano Rede.</li>
              <li>Frase até 32 caracteres. Se não escolher, usamos «Avalie a sua experiência».</li>
              <li>Nome do negócio por baixo da frase, para a ficha certa ser óbvia.</li>
              <li>O link do Google é programado por nós antes do envio. Se mudar, o chip regrava-se.</li>
            </ul>
            <Link href="/#precos" className="btn btn-solid mt-8">
              Escolher um plano
            </Link>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="font-serif text-4xl tracking-tight">Três caras. A mesma função.</h2>
          <p className="mt-3 max-w-xl text-muted">
            A cor muda. O gesto não: tocar, abrir a página de avaliação, escrever.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {colorways.map((color) => (
              <li key={color.id} className="text-center">
                <div className="flex justify-center">
                  <PlateCard
                    color={color.id as ColorwayId}
                    phrase={color.phrase}
                    business={color.business}
                  />
                </div>
                <p className="mt-4 text-sm text-muted">{color.name}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
