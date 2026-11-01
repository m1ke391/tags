import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { contactEmail } from "@/lib/site";

const columns = [
  {
    title: "Produto",
    links: [
      { href: "/produto", label: "A placa" },
      { href: "/#como-funciona", label: "Como funciona" },
      { href: "/#precos", label: "Preços" },
      { href: "/#perguntas", label: "Perguntas" },
    ],
  },
  {
    title: "Empresas",
    links: [
      { href: "/empresas", label: "Volumes e redes" },
      { href: "/empresas#orcamento", label: "Pedir orçamento" },
      { href: "/checkout/balcao", label: "Checkout embutido" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-line">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Placas NFC para o balcão. O cliente toca, a página de avaliação do
            Google abre, a review fica feita. O QR Code vai sempre impresso,
            para o telemóvel que não lê NFC.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-medium">{column.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-3 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 ReviewTap. Feito para negócios locais.</p>
        <a className="hover:text-ink" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </Container>
    </footer>
  );
}
