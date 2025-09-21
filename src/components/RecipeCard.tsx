import { Badge } from "@/components/ui/badge";
import type { HeatLevel } from "@/components/SpiceBadge";
import { SpiceBadge } from "@/components/SpiceBadge";
import type { Recipe } from "@/data/recipes";
import { cn } from "@/lib/utils";

const heatThemes: Record<HeatLevel, { background: string; border: string; accent: string }> = {
  1: {
    background: "bg-gradient-to-br from-heat-1/35 via-card to-card",
    border: "border-heat-1/40",
    accent: "text-accent",
  },
  2: {
    background: "bg-gradient-to-br from-heat-2/35 via-card to-card",
    border: "border-heat-2/40",
    accent: "text-accent",
  },
  3: {
    background: "bg-gradient-to-br from-heat-3/35 via-card to-card",
    border: "border-heat-3/40",
    accent: "text-neutral",
  },
  4: {
    background: "bg-gradient-to-br from-heat-4/30 via-card to-card",
    border: "border-heat-4/40",
    accent: "text-neutral",
  },
  5: {
    background: "bg-gradient-to-br from-heat-5/30 via-card to-card",
    border: "border-heat-5/40",
    accent: "text-white",
  },
};

interface RecipeCardProps {
  recipe: Recipe;
  salsaName: string;
  heatLevel?: HeatLevel;
}

export function RecipeCard({ recipe, salsaName, heatLevel = 3 }: RecipeCardProps) {
  const difficultyCopy: Record<Recipe["difficulty"], string> = {
    fácil: "Fácil",
    media: "Media",
    difícil: "Difícil",
  };

  const theme = heatThemes[heatLevel] ?? heatThemes[3];

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[1.9rem] border bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1",
        theme.background,
        theme.border
      )}
    >
      <header className="flex flex-col gap-3 border-b border-border/40 bg-background/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="rounded-full border-border/70 text-xs uppercase tracking-wider text-neutral/70">
            Receta destacada
          </Badge>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-neutral/50 sm:block">
            {heatLevel}/5 en intensidad
          </span>
        </div>
        <SpiceBadge level={heatLevel} />
      </header>
      <div className="flex flex-1 flex-col gap-5 px-6 pb-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-foreground">{recipe.title}</h3>
          <p className="text-sm text-foreground/70">
            Pensada para resaltar la salsa {salsaName.toLowerCase()}. El balance entre ácidos y notas tostadas
            acompaña carnes, vegetales o entradas frescas.
          </p>
        </div>
        <dl className="grid gap-4 text-sm text-foreground/80 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-background/70 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral/60">Tiempo</span>
            <dd className="text-sm font-medium text-foreground">{recipe.time}</dd>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-background/70 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral/60">Dificultad</span>
            <dd>
              <Badge variant={recipe.difficulty === "difícil" ? "accent" : "secondary"}>
                {difficultyCopy[recipe.difficulty]}
              </Badge>
            </dd>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-background/70 px-4 py-3 sm:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral/60">Salsa</span>
            <dd className={cn("text-sm font-medium", theme.accent)}>{salsaName}</dd>
          </div>
        </dl>
        <div className="mt-auto flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-neutral/50">
          <span>🔥 Sabor directo del comal</span>
          <span>🌶️ Ingredientes locales</span>
          <span>🧂 Sin conservadores</span>
        </div>
      </div>
    </article>
  );
}
