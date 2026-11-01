import { industries } from "@/lib/content";

function Row({ clone = false }: { clone?: boolean }) {
  return (
    <ul className={clone ? "marquee-clone flex" : "flex"} aria-hidden={clone}>
      {industries.map((name) => (
        <li
          key={name}
          className="flex items-center gap-6 px-3 text-sm tracking-wide text-muted"
        >
          <span>{name}</span>
          <span className="text-gold" aria-hidden>
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export function IndustryMarquee() {
  return (
    <div className="marquee overflow-hidden border-y border-line py-4">
      <div className="marquee-track">
        <Row />
        <Row clone />
      </div>
    </div>
  );
}
