export interface PageSection { title: string; paras: string[]; todo?: string; }
export interface EditorialPageData {
  eyebrow: string;
  title: string;
  titleItalic: string;
  lead: string;
  back: string;
  backHref: string;
  figure?: { src: string; alt: string; caption: string; fallback?: string };
  sections: PageSection[];
  pair?: { src: string; alt: string }[];
  videos?: { src: string; title: string }[];
  card?: { title: string; text: string; cta: string; ctaHref: string };
}

export const pages: Record<string, EditorialPageData> = {
  vignoble: {
    eyebrow: "Le domaine", title: "Le", titleItalic: "vignoble", back: "← Le domaine", backHref: "/domaine/",
    lead: "Vingt hectares de vigne sur trois appellations, conduits en agriculture biologique. La quasi-totalité des parcelles est sur la commune d'Aluze.",
    figure: { src: "/images/hero-parcelle.jpg", alt: "Rangs de vigne montant vers un bois de chênes, sur les hauteurs d'Aluze", caption: "Les hauts d'Aluze, en limite de bois." },
    sections: [
      { title: "Les sols", paras: [
        "Argilo-calcaire sur l'ensemble du vignoble, avec des proportions de cailloux et des réserves en eau qui varient d'une parcelle à l'autre. C'est ce qui sépare le plus nettement les cuvées entre elles.",
        "Les altitudes vont d'environ 250 à 330 mètres, avec des pentes qui atteignent 25 % sur les parcelles hautes."
      ] },
      { title: "Les parcelles", paras: [
        "Deux monopoles à Aluze : L'Ouche de la Maison Rouge en rouge, Grand Prés d'Aubigny en blanc. Un Bourgogne blanc également à Aluze.",
        "Un Rully blanc, et un Mercurey 1er Cru sur le climat Champs Martin, 1,5 hectare de pinot noir exposé sud – sud-est."
      ] },
      { title: "La conduite", paras: [
        "Certification en agriculture biologique sur les 20 hectares. Enherbement des rangs, travail mécanique du sol, pas de désherbant.",
        "La fertilisation vient du compost fabriqué sur place, à partir des fumiers des animaux du domaine."
      ] }
    ]
  },
  vinification: {
    eyebrow: "Le domaine", title: "La", titleItalic: "vinification", back: "← Le domaine", backHref: "/domaine/",
    lead: "Chaque cuvée est vinifiée séparément, et les choix faits sur chacune sont publiés sur sa fiche.",
    figure: { src: "/images/cuverie-52.webp", alt: "Foudres de chêne et pièces de Bourgogne sous les voûtes de pierre du chai", caption: "Le chai, sous les voûtes." },
    sections: [
      { title: "Les rouges", paras: ["Vendange égrappée, macération en cuve, puis élevage. Le Champs Martin 2023 a été égrappé à 100 % et élevé en cuve béton."] },
      { title: "Les blancs", paras: ["Pressurage direct et fermentation lente."], todo: "contenants et durées à compléter" },
      { title: "Ce que nous publions", paras: [
        "Sur chaque fiche de millésime : rendement, date de vendange, mode de vinification, élevage, degré, et les interventions — levures, soufre, collage, filtration.",
        "Quand une donnée n'est pas encore mesurée, elle est indiquée comme telle plutôt qu'omise."
      ] }
    ],
    pair: [
      { src: "/images/p-cuverie-amphores.webp", alt: "Amphores en terre cuite alignées dans la cave voûtée" },
      { src: "/images/p-cuve-inox.webp", alt: "Pièces de Bourgogne pour l'élevage du vin" }
    ]
  },
  metairie: {
    eyebrow: "Le domaine", title: "La métairie et les", titleItalic: "animaux", back: "← Le domaine", backHref: "/domaine/",
    lead: "Autour des vignes, 186 hectares de prés et de bois exploités par le domaine. Les animaux ne sont pas un décor : leurs fumiers font le compost qui retourne dans les vignes.",
    figure: { src: "/images/p-chevaux-72.webp", alt: "Deux chevaux blancs dans un pré clôturé, arbres et coteaux à l'arrière-plan", caption: "Le pré du haut, en fin d'été." },
    sections: [
      { title: "Les chevaux", paras: ["Un petit troupeau vit dehors toute l'année sur les prés du domaine, avec du foin en complément l'hiver."] },
      { title: "Les vaches, les ruches, la truffière", paras: ["Un troupeau de vaches pâture les prés en rotation. Des ruches sont installées en lisière de bois, et une truffière a été plantée sur une parcelle calcaire."], todo: "effectifs, races et surfaces à compléter" },
      { title: "Prés et bois", paras: ["Les 186 hectares comprennent des prés de fauche, des pâtures et des bois de chênes. Le foin est produit sur place."] }
    ],
    pair: [
      { src: "/images/p-chevaux-6.webp", alt: "Portrait rapproché d'un cheval blanc à crinière claire" },
      { src: "/images/p-vaches-8.webp", alt: "Vaches au pâturage dans un pré du domaine" }
    ]
  },
  compost: {
    eyebrow: "Le domaine", title: "Le", titleItalic: "compost", back: "← Le domaine", backHref: "/domaine/",
    lead: "Le compost est fabriqué sur le domaine, à partir des fumiers de ses propres animaux, et remis dans les vignes.",
    figure: { src: "/images/p-ferme-nature-1.webp", alt: "Bâtiments de la ferme et prés du domaine au petit matin", caption: "La ferme, d'où part la matière du compost." },
    sections: [
      { title: "Ce qu'on y met", paras: [
        "Fumiers des chevaux et des vaches, litières, et matière végétale issue des prés et des bois du domaine.",
        "Rien n'est acheté à l'extérieur."
      ] },
      { title: "Les andains", paras: ["Le mélange est mis en andains sur une plateforme du domaine, puis retourné plusieurs fois pendant la maturation."], todo: "durée, nombre de retournements et suivi de température à compléter" },
      { title: "L'épandage", paras: ["Le compost mûr est épandu dans les vignes à l'automne, parcelle par parcelle, selon les besoins observés."], todo: "tonnages et fréquence à compléter" },
      { title: "Ce que ça change", paras: ["Le circuit est fermé : les prés nourrissent les animaux, les animaux font le fumier, le fumier fait le compost, le compost nourrit la vigne."] }
    ]
  },
  equipe: {
    eyebrow: "Le domaine", title: "L'", titleItalic: "équipe", back: "← Le domaine", backHref: "/domaine/",
    lead: "Une petite équipe, sur la vigne, au chai et sur la métairie.",
    sections: [
      { title: "Direction et vignoble", paras: [], todo: "nom et rôle à compléter" },
      { title: "Chai", paras: [], todo: "nom et rôle à compléter" },
      { title: "Métairie et animaux", paras: [], todo: "nom et rôle à compléter" },
      { title: "Accueil et vente", paras: [], todo: "nom et rôle à compléter" }
    ],
    card: { title: "Photos et biographies", text: "Cette page attend les portraits et une phrase par personne. Envoyez-les et je les mets en place.", cta: "Nous écrire", ctaHref: "/contact/" }
  },
  visiter: {
    eyebrow: "Visiter", title: "Visiter le", titleItalic: "domaine", back: "← Accueil", backHref: "/",
    lead: "Les visites se font sur rendez-vous, au domaine, à Aluze.",
    figure: { src: "/videos/vue-aerienne-drone.mp4", alt: "Vue aérienne du domaine en drone - aucun dialogue", caption: "Les coteaux du domaine, vus du ciel.", fallback: "/images/q-nature-106.webp" },
    sections: [
      { title: "Comment ça se passe", paras: ["Une visite des vignes et du chai, puis une dégustation des cuvées disponibles. Comptez environ une heure et demie. Visite sur rendez-vous toute l'année."] },
      { title: "Où", paras: ["Domaine d'Aubigny, 71510 Aluze, Côte Chalonnaise. À une quinzaine de minutes de Chalon-sur-Saône."] },
      { title: "Réserver", paras: ["Appelez-nous au +33 (0)3 85 44 76 76 ou écrivez à contact@aubigny.wine pour fixer un rendez-vous. Dites-nous la date souhaitée et le nombre de personnes."] }
    ],
    videos: [
      { src: "/videos/vue-champs.mp4", title: "Les champs du domaine" },
      { src: "/videos/vue-cuverie.mp4", title: "Le chai et la cuverie" }
    ]
  },
  archives: {
    eyebrow: "Histoire", title: "Histoire et", titleItalic: "archives", back: "← Accueil", backHref: "/",
    lead: "Les terres d'Aubigny sont cultivées depuis 1132. Le domaine conserve les documents qui le racontent.",
    figure: { src: "/images/q-nature-45.webp", alt: "Le village d'Aluze et ses coteaux depuis les vignes hautes", caption: "Aluze, depuis les vignes hautes." },
    sections: [
      { title: "Avant les moines", paras: ["Occupation ancienne du coteau, attestée par des vestiges retrouvés sur la commune."], todo: "sources et datations à compléter" },
      { title: "1132 — les cisterciens", paras: ["La date de 1132 marque le début de l'exploitation continue des terres par les cisterciens. Le parcellaire actuel en garde la trace."] },
      { title: "Le métayage", paras: ["Une partie des vignes a longtemps été exploitée en métayage. Le Champs Martin 2023 est le dernier millésime issu de ce régime : la parcelle est depuis conduite entièrement par le domaine."] },
      { title: "Les documents", paras: ["Baux, plans de parcellaire, registres de vendange."], todo: "liste, dates et numérisations à compléter" }
    ]
  },
  trade: {
    eyebrow: "Trade", title: "For the", titleItalic: "trade", back: "← Home", backHref: "/",
    lead: "Information for wine merchants, restaurants and importers.",
    sections: [
      { title: "The estate", paras: [
        "Twenty hectares of certified organic vineyard at Aluze, in the Côte Chalonnaise, on land farmed since 1132. Five cuvées across Bourgogne, Rully and Mercurey, including two monopoles.",
        "Compost is made on the estate from the manure of its own animals and returned to the vineyard."
      ] },
      { title: "Current releases", paras: ["Bourgogne blanc, Rully blanc, and two Aluze monopoles — L'Ouche de la Maison Rouge (red) and Grand Prés d'Aubigny (white). Mercurey 1er Cru Champs Martin 2023, 1,800 bottles."], todo: "allocation and trade pricing to be completed" },
      { title: "Shipping", paras: ["France and the European Union, cases of 6 or 12."], todo: "export terms outside the EU to be completed" }
    ],
    card: { title: "Open a trade account", text: "Tell us your market and the volumes you work with.", cta: "Contact us", ctaHref: "/contact/" }
  }
};

export const domainStats = [
  { v: "20", u: "ha", k: "De vigne" },
  { v: "BIO", u: "", k: "Certifié" },
  { v: "186", u: "ha", k: "Prés et bois" },
  { v: "1132", u: "", k: "Première trace" }
];

export const terroirStats = [
  { v: "250–330", u: "m", k: "Altitude" },
  { v: "100", u: "%", k: "Argilo-calcaire" },
  { v: "25", u: "%", k: "Pente maximale" },
  { v: "5", u: "", k: "Cuvées" }
];

export const vessels = [
  { name: "Amphore", detail: "Terre cuite" },
  { name: "Foudre", detail: "Chêne 228 L" },
  { name: "Inox", detail: "Thermo-régulé" }
];

export const univers = [
  { cat: "Viticulture", name: "Le vignoble", href: "/domaine/vignoble/", img: "/images/p-vignes-2.webp", alt: "Rangs de vigne du domaine en été" },
  { cat: "Vinification", name: "Le chai", href: "/domaine/vinification/", img: "/images/p-cuverie-foudres-2.webp", alt: "Foudres de chêne alignés dans le chai voûté" },
  { cat: "Agro-écologie", name: "La métairie", href: "/domaine/metairie/", img: "/images/p-chevaux-30.webp", alt: "Chevaux blancs au pré sur les hauteurs du domaine" },
  { cat: "Fertilité", name: "Le compost", href: "/domaine/compost/", img: "/images/p-ferme-nature-1.webp", alt: "Bâtiments de la ferme et prés du domaine" },
  { cat: "Histoire", name: "Les archives", href: "/histoire/", img: "/images/q-nature-45.webp", alt: "Le village d'Aluze et ses coteaux" },
  { cat: "Accueil", name: "Visiter", href: "/visiter/", img: "/images/q-nature-63.webp", alt: "Chemin de vignes menant au domaine" }
];
