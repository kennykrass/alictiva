export type Recipe = {
  id: string;
  title: string;
  difficulty: "fácil" | "media" | "difícil";
  time: string;
  salsaId: string;
};

export const recipes: Recipe[] = [
  {
    id: "tostadas-cantina",
    title: "Tostadas de Cantina",
    difficulty: "fácil",
    time: "20 min",
    salsaId: "marea-verde",
  },
  {
    id: "pulpo-al-brasero",
    title: "Pulpo al Brasero",
    difficulty: "media",
    time: "40 min",
    salsaId: "brasa-ancestral",
  },
  {
    id: "costillas-glaseadas",
    title: "Costillas Glaseadas",
    difficulty: "difícil",
    time: "2 h",
    salsaId: "doble-fuego",
  },
  {
    id: "tacos-marinados",
    title: "Tacos Marinados Ceniza",
    difficulty: "media",
    time: "35 min",
    salsaId: "ceniza-dorada",
  },
  {
    id: "ceviche-mango",
    title: "Ceviche Mango Bravo",
    difficulty: "fácil",
    time: "25 min",
    salsaId: "mango-bravo",
  },
  {
    id: "elotes-ancestrales",
    title: "Elotes Ancestrales",
    difficulty: "fácil",
    time: "30 min",
    salsaId: "roja-vibrante",
  },
];
