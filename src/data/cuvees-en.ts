// English translations of Domaine d'Aubigny cuvées

import type { Cuvee } from "./cuvees";

export const cueesEN: Cuvee[] = [
  {
    id: "bourgogne-blanc",
    name: "Bourgogne Blanc",
    appellation: "Bourgogne",
    type: "regional",
    description: "White Burgundy from Aluze. Refined Chardonnay with citrus notes and mineral character from clay-limestone terroir. Aged in stainless steel. Age 5–7 years.",
    slug: "bourgogne-blanc",
    color: "blanc",
    region: "aluze",
    millesimes: [
      { year: 2022, url: "/en/wines/bourgogne-blanc-2022/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/bb-2022-bourgogne-blanc-2022-4" },
      { year: 2024, url: "/en/wines/bourgogne-blanc-2024/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/bb-2024-bourgogne-blanc-2024-3" },
      { year: 2025, url: "/en/wines/bourgogne-blanc-2025/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/bb-2025-bourgogne-blanc-2025-2" },
    ],
  },
  {
    id: "bourgogne-rouge-ouche",
    name: "Bourgogne Rouge Ouche de la Maison",
    appellation: "Bourgogne",
    type: "monopole",
    description: "Estate monopoly red from Aluze. Pinot Noir aged in oak with supple texture and silky tannins. Drink young or age 8–10 years.",
    slug: "bourgogne-rouge-ouche-de-la-maison-monopole",
    color: "rouge",
    region: "aluze",
    millesimes: [
      { year: 2025, url: "/en/wines/bourgogne-rouge-ouche-2025/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/omr-2025-bourgogne-rouge-louche-de-la-maison-rouge-2025-monopole-5" },
    ],
  },
  {
    id: "bourgogne-blanc-grand-pres",
    name: "Bourgogne Blanc Grand Prés d'Aubigny",
    appellation: "Bourgogne",
    type: "monopole",
    description: "Estate monopoly white from Aluze. Exceptional Chardonnay aged in Burgundy barrels. Distinctive minerality and subtle tension. Age 10+ years.",
    slug: "bourgogne-blanc-grand-pres-d-aubigny-monopole",
    color: "blanc",
    region: "aluze",
    millesimes: [
      { year: 2025, url: "/en/wines/bourgogne-blanc-grand-pres-d-aubigny-monopole-2025/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/gpa-2025-bourgogne-blanc-grand-pres-daubigny-2025-monopole-6" },
    ],
  },
  {
    id: "rully-village-blanc",
    name: "Rully Village Blanc Les Fromanges",
    appellation: "Rully Village",
    type: "village",
    description: "Chardonnay from Les Fromanges at 250 m. Aromatic freshness and ample mid-palate. White fruit and flinty notes. Excellent with shellfish.",
    slug: "rully-village-blanc-les-fromanges",
    color: "blanc",
    region: "rully",
    millesimes: [
      { year: 2023, url: "/en/wines/rully-village-blanc-les-fromanges-2023/", price: 36, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/rb-2023-rully-blanc-2023-9" },
      { year: 2024, url: "/en/wines/rully-village-blanc-les-fromanges-2024/", price: 36, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/rb-2024-rully-blanc-2024-8" },
    ],
  },
  {
    id: "mercurey-1er-cru",
    name: "Mercurey 1er Cru Champs Martin",
    appellation: "Mercurey 1er Cru",
    type: "premier-cru",
    description: "First Growth red from finest terroir in Mercurey. Pinot Noir, 20-year vines, south-southwest exposure. Aged in concrete. Age 12–15 years.",
    slug: "mercurey-1er-cru-rouge-champs-martin",
    color: "rouge",
    region: "mercurey",
    millesimes: [
      { year: 2023, url: "/en/wines/mercurey-champs-martin-2023/", price: 51, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/mcm-2023-mercurey-1er-cru-champs-martin-rouge-2023-11" },
      { year: 2024, url: "/en/wines/mercurey-champs-martin-2024/", price: 51, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/mcm-2024-mercurey-1er-cru-champs-martin-rouge-2024-10" },
    ],
  },
];

export const getCueesENBySlug = (slug: string): Cuvee | undefined => {
  return cueesEN.find((c) => c.slug === slug);
};

export const monopolesEN = cueesEN.filter((c) => c.type === "monopole");
