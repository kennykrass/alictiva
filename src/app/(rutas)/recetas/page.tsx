import Link from "next/link";

import { RecipeCard } from "@/components/RecipeCard";
import { Button, buttonVariants } from "@/components/ui/button";
import type { HeatLevel } from "@/components/SpiceBadge";
import { products } from "@/data/products";
import { recipes } from "@/data/recipes";
import { cn } from "@/lib/utils";

const difficultyOptions = [
  { value: "", label: "Todas" },
  { value: "fácil", label: "Fácil" },
  { value: "media", label: "Media" },
  { value: "difícil", label: "Difícil" },
];

type RecetasPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata = {
  title: "Recetas",
  description: "Recetas con salsas Alictiva para inspirar tu próxima reunión.",
};

export default async function RecetasPage({ searchParams }: RecetasPageProps) {
  const params = await searchParams;
  const selectedSalsa = typeof params.salsa === "string" ? params.salsa : "";
  const selectedDifficulty =
    typeof params.dificultad === "string" ? params.dificultad : "";

  const productMap = new Map(products.map((product) => [product.id, product] as const));

  const filteredRecipes = recipes.filter((recipe) => {
    const matchSalsa = selectedSalsa ? recipe.salsaId === selectedSalsa : true;
    const matchDifficulty = selectedDifficulty ? recipe.difficulty === selectedDifficulty : true;
    return matchSalsa && matchDifficulty;
  });

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-foreground">Recetario Alictiva</h1>
        <p className="max-w-2xl text-sm text-foreground/75">
          Descubre combinaciones rápidas y de autor para cada una de nuestras salsas. Ajusta los filtros para
          encontrar la receta perfecta para tu mesa.
        </p>
      </header>

      <form className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-soft sm:flex-row sm:items-end">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-neutral" htmlFor="salsa">
            Salsa
          </label>
          <select
            id="salsa"
            name="salsa"
            defaultValue={selectedSalsa}
            className="h-11 rounded-md border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Todas</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-neutral" htmlFor="dificultad">
            Dificultad
          </label>
          <select
            id="dificultad"
            name="dificultad"
            defaultValue={selectedDifficulty}
            className="h-11 rounded-md border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {difficultyOptions.map((option) => (
              <option key={option.value || "all"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-3">
          <Button type="submit" className="w-full sm:w-auto">
            Aplicar filtros
          </Button>
          <Link
            href="/recetas"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "w-full text-center sm:w-auto")}
          >
            Limpiar
          </Link>
        </div>
      </form>

      <section className="grid gap-6 sm:grid-cols-2">
        {filteredRecipes.length ? (
          filteredRecipes.map((recipe) => {
            const salsa = productMap.get(recipe.salsaId);
            return (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                salsaName={salsa?.name ?? "Salsa Alictiva"}
                heatLevel={(salsa?.heatLevel as HeatLevel | undefined) ?? 3}
              />
            );
          })
        ) : (
          <div className="rounded-2xl border border-dashed bg-background p-8 text-center text-sm text-foreground/60">
            No encontramos recetas para los filtros seleccionados. Intenta combinar otra salsa o dificultad.
          </div>
        )}
      </section>
    </div>
  );
}
