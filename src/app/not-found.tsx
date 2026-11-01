import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <main>
      <Container className="py-24">
        <p className="text-sm text-gold">404</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">
          Esta página não está no mapa.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          O endereço não corresponde a nenhuma placa, plano ou texto do site.
        </p>
        <Link href="/" className="btn btn-solid mt-8">
          Voltar ao início
        </Link>
      </Container>
    </main>
  );
}
