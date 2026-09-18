export const pages = {
  vinification: {
    eyebrow: "The Estate", title: "Wine", titleItalic: "production", back: "← The Estate", backHref: "/en/domain/",
    lead: "Each cuvée is vinified separately, and the choices made for each are published on its page.",
    figure: { src: "/images/cuverie-52.webp", alt: "Oak foudres and Burgundy barrels under the stone vaults of the cellar", caption: "The cellar, under the vaults." },
    sections: [
      {
        title: "Separate vinification", paras: [
          "Terracotta amphorae preserve minerality. Oak foudres add complexity. Burgundy barrels provide depth.",
          "Each parcel is treated according to its character: ripeness of grapes, vintage, desired expression. The cellar team tastes throughout aging and makes choices transparent on each wine's page."
        ]
      },
      {
        title: "No shortcuts", paras: [
          "No added yeasts or enzymes. No forced malolactic fermentation. Whole clusters, when the stems ripen well enough to support it—which happens here."
        ]
      }
    ]
  },
  vignoble: {
    eyebrow: "The Estate", title: "The", titleItalic: "vineyard", back: "← The Estate", backHref: "/en/domain/",
    lead: "Twenty hectares of biologically certified vines on clay-limestone soil, between 250 and 330 meters altitude. Three parcels: Aluze, Rully, Mercurey.",
    figure: { src: "/images/p-vignes.webp", alt: "Vines and Aluze hamlet in early morning, wooded hillsides in the background", caption: "Dawn over the parcels." },
    sections: [
      {
        title: "Three terroirs", paras: [
          "**Aluze** (9 hectares): Monopolies, older vines, warmer, fuller wines.",
          "**Rully** (7 hectares): Village-level Chardonnay, fresher, more mineral.",
          "**Mercurey** (4 hectares): First growth Pinot Noir, 20-year-old vines, finesse and power."
        ]
      }
    ]
  },
  metairie: {
    eyebrow: "The Estate", title: "The farmstead &", titleItalic: "animals", back: "← The Estate", backHref: "/en/domain/",
    lead: "Around the vines, 186 hectares of meadow and woodland farmed by the estate. Animals are not decoration: their manure becomes compost that feeds the vines.",
    figure: { src: "/images/p-chevaux-72.webp", alt: "Horses grazing in the meadows around Aluze", caption: "The horses." },
    sections: []
  }
};

export const domainStats = [
  { label: "hectares", value: "20" },
  { label: "certified organic", value: "since 2015" },
  { label: "cuvées", value: "9" }
];

export const terroirStats = [
  { label: "altitude", value: "250–330 m" },
  { label: "soil", value: "clay-limestone" },
  { label: "aspect", value: "South & Southeast" }
];

export const vessels = [
  { name: "Amphorae", detail: "Minerality" },
  { name: "Oak Foudres", detail: "Complexity" },
  { name: "Burgundy Barrels", detail: "Depth" }
];
