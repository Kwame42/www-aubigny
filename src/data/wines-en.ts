export interface Wine {
  id: string;
  tag: string;
  name: string;
  sub: string;
  note: string;
  price: number;
  ground: string;
  href?: string;
}

export const wines: Wine[] = [
  { id: "ouche", tag: "Monopoly", name: "Bourgogne Rouge Ouche de la Maison", sub: "Aluze · Pinot Noir", note: "Estate monopoly, full-bodied with exceptional length.", price: 25, ground: "#2A1622", href: "/en/wines/bourgogne-rouge-ouche-de-la-maison-monopole/" },
  { id: "grandpres", tag: "Monopoly", name: "Bourgogne Blanc Grand Prés d'Aubigny", sub: "Aluze · Chardonnay", note: "A wine of character and distinction. Estate monopoly.", price: 25, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc-grand-pres-d-aubigny-monopole/" },
  { id: "bourgogne", tag: "Bourgogne", name: "Bourgogne Blanc", sub: "Aluze · Chardonnay", note: "Refined and elegant, with citrus notes and mineral character.", price: 25, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc/" },
  { id: "bourgogneblanc2022", tag: "Bourgogne", name: "Bourgogne Blanc 2022", sub: "Aluze · Chardonnay", note: "Our first wine, crisp and invigorating.", price: 27, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc-2022/" },
  { id: "bourgogneblanc2024", tag: "Bourgogne", name: "Bourgogne Blanc 2024", sub: "Aluze · Chardonnay", note: "Crisp and lively, white flower and stone fruit notes.", price: 27, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc-2024/" },
  { id: "bourgogneblanc2025", tag: "Bourgogne", name: "Bourgogne Blanc 2025", sub: "Aluze · Chardonnay", note: "Powerful and broad, white flower and peach.", price: 27, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc-2025/" },
  { id: "rully", tag: "Rully Village", name: "Rully Village Blanc Les Fromages", sub: "Rully · Chardonnay", note: "Terroir producing fresh, long wines with ample mid-palate.", price: 31, ground: "#DCE5D3", href: "/en/wines/rully-village-blanc-les-fromages/" },
  { id: "rullyblanc2023", tag: "Rully Village", name: "Rully Village Blanc Les Fromages 2023", sub: "Rully · Chardonnay", note: "Beautiful mid-palate and excellent finish.", price: 36, ground: "#DCE5D3", href: "/en/wines/rully-village-blanc-les-fromages-2023/" },
  { id: "rullyblanc2024", tag: "Rully Village", name: "Rully Village Blanc Les Fromages 2024", sub: "Rully · Chardonnay", note: "Great Épicerie favorite, fine attack and liveliness.", price: 36, ground: "#DCE5D3", href: "/en/wines/rully-village-blanc-les-fromages-2024/" },
  { id: "champsmartin", tag: "Mercurey 1er Cru", name: "Mercurey 1er Cru Champs Martin", sub: "2023 · Pinot Noir", note: "Mercurey's finest red terroir, producing refined and powerful wines.", price: 51, ground: "#2A1622", href: "/en/wines/mercurey-1er-cru-rouge-champs-martin/" }
];

export const byId = (id: string): Wine => wines.find((w) => w.id === id)!;

export const featured = ["champsmartin", "rully", "ouche", "grandpres"].map(byId);

export const groups = [
  { title: "Aluze & Monopolies", note: "Estate parcels on the Aluze commune.", wines: ["ouche", "grandpres"].map(byId) },
  { title: "Rully", note: "Chardonnay on clay-limestone soil at 250 meters.", wines: [byId("rully")] },
  { title: "Mercurey", note: "First growth, Champs Martin climat.", wines: [byId("champsmartin")] }
];

export const euro = (n: number) => n.toLocaleString("en-US") + " €";

/** Bourgogne Rouge Ouche de la Maison 2025 — Monopoly */
export const oucheRouge2025EN = {
  price: 27,
  stock: true,
  tech: [
    { k: "Appellation", v: "Bourgogne" },
    { k: "Varietal", v: "Pinot Noir 100%" },
    { k: "Parcel size", v: null },
    { k: "Vine age", v: null },
    { k: "Soil", v: null },
    { k: "Exposure", v: "North" },
    { k: "Altitude", v: null },
    { k: "Certification", v: "Organic farming" },
    { k: "Yield", v: null },
    { k: "Harvest date", v: "September 5, 2025" },
    { k: "Winemaking", v: "Partially destemmed" },
    { k: "Aging", v: "Oak barrel and amphora" },
    { k: "ABV", v: "12.5%" },
    { k: "pH", v: null },
    { k: "Total acidity", v: null },
    { k: "Total SO2", v: null },
    { k: "Fining", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Bourgogne Blanc Grand Prés d'Aubigny 2025 — Monopoly */
export const grandPresBlanc2025EN = {
  price: 27,
  stock: true,
  tech: [
    { k: "Appellation", v: "Bourgogne" },
    { k: "Varietal", v: "Chardonnay 100%" },
    { k: "Parcel size", v: null },
    { k: "Vine age", v: null },
    { k: "Soil", v: null },
    { k: "Exposure", v: null },
    { k: "Altitude", v: null },
    { k: "Certification", v: "Organic farming" },
    { k: "Yield", v: null },
    { k: "Harvest date", v: "September 6, 2025" },
    { k: "Winemaking", v: "Direct pressing" },
    { k: "Aging", v: "Amphora and oak barrel, 2nd/3rd fill (2-3 years)" },
    { k: "ABV", v: "13%" },
    { k: "pH", v: null },
    { k: "Total acidity", v: null },
    { k: "Total SO2", v: null },
    { k: "Fining", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Mercurey 1er Cru Champs Martin 2024 */
export const champsMartin2024EN = {
  price: 51,
  stock: true,
  tech: [
    { k: "Appellation", v: "Mercurey 1er Cru" },
    { k: "Varietal", v: "Pinot Noir" },
    { k: "Parcel size", v: "1.5 ha" },
    { k: "Vine age", v: "20 years" },
    { k: "Soil", v: "Clay-limestone" },
    { k: "Exposure", v: "South to south-east" },
    { k: "Slope", v: "Up to 25%" },
    { k: "Altitude", v: "324 m" },
    { k: "Certification", v: "Organic farming" },
    { k: "Yield", v: null },
    { k: "Harvest date", v: "September 5, 2024" },
    { k: "Winemaking", v: "50% destemmed" },
    { k: "Aging", v: "Oak barrel 228L (2-4 fill)" },
    { k: "ABV", v: "13%" },
    { k: "pH", v: null },
    { k: "Total acidity", v: null },
    { k: "Total SO2", v: null },
    { k: "Fining", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};
