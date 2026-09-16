// Cuvées du Domaine d'Aubigny — données intemporelles

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
