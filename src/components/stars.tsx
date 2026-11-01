import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function Stars({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span className={cn("inline-flex gap-0.5 text-gold", className)} aria-hidden>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={size} className="fill-gold" />
      ))}
    </span>
  );
}
