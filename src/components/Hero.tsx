import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BASE_PATH } from "@/lib/base-path";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-card via-card/90 to-secondary/15 px-6 py-16 shadow-soft sm:px-16">
      <div className="absolute -top-24 -left-10 h-52 w-52 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-36 -right-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-col gap-8 text-center sm:text-left">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral sm:mx-0">
          Salsas artesanales mexicanas
        </span>
        {/* Layout a 2 columnas en desktop: texto a la izquierda, logo a la derecha */}
        <div className="grid gap-6 sm:grid-cols-2 sm:items-start">
          <div className="flex-1 sm:pr-6">
            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Intensifica cada platillo con el sabor auténtico de <span className="text-primary">ALICTIVA</span>
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base text-foreground/80 sm:text-lg">
              Seleccionamos chiles de productores locales y técnicas ancestrales para crear salsas que despiertan
              sentidos y conversaciones. Elige tu intensidad y sorprende en cada mesa.
            </p>
          </div>
          {/* Logo grande a la derecha en desktop */}
          <div className="order-first -mt-2 w-full justify-self-end sm:order-none sm:mt-0 sm:max-w-[520px]">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 bg-background/70 shadow-soft">
              <Image
                src={`${BASE_PATH}/logo-alictiva.jpg`}
                alt="Logotipo de Alictiva"
                width={1040}
                height={780}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="hidden shrink-0 gap-3 sm:flex">
            <Link
              href="/productos"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "shadow-soft")}
            >
              Probar Salsas
            </Link>
            <Link
              href="/historia"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "border border-border/60 bg-background/60 backdrop-blur")}
            >
              Conocer nuestra historia
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:hidden">
          <Link
            href="/productos"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full shadow-soft")}
          >
            Probar Salsas
          </Link>
          <Link
            href="/historia"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "w-full border border-border/60 bg-background/60 backdrop-blur"
            )}
          >
            Conocer nuestra historia
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-border/50 bg-background/70 px-6 py-4 text-xs font-medium text-neutral/80 sm:justify-start">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Lotes pequeños con chiles seleccionados a mano
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
            Sin conservadores artificiales
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Recetas inspiradas en el fuego mexicano
          </div>
        </div>
      </div>
    </section>
  );
}
