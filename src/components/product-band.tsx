import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { specs } from "@/lib/content";

export function ProductBand() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Image
            src="/images/placa-detalhe.jpg"
            alt="Pormenor da placa de acrílico com a frase Toque para avaliar, símbolo NFC e QR Code"
            width={1152}
            height={864}
            className="aspect-[4/3] w-full rounded-[28px] object-cover"
          />
          <Image
            src="/images/rececao-clinica.jpg"
            alt="Placa ReviewTap na receção de uma clínica, junto a um vaso pequeno"
            width={1152}
            height={864}
            className="aspect-[4/3] w-full rounded-[28px] object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-gold">A placa</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Acrílico, não um autocolante.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Desenhada para viver ao lado da caixa registadora: espessura que se
            nota na mão, impressão que aguenta a limpeza do dia, e um chip que
            se regrava se a ficha do Google mudar.
          </p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {specs.map((spec) => (
              <div key={spec.label} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm text-muted">{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/produto" className="btn btn-solid">
              Ver a placa
            </Link>
            <Link href="/#precos" className="btn btn-ghost">
              Ver preços
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
