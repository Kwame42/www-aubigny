export type Wine = {
  slug: string;
  tag: string;
  name: string;
  origin: string;
  colour: "rouge" | "blanc";
  group: "Aluze et monopoles" | "Rully" | "Mercurey";
  price: string;
  page?: string;
};

/** À compléter / corriger : prix et libellés depuis le tarif du domaine. */
export const wines: Wine[] = [
  { slug: "ouche-maison-rouge", tag: "Monopole", name: "L'Ouche de la Maison Rouge", origin: "Aluze", colour: "rouge", group: "Aluze et monopoles", price: "25 €" },
  { slug: "grand-pres-aubigny", tag: "Monopole", name: "Grand Prés d'Aubigny", origin: "Aluze", colour: "blanc", group: "Aluze et monopoles", price: "25 €" },
  { slug: "bourgogne-blanc", tag: "Bourgogne", name: "Bourgogne blanc", origin: "Aluze", colour: "blanc", group: "Aluze et monopoles", price: "25 €" },
  { slug: "rully-blanc", tag: "Rully", name: "Rully blanc", origin: "Rully", colour: "blanc", group: "Rully", price: "31 €" },
  { slug: "mercurey-champs-martin-2023", tag: "1er Cru", name: "Mercurey 1er Cru Champs Martin", origin: "Mercurey", colour: "rouge", group: "Mercurey", price: "51 €", page: "/vins/mercurey-champs-martin-2023/" }
];

export const groups = ["Aluze et monopoles", "Rully", "Mercurey"] as const;
