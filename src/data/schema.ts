// Schema.org structured data for Rich Results

export const organization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Domaine d'Aubigny",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aubigny",
    "postalCode": "71510",
    "addressLocality": "Aluze",
    "addressCountry": "FR",
    "addressRegion": "Bourgogne-Franche-Comté"
  },
  "telephone": "+33 3 85 44 76 76",
  "email": "contact@aubigny.wine",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "url": "https://aubigny.wine",
  "logo": "https://aubigny.wine/images/blason.png",
  "image": "https://aubigny.wine/images/q-nature-1.webp",
  "description": "Domaine viticole biologique en Côte Chalonnaise depuis 1132. 20 hectares de vignes certifiées bio sur des terres cultrivées depuis deux mille ans.",
  "sameAs": [
    "https://www.instagram.com/aubignyestate/",
    // "https://www.wikidata.org/wiki/...", // TODO: Add after Wikidata creation
  ]
};

export function getProductSchema(product: {
  name: string;
  vintage: number;
  appellation: string;
  price: number;
  availability: "InStock" | "OutOfStock";
  url: string;
  image?: string;
  description?: string;
  alcohol?: number;
  volume?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.name} ${product.vintage}`,
    "description": product.description || `${product.appellation} ${product.vintage}`,
    "image": product.image || "https://aubigny.wine/images/q-nature-1.webp",
    "brand": {
      "@type": "Brand",
      "name": "Domaine d'Aubigny"
    },
    "producer": {
      "@type": "Organization",
      "name": "Domaine d'Aubigny"
    },
    "offers": {
      "@type": "Offer",
      "url": product.url,
      "price": product.price,
      "priceCurrency": "EUR",
      "availability": `https://schema.org/${product.availability}`,
      "seller": {
        "@type": "Organization",
        "name": "Domaine d'Aubigny",
        "url": "https://aubigny.wine"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "1"
    }
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: Date;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || "https://aubigny.wine/images/q-nature-1.webp",
    "datePublished": article.datePublished.toISOString(),
    "author": {
      "@type": "Organization",
      "name": article.author || "Domaine d'Aubigny"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Domaine d'Aubigny",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aubigny.wine/images/blason.png"
      }
    }
  };
}
