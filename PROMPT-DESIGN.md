# PROMPT-DESIGN.md

Brief de design prêt à être passé à une IA générative (v0, Lovable, Claude,
Figma Make…). Copier la section « PROMPT » telle quelle, en y ajoutant l'écran
voulu (voir « Écrans à générer » en fin de fichier).

**Conseil d'usage** : ne demande jamais tout le site d'un coup. Un écran à la
fois donne des résultats nettement meilleurs, et tu gardes la main sur la
cohérence. Commence par la fiche millésime — c'est la page qui vend.

---

## PROMPT

Tu es directeur artistique et développeur front. Tu conçois le site d'un
domaine viticole bourguignon. Produis un design complet et du code HTML/CSS
autonome (Tailwind accepté), sans dépendance externe.

### Le client

Domaine d'Aubigny, à Aluze en Côte Chalonnaise (Bourgogne). 20 hectares de
vigne en agriculture biologique.

Mais le domaine est d'abord **une métairie cistercienne fondée en 1132,
toujours en fonctionnement** : les 20 ha de vigne sont entourés de 186 ha de
prés et de bois exploités en propre. Il y a des chevaux, des vaches, des
ruches, une truffière. Le domaine fabrique son propre compost sur place et le
remet dans ses vignes — la boucle prés, bêtes, fumier, compost, vigne est
encore fermée, sur les mêmes terres depuis presque neuf siècles.

Le domaine possède les actes originaux de sa fondation (une centaine de pages
d'archives) et une stèle funéraire gallo-romaine vieille d'environ deux mille
ans, retrouvée sur place.

Deux des cuvées sont des **monopoles** — des parcelles qui n'appartiennent
qu'à ce domaine, dont personne d'autre au monde ne peut employer le nom.

### L'objectif du site

Vendre le vin en direct. C'est l'unique objectif. Tout le reste est au
service de cela.

### Le principe narratif — le plus important

**Le vin est central. La métairie est une révélation, jamais une entrée.**

Le visiteur vient pour le vin : c'est ce qu'il cherche et ce qu'il achète.
Le site ne doit jamais l'en éloigner. Mais en creusant, il découvre ce qu'il
y a derrière — et il repart en comprenant *pourquoi* ces vins sont ce qu'ils
sont.

Le design doit produire exactement cette expérience : simple et évident en
surface, profond dès qu'on gratte. Jamais l'inverse.

### Ton et registre

- Sobre, documenté, précis. Le domaine assume une approche mesurée et
  transparente : on publie des chiffres, des dates, des décisions expliquées.
- **Interdits absolus** : « passion », « terroir d'exception », « savoir-faire
  ancestral », « tradition familiale ». Deux cents domaines bourguignons
  écrivent déjà cela. La singularité est factuelle, pas lyrique.
- Simple ne veut pas dire générique. Les faits sont extraordinaires — il
  suffit de les énoncer sans emphase.
- Français d'abord. Une version anglaise existera, rédigée pour un lecteur
  professionnel (importateurs, sommeliers).

### Contrainte légale structurante (loi Évin, France)

La publicité pour l'alcool est encadrée. Le contenu doit rester **objectif et
informatif** : origine, composition, mode de production, terroir, appellation,
dégustation.

Concrètement, pour le design :
- **Aucune imagerie de consommation** : pas de gens qui boivent, pas de
  scènes de fête, pas de convivialité mise en scène, pas d'ambiance
  lifestyle.
- Imagerie autorisée : le lieu, les parcelles, la cave, le travail, les
  bouteilles, les documents, les animaux, les paysages.
- Mention sanitaire obligatoire en pied de page de toutes les pages :
  « L'abus d'alcool est dangereux pour la santé. À consommer avec
  modération. »

Cette contrainte pousse vers un site **éditorial et documentaire** — ce qui
tombe bien, car c'est exactement la force du domaine.

### Direction artistique attendue

- Ni site de château bordelais, ni startup. Un lieu agricole vivant et
  ancien, présenté avec rigueur.
- Beaucoup de blanc, une typographie soignée et lisible, une hiérarchie
  claire. Le contenu prime sur l'effet.
- Une palette sobre tirée du lieu — pierre, terre, végétal — sans pastiche
  médiéval ni parchemin décoratif.
- Un motif graphique discret peut être tiré des documents d'archives
  (écriture, sceau, initiale) et servir de signature visuelle.
- Photographies pleine largeur, respirations généreuses, pas de surcharge
  décorative.
- **Mobile d'abord.** Une part importante du trafic vient de scans de QR
  codes sur les bouteilles, souvent au restaurant ou à table, en connexion
  moyenne.

### Contraintes techniques impératives

- **Aucune dépendance externe** : pas de Google Fonts, pas de YouTube
  embarqué, pas de script tiers. Polices auto-hébergées.
- Performance : LCP sous 2,5 s, CLS sous 0,1 en mobile 4G. Pas de vidéo
  d'accueil lourde.
- HTML sémantique, hiérarchie de titres correcte (un seul h1), attributs alt
  rédigés. Le référencement est un objectif explicite du projet.
- Images en AVIF/WebP, dimensions explicites, lazy loading sauf le premier
  visuel.
- Accessibilité : contrastes suffisants, navigation au clavier, focus
  visibles.
- Le front sera construit en **Astro** (statique). Produis du HTML/CSS
  autonome et facilement transposable en composants.

### Navigation

```
Les vins   |   Le domaine   |   Histoire   |   Visiter   |   Boutique
```

- « Boutique » est le seul appel à l'action de la barre, visuellement
  distinct.
- Sous « Le domaine » : Vignoble, Vinification, La métairie (compost,
  animaux, biodiversité), L'équipe.
- Sous « Histoire » : Époque romaine, Cisterciens, Archives.
- Pied de page : où nous trouver, contact, espace professionnel, mentions
  légales, CGV, confidentialité, mention sanitaire, raison sociale et SIRET.

### Ce qu'il ne faut pas faire

- Mettre la métairie, les animaux ou le compost en page d'accueil comme
  sujet principal. C'est une découverte, pas une accroche.
- Cacher l'information technique derrière des onglets ou des accordéons
  repliés. Elle doit être visible et indexable.
- Traiter la stèle funéraire gallo-romaine comme un argument marketing.
  C'est la tombe d'une adolescente ; elle se raconte avec respect ou pas
  du tout.
- Multiplier les entrées de menu, les bandeaux, les popups.
- Écrire du texte d'ambiance à la place de faits.

---

## Écrans à générer

Ajouter au prompt ci-dessus **une seule** des sections suivantes à la fois.

### 1. Fiche millésime — priorité absolue

C'est la page qui vend et qui porte le référencement. Structure imposée,
du sensible au technique :

1. Titre : `<Cuvée> <Millésime> — <Appellation>`
2. Visuel : bouteille et parcelle
3. **Le vin** — 2 à 3 phrases : caractère, apogée, accords. Langage clair,
   sans jargon.
4. **Le lieu** — la parcelle, ce qui la distingue, lien vers la page cuvée
5. **Achat** — prix TTC, conditionnement, bouton panier ou mention
   « épuisé »
6. **Bloc technique** en tableau, visible, non replié : appellation, cépage,
   surface, âge des vignes, sol, exposition, altitude, certification bio,
   rendement, date de vendange, vinification, élevage, degré, pH, acidité
   totale, SO2 total, collage, filtration, production en cols
7. Fiche PDF en téléchargement, en complément du HTML
8. Liens : autres millésimes de la cuvée, compte rendu du millésime, et une
   phrase discrète du type « la matière organique de cette parcelle vient du
   compost fabriqué sur le domaine » avec lien
9. Encart professionnel : « Tarifs et disponibilité pro — créer un compte »

Exemple concret à utiliser : Mercurey 1er Cru Champs Martin rouge 2023, 51 €.
Autres cuvées : Bourgogne blanc (25 €), Rully blanc (31 €), et les deux
monopoles — L'Ouche de la Maison Rouge (rouge) et Grand Près d'Aubigny
(blanc), 25 €.

### 2. Page d'accueil

Public visé : le particulier. Le professionnel sait pourquoi il vient.

1. Le lieu, pas le produit. Une image forte des parcelles ou de la cave, et
   une phrase qui pose l'identité : un domaine de 20 hectares en bio à Aluze,
   en Côte Chalonnaise, sur des terres cultivées depuis 1132. Pas de slogan,
   pas de superlatif.
2. Deux entrées immédiates : « Découvrir les vins » et « Le domaine ».
3. Trois ou quatre cuvées mises en avant, dont au moins un monopole.
4. Un bloc court « notre façon de faire » — bio, compost fabriqué sur place,
   vinifications assumées. Trois phrases, un lien vers le détail. C'est ici
   que la révélation s'amorce, discrètement.
5. Pied de page complet.

### 3. Page catalogue

Grille des cuvées, classées **par origine** et non par prix : Aluze et
monopoles, puis Rully, puis Mercurey. Pas de filtres complexes — la gamme
compte moins de dix cuvées. Chaque vignette mène à la fiche millésime.

### 4. Page compost (la révélation)

Page factuelle et détaillée : d'où viennent les matières, comment le compost
est fabriqué, quelles quantités, ce que cela change dans les sols. Photos du
processus. Ton documentaire, chiffres explicites. C'est le contenu que
reprendront journalistes et importateurs — il doit être solide, pas joli.

### 5. Page archive (une charte)

Le document photographié en haute définition et zoomable, sa date, la nature
de l'acte, la transcription latine, la traduction française, et deux ou trois
phrases de contexte. Lien vers la cuvée du lieu concerné.

### 6. Page « Trade » (anglais)

Destinée aux importateurs. Volumes disponibles, marchés déjà couverts,
philosophie de partenariat, formulaire de contact, création de compte
professionnel. Ton documenté, vocabulaire professionnel anglophone.

---

## Après génération

Vérifier systématiquement : mention sanitaire présente, aucune imagerie de
consommation, bloc technique non replié, un seul h1, pas de dépendance
externe, rendu mobile correct en premier.
