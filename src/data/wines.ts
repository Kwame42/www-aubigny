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
  { id: "ouche", tag: "Monopole", name: "Bourgogne Rouge Ouche de la Maison", sub: "Aluze · Pinot noir", note: "Monopole du domaine, plein de texture et d'une très belle longueur.", price: 25, ground: "#2A1622", href: "/vins/bourgogne-rouge-ouche-de-la-maison-monopole/" },
  { id: "grandpres", tag: "Monopole", name: "Bourgogne Blanc Grand Prés d'Aubigny", sub: "Aluze · Chardonnay", note: "Vin de caractère qui met à l'honneur le domaine.", price: 25, ground: "#DCE5D3", href: "/vins/bourgogne-blanc-grand-pres-d-aubigny-monopole/" },
  { id: "bourgogne", tag: "Bourgogne", name: "Bourgogne Blanc", sub: "Aluze · Chardonnay", note: "Vin droit et race, avec des notes d'agrumes.", price: 25, ground: "#DCE5D3", href: "/vins/bourgogne-blanc/" },
  { id: "bourgogneblanc2022", tag: "Bourgogne", name: "Bourgogne Blanc 2022", sub: "Aluze · Chardonnay", note: "Notre premier vin, droit et vivifiant.", price: 27, ground: "#DCE5D3", href: "/vins/bourgogne-blanc-2022/" },
  { id: "bourgogneblanc2024", tag: "Bourgogne", name: "Bourgogne Blanc 2024", sub: "Aluze · Chardonnay", note: "Droit et vif, notes de fleur blanche.", price: 27, ground: "#DCE5D3", href: "/vins/bourgogne-blanc-2024/" },
  { id: "bourgogneblanc2025", tag: "Bourgogne", name: "Bourgogne Blanc 2025", sub: "Aluze · Chardonnay", note: "Puissant et large, fleur blanche et pêche.", price: 27, ground: "#DCE5D3", href: "/vins/bourgogne-blanc-2025/" },
  { id: "rully", tag: "Rully Village", name: "Rully Village Blanc Les Fromages", sub: "Rully · Chardonnay", note: "Terroir qui donne des vins frais, longs, avec un milieu de bouche ample.", price: 31, ground: "#DCE5D3", href: "/vins/rully-village-blanc-les-fromanges/" },
  { id: "rullyblanc2023", tag: "Rully Village", name: "Rully Village Blanc Les Fromages 2023", sub: "Rully · Chardonnay", note: "Beau milieu de bouche et très belle finale.", price: 36, ground: "#DCE5D3", href: "/vins/rully-village-blanc-les-fromages-2023/" },
  { id: "rullyblanc2024", tag: "Rully Village", name: "Rully Village Blanc Les Fromages 2024", sub: "Rully · Chardonnay", note: "Coup de cœur Grande Épicerie, belle attaque et vivacité.", price: 36, ground: "#DCE5D3", href: "/vins/rully-village-blanc-les-fromages-2024/" },
  { id: "champsmartin", tag: "Mercurey 1er Cru", name: "Mercurey 1er Cru Champs Martin", sub: "2023 · Pinot noir", note: "Le meilleur terroir à rouge de Mercurey, des vins fins et puissants.", price: 51, ground: "#2A1622", href: "/vins/mercurey-1er-cru-rouge-champs-martin/" }
];

export const byId = (id: string): Wine => wines.find((w) => w.id === id)!;

export const featured = ["champsmartin", "rully", "ouche", "grandpres"].map(byId);

export const groups = [
  { title: "Aluze et monopoles", note: "Parcelles du domaine, sur la commune d'Aluze.", wines: ["ouche", "grandpres", "bourgogne"].map(byId) },
  { title: "Rully", note: "Chardonnay, sol argilo-calcaire à 250 mètres.", wines: [byId("rully")] },
  { title: "Mercurey", note: "Premier cru, climat Champs Martin.", wines: [byId("champsmartin")] }
];

export const euro = (n: number) => n.toLocaleString("fr-FR") + " €";

/** Catalogue exposé au panier côté navigateur. */
export const catalogue = wines.map((w) => ({ id: w.id, name: w.name, price: w.price }));

/** Bourgogne Blanc 2022 — Aluze */
export const bourgogneBlanc2022 = {
  price: 27,
  stock: true,
  tech: [
    { k: "Appellation", v: "Bourgogne" },
    { k: "Cépage", v: "Chardonnay 100 %" },
    { k: "Surface de la parcelle", v: "3,3 ha" },
    { k: "Âge des vignes", v: "8 ans" },
    { k: "Sol", v: null },
    { k: "Exposition", v: null },
    { k: "Altitude", v: null },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: null },
    { k: "Date de vendange", v: "8 septembre 2022" },
    { k: "Vinification", v: null },
    { k: "Élevage", v: "24 mois en foudre de 50 HL (neuf)" },
    { k: "Degré", v: "12,5 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Bourgogne Blanc 2024 — Aluze */
export const bourgogneBlanc2024 = {
  price: 27,
  stock: true,
  tech: [
    { k: "Appellation", v: "Bourgogne" },
    { k: "Cépage", v: "Chardonnay 100 %" },
    { k: "Surface de la parcelle", v: "3,3 ha" },
    { k: "Âge des vignes", v: "9 ans" },
    { k: "Sol", v: null },
    { k: "Exposition", v: null },
    { k: "Altitude", v: null },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: null },
    { k: "Date de vendange", v: "10 septembre 2024" },
    { k: "Vinification", v: null },
    { k: "Élevage", v: "100 % Amphores 17 HL" },
    { k: "Degré", v: "13 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Bourgogne Blanc 2025 — Aluze */
export const bourgogneBlanc2025 = {
  price: 27,
  stock: true,
  tech: [
    { k: "Appellation", v: "Bourgogne" },
    { k: "Cépage", v: "Chardonnay 100 %" },
    { k: "Surface de la parcelle", v: "3,3 ha" },
    { k: "Âge des vignes", v: "10 ans" },
    { k: "Sol", v: null },
    { k: "Exposition", v: null },
    { k: "Altitude", v: null },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: null },
    { k: "Date de vendange", v: "30 août 2025" },
    { k: "Vinification", v: null },
    { k: "Élevage", v: null },
    { k: "Degré", v: "13,5 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Rully Village Blanc Les Fromages 2023 */
export const rullyBlanc2023 = {
  price: 36,
  stock: true,
  tech: [
    { k: "Appellation", v: "Rully Village" },
    { k: "Cépage", v: "Chardonnay 100 %" },
    { k: "Surface de la parcelle", v: null },
    { k: "Âge des vignes", v: null },
    { k: "Sol", v: "Argilo-calcaire" },
    { k: "Exposition", v: null },
    { k: "Altitude", v: "250 m" },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: null },
    { k: "Date de vendange", v: "10 septembre 2023" },
    { k: "Vinification", v: null },
    { k: "Élevage", v: "12 mois en futs de 2e et 3e vin" },
    { k: "Degré", v: "13 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Rully Village Blanc Les Fromages 2024 */
export const rullyBlanc2024 = {
  price: 36,
  stock: true,
  tech: [
    { k: "Appellation", v: "Rully Village" },
    { k: "Cépage", v: "Chardonnay 100 %" },
    { k: "Surface de la parcelle", v: null },
    { k: "Âge des vignes", v: null },
    { k: "Sol", v: "Argilo-calcaire" },
    { k: "Exposition", v: null },
    { k: "Altitude", v: "250 m" },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: null },
    { k: "Date de vendange", v: "8 septembre 2024" },
    { k: "Vinification", v: null },
    { k: "Élevage", v: "12 mois en pièce de 3e et 4e vin" },
    { k: "Degré", v: "13 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Fiche technique du Mercurey 1er Cru Champs Martin 2023.
 *  v: valeur mesurée ; null = à compléter (affiché comme tel, jamais omis). */
export const champsMartin2023 = {
  price: 51,
  stock: true,
  tech: [
    { k: "Appellation", v: "Mercurey 1er Cru" },
    { k: "Cépage", v: "Pinot noir" },
    { k: "Surface de la parcelle", v: "1,5 ha" },
    { k: "Âge des vignes", v: "20 ans" },
    { k: "Sol", v: "Argilo-calcaire" },
    { k: "Exposition", v: "Sud – sud-est" },
    { k: "Pente", v: "Jusqu'à 25 %" },
    { k: "Altitude", v: "324 m" },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: "50 hl/ha" },
    { k: "Date de vendange", v: "Début septembre 2023" },
    { k: "Vinification", v: "Égrappage 100 %" },
    { k: "Élevage", v: "Cuve béton" },
    { k: "Degré", v: "13 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null },
    { k: "Production", v: "1 800 cols" }
  ] as { k: string; v: string | null }[]
};

/** Bourgogne Rouge L'Ouche de la Maison 2025 — Monopole */
export const oucheRouge2025 = {
  price: 27,
  stock: true,
  tech: [
    { k: "Appellation", v: "Bourgogne" },
    { k: "Cépage", v: "Pinot noir 100 %" },
    { k: "Surface de la parcelle", v: null },
    { k: "Âge des vignes", v: null },
    { k: "Sol", v: null },
    { k: "Exposition", v: null },
    { k: "Altitude", v: null },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: null },
    { k: "Date de vendange", v: "5 septembre 2025" },
    { k: "Vinification", v: "Partiellement égrappé" },
    { k: "Élevage", v: "Pièce et jarre" },
    { k: "Degré", v: "12,5 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Bourgogne Blanc Grand Prés d'Aubigny 2025 — Monopole */
export const grandPresBlanc2025 = {
  price: 27,
  stock: true,
  tech: [
    { k: "Appellation", v: "Bourgogne" },
    { k: "Cépage", v: "Chardonnay 100 %" },
    { k: "Surface de la parcelle", v: null },
    { k: "Âge des vignes", v: null },
    { k: "Sol", v: null },
    { k: "Exposition", v: null },
    { k: "Altitude", v: null },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: null },
    { k: "Date de vendange", v: "6 septembre 2025" },
    { k: "Vinification", v: "Pressurage direct" },
    { k: "Élevage", v: "Jarre et pièce Bourgogne 2e/3e vin (2-3 ans)" },
    { k: "Degré", v: "13 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};

/** Mercurey 1er Cru Champs Martin 2024 */
export const champsMartin2024 = {
  price: 51,
  stock: true,
  tech: [
    { k: "Appellation", v: "Mercurey 1er Cru" },
    { k: "Cépage", v: "Pinot noir" },
    { k: "Surface de la parcelle", v: "1,5 ha" },
    { k: "Âge des vignes", v: "20 ans" },
    { k: "Sol", v: "Argilo-calcaire" },
    { k: "Exposition", v: "Sud – sud-est" },
    { k: "Pente", v: "Jusqu'à 25 %" },
    { k: "Altitude", v: "324 m" },
    { k: "Certification", v: "Agriculture biologique" },
    { k: "Rendement", v: null },
    { k: "Date de vendange", v: "5 septembre 2024" },
    { k: "Vinification", v: "50 % égrappé" },
    { k: "Élevage", v: "Pièce 228 L (2-4 vins)" },
    { k: "Degré", v: "13 %" },
    { k: "pH", v: null },
    { k: "Acidité totale", v: null },
    { k: "SO2 total", v: null },
    { k: "Collage", v: null },
    { k: "Filtration", v: null }
  ] as { k: string; v: string | null }[]
};
