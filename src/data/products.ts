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
    name: "Próximamente",
    slug: "doble-fuego",
    heatLevel: 5,
    shortDescription: "",
  },
  {
    id: "mango-bravo",
    name: "Próximamente",
    slug: "mango-bravo",
    heatLevel: 3,
    shortDescription: "",
  },
  {
    id: "ceniza-dorada",
    name: "Próximamente",
    slug: "ceniza-dorada",
    heatLevel: 1,
    shortDescription: "",
  },
];
