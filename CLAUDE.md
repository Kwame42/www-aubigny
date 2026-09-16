# CLAUDE.md — Site web Domaine d'Aubigny

Contexte de travail pour toute session sur ce dépôt.

> **Pour la stratégie commerciale, SEO et ordre d'exécution détaillés**, voir **[SEO.md](./SEO.md)** et **[../aubigny-strategie.txt](../aubigny-strategie.txt)**. Ce fichier couvre la structure technique et le modèle de contenu. La stratégie est l'autorité.

## Objectif

**Nom de domaine : `aubigny.wine`** (confirmé).

Sous-domaines :
- `aubigny.wine` — front Astro, contenu public et SEO
- `shop.aubigny.wine` — boutique et espace pro, servis par Odoo
- `qr.aubigny.wine` — e-labels réglementaires (voir DESIGN.md)

Vendre le vin du domaine en direct (France + quelques pays UE) et servir de
point d'entrée aux importateurs et professionnels étrangers.

*Pour le contexte complet du domaine (métairie, archives, positionnement), voir **[SEO.md](./SEO.md)** sections 2-4.*

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

/pro/                              EN prioritaire — "Trade"
/pro/inscription/                  Validation manuelle
/pro/espace/                       Login — noindex
```

**Achat & Boutique** : La fiche millésime (`/vins/<cuvee>/<millesime>/`) contient un bouton "Ajouter au panier" qui renvoie vers `shop.aubigny.wine` (Odoo). Pas de page `/boutique/` en Astro.

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
- `Boutique` → lien externe vers `shop.aubigny.wine` (Odoo), bouton distinct visuellement (seul CTA de la barre)

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
5. **Achat** — prix TTC, conditionnement, bouton "Ajouter au panier" → `shop.aubigny.wine` (Odoo) ou « épuisé »
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

## Référencement et SEO

**Voir [SEO.md](./SEO.md)** pour la stratégie SEO complète, les trois cercles de rentabilité, le mapping page→intention, le maillage interne, les règles techniques, et l'ordre d'exécution.

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

## Phasage et Ordre d'Exécution

**Voir [SEO.md](./SEO.md) section "Ordre d'exécution"** pour le plan détaillé par phase (immédiat, lancement, 3-6 mois, continu) et les KPI réels.

## Phasage des pages

**Phase 1 — Lancement (2-3 semaines)**
Pages critiques pour la conversion. Voir [SEO.md](./SEO.md) "Ordre d'exécution".
- `/` Accueil
- `/vins/` Catalogue + filtre
- `/vins/<cuvee>/` Page cuvée (autorité)
- `/vins/<cuvee>/<millesime>/` Fiche millésime **→ Odoo** ⭐
- `/vins/monopoles/` Différenciation
- `/visiter/` Caveau + dégustations (local)
- `/contact/`, `/ou-nous-trouver/`
- `/en/pro/` Trade (anglais, pro)
- Mentions légales, CGV, confidentialité

**Phase 2 — 3-6 mois**
Contenu qui construit l'autorité et alimente le SEO. Voir [SEO.md](./SEO.md) "Cercle 2".
- `/histoire/` Portail + occupation romaine + cisterciens 1132
- `/histoire/archives/<slug>/` Une page par charte (transcription + traduction)
- `/millesimes/<annee>/` Comptes-rendus annuels (météo + décisions)
- `/le-domaine/` Portail ressemblant vignoble + vinification
- `/le-domaine/metairie/compost/` Page clé — "aimant à liens"

**Phase 3 — Au long cours**
Contenu maintenu dans la durée.
- `/zh/` Page unique en chinois (sobre, factuelle, traduite humainement). **BUT : crédibilité** (salon/négociation), pas SEO. Voir [aubigny-strategie.txt](../aubigny-strategie.txt) "Le cas de l'Asie"
- Une charte d'archives par mois
- Carnet de vigne (4 entrées/an minimum)
- QR codes → fiche millésime + charte du lieu

## Images du Domaine

**Répertoire : `../webp/`** — 87 images WebP du domaine, déjà optimisées.

Catégories disponibles :
- **27 nature** : paysages, environnement, saisons
- **24 cuverie** : tonneaux, amphores, foudres, caves
- **11 vin** : bouteilles, verres, dégustations
- **11 chevaux** + 6 vaches + 2 chèvres (animaux)
- **ferme, vignes, cuve**

**À faire :**
1. Copier les meilleures dans `public/images/` avec noms SEO descriptifs
   - Exemple : `nature-104.webp` → `aluze-paysage-automnale.webp`
2. **Diversifier les images** par page (ne pas réutiliser la même partout)
3. Ajouter des `alt` factuels et descriptifs (pour SEO + accessibilité)
4. Utiliser systématiquement pour :
   - `/le-domaine/vignoble/` ← paysages + vignes
   - `/le-domaine/vinification/` ← cuverie (foudres, amphores)
   - `/le-domaine/metairie/animaux/` ← chevaux, vaches
   - Accueil, histoire, carnet ← nature variée

**Ne pas hésiter à diversifier** : il y a 87 images, l'occasion d'avoir du contenu visuel riche et non répétitif.

## Premier jalon technique

Exposer le catalogue via l'API Odoo et générer les 9 fiches cuvée en Astro.
Deux jours. Objectif : valider le confort du couplage avant d'investir
dans le reste.

## En suspens

- Nombre de millésimes en vente simultanée par cuvée (détermine le volume
  de fiches : 9 cuvées × N millésimes × 2 langues)
- Pays UE ouverts au checkout
- Transporteur agréé et grille de frais de port
- Cuvée d'hommage Nathan : accord explicite de la famille, de préférence
  écrit, et leur mot à dire sur le texte de l'étiquette
