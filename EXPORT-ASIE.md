# EXPORT-ASIE.md — Chine et marchés asiatiques

Notes de cadrage. **Ce n'est pas un chantier de la refonte** : à traiter
en phase 3 ou plus tard, au moment où un salon asiatique se prépare.

## Le constat de départ

**Le SEO ne fait pas venir un importateur chinois.**

Un importateur qui demande à Google, Claude ou ChatGPT « quels domaines
bourguignons cherchent un distributeur en Chine » obtiendra les noms
notoires (Faiveley, Bouchard, Devillard) — présents en masse dans les
sources et les données d'entraînement. Un domaine de 20 ha n'y apparaît
pas. Ce n'est pas une question d'optimisation mais de masse de mentions.

Ce qui est atteignable, c'est la requête **spécifique** : « producteurs bio
en Côte Chalonnaise », « monopoles en appellation régionale », « domaines
de Mercurey certifiés bio à l'export ». Vivier étroit, page anglaise
factuelle bien structurée = chance réelle de sortir. C'est le cercle 3
de SEO.md, et c'est la seule voie organique.

Autrement dit : on ne capte pas l'importateur qui part de zéro, on capte
celui qui a déjà restreint sa recherche — ce qui est le cas de la plupart
des importateurs sérieux, qui cherchent un profil précis manquant à leur
portefeuille.

## Pourquoi le référencement chinois est hors sujet

**WeChat n'indexe pas.** Jardin clos : les comptes officiels et leurs
articles ne sont pas accessibles à Google, ni de façon fiable à Baidu. La
recherche se fait dans l'application. Un lien externe y est presque inutile
et souvent bloqué. Le site n'existe pas dans cet univers.

**Baidu indexe, mais à ses conditions** : hébergement rapide depuis la
Chine, contenu en chinois simplifié, et pour un référencement sérieux un
domaine enregistré localement avec licence ICP — ce qui suppose une entité
juridique en Chine. Décision d'entreprise, pas chantier web.

**Cloudflare (hébergement actuel) et la Chine s'entendent mal.** Le réseau
standard n'a pas de présence sur le continent : trafic routé vers Hong Kong,
Los Angeles ou Singapour, latences de 300 ms à plusieurs secondes, filtrage
instable, plages d'IP bloquées par le passé. Cloudflare China Network existe
mais exige un plan Enterprise et un partenaire local — même mur que l'ICP.

→ **Conclusion : on ne fait rien pour Baidu.** Des pages en chinois sur
Cloudflare seraient mal crawlées, mal positionnées, et les visiteurs
repartiraient avant affichage. Beaucoup de traduction pour rien.

À faire une fois, gratuit : tester la vitesse du site depuis Pékin/Shanghai
avec un outil de test de latence Chine.

## Décision : pas de WeChat

Acté. Les équipes ne l'utilisent pas et ne le tiendront pas. Un compte mal
tenu vaut moins que pas de compte. La page chinoise redevient donc ce
qu'elle est vraiment : **un document de crédibilité**, présenté ou transmis,
pas un canal d'acquisition.

Conséquence : le vrai point de contact avec l'Asie sera le salon et
l'importateur local. Le site ne fait que confirmer qu'on existe.

## La page `/zh/` — spécification

Une seule page. Ne pas traduire le site : charge de maintenance permanente
pour un canal sans trafic organique.

**URL** : `aubigny.wine/zh/` (à confirmer avec le nom de domaine retenu)

**Ce qu'on fait**
- Page unique, HTML sobre, **CSS minimal inline** (quelques ko)
- Pas de JavaScript, pas de vidéo, aucune dépendance externe :
  ni Google Fonts, ni Google Analytics, ni YouTube embarqué — depuis la
  Chine ces dépendances ne dégradent pas la page, elles la cassent
- **Indexable** (pas de `noindex`) avec `hreflang` : on ne vise pas Baidu,
  mais quelqu'un cherchant le nom du domaine en chinois doit pouvoir tomber
  dessus. Bloquer, c'est se priver sans rien gagner.
- **Liée depuis le site** : un `中文` dans le sélecteur de langue. Une page
  orpheline n'est pas explorée, ne reçoit pas d'autorité, et disparaît à la
  première refonte.
- Exception assumée au layout : pas de header lourd, pas de menu complet.
  Seul endroit du site où casser volontairement la charte technique.

**Ce qu'on ne fait pas**
- Pas de HTML totalement brut sans CSS : le lecteur est un professionnel
  qui juge le sérieux sur le premier écran. Léger ≠ bâclé.
- Pas de formulaire de contact : un anti-spam Google le rendrait
  inutilisable depuis la Chine.

**Contenu** : le domaine, la commune (Aluze), les surfaces, les
appellations, la certification bio, la gamme, le contact.

**Contact**
- Email **générique** (`export@` ou `contact@`), jamais nominatif : en Chine
  une adresse générique signale une équipe et survit aux changements de
  personnes
- Téléphone au **format international complet**, avec indicatif
- Mentionner explicitement que la correspondance se fait en anglais ou en
  français — parfaitement accepté dans le commerce du vin, et ça évite une
  conversation qui s'arrête au premier message

**Traduction : par un humain, pas par une machine.** Le vocabulaire du vin
en chinois est très codifié, les appellations ont des transcriptions
établies. Une traduction approximative signale l'amateurisme immédiatement.
Une page, c'est peu coûteux à faire faire correctement.

## Ce qui marcherait vraiment, si l'Asie devient un objectif

Salons (Wine Paris, ProWein, Vinexpo Asia), réseaux d'export spécialisés
bio (type BIOtiful Wines), recommandation. Plus un PDF de présentation en
chinois remis en main propre sur salon, et un compte WeChat tenu par
l'importateur local — jamais par le domaine.

C'est un projet commercial distinct, pas une extension du site.
