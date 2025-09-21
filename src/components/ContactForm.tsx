"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    console.info("Formulario de contacto enviado", Object.fromEntries(formData.entries()));
    setStatus("success");
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-[2rem] border border-border/60 bg-gradient-to-br from-card via-card/95 to-secondary/10 p-8 shadow-soft"
    >
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-neutral" htmlFor="nombre">
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          className="h-11 rounded-xl border border-border bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-neutral" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 rounded-xl border border-border bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-neutral" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className="rounded-xl border border-border bg-background px-3 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto shadow-soft">
          Enviar mensaje
        </Button>
        {status === "success" ? (
          <p className="text-sm font-medium text-accent">
            ¡Gracias! Revisaremos tu mensaje y nos pondremos en contacto.
          </p>
        ) : (
          <span className="text-xs text-foreground/60">Nunca compartimos tu información con terceros.</span>
        )}
      </div>
    </form>
  );
}
