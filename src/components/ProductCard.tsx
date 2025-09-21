import Link from "next/link";

import type { Product } from "@/data/products";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SpiceBadge } from "@/components/SpiceBadge";

const placeholderSvg = encodeURIComponent(`
  <svg width="400" height="260" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F5C242" />
        <stop offset="100%" stop-color="#E86D11" />
      </linearGradient>
    </defs>
    <rect width="400" height="260" rx="32" fill="url(#grad)" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="36" font-weight="700" fill="#111111">ALICTIVA</text>
  </svg>
`);
const placeholderImage = `data:image/svg+xml,${placeholderSvg}`;

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br from-card via-card to-card/90 shadow-soft transition hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/40 bg-muted/20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={placeholderImage}
          alt={`Ilustración de la salsa ${product.name}`}
          width={400}
          height={260}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral/70">Salsa Alictiva</p>
            <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
          </div>
          <SpiceBadge level={product.heatLevel} />
        </div>
        <p className="text-sm text-foreground/75">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-sm text-neutral/70">
          <span className="inline-flex items-center gap-2 font-medium text-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Lote {product.heatLevel >= 4 ? "picante" : "balanceado"}
          </span>
          <Link
            href={`/productos?destacado=${product.slug}`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-0 text-primary underline-offset-4 hover:text-primary hover:underline"
            )}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </article>
  );
}
