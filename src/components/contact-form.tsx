"use client";

import { useState } from "react";
import { businessTypes } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "demo" | "error";

/**
 * Orçamentos via Formspree.
 * Defina NEXT_PUBLIC_FORMSPREE_ID com o ID do formulário (a parte depois de /f/).
 * Sem essa variável o formulário não envia email e avisa quem está a configurar o site.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company_website") ?? "").length > 0) {
      setStatus("sent");
      form.reset();
      return;
    }

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus("demo");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-line bg-foam px-6 py-8">
        <h3 className="font-serif text-3xl tracking-tight">Pedido recebido.</h3>
        <p className="mt-3 max-w-md leading-7 text-muted">
          Respondemos em um dia útil, nos dias de semana, com preço, prazo e o
          que precisamos da arte.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome" name="nome" autoComplete="name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Telefone" name="telefone" type="tel" autoComplete="tel" />
        <label className="grid gap-1.5 text-sm">
          Tipo de negócio
          <select name="negocio" className="field" defaultValue={businessTypes[0]} required>
            {businessTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <Field
        label="Quantidade estimada"
        name="quantidade"
        type="number"
        min={1}
        required
        placeholder="Por exemplo, 25"
      />
      <label className="grid gap-1.5 text-sm">
        O que precisa
        <textarea
          name="mensagem"
          required
          rows={5}
          className="field resize-y"
          placeholder="Número de unidades, se os links são iguais ou diferentes, e se já tem o logótipo."
        />
      </label>
      <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        Site
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" className="btn btn-solid w-full sm:w-fit" disabled={status === "sending"}>
        {status === "sending" ? "A enviar…" : "Pedir orçamento"}
      </button>
      <p className="text-sm leading-6 text-muted">
        Usamos estes dados só para responder ao orçamento. Não entram numa lista
        de newsletters.
      </p>
      {status === "demo" ? (
        <p role="status" className="rounded-2xl bg-gold-soft px-4 py-3 text-sm leading-6">
          O formulário ainda não está ligado a uma caixa de correio, por isso a
          mensagem não foi enviada. Antes de publicar, defina{" "}
          <code>NEXT_PUBLIC_FORMSPREE_ID</code> com o ID do Formspree.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="text-sm text-muted">
          Não conseguimos enviar. Tente outra vez ou escreva para o email no
          rodapé.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  min?: number;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      {label}
      <input
        className="field"
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        min={min}
      />
    </label>
  );
}
