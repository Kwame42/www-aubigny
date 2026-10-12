// Generate BreadcrumbList schema from URL path
export function generateBreadcrumbs(pathname: string, lang: string = 'fr') {
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs: Array<{ name: string; url: string }> = [
    { name: lang === 'fr' ? 'Accueil' : 'Home', url: `/${lang === 'en' ? 'en/' : ''}` }
  ];

  const labels: { [key: string]: { fr: string; en: string } } = {
    'vins': { fr: 'Les Vins', en: 'Wines' },
    'domaine': { fr: 'Le Domaine', en: 'Domain' },
    'le-domaine': { fr: 'Le Domaine', en: 'Domain' },
    'histoire': { fr: 'Histoire', en: 'History' },
    'carnet': { fr: 'Carnet de Vigne', en: 'Notebook' },
    'millesimes': { fr: 'Millésimes', en: 'Vintages' },
    'visiter': { fr: 'Visiter', en: 'Visit' },
    'contact': { fr: 'Contact', en: 'Contact' },
    'ou-nous-trouver': { fr: 'Où nous trouver', en: 'Find Us' },
    'cgv': { fr: 'CGV', en: 'Terms' },
    'confidentialite': { fr: 'Confidentialité', en: 'Privacy' },
    'mentions-legales': { fr: 'Mentions légales', en: 'Legal' },
    'pro': { fr: 'Espace Pro', en: 'Trade' },
    'trade': { fr: 'Trade', en: 'Trade' },
    'vignoble': { fr: 'Vignoble', en: 'Vineyard' },
    'vineyard': { fr: 'Vineyard', en: 'Vineyard' },
    'vinification': { fr: 'Vinification', en: 'Vinification' },
    'metairie': { fr: 'La Métairie', en: 'Metairie' },
    'compost': { fr: 'Compost', en: 'Compost' },
    'animaux': { fr: 'Animaux', en: 'Animals' },
    'biodiversite': { fr: 'Biodiversité', en: 'Biodiversity' },
    'equipe': { fr: 'Équipe', en: 'Team' },
    'team': { fr: 'Team', en: 'Team' },
    'archives': { fr: 'Archives', en: 'Archives' },
    'monopoles': { fr: 'Monopoles', en: 'Monopoles' },
    'coup-de-coeur': { fr: 'Coup de Cœur', en: 'Favorites' },
  };

  let currentPath = lang === 'en' ? '/en' : '';

  segments.forEach((segment, index) => {
    // Skip language prefix
    if (segment === 'en' && index === 0) return;

    currentPath += `/${segment}`;

    // Don't add year-only or vintage segments as breadcrumb levels
    if (/^\d{4}$/.test(segment)) return;

    // Get label or format segment nicely
    const label = labels[segment]?.[lang] || segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      name: label,
      url: currentPath + '/'
    });
  });

  return breadcrumbs;
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>, baseUrl: string) {
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': crumb.name,
    'item': `${baseUrl}${crumb.url}`
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': itemListElement
  };
}
