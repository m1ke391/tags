"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";

/**
 * Checkout embutido do Whop.
 * `planId` vem de src/lib/plans.ts. Troque os placeholders (plan_ESSENCIAL,
 * plan_BALCAO, plan_CASA, plan_REDE) pelos IDs reais do dashboard.
 * Documentação: https://docs.whop.com/payments/checkout-embed
 */
export function CheckoutEmbed({
  planId,
  returnUrl,
}: {
  planId: string;
  returnUrl: string;
}) {
  return (
    <WhopCheckoutEmbed
      planId={planId}
      returnUrl={returnUrl}
      theme="light"
      locale="pt"
      fallback={<CheckoutSkeleton />}
      themeOptions={{
        accentColor: "#143049",
        borderRadius: 16,
        buttonText: "Pagar encomenda",
      }}
    />
  );
}

function CheckoutSkeleton() {
  return (
    <div className="grid min-h-[560px] place-items-center rounded-2xl border border-dashed border-line bg-paper-2 px-6 text-center text-sm text-muted">
      A abrir o pagamento seguro…
    </div>
  );
}
