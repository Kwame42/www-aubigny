// Cuvées du Domaine d'Aubigny — données intemporelles

export interface Millésime {
  year: number;
  url: string;
  price: number;
  inStock: boolean;
  odooUrl: string;
}

export interface Cuvee {
  id: string;
  name: string;
  appellation: string;
  type: "regional" | "monopole" | "village" | "premier-cru" | "hommage";
  description: string;
  longDescription?: string;
  slug: string;
  color: "rouge" | "blanc" | "rose";
  region: "aluze" | "rully" | "mercurey";
  vineyards?: string;
  soil?: string;
  exposure?: string;
  altitude?: string;
  vines?: string;
  image?: string;
  millesimes?: Millésime[];
}

export const cuvees: Cuvee[] = [
  {
    id: "bourgogne-blanc",
    name: "Bourgogne Blanc",
    appellation: "Bourgogne",
    type: "regional",
    description: "Vin droit et race, avec des notes d'agrumes",
    slug: "bourgogne-blanc",
    color: "blanc",
    region: "aluze",
    millesimes: [
      { year: 2022, url: "/vins/bourgogne-blanc-2022/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/bb-2022-bourgogne-blanc-2022-4" },
      { year: 2024, url: "/vins/bourgogne-blanc-2024/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/bb-2024-bourgogne-blanc-2024-3" },
      { year: 2025, url: "/vins/bourgogne-blanc-2025/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/bb-2025-bourgogne-blanc-2025-2" },
    ],
  },
  {
    id: "bourgogne-rouge-ouche",
    name: "Bourgogne Rouge Ouche de la Maison",
    appellation: "Bourgogne",
    type: "monopole",
    description: "Un bourgogne rouge unique, plein de texture et d'une très belle longueur",
    slug: "bourgogne-rouge-ouche-de-la-maison-monopole",
    color: "rouge",
    region: "aluze",
    millesimes: [
      { year: 2025, url: "/vins/bourgogne-rouge-ouche-2025/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/omr-2025-bourgogne-rouge-louche-de-la-maison-rouge-2025-monopole-5" },
    ],
  },
  {
    id: "bourgogne-blanc-grand-pres",
    name: "Bourgogne Blanc Grand Prés d'Aubigny",
    appellation: "Bourgogne",
    type: "monopole",
    description: "Vin de caractère qui met à l'honneur le domaine",
    slug: "bourgogne-blanc-grand-pres-d-aubigny-monopole",
    color: "blanc",
    region: "aluze",
    millesimes: [
      { year: 2025, url: "/vins/bourgogne-blanc-grand-pres-d-aubigny-monopole-2025/", price: 27, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/gpa-2025-bourgogne-blanc-grand-pres-daubigny-2025-monopole-6" },
    ],
  },
  {
    id: "rully-village-blanc",
    name: "Rully Village Blanc Les Fromages",
    appellation: "Rully Village",
    type: "village",
    description: "Un terroir qui donne des vins frais, longs, avec un milieu de bouche ample",
    slug: "rully-village-blanc-les-fromanges",
    color: "blanc",
    region: "rully",
    millesimes: [
      { year: 2023, url: "/vins/rully-village-blanc-les-fromages-2023/", price: 36, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/rb-2023-rully-blanc-2023-9" },
      { year: 2024, url: "/vins/rully-village-blanc-les-fromages-2024/", price: 36, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/rb-2024-rully-blanc-2024-8" },
    ],
  },
  {
    id: "mercurey-champs-martin",
    name: "Mercurey 1er Cru Champs Martin",
    appellation: "Mercurey 1er Cru",
    type: "premier-cru",
    description: "Le meilleur terroir à rouge de Mercurey, des vins fins et puissants",
    slug: "mercurey-1er-cru-rouge-champs-martin",
    color: "rouge",
    region: "mercurey",
    millesimes: [
      { year: 2023, url: "/vins/mercurey-champs-martin-2023/", price: 51, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/mcm-2023-mercurey-1er-cru-champs-martin-rouge-2023-11" },
      { year: 2024, url: "/vins/mercurey-champs-martin-2024/", price: 51, inStock: true, odooUrl: "https://shop.aubigny.wine/en/shop/mcm-2024-mercurey-1er-cru-champs-martin-rouge-2024-10" },
    ],
  },
];

export function getCuveeBySlug(slug: string): Cuvee | undefined {
  return cuvees.find((c) => c.slug === slug);
}

export function getCuveesByType(type: Cuvee["type"]): Cuvee[] {
  return cuvees.filter((c) => c.type === type);
}

export function getCuveesByRegion(region: Cuvee["region"]): Cuvee[] {
  return cuvees.filter((c) => c.region === region);
}

export const monopoles = cuvees.filter((c) => c.type === "monopole");
