import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { industries, volumeTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Empresas",
  description:
    "Placas NFC em quantidade para restaurantes, clínicas, salões, lojas e franchises. Desconto por volume, logótipo e fatura com NIF.",
  alternates: { canonical: "/empresas" },
};

const steps = [
  {
    title: "Uma arte",
    text: "Aprovamos logótipo, cor e frase uma vez. Essa arte repete-se em todas as placas da rede.",
  },
  {
    title: "Os links certos",
    text: "Cada unidade pode abrir a sua ficha do Google. Envie a lista de locais e nós programamos placa a placa.",
  },
  {
    title: "Envio por morada",
    text: "Podemos enviar tudo para a sede ou separar por loja. O prazo confirma-se com a quantidade.",
  },
];

export default function EmpresasPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Empresas"
        title="A mesma placa, em cada unidade."
        lede="Para grupos que já não conseguem pedir reviews uma a uma. Restaurantes, clínicas, salões, lojas, hotéis, ginásios, agências e franchises."
      />

      <section className="py-16">
        <Container>
          <h2 className="font-serif text-4xl tracking-tight">Volume</h2>
          <div className="mt-8 overflow-x-auto rounded-[28px] border border-line">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Preços por quantidade de placas</caption>
              <thead className="bg-card text-muted">
                <tr>
                  <th className="px-5 py-4 font-medium">Quantidade</th>
                  <th className="px-5 py-4 font-medium">Inclui</th>
                  <th className="px-5 py-4 font-medium">Preço</th>
                </tr>
              </thead>
              <tbody>
                {volumeTiers.map((tier) => (
                  <tr key={tier.range} className="border-t border-line">
                    <th className="px-5 py-4 font-medium">{tier.range}</th>
                    <td className="px-5 py-4 text-muted">{tier.note}</td>
                    <td className="px-5 py-4">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            IVA incluído nos preços fechados. A partir de 25 placas o valor
            depende do número de links e de moradas de envio.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-[28px] border border-line bg-card p-6">
              <p className="font-serif text-2xl text-gold">0{index + 1}</p>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight">Onde a placa fica bem</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {industries.map((name) => (
              <li key={name} className="rounded-full border border-line bg-card px-4 py-2 text-sm">
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="orcamento" className="pb-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-4xl tracking-tight">Orçamento de quantidade</h2>
            <p className="mt-4 leading-7 text-muted">
              Respondemos com preço por placa, prazo e a lista do que precisamos:
              logótipo, frase e os links do Google. Se cada unidade tiver uma
              ficha diferente, diga-o já na mensagem.
            </p>
          </div>
          <div className="rounded-[32px] border border-line bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
