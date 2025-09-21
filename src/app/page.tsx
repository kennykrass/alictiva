import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-12 sm:px-6 sm:py-16">
      <Hero />
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral/70">Colección</span>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Salsas destacadas</h2>
            <p className="text-sm text-foreground/75">
              Selección curada para explorar el abanico de sabores de Alictiva.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
