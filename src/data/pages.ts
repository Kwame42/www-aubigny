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
        "Argilo-calcaire sur l'ensemble du vignoble, avec des proportions de cailloux et des réserves en eau qui varient d'une parcelle à l'autre. C'est ce qui sépare le plus nettement les cuvées entre elles. Le rapport cailloux/argile détermine le caractère de chaque cuvée : plus les cailloux sont abondants, plus le vin gagne en minéralité et en finesse.",
        "Les altitudes vont d'environ 250 à 330 mètres, avec des pentes qui atteignent 25 % sur les parcelles hautes. Cette exposition est un atout : la pente assure un bon drainage naturel, et l'altitude compense la chaleur estivale. Les murs de pierre qui délimitent les parcelles conservent la chaleur et la restitue le soir, régulant la maturité des raisins."
      ] },
      { title: "Les parcelles", paras: [
        "Deux monopoles à Aluze : L'Ouche de la Maison Rouge en rouge, Grand Prés d'Aubigny en blanc. Un Bourgogne blanc également à Aluze. Ces trois cuvées bénéficient d'une exposition et de microclimats propres à Aluze, isolée de la Côte de Nuits et de la Côte de Beaune.",
        "Un Rully blanc, et un Mercurey 1er Cru sur le climat Champs Martin, 1,5 hectare de pinot noir exposé sud – sud-est. Ces deux cuvées apportent une diversité géographique : le Rully blanc y gagne de la fraîcheur, tandis que le Champs Martin, sur un sol plus chaud, exprime la puissance caractéristique du Mercurey."
      ] },
      { title: "La conduite", paras: [
        "Certification en agriculture biologique sur les 20 hectares depuis plusieurs années. Enherbement volontaire des rangs pour favoriser la biodiversité du sol, travail mécanique régulier du sol (pas de désherbant), vendanges manuelles. Le sol n'est jamais compacté, et la vie microbienne s'améliore année après année.",
        "La fertilisation vient du compost fabriqué sur place, à partir des fumiers des animaux du domaine et des matières organiques produites localement. Ce circuit fermé signifie que la vigne devient progressivement plus autonome et plus résiliente à la sécheresse, grâce à une meilleure rétention d'eau et à une structure de sol plus stable."
      ] }
    ]
  },
  vinification: {
    eyebrow: "Le domaine", title: "La", titleItalic: "vinification", back: "← Le domaine", backHref: "/domaine/",
    lead: "Chaque cuvée est vinifiée séparément, et les choix faits sur chacune sont publiés sur sa fiche.",
    figure: { src: "/images/cuverie-52.webp", alt: "Foudres de chêne et pièces de Bourgogne sous les voûtes de pierre du chai", caption: "Le chai, sous les voûtes." },
    sections: [
      { title: "Les rouges", paras: [
        "Vendange égrappée, macération en cuve de durée variable selon le millésime, puis élevage en foudres ou en pièces de Bourgogne. La vendange est transportée en bennes, les raisins sont entièrement destalés (rafles retirées) pour gagner en fraîcheur et en délicatesse.",
        "Le Champs Martin 2023 a été égrappé à 100 % et élevé en cuve béton thermorégulée, un choix reflétant la maturité phénolique des raisins et le profil recherché pour ce millésime."
      ] },
      { title: "Les blancs", paras: [
        "Pressurage direct avec pneumatique et fermentation lente à température contrôlée. Les blancs bénéficient d'un repos en cuve inox ou en amphores terracotta selon la cuvée, ce qui préserve la fraîcheur aromatique tout en favorisant une légère extraction minérale.",
        "L'élevage sur lies fines pendant 4 à 6 mois permet une légère oxydation et un enrichissement aromatique sans surcharger le vin."
      ] },
      { title: "Ce que nous publions", paras: [
        "Sur chaque fiche de millésime : rendement en hectolitres par hectare, date exacte de vendange, mode de vinification, durée de macération ou d'élevage, type de contenant, degré alcoolométrique, et les interventions faites — levures (indigènes ou ajoutées), soufre, collage, filtration.",
        "Quand une donnée n'est pas encore mesurée ou finalisée, elle est indiquée comme telle plutôt qu'omise. C'est un engagement de transparence envers le lecteur."
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
      { title: "Les chevaux", paras: [
        "Un petit troupeau vit dehors toute l'année sur les prés du domaine. Ils pâturent les herbages de printemps et d'été, et reçoivent du foin produit sur place pendant l'hiver. Leurs fumiers sont stockés pour être transformés en compost.",
        "Les chevaux servent aussi à maintenir les prés en bon état : en pâturant sélectivement, ils régulent la végétation et favorisent la biodiversité des herbages."
      ] },
      { title: "Les vaches, les ruches, la truffière", paras: [
        "Un troupeau de vaches pâture les prés en rotation, en complément des chevaux. Leur fumier, riche en azote et en matière organique, constitue la base du compost du domaine.",
        "Des ruches sont installées en lisière de bois : elles assurent la pollinisation des cultures et des fleurs sauvages, tout en produisant du miel. Une truffière a été plantée sur une parcelle calcaire en limite de vignoble, diversifiant les ressources du domaine à long terme."
      ] },
      { title: "Prés et bois", paras: [
        "Les 186 hectares comprennent des prés de fauche (source du foin hivernal), des pâtures permanentes pour les animaux, et des bois de chênes et de résineux. Le foin est produit sur place lors de la fauche estivale, puis stocké pour l'hiver.",
        "Ces espaces forestiers jouent un double rôle : ils produisent du bois pour la chauffage et le travail du sol, et ils constituent une réserve de biodiversité qui améliore la résilience globale du domaine face aux variations climatiques."
      ] }
    ],
    pair: [
      { src: "/images/p-chevaux-6.webp", alt: "Portrait rapproché d'un cheval blanc à crinière claire" },
      { src: "/images/p-vaches-27.webp", alt: "Vaches au pâturage dans un pré du domaine" }
    ]
  },
  compost: {
    eyebrow: "Le domaine", title: "Le", titleItalic: "compost", back: "← Le domaine", backHref: "/domaine/",
    lead: "Le compost est fabriqué sur le domaine, à partir des fumiers de ses propres animaux, et remis dans les vignes.",
    figure: { src: "/images/p-ferme-nature-1.webp", alt: "Bâtiments de la ferme et prés du domaine au petit matin", caption: "La ferme, d'où part la matière du compost." },
    sections: [
      { title: "Ce qu'on y met", paras: [
        "Fumiers des chevaux et des vaches mélangés à leurs litières de paille, ainsi que des résidus végétaux issus des prés et des bois du domaine (branchages, feuilles mortes, herbes des fauches).",
        "Rien n'est acheté à l'extérieur : chaque élément du compost provient du fonctionnement interne du domaine. C'est cette autonomie qui crée le circuit fermé et qui assure la durabilité long terme."
      ] },
      { title: "La maturation en andains", paras: [
        "Le mélange est mis en andains (tas allongés) sur une plateforme dédiée du domaine. Les andains sont retournés régulièrement pendant 4 à 6 mois pour accélérer la décomposition et assurer l'homogénéité du produit fini.",
        "La température interne des andains monte progressivement jusqu'à 65-70°C durant la phase thermophile, ce qui élimine les pathogènes et accélère la décomposition. À la fin, le compost a transformé des matières brutes en un amendement riche et équilibré."
      ] },
      { title: "L'épandage et l'effet sur les vignes", paras: [
        "Le compost mûr est épandu dans les vignes à l'automne, parcelle par parcelle, selon les observations pédologiques : les vignes sur sol pauvre reçoivent davantage, les vignes sur terroir riche en réserves en reçoivent moins.",
        "Année après année, cet apport régulier améliore la structure du sol, augmente sa capacité de rétention d'eau, enrichit sa faune microbienne, et rend la vigne progressivement plus autonome et plus résiliente à la sécheresse. Le sol devient plus vivant."
      ] },
      { title: "Le circuit fermé", paras: [
        "Les prés nourrissent les animaux. Les animaux produisent le fumier. Le fumier devient compost. Le compost nourrit la vigne. Et la vigne se développe sur un terroir de plus en plus vivant et structuré. Ce n'est pas un cycle théorique : c'est le fonctionnement quotidien du domaine, et ses effets sont visibles chaque année."
      ] }
    ]
  },
  equipe: {
    eyebrow: "Le domaine", title: "L'", titleItalic: "équipe", back: "← Le domaine", backHref: "/domaine/",
    lead: "Une équipe réduite, chacun polyvalent et expert dans son domaine. Sur la vigne, au chai et sur la métairie.",
    sections: [
      { title: "Direction et vignoble", paras: [
        "Le propriétaire du domaine dirige l'ensemble et supervise les travaux de vigne. Responsable des décisions de vinification et de la stratégie commerciale.",
        "Tous les travaux de vigne (plantation, travail du sol, vendanges) sont effectués en interne ou en collaboration avec des partenaires de confiance, tous formés aux méthodes biologiques du domaine."
      ] },
      { title: "Le chai", paras: [
        "Le maître de chai supervise la vendange, la vinification et l'élevage de chaque cuvée. Responsable de la qualité et de la conformité des vins avec le profil attendu.",
        "Le travail en chai est précis et demande une grande attention : suivi quotidien de la fermentation, entretien du matériel, décisions de collage et filtration. Tout est noté et publié."
      ] },
      { title: "Métairie et animaux", paras: [
        "La gestion des 186 hectares de prés et bois, ainsi que des animaux du domaine, revient à l'équipe de métairie. Production du foin, entretien des prés, soin des chevaux et des vaches, et récolte du compost.",
        "C'est grâce à ce travail que le circuit fermé fonctionne : les prés nourris, les animaux soignés, les fumiers régulièrement transformés en compost pour les vignes."
      ] },
      { title: "Accueil et vente", paras: [
        "L'équipe d'accueil gère les visites du domaine, répond aux demandes des clients et des professionnels, et assure le suivi des commandes.",
        "Accueillez les visiteurs, parler du vin, et faire connaitre le domaine nécessitent une bonne compréhension de l'ensemble du projet."
      ] }
    ],
    card: { title: "Biographies détaillées", text: "Nous publierons prochainement les portraits et biographies de chaque membre de l'équipe. Cette information est en cours de préparation.", cta: "Nous contacter", ctaHref: "/contact/" }
  },
  visiter: {
    eyebrow: "Visiter", title: "Visiter le", titleItalic: "domaine", back: "← Accueil", backHref: "/",
    lead: "Les visites se font sur rendez-vous, au domaine, à Aluze.",
    figure: { src: "/videos/vue-aerienne-drone.mp4", alt: "Vue aérienne du domaine en drone - aucun dialogue", caption: "Les coteaux du domaine, vus du ciel.", fallback: "/images/q-nature-106.webp" },
    sections: [
      { title: "Comment ça se passe", paras: ["Une visite des vignes et du chai, puis une dégustation des cuvées disponibles. Comptez environ une heure et demie. Visite sur rendez-vous toute l'année."] },
      { title: "Où", paras: ["Domaine d'Aubigny, 71510 Aluze, Côte Chalonnaise. À une quinzaine de minutes de Chalon-sur-Saône."] },
      { title: "Réserver", paras: ["Appelez-nous au +33 (0)3 85 44 76 76 ou écrivez à contact@aubigny.wine pour fixer un rendez-vous. Dites-nous la date souhaitée et le nombre de personnes."] },
      { title: "Pour quelques jours : La Rose Pourpre", paras: ["Vous souhaitez visiter le domaine et passer quelques jours en Côte Chalonnaise ? Installez-vous à La Rose Pourpre, notre maison d'hôtes à quelques kilomètres d'Aubigny. Chambres d'exception, Table d'hôte, et vue sur les vignobles.", "C'est moi qui vous ferai visiter les vignes. Vous resterez sur place quelques jours, et nous verrons le domaine ensemble — la vigne, le chai, et tout ce qui s'y fait. Les repas à La Rose Pourpre vous permettront de découvrir les vins du domaine dans une ambiance intime."] }
    ],
    videos: [
      { src: "/videos/vue-champs.mp4", title: "Les champs du domaine" },
      { src: "/videos/vue-cuverie.mp4", title: "Le chai et la cuverie" }
    ],
    card: {
      title: "La Rose Pourpre",
      text: "Maison d'hôtes tenue par le propriétaire d'Aubigny. Séjour complet : visite des vignes, Table d'hôte, et ambiance intime.",
      cta: "Réserver",
      ctaHref: "https://www.rosepourpre.fr"
    }
  },
  archives: {
    eyebrow: "Histoire", title: "Histoire et", titleItalic: "archives", back: "← Accueil", backHref: "/",
    lead: "Les terres d'Aubigny sont cultivées depuis 1132. Le domaine conserve les documents qui le racontent, du Moyen Âge à nos jours.",
    figure: { src: "/images/blason-abbaye-maiziere.webp", alt: "Blason de l'Abbaye de Maizière", caption: "L'Abbaye de Maizière, dont Aubigny était le cellier." },
    sections: [
      { title: "Avant les moines : l'antiquité", paras: [
        "Des vestiges gallo-romains ont été retrouvés sur la commune, témoignant d'une occupation ancienne du coteau. Les sols argilo-calcaires, le relief et l'exposition ont toujours rendu le site propice à la culture.",
        "Une stèle gallo-romaine découverte en limite du vignoble, actuellement conservée, atteste d'une présence romaine et d'une probable exploitation agricole antérieure."
      ] },
      { title: "1132 — l'implantation cistercienne", paras: [
        "La date de 1132 marque le début documenté de l'exploitation continue des terres par les moines cisterciens de l'Abbaye de Maizière. Les cisterciens ont entrepris le défrichement systématique des terres et la plantation méthodique de vignes, appliquant à la lettre leur règle : travail, prière et autosuffisance.",
        "Le parcellaire actuel en garde la trace : les petites parcelles anciennes, le système de prés attenants, et même les chemins suivent souvent les limites établies au XIIe siècle. Le domaine s'est construit sur les fondations posées par les moines."
      ] },
      { title: "Le métayage et l'évolution récente", paras: [
        "À partir du XVIe siècle, une partie des vignes a été exploitée en métayage : un fermier travaillait la terre pour le compte du seigneur ou du couvent, en échange d'une part de la récolte. Ce régime a persisté jusqu'à très récemment.",
        "Le Champs Martin 2023 est le dernier millésime issu d'un régime de métayage : la parcelle est désormais conduite entièrement par le domaine. Cette transition symbolise la consolidation du projet : un lieu désormais géré en cohérence, selon une vision unique."
      ] },
      { title: "Les archives et les documents", paras: [
        "Le domaine conserve un fonds d'archives allant du XIIe siècle à nos jours : chartes de donation, baux, plans de parcellaire, registres de vendange, actes d'achat et de vente, contrats avec les métayers.",
        "Certaines chartes originales sont conservées, tandis que d'autres ont été numérisées. Progressivement, ces documents sont mis en ligne et présentés, offrant aux visiteurs la possibilité de consulter l'histoire locale et l'évolution du vignoble au fil des siècles."
      ] }
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
  { cat: "Vinification", name: "Le chai", href: "/domaine/vinification/", img: "/images/p-cuverie-4.webp", alt: "Amphores en terre cuite et foudres de chêne sous les voûtes de pierre" },
  { cat: "Agro-écologie", name: "La métairie", href: "/domaine/metairie/", img: "/images/metairie-chevaux-galop.webp", alt: "Chevaux au galop dans les prés du domaine" },
  { cat: "Fertilité", name: "Le compost", href: "/domaine/compost/", img: "/images/p-ferme-nature-1.webp", alt: "Bâtiments de la ferme et prés du domaine" },
  { cat: "Histoire", name: "Les archives", href: "/histoire/", img: "/images/blason-abbaye-maiziere.webp", alt: "Blason de l'Abbaye de Maizière" },
  { cat: "Accueil", name: "Visiter", href: "/visiter/", img: "/images/q-nature-63.webp", alt: "Chemin de vignes menant au domaine" }
];
