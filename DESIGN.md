# DESIGN.md — Charte, thème Odoo et signaux de confiance

Complément de CLAUDE.md. Ce fichier couvre ce qui se décide **au moment de
concevoir le design**, en particulier celui de la boutique.

Rappel d'architecture : le front public est en Astro, mais **la boutique et
l'espace pro sont servis par Odoo** et thémés aux couleurs du domaine. Les
éléments ci-dessous relèvent donc du thème Odoo, pas du front Astro.

## Signaux de confiance — boutique

Contexte : le nom de domaine est en `.wine`. Sans impact SEO (Google traite
les nouvelles extensions comme les anciennes), mais moins familier qu'un
`.fr` pour un client français au moment de sortir sa carte bancaire.
Les signaux de confiance compensent. C'est du **taux de conversion**, pas
du référencement — mais c'est ce qui décide si la visite devient commande.

### Identité légale — à compléter

```
Raison sociale      : DOMAINE D'AUBIGNY
Forme juridique     : SAS (société par actions simplifiée)
SIREN               : 841 534 803
SIRET (siège)       : 841 534 803 00033
RCS                 : 841 534 803 R.C.S. Chalon-sur-Saône
TVA intracommunautaire : FR68841534803
Capital social      : 70 620 €
Code APE/NAF        : 01.21Z (Culture de la vigne)
Adresse du siège    : Hameau d'Aubigny, 71510 Aluze
Président           : Sylvain Chavry
Téléphone           : +33 3 85 44 76 76
Email               : à compléter — générique (contact@ / export@)
Directeur publication : à compléter
Hébergeur           : à compléter (nom, adresse, téléphone)
N° certification bio + organisme certificateur : à compléter
N° d'accise / entrepositaire agréé : à compléter
```

Marque déposée : DOMAINE D'AUBIGNY, classe 33 (vins), n° FR3517983,
enregistrée le 02/08/2007, expire le 02/08/2027 — **renouvellement à
anticiper**, la marque protège le nom sur les vins.

### Où ces informations doivent apparaître

- **Pied de page de toutes les pages** : raison sociale, SIRET, adresse,
  téléphone, email, lien mentions légales et CGV
- **Page mentions légales** : le bloc complet ci-dessus
- **CGV** : accessibles avant validation du panier, pas seulement en footer
- **Tunnel de commande** : coordonnées visibles à chaque étape — un client
  qui hésite cherche à qui il a affaire
- **Page contact** : adresse physique + carte, horaires du caveau

### Autres signaux de confiance

- **HTTPS** évidemment, et pas d'avertissement de contenu mixte
- **Moyens de paiement identifiables** : logos des cartes acceptées visibles
  avant le tunnel, pas seulement au dernier écran
- **Frais de port annoncés tôt** — la première cause d'abandon de panier est
  la découverte des frais à la dernière étape. Grille visible dès la fiche
  produit ou en bandeau.
- **Délais de livraison** explicites, et politique en cas de casse
- **Droit de rétractation** et procédure de retour clairement énoncés
- **Photos réelles** du domaine, du caveau, des personnes. Une équipe
  identifiable rassure plus que n'importe quel badge.
- **Avis clients** si disponibles, mais jamais fabriqués
- **Adresse physique + carte** : un domaine viticole a un lieu, c'est un
  avantage sur un pur e-commerce, il faut le montrer

### Obligations réglementaires visibles

- **Mention sanitaire Loi Évin** en pied de page de tout le site
- **Vérification d'âge** à l'entrée de la boutique — overlay client-side
  après rendu, **jamais** une page intermédiaire qui masque le contenu aux
  robots (cf. SEO.md)
- **Cookies** : bandeau conforme, refus aussi simple que l'acceptation.
  Analytics respectueux du RGPD (Plausible, Matomo) pour éviter un bandeau
  lourd qui dégrade l'expérience dès la première seconde.
- Pas de vente aux mineurs, mention explicite dans les CGV

## Direction artistique

À développer, mais les contraintes déjà fixées :

- **Loi Évin** : contenu objectif et informatif. Pas d'imagerie lifestyle
  avec des gens qui boivent. Pousse naturellement vers un site éditorial —
  ce qui tombe bien vu la matière historique disponible.
- **Ton grand public sur l'accueil.** Le pro sait pourquoi il vient et ira
  droit aux cuvées ; son entrée est en pied de page.
- **Simple ≠ générique.** Éviter « passion, terroir, tradition familiale »,
  écrit par 200 domaines bourguignons. La singularité est ailleurs :
  **une métairie cistercienne encore en fonctionnement** — 186 ha de prés et
  de bois exploités en propre autour de 20 ha de vigne, des animaux, un
  compost fabriqué sur place. Plus l'occupation gallo-romaine, les
  cisterciens de 1132, deux monopoles en appellation régionale (rare et
  contre-intuitif — le monopole est associé aux grands crus), des
  vinifications assumées, une approche documentée et mesurée.
- **Le vin d'abord, la métairie en révélation.** Le premier écran montre le
  vin et le lieu — c'est ce que le visiteur vient chercher. L'imagerie
  agricole (prés, bêtes, andains de compost, bois, saisons) arrive en
  profondeur de parcours, quand il comprend ce qu'il y a derrière. Prévoir
  la photographie en conséquence : plusieurs sessions dans l'année, pas une
  seule aux vendanges.
- **Cohérence visuelle Astro ↔ Odoo** : polices, couleurs, boutons,
  composants. Compter plusieurs jours de travail sur le thème Odoo, pas
  quelques heures. Une rupture visuelle au moment du checkout coûte des
  conversions.
- **Un motif graphique tiré des archives** (charte, sceau, écriture) peut
  irriguer l'identité du site et des étiquettes.

## Contraintes techniques de design

- Pas de dépendances externes bloquantes : ni Google Fonts, ni YouTube
  embarqué, ni script tiers lourd. Polices auto-hébergées.
  (Performance générale, et accès depuis la Chine — cf. EXPORT-ASIE.md)
- Core Web Vitals : LCP < 2,5 s, CLS < 0,1, INP < 200 ms sur mobile 4G.
  Attention aux polices personnalisées et à toute vidéo d'accueil, seuls
  vrais risques sur une base Astro statique.
- Images : AVIF/WebP, `srcset`, dimensions explicites, `alt` rédigés.
- Mobile d'abord : une part importante des scans de QR code bouteille
  arrive sur mobile, souvent en connexion moyenne, au restaurant ou à table.

## Le cas du QR code bouteille — E-LABEL RÉGLEMENTAIRE

**Attention : ce n'est pas une landing marketing.** Les QR codes des
étiquettes sont les e-labels obligatoires depuis décembre 2023
(déclaration nutritionnelle + liste des ingrédients). Leur contenu et leur
forme sont régis par la réglementation européenne.

**Sous-domaine dédié : `qr.aubigny.wine`.**

### Contraintes réglementaires

- Les mentions obligatoires doivent être **accessibles directement**, sans
  étape intermédiaire ni redirection
- **Aucun contenu à visée marketing sur la page e-label** : pas de prix,
  pas de bouton d'achat, pas d'argumentaire de vente
- **Aucune collecte de données** sur l'utilisateur qui scanne : pas
  d'analytics, pas de cookie de mesure, pas de tracking
- Mentions disponibles dans les langues requises par les marchés de
  destination
- **URL stable dans le temps** : elle est imprimée sur des bouteilles qui
  vivront des années. Ne jamais casser ces URLs lors d'une refonte.

### Ce qui est permis et souhaitable

- Charte visuelle commune avec le site principal (le scanneur doit
  reconnaître le domaine)
- **Pied de page identique**, permettant à la personne de naviguer vers le
  site et d'explorer si elle le souhaite. La navigation *depuis* la page
  est admise ; c'est le contenu *de* la page qui doit rester factuel.
- Contenu factuel additionnel autorisé par la réglementation (millésime,
  appellation, lot)

### Conception

- Mobile d'abord, connexion moyenne : le scan se fait au restaurant ou à
  table, souvent en 4G dégradée. Page très légère, sans dépendance externe.
- Nomenclature de lot existante à conserver (cf. `../qrcode`) :
  `<appellation>_<cuvée>_<couleur>_<millésime>_<lot>`

À vérifier avec le service juridique ou l'organisme compétent avant mise en
production : les modalités précises évoluent et l'interprétation varie.
