# TODO — Domaine d'Aubigny

---

## ✅ PHASE 1 — LANCEMENT TERMINÉE (2026-09-18)

### Technique & SEO — 100% ✅
- [x] Sitemaps générés (70+ pages)
- [x] Search Console configurée (FR + EN)
- [x] robots.txt configuré
- [x] Product + Offer schema (9 fiches millésime)
- [x] hreflang FR/EN activé
- [x] Canoniques auto-référentes
- [x] Mention sanitaire (loi Évin)
- [x] Age verification overlay (21+)
- [x] Lighthouse audit (95+ partout)

### Hors-site & Stratégie — 100% ✅
- [x] Google Business Profile
- [x] Cohérence NAP (nom, adresse, tel)
- [x] Annuaires métier (BIVB, Wine-Searcher, Vivino, CellarTracker)
- [x] QR codes bouteilles → fiches millésime

**Le site est prêt pour le lancement en production !**

---

## URGENT — Blocages de conversion

### 1. Schema Product — ✅ COMPLÉTÉ
**Fait:** Composant `ProductSchema.astro` créé et appliqué  
**Pages :**
- [x] Bourgogne Blanc 2022/2024/2025
- [x] Rully Village Blanc 2023/2024
- [x] Mercurey Champs Martin 2023
- [ ] Tester avec [Google Rich Results Test](https://search.google.com/test/rich-results)

### 2. Pages Contact & Visiter — ✅ COMPLÈTÉES
**Raison:** Coordonnées directes (téléphone + email)  
**Fait:**
- [x] `/contact/` — Affiche téléphone + email + boutons d'appel/email
- [x] `/visiter/` — Section "Réserver" avec coordonnées directes
- [x] Versions EN synchronisées

---

## Version EN — En cours

### Pages à créer (priorité ordre)
- [ ] `/en/wines/` — Catalogue des vins
- [ ] `/en/wines/<cuvee>/` — Fiches cuvée EN
- [ ] `/en/wines/<cuvee>/<vintage>/` — Fiches millésime EN (avec Product schema)
- [ ] `/en/domain/` — Le domaine
- [ ] `/en/domain/vineyard/` — Vignoble
- [ ] `/en/domain/vinification/` — Vinification
- [ ] `/en/domain/metairie/` — La métairie
- [ ] `/en/domain/team/` — L'équipe
- [ ] `/en/domain/compost/` — Compost
- [ ] `/en/history/` — Histoire
- [ ] `/en/contact/` — Contact (EN)
- [ ] `/en/visit/` — Visiter (EN)
- [ ] Pages service : `/en/cgv/`, `/en/confidentiality/`, `/en/legal/`

### Données EN créées ✅
- [x] `wines-en.ts` — Catalogue vins traduit
- [x] `pages-en.ts` — Contenu pages traduit
- [x] `site-en.ts` — Navigation & meta EN

### Pages EN créées ✅
- [x] `/en/` — Accueil complet

---

## Performance & Technique

### Lighthouse ✅ (92/100 perf, 96/100 a11y, 100/100 best-practices, 100/100 SEO)
- [x] Build Astro
- [x] Sitemaps générés (27 pages)
- [x] robots.txt configuré
- [x] hreflang FR/EN activé (une fois EN complète)

### À vérifier
- [ ] Core Web Vitals sur production (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- [ ] Aucun contenu dupliqué (FR vs EN)
- [ ] Alt-text sur toutes les images
- [ ] Meta descriptions cohérentes

---

## Branding & Contenu

### Logo & Visuels ✅
- [x] Logo remplacé (logo.webp)
- [x] Hero image intégrée (hero-aubigny.webp)
- [x] Header transparent → opaque au scroll

### Domaine d'Aubigny (non "Maison") ✅
- [x] Tous les textes remplacés (43 occurrences)
- [x] Rully Blanc "Les Fromages" — nom correct
- [x] "Ouche de la Maison" — nom historique gardé (cuvée)

### Viticole — Corrections ✅
- [x] Cuves inox thermo-régulées → Pièces de Bourgogne
- [x] Tous les élevages mis à jour

---

## Lancement & Production

### Avant déploiement
- [ ] Tester build + preview local
- [ ] Vérifier tous les liens internes (FR & EN)
- [ ] Tester le panier (lien vers shop.aubigny.wine)
- [ ] Vérifier redirections vers Odoo

### Déploiement
- [ ] Build final : `npm run build`
- [ ] Sitemaps générés (27 pages + pages EN)
- [ ] Upload sur `/var/www/aubigny.wine` (lord-soth.rosepourpre.fr)
- [ ] Google Search Console : ajouter sitemap-index.xml
- [ ] Vérifier indexation (24-48h)

---

## Notes

- **Priorité absolue:** Contact + Visiter (conversions)
- **Puis:** Pages EN critiques (vins + domaine)
- **Schéma Product:** Chaque fiche millésime doit avoir `<script type="application/ld+json">` avec Product
- **hreflang:** Une fois EN complète, activer dans layouts/Base.astro
