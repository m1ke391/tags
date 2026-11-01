import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Encomenda confirmada",
  description: "Pagamento recebido. O passo seguinte é o link do Google e a arte da placa.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    title: "O recibo chega por email",
    text: "O Whop envia a confirmação do pagamento para o endereço usado na compra.",
  },
  {
    title: "Falta o link e a arte",
    text: "Se ainda não os enviou, responda a esse email com o link da ficha do Google, o logótipo e a frase. Com NIF, junte os dados da fatura.",
  },
  {
    title: "Produção e envio",
    text: "A placa fica pronta em 3 a 5 dias úteis depois desses ficheiros. O código de rastreio segue no mesmo fio de email.",
  },
];

export default function ThankYouPage() {
  return (
    <main>
      <Container className="max-w-3xl py-20">
        <p className="text-sm text-gold">Encomenda</p>
        <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em]">
          Pagamento recebido.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          A placa entra em produção quando tivermos o link da sua ficha no
          Google e, se pediu personalização, a arte aprovada.
        </p>
        <ol className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
              <span className="font-serif text-2xl text-gold">0{index + 1}</span>
              <div>
                <h2 className="text-xl">{step.title}</h2>
                <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-solid">
            Voltar ao início
          </Link>
          <Link href="/empresas#orcamento" className="btn btn-ghost">
            Falar de personalização
          </Link>
        </div>
        <p className="mt-8 text-sm leading-6 text-muted">
          Se chegou a esta página sem concluir o pagamento, a encomenda ainda
          não está feita.{" "}
          <Link href="/#precos" className="underline underline-offset-4">
            Voltar aos preços
          </Link>
          . Dúvidas:{" "}
          <a className="underline underline-offset-4" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          .
        </p>
      </Container>
    </main>
  );
}
