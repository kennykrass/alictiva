export type Recipe = {
  id: string;
  title: string;
  difficulty: "fácil" | "media" | "difícil";
  time: string;
  salsaId: string;
  tag: "Original" | "Inclusiva" | "Radioactiva";
};

export const recipes: Recipe[] = [
  {
    id: "tostadas-cantina",
    title: "Tostadas de Cantina",
    difficulty: "fácil",
    time: "20 min",
    salsaId: "marea-verde",
    tag: "Original",
  },
  {
    id: "pulpo-al-brasero",
    title: "Pulpo al Brasero",
    difficulty: "media",
    time: "40 min",
    salsaId: "brasa-ancestral",
    tag: "Inclusiva",
  },
  {
    id: "costillas-glaseadas",
    title: "Costillas Glaseadas",
    difficulty: "difícil",
    time: "2 h",
    salsaId: "doble-fuego",
    tag: "Radioactiva",
  },
  {
    id: "tacos-marinados",
    title: "Tacos Marinados Ceniza",
    difficulty: "media",
    time: "35 min",
    salsaId: "ceniza-dorada",
    tag: "Original",
  },
  {
    id: "ceviche-mango",
    title: "Ceviche Mango Bravo",
    difficulty: "fácil",
    time: "25 min",
    salsaId: "mango-bravo",
    tag: "Inclusiva",
  },
  {
    id: "elotes-ancestrales",
    title: "Elotes Ancestrales",
    difficulty: "fácil",
    time: "30 min",
    salsaId: "roja-vibrante",
    tag: "Radioactiva",
  },
];
