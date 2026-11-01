"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FaqList() {
  const [openId, setOpenId] = useState<string>(faqs[0].id);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item) => {
        const open = openId === item.id;
        const panelId = `faq-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? "" : item.id)}
              >
                {item.question}
                <ChevronDown
                  size={18}
                  className={cn("shrink-0 text-muted transition", open && "rotate-180")}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-5 leading-7 text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
