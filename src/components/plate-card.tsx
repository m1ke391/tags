import { cn } from "@/lib/cn";
import type { ColorwayId } from "@/lib/content";
import { Stars } from "@/components/stars";

const faces: Record<ColorwayId, string> = {
  navy: "bg-[#143049] text-[#f6f1e7]",
  sand: "bg-[#f4ead8] text-[#143049]",
  ink: "bg-[#1c1e22] text-[#f6f1e7]",
};

export function PlateCard({
  phrase = "Avalie-nos",
  business = "O seu negócio",
  color = "navy",
  float = false,
  className,
}: {
  phrase?: string;
  business?: string;
  color?: ColorwayId;
  float?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("plate-scene", className)}>
      <div className={cn(float && "plate-float")}>
        <div className="plate-shell" aria-hidden>
          <div className={cn("plate-face", faces[color])}>
            <Stars size={15} />
            <div>
              <p className="font-serif text-[1.7rem] leading-none tracking-[-0.03em]">
                {phrase}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.16em] opacity-70">
                {business}
              </p>
            </div>
            <div className="flex w-full items-end justify-between px-1">
              <NfcMark />
              <QrMark light={color !== "sand"} />
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only">
        Maquete da placa {phrase}, com estrelas, símbolo NFC e QR Code.
      </p>
    </div>
  );
}

function NfcMark() {
  return (
    <svg viewBox="0 0 36 24" className="h-6 w-9 opacity-80" fill="none">
      <path
        d="M6 16c2.2-4 4.2-4 6.4 0M6 12c4-6.2 7.4-6.2 11.4 0M6 8c5.8-8.2 10.6-8.2 16.4 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function QrMark({ light }: { light: boolean }) {
  const cells = [
    "111101011",
    "100101001",
    "101101111",
    "111001001",
    "000101010",
    "110101101",
    "101000111",
    "100101001",
    "111101011",
  ];

  return (
    <svg viewBox="0 0 29 29" className="size-12">
      <rect
        width="29"
        height="29"
        rx="2"
        fill={light ? "#f6f1e7" : "#143049"}
      />
      {cells.map((row, y) =>
        row.split("").map((cell, x) =>
          cell === "1" ? (
            <rect
              key={`${x}-${y}`}
              x={2 + x * 2.8}
              y={2 + y * 2.8}
              width="2.2"
              height="2.2"
              fill={light ? "#143049" : "#f6f1e7"}
            />
          ) : null,
        ),
      )}
    </svg>
  );
}
