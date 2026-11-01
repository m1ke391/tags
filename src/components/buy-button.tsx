import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { getPlan, whopCheckoutUrl, type PlanKey } from "@/lib/plans";

type Variant = "solid" | "ghost" | "cream" | "line-light";

const variants: Record<Variant, string> = {
  solid: "btn btn-solid",
  ghost: "btn btn-ghost",
  cream: "btn btn-cream",
  "line-light": "btn btn-line-light",
};

/**
 * Botão de compra ligado ao Whop.
 * O href é https://whop.com/checkout/{planId}.
 * O planId placeholder está em src/lib/plans.ts — substitua-o lá.
 * Com `embedded`, o botão abre /checkout/[plano], que usa WhopCheckoutEmbed.
 */
export function BuyButton({
  plan,
  children,
  variant = "solid",
  className,
  embedded = false,
}: {
  plan: PlanKey;
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
  embedded?: boolean;
}) {
  const item = getPlan(plan);
  if (!item) return null;

  const classNames = cn(variants[variant], className);
  const label = children ?? item.cta;

  if (item.quoteOnly && !embedded) {
    return (
      <Link href="/empresas#orcamento" className={classNames}>
        {label}
      </Link>
    );
  }

  if (embedded) {
    return (
      <Link href={`/checkout/${plan}`} className={classNames}>
        {label}
      </Link>
    );
  }

  return (
    <a href={whopCheckoutUrl(item.id)} className={classNames}>
      {label}
      <ArrowUpRight size={16} aria-hidden />
    </a>
  );
}
