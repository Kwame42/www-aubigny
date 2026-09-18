import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const siteUrl = 'https://aubigny.wine';

// Récupérer toutes les pages HTML
function getAllPages(dir) {
  const pages = [];

  function walkDir(currentPath, urlPath = '') {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const fullPath = path.join(currentPath, file);
      const stat = fs.statSync(fullPath);
      const newUrlPath = urlPath ? `${urlPath}/${file}` : file;

      if (stat.isDirectory() && file !== 'images') {
        walkDir(fullPath, newUrlPath);
      } else if (file === 'index.html') {
        let url = newUrlPath === 'index.html' ? '/' : newUrlPath.replace('index.html', '');
        if (!url.startsWith('/')) url = '/' + url;
        pages.push({
          url,
          lastmod: stat.mtime.toISOString().split('T')[0],
          priority: url === '/' ? '1.0' : url.includes('/vins/') ? '0.9' : '0.8',
          changefreq: url === '/' ? 'weekly' : 'monthly'
        });
      }
    }
  }

  walkDir(distDir);
  return pages.sort((a, b) => a.url.localeCompare(b.url));
}

// Générer le sitemap XML
function generateSitemap(pages) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return xml;
}

// Générer le sitemap index
function generateSitemapIndex() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>`;
  return xml;
}

try {
  const pages = getAllPages(distDir);
  const sitemap = generateSitemap(pages);
  const sitemapIndex = generateSitemapIndex();

  fs.writeFileSync(path.join(distDir, 'sitemap-0.xml'), sitemap);
  fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapIndex);

  console.log(`✅ Sitemaps générés avec ${pages.length} pages`);
  pages.forEach(p => console.log(`   ${p.url}`));
} catch (error) {
  console.error('❌ Erreur:', error.message);
  process.exit(1);
}
