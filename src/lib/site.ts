export const siteName = "ReviewTap";

/**
 * URL pública do site. Usada em SEO, Open Graph e no returnUrl do Whop.
 * Defina NEXT_PUBLIC_SITE_URL na Vercel (ex.: https://www.oseudominio.pt).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reviewtap.pt"
).replace(/\/$/, "");

/** Substitua pelo email que deve aparecer no rodapé e no formulário. */
export const contactEmail = "ola@reviewtap.pt";

export const siteDescription =
  "Placa NFC para o balcão. O cliente aproxima o telemóvel e a página de avaliação do Google abre sozinha. Sem aplicação, com QR Code de reserva.";
