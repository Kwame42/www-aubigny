export const site = {
  name: "Domaine d'Aubigny",
  tagline: "Fine Burgundy Wine",
  address: { line1: "Domaine d'Aubigny", zip: "71510", city: "Aluze", region: "Côte Chalonnaise, Burgundy" },
  formEndpoint: "",
  legal: "The abuse of alcohol is dangerous to health. Consume in moderation.",
  legalSmall: "EARL Domaine d'Aubigny · SIRET 000 000 000 00000 · Sale of alcohol prohibited to minors under 18 years of age."
};

export const nav = [
  { label: "Wines", href: "/en/wines/", children: [
    { label: "Mercurey 1er Cru Champs Martin 2023", href: "/en/wines/mercurey-champs-martin-2023/" }
  ] },
  { label: "The Estate", href: "/en/domain/", children: [
    { label: "Vineyard", href: "/en/domain/vineyard/" },
    { label: "Wine Production", href: "/en/domain/vinification/" },
    { label: "Farmstead & Animals", href: "/en/domain/metairie/" },
    { label: "Team", href: "/en/domain/team/" },
    { label: "Compost", href: "/en/domain/compost/" }
  ] },
  { label: "History", href: "/en/history/", children: [
    { label: "History & Archives", href: "/en/history/" }
  ] },
  { label: "Visit", href: "/en/visit/", children: [
    { label: "Contact", href: "/en/contact/" },
    { label: "Trade (Français)", href: "/en/trade/" }
  ] }
];
