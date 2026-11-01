import Link from "next/link";
import { Check } from "lucide-react";
import { BuyButton } from "@/components/buy-button";
import { cn } from "@/lib/cn";
import { formatEuro, plans, unitPrice, type Plan, type PlanKey } from "@/lib/plans";

const planKeys = Object.keys(plans) as PlanKey[];

export function PricingGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {planKeys.map((key) => (
        <PricingCard key={key} planKey={key} plan={plans[key]} />
      ))}
    </div>
  );
}

function PricingCard({ planKey, plan }: { planKey: PlanKey; plan: Plan }) {
  const each = unitPrice(plan);
  const featured = plan.highlighted;

  return (
    <article
      className={cn(
        "flex flex-col rounded-[28px] border p-6",
        featured
          ? "border-[#143049] bg-[#143049] text-[#f6f1e7] shadow-[var(--shadow)] xl:-mt-3 xl:mb-[-0.75rem]"
          : "border-line bg-card",
      )}
    >
      <p className={cn("text-sm", featured ? "text-[#e0b15a]" : "text-gold")}>
        {plan.audience}
      </p>
      <h3 className="mt-2 font-serif text-3xl tracking-tight">{plan.name}</h3>
      <p className={cn("mt-3 min-h-16 text-sm leading-6", featured ? "text-[#d9d0c3]" : "text-muted")}>
        {plan.description}
      </p>
      <p className="mt-6 font-serif text-5xl tracking-[-0.04em]">
        {plan.price == null ? "Sob consulta" : formatEuro(plan.price)}
      </p>
      <p className={cn("mt-1 text-sm", featured ? "text-[#d9d0c3]" : "text-muted")}>
        {plan.unitLabel}
        {each != null && plan.units > 1 ? ` · ${formatEuro(each)} cada` : ""}
        {plan.price != null ? " · IVA incluído" : ""}
      </p>
      <ul className="mt-6 flex-1 space-y-3 text-sm leading-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <Check
              size={16}
              className={cn("mt-1 shrink-0", featured ? "text-[#e0b15a]" : "text-gold")}
              aria-hidden
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 grid gap-3">
        <BuyButton plan={planKey} variant={featured ? "cream" : "solid"} />
        {plan.quoteOnly ? (
          <BuyButton plan={planKey} variant="ghost" embedded>
            Checkout Whop da rede
          </BuyButton>
        ) : (
          <Link
            href={`/checkout/${planKey}`}
            className={cn(
              "text-center text-sm underline-offset-4 hover:underline",
              featured ? "text-[#f6f1e7]" : "text-muted",
            )}
          >
            Pagar sem sair do site
          </Link>
        )}
      </div>
    </article>
  );
}
