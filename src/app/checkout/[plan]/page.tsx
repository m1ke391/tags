import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckoutEmbed } from "@/components/checkout-embed";
import { Container } from "@/components/container";
import {
  checkoutReturnUrl,
  formatEuro,
  getPlan,
  isPlaceholderPlanId,
  isPlanKey,
  plans,
  whopCheckoutUrl,
  type PlanKey,
} from "@/lib/plans";

type Params = { plan: string };

export function generateStaticParams(): Array<{ plan: PlanKey }> {
  return (Object.keys(plans) as PlanKey[]).map((plan) => ({ plan }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { plan } = await params;
  const item = getPlan(plan);
  return {
    title: item ? `Checkout · ${item.name}` : "Checkout",
    robots: { index: false, follow: false },
  };
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { plan } = await params;
  if (!isPlanKey(plan)) notFound();
  const item = plans[plan];

  return (
    <main>
      <Container className="grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div>
          <p className="text-sm text-gold">Checkout</p>
          <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em]">{item.name}</h1>
          <p className="mt-4 text-lg leading-8 text-muted">{item.description}</p>
          <p className="mt-6 font-serif text-4xl">
            {item.price == null ? "Sob consulta" : formatEuro(item.price)}
          </p>
          <p className="mt-1 text-sm text-muted">
            {item.unitLabel}
            {item.price != null ? " · IVA incluído" : ""}
          </p>
          <ul className="mt-6 space-y-2 text-sm leading-6 text-muted">
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href="/#precos" className="underline underline-offset-4">
              Ver os outros planos
            </Link>
          </p>
        </div>

        <div className="rounded-[28px] border border-line bg-card p-4 sm:p-6">
          {isPlaceholderPlanId(item.id) ? (
            <p className="mb-4 rounded-2xl bg-gold-soft px-4 py-3 text-sm leading-6">
              Checkout de demonstração. O plan ID{" "}
              <code>{item.id}</code> ainda é um placeholder. Substitua-o em{" "}
              <code>src/lib/plans.ts</code> pelo ID real do Whop para este
              pagamento concluir.
            </p>
          ) : null}
          {/*
            WhopCheckoutEmbed usa o mesmo plan ID dos botões.
            Troque os IDs em src/lib/plans.ts. Não edite este componente
            para cada plano.
          */}
          <CheckoutEmbed planId={item.id} returnUrl={checkoutReturnUrl()} />
          <p className="mt-4 text-center text-sm text-muted">
            Prefere a página do Whop?{" "}
            <a href={whopCheckoutUrl(item.id)} className="underline underline-offset-4">
              Abrir checkout alojado
            </a>
          </p>
        </div>
      </Container>
    </main>
  );
}
