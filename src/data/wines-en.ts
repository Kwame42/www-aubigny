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
  { id: "ouche", tag: "Monopoly", name: "Bourgogne Rouge Ouche de la Maison", sub: "Aluze · Pinot Noir", note: "Estate monopoly, full-bodied with exceptional length.", price: 25, ground: "#2A1622", href: "/en/wines/bourgogne-rouge-ouche-de-la-maison-monopoly/" },
  { id: "grandpres", tag: "Monopoly", name: "Bourgogne Blanc Grand Prés d'Aubigny", sub: "Aluze · Chardonnay", note: "Distinctive wine that showcases the estate.", price: 25, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc-grand-pres-d-aubigny-monopoly/" },
  { id: "bourgogne", tag: "Bourgogne", name: "Bourgogne Blanc", sub: "Aluze · Chardonnay", note: "Elegant and refined, with citrus notes.", price: 25, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc/" },
  { id: "bourgogneblanc2022", tag: "Bourgogne", name: "Bourgogne Blanc 2022", sub: "Aluze · Chardonnay", note: "Our first wine, crisp and invigorating.", price: 27, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc-2022/" },
  { id: "bourgogneblanc2024", tag: "Bourgogne", name: "Bourgogne Blanc 2024", sub: "Aluze · Chardonnay", note: "Crisp and lively, white flower and stone fruit notes.", price: 27, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc-2024/" },
  { id: "bourgogneblanc2025", tag: "Bourgogne", name: "Bourgogne Blanc 2025", sub: "Aluze · Chardonnay", note: "Powerful and broad, white flower and peach.", price: 27, ground: "#DCE5D3", href: "/en/wines/bourgogne-blanc-2025/" },
  { id: "rully", tag: "Rully Village", name: "Rully Village Blanc Les Fromages", sub: "Rully · Chardonnay", note: "Terroir producing fresh, long wines with ample mid-palate.", price: 31, ground: "#DCE5D3", href: "/en/wines/rully-village-blanc-les-fromages/" },
  { id: "rullyblanc2023", tag: "Rully Village", name: "Rully Village Blanc Les Fromages 2023", sub: "Rully · Chardonnay", note: "Beautiful mid-palate and excellent finish.", price: 36, ground: "#DCE5D3", href: "/en/wines/rully-village-blanc-les-fromages-2023/" },
  { id: "rullyblanc2024", tag: "Rully Village", name: "Rully Village Blanc Les Fromages 2024", sub: "Rully · Chardonnay", note: "Great Epicerie favorite, fine attack and liveliness.", price: 36, ground: "#DCE5D3", href: "/en/wines/rully-village-blanc-les-fromages-2024/" },
  { id: "champsmartin", tag: "Mercurey 1er Cru", name: "Mercurey 1er Cru Champs Martin", sub: "2023 · Pinot Noir", note: "Mercurey's finest red terroir, producing refined and powerful wines.", price: 51, ground: "#2A1622", href: "/en/wines/mercurey-1er-cru-rouge-champs-martin/" }
];

export const byId = (id: string): Wine => wines.find((w) => w.id === id)!;

export const featured = ["champsmartin", "rully", "ouche", "grandpres"].map(byId);

export const groups = [
  { title: "Aluze & Monopolies", note: "Estate parcels on the Aluze commune.", wines: ["ouche", "grandpres", "bourgogne"].map(byId) },
  { title: "Rully", note: "Chardonnay on clay-limestone soil at 250 metres.", wines: [byId("rully")] },
  { title: "Mercurey", note: "First growth, Champs Martin climat.", wines: [byId("champsmartin")] }
];

export const euro = (n: number) => n.toLocaleString("fr-FR") + " €";

export const catalogue = wines.map((w) => ({ id: w.id, name: w.name, price: w.price }));
