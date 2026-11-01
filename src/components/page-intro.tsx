import { Container } from "@/components/container";

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-16 sm:py-20">
        <p className="text-sm text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-[-0.03em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{lede}</p>
      </Container>
    </header>
  );
}
