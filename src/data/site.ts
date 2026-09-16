export const site = {
  name: "Maison d'Aubigny",
  tagline: "Grand Vin de Bourgogne",
  address: { line1: "Domaine d'Aubigny", zip: "71510", city: "Aluze", region: "Côte Chalonnaise, Bourgogne" },
  /** Point de collecte du formulaire de contact (Formspree, Netlify Forms, etc.).
   *  Laisser vide expose le formulaire sans envoi. Voir README. */
  formEndpoint: "",
  legal: "L'abus d'alcool est dangereux pour la santé. À consommer avec modération.",
  legalSmall: "EARL Domaine d'Aubigny · SIRET 000 000 000 00000 · Vente d'alcool interdite aux mineurs de moins de 18 ans."
};

/** Navigation principale. Ajouter / retirer des entrées ici. */
export const nav = [
  { label: "Les vins", href: "/vins/", children: [
    { label: "Mercurey 1er Cru Champs Martin 2023", href: "/vins/mercurey-champs-martin-2023/" }
  ] },
  { label: "Le domaine", href: "/domaine/", children: [
    { label: "Vignoble", href: "/domaine/vignoble/" },
    { label: "Vinification", href: "/domaine/vinification/" },
    { label: "La métairie et les animaux", href: "/domaine/metairie/" },
    { label: "L'équipe", href: "/domaine/equipe/" },
    { label: "Le compost", href: "/domaine/compost/" }
  ] },
  { label: "Histoire", href: "/histoire/", children: [
    { label: "Histoire et archives", href: "/histoire/" }
  ] },
  { label: "Visiter", href: "/visiter/", children: [
    { label: "Nous écrire", href: "/contact/" },
    { label: "Trade (English)", href: "/en/trade/" }
  ] }
];
