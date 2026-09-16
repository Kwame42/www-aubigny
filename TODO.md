# TODO — aubigny.wine

Checklist de construction par phase. Cocher au fur et à mesure.

Voir [CLAUDE.md](./CLAUDE.md) et [SEO.md](./SEO.md) pour le détail de chaque élément.

---

## IMMÉDIAT — Avant le lancement du site

### Infos à fournir
- [x] **Organization** : Domaine d'Aubigny, Aubigny 71510 Aluze, 0385447676, contact@aubigny.wine, lun-ven 09:00-17:00
- [ ] Numéro de certification bio (pour Organization sameAs)
- [ ] Instagram URL (pour Organization sameAs)

### À faire
- [ ] Google Business Profile complet (photos, horaires, avis)
- [ ] Cohérence NAP stricte (nom/adresse/téléphone identique partout)
- [ ] Inscription annuaires métier :
  - [ ] BIVB
  - [ ] Wine-Searcher
  - [ ] Vivino
  - [ ] CellarTracker
  - [ ] Pages exposants Wine Paris
  - [ ] Pages exposants Millésime Bio

---

## PHASE 1 — Lancement (2-3 semaines)

**Objectif :** Pages critiques pour la conversion + infrastructure SEO.

### Pages

- [ ] Fiches cuvée `/vins/<cuvee>/` (9 cuvées, intemporel)
- [ ] Fiches millésime `/vins/<cuvee>/<millesime>/` (9 × N millésimes × 2 langues) ⭐
- [ ] Portail catalogue `/vins/`
- [ ] Page monopoles `/vins/monopoles/`
- [ ] Accueil `/` (navigation + rassurance)
- [ ] Page visiter `/visiter/` (caveau, dégustations, accès)
- [ ] Contact `/contact/`
- [ ] Où nous trouver `/ou-nous-trouver/` (cavistes, restaurants, importateurs)
- [ ] Trade EN `/en/pro/` (anglais professionnel)
- [ ] Mentions légales
- [ ] CGV
- [ ] Confidentialité
- [ ] 404

### Technique & Infrastructure

**Rich Results / Enriched Results (Structured Data)**
- [ ] `Organization` + `LocalBusiness` sur `/` (accueil) — Knowledge panel Google
- [ ] `Product` + `Offer` sur chaque fiche millésime — Prix, dispo, notation
- [ ] `BreadcrumbList` sur toutes les pages — Navigation SERP
- [ ] `Article` sur `/millesimes/<annee>/` + Carnet — Rich snippet date
- [ ] `FAQPage` si section questions (Phase 2+)
- [ ] Valider avec Google Rich Results Test (https://search.google.com/test/rich-results)

**Autre technique**
- [ ] `hreflang` réciproques FR ↔ EN + `x-default`
- [ ] Sitemaps (5 fichiers séparés) :
  - [ ] pages.xml
  - [ ] vins.xml
  - [ ] histoire.xml (vide pour phase 1)
  - [ ] millesimes.xml (vide pour phase 1)
  - [ ] images.xml
- [ ] Search Console setup (FR + EN)
- [ ] `robots.txt` : autoriser public, bloquer `/pro/espace/`, panier, paramètres
- [ ] Canoniques auto-référentes partout
- [ ] Plan de redirections 301 (si ancien site)
- [ ] QR codes bouteilles → fiches millésime
- [ ] Vérification d'âge (overlay client, pas page intermédiaire)
- [ ] Images WebP optimisées + descripteurs (alt, nom fichier)

### Performance & Lighthouse (PRIORITAIRE)

- [ ] Lighthouse 90+ vitesse (mobile)
- [ ] Lighthouse 95+ accessibilité
- [ ] Lighthouse 95+ best practices
- [ ] Lighthouse 100% SEO
- [ ] Core Web Vitals (mobile 4G) :
  - [ ] LCP < 2,5s
  - [ ] CLS < 0,1
  - [ ] INP < 200ms
- [ ] Pas de polices externes (serif système)
- [ ] Pas de vidéos lourdes à l'accueil
- [ ] Images avec dimensions explicites (évite CLS)
- [ ] CSS inliné
- [ ] PageSpeed Insights : 90+ en vitesse

---

## PHASE 2 — 3-6 mois

**Objectif :** Contenu qui construit l'autorité + SEO long-term.

### Pages

- [ ] `/histoire/` (portail — 2000 ans)
- [ ] `/histoire/epoque-romaine/` (stèle gallo-romaine)
- [ ] `/histoire/cisterciens/` (implantation 1132)
- [ ] `/histoire/archives/` (portail du fonds)
- [ ] `/histoire/archives/<slug>/` (chartes — 3-5 pages, transcription + traduction)
- [ ] `/millesimes/<annee>/` (comptes-rendus annuels — météo, vendanges, décisions)
- [ ] `/le-domaine/` (portail — vignoble + vinification résumés)
- [ ] `/le-domaine/metairie/compost/` (page clé — "aimant à liens")
- [ ] `/zh/` (page unique en chinois — crédibilité salon/négociation, pas SEO)

### Technique & Infrastructure

- [ ] Wikidata (entité factuelle, sourcée, sans autopromotion)
- [ ] Premiers contacts presse (archives = angle principal)

---

## PHASE 3 — Au long cours

**Objectif :** Contenu maintenu dans la durée + autorité durable.

### Contenu éditorial

- [ ] Carnet de vigne (4 entrées/an minimum) :
  - [ ] Avril/mai (débourrement, floraison)
  - [ ] Juillet/août (maturation)
  - [ ] Septembre/octobre (vendanges, fermentation)
  - [ ] Novembre/décembre (élevage)
- [ ] Archives (1 charte par mois, transcription + traduction)

### Technique & Infrastructure

- [ ] Newsletter setup (2-3 envois/an, le canal le plus rentable)
- [ ] Email list ingestion (form + validation)

---

## Référence & Documentation

- **CLAUDE.md** → Structure technique + pages par phase
- **SEO.md** → Stratégie complète, mapping page→intention, maillage
- **aubigny-strategie.txt** → Vision commerciale, priorités
- **webp/** → 87 images du domaine (diversifier, pas réutiliser)

---

## Notes

- ✅ = fait et testé
- Phase 1 = critique pour conversion (fiches + tunnel)
- Phase 2 = autorité + SEO (archives + comptes-rendus)
- Phase 3 = durabilité (carnet + newsletter)
- Ne rien oublier = cocher au fur et à mesure
