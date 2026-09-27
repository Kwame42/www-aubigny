// Path mappings between French and English URLs
const frToEnMapping: Record<string, string> = {
  '/': '/en/',
  '/vins/': '/en/wines/',
  '/domaine/vignoble/': '/en/domain/vineyard/',
  '/domaine/equipe/': '/en/domain/team/',
  '/domaine/vinification/': '/en/domain/vinification/',
  '/domaine/metairie/': '/en/domain/metairie/',
  '/domaine/compost/': '/en/domain/compost/',
  '/domaine/': '/en/domain/',
  '/histoire/': '/en/history/',
  '/visiter/': '/en/visit/',
  '/contact/': '/en/contact/',
  '/cgv/': '/en/cgv/',
  '/mentions-legales/': '/en/privacy/',
  '/carnet/': '/en/notebook/',
  '/pro/': '/en/trade/',
  '/confidentialite/': '/en/privacy/',
};

/**
 * Convert a French path to its English equivalent
 * @param frPath - French path (e.g., '/vins/bourgogne-blanc-2022/')
 * @returns English path (e.g., '/en/wines/bourgogne-blanc-2022/')
 */
export function frToEn(frPath: string): string {
  // Normalize path
  const normalizedPath = frPath.endsWith('/') ? frPath : frPath + '/';

  // Try longest matches first to avoid partial replacements
  const sortedKeys = Object.keys(frToEnMapping).sort(
    (a, b) => b.length - a.length
  );

  for (const key of sortedKeys) {
    if (normalizedPath.startsWith(key)) {
      const remainder = normalizedPath.slice(key.length);
      let result = frToEnMapping[key] + remainder;
      // Remove trailing slash if original path didn't have one
      if (!frPath.endsWith('/') && result.endsWith('/')) {
        result = result.slice(0, -1);
      }
      return result;
    }
  }

  // Fallback: just prepend /en/
  return `/en${normalizedPath}`;
}

/**
 * Convert an English path to its French equivalent
 * @param enPath - English path (e.g., '/en/wines/bourgogne-blanc-2022/')
 * @returns French path (e.g., '/vins/bourgogne-blanc-2022/')
 */
export function enToFr(enPath: string): string {
  // Normalize path
  const normalizedPath = enPath.endsWith('/') ? enPath : enPath + '/';

  if (!normalizedPath.startsWith('/en/')) {
    return enPath; // Not an English path
  }

  // Create reverse mapping
  const enToFrMapping: Record<string, string> = {};
  for (const [fr, en] of Object.entries(frToEnMapping)) {
    enToFrMapping[en] = fr;
  }

  // Try longest matches first
  const sortedKeys = Object.keys(enToFrMapping).sort(
    (a, b) => b.length - a.length
  );

  for (const key of sortedKeys) {
    if (normalizedPath.startsWith(key)) {
      const remainder = normalizedPath.slice(key.length);
      let result = enToFrMapping[key] + remainder;
      // Remove trailing slash if original path didn't have one
      if (!enPath.endsWith('/') && result.endsWith('/')) {
        result = result.slice(0, -1);
      }
      return result || '/';
    }
  }

  // Fallback: just remove /en
  const withoutEn = normalizedPath.slice(3); // Remove '/en'
  let result = withoutEn || '/';
  if (!enPath.endsWith('/') && result.endsWith('/')) {
    result = result.slice(0, -1);
  }
  return result;
}

/**
 * Pages that have been translated to English
 * Only these paths should generate hreflang tags
 */
const translatedPages = new Set([
  '/',
  '/vins/',
  '/vins/bourgogne-blanc/',
  '/vins/bourgogne-blanc-2022/',
  '/vins/bourgogne-blanc-2024/',
  '/vins/bourgogne-blanc-2025/',
  '/vins/bourgogne-rouge-ouche-de-la-maison-monopole/',
  '/vins/bourgogne-rouge-ouche-2025/',
  '/vins/bourgogne-blanc-grand-pres-d-aubigny-monopole/',
  '/vins/bourgogne-blanc-grand-pres-d-aubigny-monopole-2025/',
  '/vins/rully-village-blanc-les-fromages/',
  '/vins/rully-village-blanc-les-fromages-2023/',
  '/vins/rully-village-blanc-les-fromages-2024/',
  '/vins/rully-village-blanc-les-fromages-2025/',
  '/vins/mercurey-1er-cru-rouge-champs-martin/',
  '/vins/mercurey-champs-martin-2023/',
  '/vins/mercurey-champs-martin-2024/',
  '/vins/monopoles/',
  '/domaine/',
  '/domaine/vignoble/',
  '/domaine/vinification/',
  '/domaine/metairie/',
  '/domaine/compost/',
  '/domaine/equipe/',
  '/histoire/',
  '/visiter/',
  '/contact/',
  '/cgv/',
  '/mentions-legales/',
  '/carnet/',
  '/carnet/coup-de-coeur/',
]);

/**
 * Check if a page has an English translation
 * @param pathname - The pathname to check (can be FR or EN path)
 * @returns true if the page has an EN equivalent
 */
export function hasEnTranslation(pathname: string): boolean {
  // Normalize the path
  const normalized = pathname.endsWith('/') ? pathname : pathname + '/';

  // If it's a French path, check directly
  if (!normalized.startsWith('/en/')) {
    return translatedPages.has(normalized);
  }

  // If it's an English path, convert to French and check
  const frPath = enToFr(normalized);
  return translatedPages.has(frPath);
}

/**
 * Get the alternate language URL for a given path
 * @param pathname - Current pathname
 * @param currentLang - Current language ('fr' or 'en')
 * @returns Alternate language URL, or null if no translation exists
 */
export function getAlternatePath(
  pathname: string,
  currentLang: 'fr' | 'en'
): string | null {
  if (currentLang === 'fr') {
    if (!hasEnTranslation(pathname)) return null;
    return frToEn(pathname);
  } else {
    if (!hasEnTranslation(pathname)) return null;
    return enToFr(pathname);
  }
}
