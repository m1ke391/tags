import Link from "next/link";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

const points = [
  {
    title: "Desconto por volume",
    text: "O preço unitário desce a partir de 10 placas e volta a descer a partir de 25. Uma arte, várias moradas.",
  },
  {
    title: "Logótipo e cores da marca",
    text: "A placa não tem de parecer um produto genérico. Fundo, frase e logótipo numa cor, alinhados com o espaço.",
  },
  {
    title: "Uma ficha por unidade",
    text: "Cada placa pode abrir a página do Google daquela loja, clínica ou salão. O grupo aprova a arte uma vez.",
  },
  {
    title: "Fatura com NIF",
    text: "Encomendas em nome da empresa, com os dados fiscais no email. Condições de grupos combinam-se no orçamento.",
  },
];

export function B2BSection() {
  return (
    <section id="empresas" className="pb-20 sm:pb-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm text-gold">Empresas</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Para quem gere mais do que um balcão.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Restaurantes, clínicas, salões, lojas, hotéis, ginásios, franchises
            e agências que tratam da reputação de vários espaços.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title}>
                <h3 className="text-lg">{point.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{point.text}</p>
              </li>
            ))}
          </ul>
          <Link href="/empresas" className="btn btn-ghost mt-8">
            Ver condições de rede
          </Link>
        </div>
        <div id="orcamento" className="rounded-[32px] border border-line bg-card p-6 sm:p-8">
          <h3 className="font-serif text-3xl tracking-tight">Peça um orçamento.</h3>
          <p className="mt-3 mb-6 text-sm leading-6 text-muted">
            Diga quantas placas, para que tipo de espaço, e se cada unidade abre
            a mesma ficha ou fichas diferentes.
          </p>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
