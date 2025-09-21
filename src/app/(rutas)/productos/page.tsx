import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Productos",
  description: "Explora todas las salsas artesanales Alictiva y encuentra tu combinación ideal.",
};

export default function ProductosPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6">
      <header className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral/70">Catálogo</span>
        <h1 className="text-3xl font-bold text-foreground">Nuestras salsas</h1>
        <p className="max-w-2xl text-sm text-foreground/75">
          Cada receta combina ingredientes locales y técnicas de fuego lento para destacar notas cítricas, ahumadas y
          dulces. Elige tu intensidad favorita y acompaña tus platillos con personalidad.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
