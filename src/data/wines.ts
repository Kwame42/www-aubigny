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
  { id: "ouche", tag: "Monopole", name: "L'Ouche de la Maison Rouge", sub: "Aluze · Pinot noir", note: "Monopole du domaine, sur les argiles rouges d'Aluze. Fruit noir et trame souple.", price: 25, ground: "#2A1622" },
  { id: "grandpres", tag: "Monopole", name: "Grand Prés d'Aubigny", sub: "Aluze · Chardonnay", note: "Monopole en blanc, sur les prés hauts du domaine. Tension et fleurs blanches.", price: 25, ground: "#DCE5D3" },
  { id: "bourgogne", tag: "Bourgogne", name: "Bourgogne blanc", sub: "Aluze · Chardonnay", note: "Agrumes frais, fleur d'acacia, minéralité de la Côte Chalonnaise.", price: 25, ground: "#DCE5D3" },
  { id: "rully", tag: "Rully", name: "Rully blanc", sub: "Rully · Chardonnay", note: "Agrumes mûrs, fleurs blanches. Texture soyeuse, belle tension.", price: 31, ground: "#14202F" },
  { id: "champsmartin", tag: "Mercurey 1er Cru", name: "Mercurey Les Champs Martin", sub: "2023 · Pinot noir", note: "Tanins soyeux, fruits rouges mûrs, notes épicées. Vin de garde.", price: 51, ground: "#2A1622", href: "/vins/mercurey-champs-martin-2023/" }
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
