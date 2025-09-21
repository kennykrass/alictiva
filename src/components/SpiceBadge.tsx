import { cn } from "@/lib/utils";

export type HeatLevel = 1 | 2 | 3 | 4 | 5;

const heatStyles: Record<HeatLevel, { background: string; text: string; label: string; dot: string }> = {
  1: { background: "bg-heat-1", text: "text-accent", label: "Suave", dot: "bg-accent" },
  2: { background: "bg-heat-2", text: "text-accent", label: "Agradable", dot: "bg-accent" },
  3: { background: "bg-heat-3", text: "text-neutral", label: "Medio", dot: "bg-secondary" },
  4: { background: "bg-heat-4", text: "text-neutral", label: "Fuerte", dot: "bg-primary" },
  5: { background: "bg-heat-5", text: "text-white", label: "Intenso", dot: "bg-primary" },
};

interface SpiceBadgeProps {
  level: HeatLevel;
}

export function SpiceBadge({ level }: SpiceBadgeProps) {
  const style = heatStyles[level] ?? heatStyles[3];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
        style.background,
        style.text
      )}
      aria-label={`Nivel de picor ${level} de 5`}
    >
      <span className={cn("h-2.5 w-2.5 rounded-full", style.dot)} aria-hidden="true" />
      {style.label}
    </span>
  );
}
