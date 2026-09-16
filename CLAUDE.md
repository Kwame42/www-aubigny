# CLAUDE.md — Site web Domaine d'Aubigny

Contexte de travail pour toute session sur ce dépôt.

## Objectif

**Nom de domaine : `aubigny.wine`** (confirmé).

Sous-domaines :
- `aubigny.wine` — front Astro, contenu public et SEO
- `shop.aubigny.wine` — boutique et espace pro, servis par Odoo
- `qr.aubigny.wine` — e-labels réglementaires (voir DESIGN.md)

Vendre le vin du domaine en direct (France + quelques pays UE) et servir de
point d'entrée aux importateurs et professionnels étrangers.

Le domaine : **une métairie cistercienne fondée en 1132**, toujours en
fonctionnement. 20 ha de vigne en bio à Aluze (Côte Chalonnaise), au sein de
**186 ha de prés et de bois exploités en propre**. Chevaux, vaches et autres
animaux (une partie en pension), ruches, truffière. Le domaine **fabrique son
propre compost sur place** et le remet dans ses vignes : la boucle
cistercienne — prés, bêtes, fumier, compost, vigne — est encore fermée.

Terres d'occupation gallo-romaine (stèle funéraire retrouvée sur place),
implantation cistercienne en 1132. Fonds d'archives d'environ 100 pages en
possession du domaine.

**Le vin est central, la métairie est la révélation.** Le visiteur vient pour
le vin — c'est ce qu'il cherche, c'est ce qu'il achète, et le site ne doit
jamais l'en éloigner. Mais en creusant, il découvre ce qu'il y a derrière :
une métairie cistercienne en fonctionnement, 186 ha de prés et de bois
exploités en propre, des animaux, un compost fabriqué sur place et remis
dans les vignes. La boucle prés → bêtes → fumier → compost → vigne est encore
fermée, sur les mêmes terres depuis 1132.

La métairie n'est donc pas un sujet parallèle : **c'est l'explication de la
qualité du vin.** On ne la met pas en avant, on la fait découvrir — et le
visiteur repart en comprenant *pourquoi* ces vins sont ce qu'ils sont.

Conséquence pratique : jamais de page métairie en entrée de parcours. Elle
se rejoint depuis les fiches cuvée, la page vinification, la page vignoble.
Chaque fiche vin peut porter un lien du type « d'où vient la matière
organique de cette parcelle ».

## Stack

- **Front public : Astro**, statique (SSG). Tout le contenu indexable.
  Catalogue tiré de l'API Odoo **au build**, rebuild déclenché par webhook.
  Disponibilité vérifiée par un appel client-side léger sur la fiche.
- **Backend + transactionnel : Odoo** (même version majeure que
  La Rose Pourpre pour ne pas multiplier les versions à maintenir).
  Source de vérité : produits, millésimes, stock par lot, listes de prix,
  commandes, factures, comptabilité.
- **Checkout : Odoo natif**, thémé aux couleurs du domaine.
  On ne réimplémente ni panier, ni TVA, ni paiement en Astro.
- **Espace pro : Odoo intégral**, derrière login, `noindex`.

Règle : contenu et SEO en Astro, tout ce qui touche à l'argent en Odoo.
L'intégration Astro → Odoo est en **lecture seule**.

À trancher : sous-domaine `boutique.` ou chemin proxifié.

## Modèle de contenu

Trois axes, à ne jamais dupliquer :

- **Cuvée** — la parcelle, le sol, l'exposition, l'âge des vignes, la façon
  de vinifier. Écrit une fois, bouge peu.
- **Millésime** — météo, cycle, dates de vendange, caractère de l'année.
  Une page par an, valable pour toutes les cuvées.
- **Croisement (cuvée × millésime)** — ce que cette année a fait à cette
  parcelle. Rendement, date, degré, dégustation. 3 à 5 phrases neuves.

La fiche millésime **assemble** les trois : extrait court + lien vers la page
longue. Ne jamais recopier le même paragraphe sur neuf pages (duplicate
content). Le texte long vit à un seul endroit et fait autorité.

## Gamme (9 cuvées)

| Cuvée | Niveau | SEO |
|---|---|---|
| Bourgogne blanc | Régional | générique |
| Bourgogne rouge | Régional | générique |
| L'Ouche de la Maison Rouge (rouge) | Monopole | exclusif |
| Grand Près d'Aubigny (blanc) | Monopole | exclusif |
| Fortunata — la Romaine | Hommage | exclusif |
| Cuvée Nathan | Hommage | exclusif |
| Rully Village blanc (Fromange) | Village | concurrentiel |
| Rully Village rouge | Village | concurrentiel |
| Mercurey 1er Cru Champs Martin rouge | 1er cru | concurrentiel |

Ne jamais écrire « de base » ou « entrée de gamme » sur le site.
Classement du catalogue par **origine** (Aluze et monopoles, puis Rully,
puis Mercurey), pas par prix.

## Arborescence

```
/                                  Accueil
/le-domaine/                       Le domaine aujourd'hui
/le-domaine/vignoble/              Parcelles, sols, exposition, encépagement
/le-domaine/vinification/          Bio, grappes entières, foudre, jarres
/le-domaine/metairie/              Portail — 186 ha de prés et bois autour
                                   des vignes, la boucle fermée
/le-domaine/metairie/compost/      **Page clé** — fabrication sur place,
                                   matières, quantités, effet sur les sols
/le-domaine/metairie/animaux/      Chevaux, vaches (partie en pension)
/le-domaine/metairie/biodiversite/ Ruches, truffière, haies, bois
/le-domaine/equipe/                Qui fait le vin (page E-E-A-T)

/histoire/                         Portail — 2000 ans sur les mêmes terres
/histoire/epoque-romaine/          Occupation antique, la stèle
/histoire/cisterciens/             1132, l'implantation
/histoire/archives/                Portail du fonds
/histoire/archives/<slug>/         Une page par charte

/vins/                             Portail catalogue
/vins/<cuvee>/                     Page cuvée (intemporelle)
/vins/<cuvee>/<millesime>/         Fiche millésime — page transactionnelle
/vins/monopoles/                   Les deux monopoles

/millesimes/<annee>/               Compte-rendu annuel
/carnet/                           Carnet de vigne et de cave (phase 3)

/ou-nous-trouver/                  Cavistes, restaurants, importateurs
/visiter/                          Caveau, dégustations, accès
/contact/
/boutique/                         → checkout Odoo

/pro/                              EN prioritaire — "Trade"
/pro/inscription/                  Validation manuelle
/pro/espace/                       Login — noindex
```

Miroir EN sous `/en/`. Pages de service : mentions-legales, cgv,
confidentialite, plan-du-site.

## Navigation — PROPOSITION, À VALIDER

Non décidé à ce jour. Proposition, volontairement courte :

**Menu principal (5 entrées max)**
```
Les vins   |   Le domaine   |   Histoire   |   Visiter   |   Boutique
```

- `Les vins` → menu déroulant : Monopoles, Aluze, Rully, Mercurey, Tout voir
- `Le domaine` → Vignoble, Vinification, La métairie (prés et bois, animaux,
  compost, biodiversité), L'équipe
- `Histoire` → Époque romaine, Cisterciens, Archives
- `Boutique` → bouton distinct visuellement (seul CTA de la barre)

**Pied de page**
Où nous trouver · Contact · Espace pro (EN: Trade) · Millésimes · Carnet ·
Mentions légales · CGV · Confidentialité · Mention sanitaire obligatoire

**Règles**
- L'accueil s'adresse au **grand public**. Le pro sait pourquoi il vient et
  ira droit aux cuvées ; son entrée est en pied de page.
- Sur la version EN, le lien Trade est plus visible (public plus souvent pro).
- Sélecteur de langue en haut à droite, liens `hreflang` réciproques.

## Gabarit fiche millésime (page la plus importante)

Ordre imposé, du sensible au technique :

1. H1 `<Cuvée> <Millésime> — <Appellation>`
2. Visuel bouteille + parcelle
3. **Le vin** — 2 à 3 phrases : caractère, apogée, accords. Langage clair.
4. **Le lieu** — extrait + lien vers `/vins/<cuvee>/`
5. **Achat** — prix TTC, conditionnement, panier ou « épuisé »
6. **Bloc technique** — tableau, visible, JAMAIS replié en accordéon :
   appellation, cépage, surface, âge des vignes, sol, exposition, altitude,
   bio (n° certification), rendement hl/ha, date de vendange, vinification,
   élevage, degré, pH, acidité totale, SO2 total, collage, filtration,
   **production en cols** (public — la disponibilité reste au pro)
7. Fiche PDF en téléchargement, **en plus** du HTML, jamais à la place
8. Liens : autres millésimes, compte-rendu du millésime
9. Bloc pro : « Tarifs et disponibilité professionnels → créer un compte »

Le QR code des bouteilles ne pointe **pas** ici : c'est un e-label
réglementaire, servi par `qr.aubigny.wine`, sans contenu marketing ni
tracking (voir DESIGN.md). Il peut en revanche renvoyer vers le site par
son pied de page. Nomenclature existante dans `../qrcode` :
`<appellation>_<cuvée>_<couleur>_<millésime>_<lot>`.

## Règles rédactionnelles

- **Publier ce qui a une conséquence dans le verre**, pas le journal de cave.
  Le nombre de pigeages et la marque du pressoir n'ont rien à faire ici.
- **Le pourquoi vaut plus que le quoi.** « Grappes entières » est banal ;
  « grappes entières ici parce que les rafles y mûrissent bien et que ça
  garde de la fraîcheur sur un secteur chaud » est incopiable.
- Chaque cuvée a son angle propre — ne pas remplir neuf fois le même
  formulaire.
- **Ne jamais revendiquer ce qu'on ne fait pas.** C'est la seule ligne rouge.
  L'exhaustivité n'est pas exigée, l'exactitude oui.
- Les interventions correctives (levurage, acidification) se racontent
  **dans la page millésime**, en récit — problème, décision, conséquence —
  jamais en ligne sèche dans le tableau technique.
- Conclusion d'abord, raisonnement ensuite (l'inverse du réflexe ingénieur).
- Ton grand public en FR. EN **rédigé** pour un lecteur pro, pas traduit.
- Ne jamais s'excuser d'un millésime. Décrire, pas justifier.

## Référencement

**Ce qu'on vise** : le nom du domaine, les deux monopoles (concurrence nulle),
les couples cuvée × millésime, les comptes-rendus de millésime, l'histoire
(cisterciens, charte 1132, stèle), et le vocabulaire trade en anglais sur la
Côte Chalonnaise — espace quasi vide.

**Ce qu'on ne vise pas** : « acheter Mercurey en ligne » et assimilé. Terrain
des marchands (Millesima, Vinatis, Twil, cavistes). Perdu d'avance.

**Le seul avantage durable** : les données de première main. Un marchand
recopie une fiche fournisseur ; seul le producteur publie dates de vendange,
rendements réels, production en cols, comptes-rendus, archives. C'est aussi
ce que les assistants IA extraient — ils se nourrissent mal d'évocation.

**Technique**
- `Organization` / `LocalBusiness` sur l'accueil
- `Product` + `Offer` sur chaque fiche millésime (millésime, contenance,
  prix, devise, disponibilité) — quasi aucun domaine ne le fait
- `Article` sur les millésimes et le carnet, `BreadcrumbList` partout
- `hreflang` réciproques + `x-default`, URLs `/en/` distinctes
- **Ne jamais supprimer une page.** Millésime épuisé = page conservée,
  marquée épuisée, liée au millésime courant.

**Hors site** : Google Business Profile, cohérence nom/adresse/téléphone,
Wine-Searcher, Vivino, CellarTracker, annuaire BIVB, pages exposants
Wine Paris et Millésime Bio, Wikidata (factuel, sourcé, sans autopromotion).
Backlinks : presse vin FR/EN, presse patrimoine, milieu universitaire —
générés par le fonds d'archives, pas par l'optimisation on-page.

**À proscrire** : pages doorway, texte caché, achat de liens, contenu généré
en masse. Site vendant de l'alcool = catégorie surveillée.

## Contraintes légales

- **Loi Évin** : contenu objectif et informatif (terroir, appellation,
  vinification, dégustation). Pas d'imagerie lifestyle avec des gens qui
  boivent. Mention sanitaire obligatoire en pied de page.
- **Vérification d'âge** à l'entrée de la boutique.
- **Périmètre** : checkout réel France + 3-4 pays UE à choisir (accises et
  EMCS à cadrer pays par pays avec le comptable). Hors UE : pas de panier,
  renvoi vers l'importateur local ou formulaire de distribution.
- **B2B** : vente départ cave, Incoterms EXW/FCA Aluze, DAE. Licences et
  accises de destination portées par l'importateur.
- **Cohérence tarifaire** : le prix boutique TTC ne doit pas concurrencer
  cavistes et importateurs.
- **Stèle gallo-romaine** : patrimoine archéologique, DRAC informée.
  Traitement respectueux, jamais un argument de vente.

## Phasage

**Phase 0 — hors site, indépendant**
DRAC (statut de la stèle, lecture épigraphique) · Archives départementales 71
(transcription des chartes) · numérisation HD du fonds, copie de conservation
à part · Google Business Profile · cohérence des annuaires.

**Phase 1 — le socle marchand**
Catalogue structuré dans Odoo · 9 fiches cuvée + 1 page millésime +
9 paragraphes de croisement, FR et EN · checkout Odoo France + UE, thémé ·
espace pro et validation de compte · schema.org, hreflang, sitemaps.

**Phase 2 — le contenu qui différencie**
Pages histoire (romain, cisterciens, portail d'archives) · 3 à 5 chartes
publiées, transcrites et traduites · premier compte-rendu de millésime ·
page Trade EN · « Où nous trouver ».

**Phase 3 — au long cours**
Une charte publiée par mois · carnet de vigne (4 entrées/an suffisent,
tenues dans la durée) · QR codes → fiche millésime et charte du lieu ·
DE/JA selon les marchés · dossier presse anglais bâti sur les archives.

**Priorité commerciale réelle**, dans l'ordre : fiches millésime > tunnel de
commande et frais de port clairs > liste d'emails (2-3 envois par an, le
canal qui vend le plus en direct) > carnet. Le carnet construit l'autorité,
il ne vend pas directement.

## Premier jalon technique

Exposer le catalogue via l'API Odoo et générer les 9 fiches cuvée en Astro.
Deux jours. Objectif : valider le confort du couplage avant d'investir
dans le reste.

## En suspens

- Nombre de millésimes en vente simultanée par cuvée (détermine le volume
  de fiches : 9 cuvées × N millésimes × 2 langues)
- Pays UE ouverts au checkout
- Transporteur agréé et grille de frais de port
- Frontière exacte Astro/Odoo sur les fiches millésime (page Astro avec
  bouton vers Odoo, ou page produit Odoo directement) — décision
  structurante restant à trancher
- Menu de navigation (proposition ci-dessus à valider)
- Cuvée d'hommage Nathan : accord explicite de la famille, de préférence
  écrit, et leur mot à dire sur le texte de l'étiquette
