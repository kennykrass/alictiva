export type Product = {
  id: string;
  name: string;
  slug: string;
  heatLevel: 1 | 2 | 3 | 4 | 5;
  shortDescription: string;
};

export const products: Product[] = [
  {
    id: "brasa-ancestral",
    name: "Brasa Ancestral",
    slug: "brasa-ancestral",
    heatLevel: 3,
    shortDescription: "Balance cítrico y ahumado inspirado en los comales de la costa Pacífica.",
  },
  {
    id: "marea-verde",
    name: "Marea Verde",
    slug: "marea-verde",
    heatLevel: 2,
    shortDescription: "Salsa verde con hierbas frescas y acidez brillante para cualquier antojito.",
  },
  {
    id: "roja-vibrante",
    name: "Roja Vibrante",
    slug: "roja-vibrante",
    heatLevel: 4,
    shortDescription: "Chile de árbol y ajo rostizado con final dulce que enciende cada bocado.",
  },
  {
    id: "doble-fuego",
    name: "Doble Fuego",
    slug: "doble-fuego",
    heatLevel: 5,
    shortDescription: "Habanero y piquín infusionados en naranja para quienes piden intensidad real.",
  },
  {
    id: "mango-bravo",
    name: "Mango Bravo",
    slug: "mango-bravo",
    heatLevel: 3,
    shortDescription: "Mango ataulfo maduro con especias cálidas y un picor juguetón en el final.",
  },
  {
    id: "ceniza-dorada",
    name: "Ceniza Dorada",
    slug: "ceniza-dorada",
    heatLevel: 1,
    shortDescription: "Toque ahumado ligero con chile guajillo para marinar y terminar platos.",
  },
];
