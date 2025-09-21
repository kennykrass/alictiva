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
    name: "Original",
    slug: "original",
    heatLevel: 3,
    shortDescription: "Nuestra salsa base: equilibrio clásico entre notas cítricas y humo suave para el día a día.",
  },
  {
    id: "marea-verde",
    name: "Inclusiva",
    slug: "inclusiva",
    heatLevel: 2,
    shortDescription: "Verde, fresca y amable con todos los paladares: hierbas, acidez ligera y mucha versatilidad.",
  },
  {
    id: "roja-vibrante",
    name: "Radioactiva",
    slug: "radioactiva",
    heatLevel: 4,
    shortDescription: "Roja intensa de chiles y ajo rostizado: golpe de sabor inmediato con final prolongado.",
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
