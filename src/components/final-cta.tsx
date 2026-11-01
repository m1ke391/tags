import Link from "next/link";
import { Container } from "@/components/container";
import { BuyButton } from "@/components/buy-button";

export function FinalCta() {
  return (
    <section className="pb-8">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-[#143049] px-6 py-12 text-[#f6f1e7] sm:px-12 sm:py-16">
          <p className="text-sm text-[#e0b15a]">Pronta para o balcão</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Ponha a placa onde o cliente já está.
          </h2>
          <p className="mt-5 max-w-xl text-[#d9d0c3]">
            Programamos o link da sua ficha no Google, imprimimos a frase e
            enviamos. O NFC faz o atalho. O QR Code fica de reserva.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BuyButton plan="balcao" variant="cream">
              Encomendar o pack Balcão
            </BuyButton>
            <Link href="/produto" className="btn btn-line-light">
              Ver materiais
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
