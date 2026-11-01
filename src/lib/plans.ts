import { siteUrl } from "@/lib/site";

/**
 * WHOP — substitua cada `id` pelo plan ID real antes de vender.
 *
 * Onde encontrar o ID:
 *   Whop Dashboard → produto → Checkout links.
 *   O ID tem o formato `plan_` seguido de uma cadeia (ex.: plan_a1B2c3D4e5).
 *
 * Esse mesmo ID serve para duas coisas:
 *   1. Link direto: https://whop.com/checkout/{id}
 *   2. Checkout embutido: <WhopCheckoutEmbed planId={id} /> em /checkout/[plano]
 *
 * No produto Whop, configure o redirect pós-pagamento para:
 *   {siteUrl}/obrigado
 * O checkout embutido já envia essa returnUrl automaticamente.
 */
export const plans = {
  essencial: {
    id: "plan_ESSENCIAL",
    name: "Essencial",
    audience: "Particulares e um balcão",
    price: 34,
    units: 1,
    unitLabel: "1 placa",
    description:
      "Para ver o efeito num único ponto de contacto: a caixa, a receção ou a bandeja da conta.",
    features: [
      "1 placa NFC com QR Code de reserva",
      "Frase standard «Avalie a sua experiência»",
      "Link do Google programado por nós",
      "Envio para Portugal continental",
    ],
    cta: "Encomendar 1 placa",
    highlighted: false,
    quoteOnly: false,
  },
  balcao: {
    id: "plan_BALCAO",
    name: "Balcão",
    audience: "O mais pedido",
    price: 89,
    units: 3,
    unitLabel: "3 placas",
    description:
      "Três placas com a cara do negócio. O habitual para um café, uma clínica ou um salão.",
    features: [
      "3 placas NFC + QR Code",
      "Logótipo e escolha de cor",
      "Frase à sua medida, até 32 caracteres",
      "O mesmo link, ou um por espaço",
    ],
    cta: "Encomendar pack",
    highlighted: true,
    quoteOnly: false,
  },
  casa: {
    id: "plan_CASA",
    name: "Casa",
    audience: "Vários pontos de contacto",
    price: 229,
    units: 10,
    unitLabel: "10 placas",
    description:
      "Para quem tem sala, receção e balcão, ou mais do que uma morada pequena.",
    features: [
      "10 placas com personalização completa",
      "Até 3 links diferentes",
      "Produção prioritária, 5 dias úteis",
      "Fatura com NIF",
    ],
    cta: "Encomendar 10 placas",
    highlighted: false,
    quoteOnly: false,
  },
  rede: {
    id: "plan_REDE",
    name: "Rede",
    audience: "Grupos e franchises",
    price: null,
    units: 25,
    unitLabel: "25 ou mais",
    description:
      "Uma arte aprovada uma vez e repetida em todas as unidades. Preço de volume.",
    features: [
      "Desconto por quantidade",
      "Arte-mãe para toda a rede",
      "Links diferentes por ficha do Google",
      "Faturação e condições a combinar",
    ],
    cta: "Pedir orçamento",
    highlighted: false,
    quoteOnly: true,
  },
} as const;

export type PlanKey = keyof typeof plans;
export type Plan = (typeof plans)[PlanKey];

const placeholderIds = new Set<string>([
  plans.essencial.id,
  plans.balcao.id,
  plans.casa.id,
  plans.rede.id,
]);

export function isPlanKey(value: string): value is PlanKey {
  return value in plans;
}

export function getPlan(key: string): Plan | undefined {
  return isPlanKey(key) ? plans[key] : undefined;
}

export function listPlans(): Plan[] {
  return Object.values(plans);
}

/** Link de checkout alojado no Whop. O ID vem de `plans`. */
export function whopCheckoutUrl(planId: string) {
  return `https://whop.com/checkout/${planId}`;
}

export function isPlaceholderPlanId(planId: string) {
  return placeholderIds.has(planId);
}

export function formatEuro(value: number) {
  const hasCents = Math.round(value * 100) % 100 !== 0;
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(value);
}

export function unitPrice(plan: Plan) {
  if (plan.price == null) return null;
  return plan.price / plan.units;
}

export function checkoutReturnUrl() {
  return `${siteUrl}/obrigado`;
}
