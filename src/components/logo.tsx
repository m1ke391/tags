import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-ink", className)}>
      <svg viewBox="0 0 32 32" aria-hidden className="size-8">
        <rect width="32" height="32" rx="9" fill="#143049" />
        <path
          d="M8.5 15.2c1.9-3.3 3.6-3.3 5.5 0s3.6 3.3 5.5 0 3.6-3.3 5.5 0"
          fill="none"
          stroke="#E0B15A"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="16" cy="22.2" r="1.35" fill="#F6F1E7" />
      </svg>
      <span className="font-serif text-[1.35rem] leading-none tracking-[-0.03em]">
        ReviewTap
      </span>
    </span>
  );
}
