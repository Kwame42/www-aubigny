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
  '/millesimes/': '/en/vintages/',
  '/pro/': '/en/trade/',
  '/ou-nous-trouver/': '/en/find-us/',
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
 * Get the alternate language URL for a given path
 * @param pathname - Current pathname
 * @param currentLang - Current language ('fr' or 'en')
 * @returns Alternate language URL
 */
export function getAlternatePath(
  pathname: string,
  currentLang: 'fr' | 'en'
): string {
  if (currentLang === 'fr') {
    return frToEn(pathname);
  } else {
    return enToFr(pathname);
  }
}
