const timeline = [
  {
    year: "2012",
    title: "El primer lote",
    copy:
      "En una cocina familiar en Monterrey nace la receta base, cuidando la fermentación lenta y el toque ahumado perfecto.",
  },
  {
    year: "2016",
    title: "Alianza con productores",
    copy:
      "Nos asociamos con agricultores de chile de la región para asegurar calidad, trazabilidad y comercio justo.",
  },
  {
    year: "2019",
    title: "Nacimiento de Alictiva",
    copy:
      "Presentamos oficialmente la marca en mercados locales, con tres salsas emblemáticas y talleres gastronómicos.",
  },
  {
    year: "2023",
    title: "Expansión y laboratorio creativo",
    copy:
      "Abrimos nuestro laboratorio de salsas experimentales y lanzamos ediciones limitadas en colaboración con chefs.",
  },
];

export const metadata = {
  title: "Historia",
  description: "Conoce el origen y evolución de Alictiva, una marca que nace del fuego y la comunidad.",
};

export default function HistoriaPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-12 sm:px-6">
      <header className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral/70">Nuestro fuego</span>
        <h1 className="text-3xl font-bold text-foreground">Nuestra historia</h1>
        <p className="text-sm text-foreground/75">
          Alictiva surge de un deseo por embotellar el carácter del fuego mexicano. Cada hito representa la búsqueda de
          sabores honestos, la colaboración con productores locales y el respeto por las tradiciones.
        </p>
      </header>

      <div className="flex flex-col gap-4 rounded-[2rem] border border-border/60 bg-gradient-to-br from-card via-card/95 to-secondary/10 p-8 text-sm text-foreground/80 sm:text-base shadow-soft">
        <p>
          Creemos en el poder del picante para unir familias, despertar conversaciones y celebrar la diversidad de
          ingredientes que ofrece México. Trabajamos con lotes pequeños, controlando cada fase desde la selección de
          chiles hasta el empacado final, asegurando que cada botella tenga la intensidad y equilibrio que nos define.
        </p>
        <p>
          Nuestro compromiso es innovar sin perder de vista las raíces. Por eso reinterpretamos recetas tradicionales
          con técnicas contemporáneas, siempre honrando a quienes han transmitido sus saberes de generación en
          generación.
        </p>
      </div>

      <section className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-[2px] rounded-full bg-border/70 sm:block" aria-hidden="true" />
        <ol className="flex flex-col gap-6">
          {timeline.map((item) => (
            <li key={item.year} className="relative rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-soft sm:pl-16">
              <div className="absolute left-4 top-8 hidden h-4 w-4 rounded-full border-2 border-background bg-primary sm:block" aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral">{item.year}</span>
                <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                <p className="text-sm text-foreground/75">{item.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
