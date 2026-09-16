# SEO.md — Stratégie de référencement, Domaine d'Aubigny

Complément de CLAUDE.md. Objectif business : vendre du vin en direct.

## Le postulat de départ

**Le SEO ne crée pas la demande, il la capte.**

Personne ne cherche « Bourgogne rouge bio » et n'achète chez un domaine
inconnu. Cette requête appartient aux marchands (Vinatis, Twil, Millesima,
Grands Bourgognes) — des milliers de pages, dix ans d'antériorité, budget
publicitaire. Sur l'intention d'achat froide, on ne gagne pas.

Ce qui se passe réellement : quelqu'un entend parler du domaine (caveau,
salon, restaurant, article, bouteille servie chez un ami, QR code) puis
**cherche le nom**. À ce moment-là, il doit trouver une page qui vend.

Toute la stratégie découle de là : capter le trafic de notoriété, et
alimenter la notoriété par un contenu que personne d'autre ne peut écrire.

## Les trois cercles, par ordre de rentabilité

### Cercle 1 — La notoriété existante (le plus rentable, le plus négligé)

Requêtes : nom du domaine, noms des cuvées, noms des monopoles, cuvée +
millésime. Volume faible, intention maximale, concurrence quasi nulle.

Ce qu'il faut :
- Être premier sur son propre nom, sans ambiguïté (attention aux nombreux
  « Aubigny » en France — d'où l'importance de l'entité, cf. §Hors-site)
- Une fiche achetable pour chaque cuvée × millésime
- Google Business Profile complet (recherches locales, « domaine Aluze »)
- Les QR codes bouteille qui atterrissent sur une page marchande, pas sur
  une page d'accueil

### Cercle 2 — La longue traîne informationnelle

Requêtes : « Mercurey Champs Martin », « millésime 2024 Côte Chalonnaise »,
« monopole Bourgogne », « cisterciens Aluze », « charte 1132 », et surtout
**« métairie cistercienne », « compost de domaine », « polyculture-élevage
vigne », « boucle fermée vignoble »**.
Volume faible à moyen, intention mixte, concurrence faible.

C'est là qu'on peut réellement gagner des positions, parce que le contenu
de première main n'existe nulle part ailleurs. Un marchand recopie une fiche
fournisseur ; seul le producteur publie dates de vendange, rendements réels,
production en cols, comptes-rendus de millésime, archives.

**Le contenu qui différencie n'est pas viticole — mais il reste au service du
vin.** Le domaine est une métairie cistercienne en fonctionnement : 186 ha de
prés et de bois exploités en propre autour de 20 ha de vigne, des animaux
(partie en pension), et un compost fabriqué sur place et remis dans les
vignes. La boucle prés → bêtes → fumier → compost → vigne est encore fermée,
sur les mêmes terres depuis 1132.

Personne d'autre ne peut raconter ça. Les archives prouvent le passé ; le
compost prouve le présent — et c'est plus fort, parce que c'est vérifiable
aujourd'hui. La page compost doit être factuelle et détaillée (matières,
procédé, quantités, effet sur les sols) : c'est un aimant à liens éditoriaux
et l'argument que reprendra un importateur bio pour parler du domaine à ses
propres clients.

**Règle de parcours** : ces pages ne sont jamais une entrée. Le visiteur
vient pour le vin ; il découvre la métairie en creusant, et il repart en
comprenant pourquoi ces vins sont ce qu'ils sont. Le maillage va donc des
fiches vin vers la métairie, pas l'inverse.

### Cercle 3 — L'anglais professionnel

Requêtes : « Côte Chalonnaise organic producer », « Burgundy monopole »,
« Mercurey premier cru importer ». Espace quasi vide : le contenu anglophone
sérieux se concentre sur la Côte de Nuits et de Beaune.

Public : importateurs, cavistes, sommeliers. Ne convertit pas en panier mais
en contact commercial — souvent la vente la plus rentable du site.

## Mapping page → intention

Une page = une intention. Deux pages qui visent la même requête se
cannibalisent : Google en choisit une et dilue l'autre.

| Page | Intention | Requêtes | Rôle |
|---|---|---|---|
| `/` | navigation | nom du domaine | orienter, rassurer |
| `/vins/` | exploration | gamme, catalogue | distribuer vers les fiches |
| `/vins/<cuvee>/` | information | nom de cuvée, lieu-dit | autorité sur le lieu |
| `/vins/<cuvee>/<mill>/` | **achat** | cuvée + millésime | **convertir** |
| `/vins/monopoles/` | curiosité | monopole Bourgogne | différenciation |
| `/millesimes/<an>/` | information | millésime + région | liens, citations |
| `/histoire/*` | curiosité | cisterciens, stèle, 1132 | liens presse |
| `/le-domaine/metairie/compost/` | curiosité | compost domaine, boucle fermée | **liens, preuve du présent** |
| `/le-domaine/metairie/*` | curiosité | métairie cistercienne, polyculture | différenciation |
| `/ou-nous-trouver/` | local | où acheter + ville | vente indirecte |
| `/visiter/` | local | dégustation, caveau Aluze | trafic caveau |
| `/en/pro/` | commercial | trade, importer | contact B2B |

**Règle de cannibalisation** : la page cuvée parle du *lieu* (intemporel),
la fiche millésime parle du *vin de l'année* (transactionnel). Si les deux
disent la même chose, fusionner ou différencier. La fiche millésime porte
le prix et le panier ; la page cuvée jamais.

## Maillage interne

Le maillage compte plus que les balises. Sur une structure à trois axes,
il se définit à l'avance, pas au moment de coder.

```
Accueil ──> /vins/ ──> page cuvée ──> fiche millésime (page à convertir)
                            │                │
                            │                ├──> /millesimes/<an>/
                            │                ├──> autres millésimes
                            │                └──> /le-domaine/vinification/
                            └──> /histoire/... (si parcelle historique)

/histoire/archives/<charte> ──> page cuvée du lieu concerné
/millesimes/<an>/ ──> les 9 fiches de l'année
/ou-nous-trouver/ ──> /en/pro/
```

Règles :
- Chaque page d'archive lie la cuvée du lieu qu'elle documente. C'est ce
  qui transfère l'autorité du contenu historique vers les pages marchandes.
- Ancres descriptives, jamais « cliquez ici » ni « en savoir plus ».
- Toute fiche millésime est à ≤ 3 clics de l'accueil.
- Un millésime épuisé lie explicitement le millésime courant.

## Technique

### Indexation
- `robots.txt` : autoriser tout le public. Bloquer `/pro/espace/`, le panier,
  le compte client, les paramètres de tri et de filtre.
- `noindex` sur : espace pro, tunnel de commande, pages de recherche interne.
- Sitemaps séparés : `pages`, `vins`, `histoire`, `millesimes`, `images`.
  Générés par Astro, soumis à Search Console.
- Canoniques auto-référentes sur toutes les pages.
- **Pagination et filtres** : si le catalogue propose des filtres (couleur,
  appellation), les URLs paramétrées ne doivent pas être indexées.

### Multilingue
- `/en/` en URLs distinctes, jamais de traduction côté client
- `hreflang` réciproques fr ↔ en + `x-default` (fr)
- Le sélecteur de langue pointe vers la page équivalente, pas vers l'accueil
- L'anglais est **rédigé**, pas traduit — vocabulaire pro : farming,
  élevage, whole-cluster, allocation, technical sheet

### Données structurées
- `Organization` + `LocalBusiness` (accueil) : nom, adresse, téléphone,
  horaires du caveau, `sameAs` vers réseaux et annuaires
- `Product` + `Offer` sur chaque fiche millésime : nom, millésime,
  contenance, prix, devise, `availability`, `itemCondition`.
  Presque aucun domaine ne le fait — avantage direct.
- `Article` sur millésimes et carnet, avec `datePublished` et `author`
- `BreadcrumbList` partout, `FAQPage` si section questions

### Images (poste sous-estimé sur un site de domaine)
- AVIF/WebP, `srcset` responsive, `loading="lazy"` sauf la première image
- Dimensions explicites (évite le CLS)
- Noms de fichiers descriptifs : `grand-pres-aubigny-parcelle-2024.avif`
- `alt` rédigés, factuels, pas bourrés de mots-clés
- Les scans d'archives en haute définition sont un actif de recherche image :
  page dédiée, légende, transcription à proximité

### Performance
Astro statique met à l'abri par construction, mais poser la contrainte :
LCP < 2,5 s, CLS < 0,1, INP < 200 ms sur mobile 4G. Attention aux polices
personnalisées et aux vidéos d'accueil, seuls vrais risques.

### Vérification d'âge
Ne doit **jamais** bloquer le crawl. Overlay côté client après rendu, pas
une page intermédiaire qui masque le contenu aux robots.

## Hors-site — l'entité avant les backlinks

Google doit comprendre que le domaine est une **entité**, pas une chaîne de
caractères. C'est ce qui règle le problème des multiples « Aubigny ».

Par ordre d'effet :
1. **Google Business Profile** — effet immédiat sur les recherches locales,
   le caveau, « domaine viticole Aluze ». Photos, horaires, avis.
2. **Cohérence NAP** (nom, adresse, téléphone) strictement identique partout
3. **Annuaires métier** : BIVB, Wine-Searcher, Vivino, CellarTracker,
   pages exposants Wine Paris et Millésime Bio, annuaires bio
4. **Wikidata** — entité factuelle et sourcée, sans autopromotion. Effet
   indirect et lent, mais c'est une brique d'identité pour le Knowledge
   Graph et pour les modèles de langage.
5. **Backlinks éditoriaux** — le vrai levier de positionnement. Ils viennent
   du fonds d'archives, pas de l'optimisation on-page : presse vin FR et
   anglo-saxonne, presse patrimoine, revues d'histoire cistercienne,
   épigraphie. Un domaine qui publie des chartes du XIIe transcrites est
   citable ; un domaine qui parle de sa passion ne l'est pas.

## Assistants IA (canal émergent)

De plus en plus d'acheteurs interrogent ChatGPT ou Perplexity avant Google.
Ces systèmes extraient des **faits vérifiables** et se nourrissent mal
d'évocation lyrique. Une page factuelle, structurée, datée a beaucoup plus
de chances d'être citée qu'une page d'ambiance.

Ce qui aide : données structurées propres, chiffres explicites, dates,
entités nommées (appellation, commune, millésime), Wikidata, cohérence
entre le site et les sources tierces. Rien de spécifique à faire au-delà
de bien faire le reste.

## À proscrire

Pages doorway par ville, texte caché, achat de liens, contenu généré en
masse, faux avis. Un site vendant de l'alcool est dans une catégorie
surveillée : une sanction est durable et coûteuse à lever.

## Migration (point le plus risqué de la refonte)

Si un site existe déjà :
1. Crawler l'ancien site et exporter toutes les URLs
2. Exporter les pages à trafic et les backlinks (Search Console + un outil
   de netlinking)
3. Table de correspondance **1 pour 1** ancienne URL → nouvelle URL
4. Redirections **301**, jamais 302, jamais toutes vers l'accueil
5. Conserver les URLs qui reçoivent des liens externes si possible
6. Surveiller les 404 en Search Console pendant 3 mois après bascule

Une refonte mal redirigée perd des années d'autorité. C'est le seul point
du projet où une erreur est difficilement rattrapable.

## Mesure

Dès le premier jour, sinon on pilote à l'aveugle six mois :
- Search Console (les deux propriétés, fr et en) + sitemaps soumis
- Analytics respectueux du RGPD (Plausible, Matomo) — pas de bandeau lourd
- Suivi Odoo : chiffre d'affaires par source, panier moyen, taux de
  conversion des fiches millésime
- Suivi des inscriptions à l'espace pro et des demandes de distribution

**KPI qui comptent réellement** : commandes en direct, inscriptions
newsletter, demandes pro qualifiées. Pas les positions ni les impressions.

## Ordre d'exécution

**Immédiat, indépendant du site** : Google Business Profile · cohérence NAP
· annuaires métier.

**Au lancement** : fiches cuvée × millésime FR + EN · Product/Offer ·
hreflang · sitemaps · Search Console · plan de redirections · QR codes
pointant vers les fiches.

**3 à 6 mois** : pages histoire et archives · premier compte-rendu de
millésime · page Trade EN · Wikidata · premiers contacts presse.

**Continu** : une charte par mois · carnet (4 entrées/an tenues dans la
durée valent mieux que 15 puis rien) · newsletter 2-3 fois par an.

## Rappel de hiérarchie

Ce qui vend, dans l'ordre réel :
1. Une fiche millésime achetable
2. Un tunnel de commande et des frais de port clairs
3. **Une liste d'emails** — le canal le plus rentable en vente directe
4. Le contenu (autorité, liens, notoriété) — effet indirect, lent, durable

Le SEO sert le point 1 et alimente le point 3. Il ne remplace ni l'un
ni l'autre.
