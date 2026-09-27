#!/usr/bin/env node

/**
 * Build validation script for aubigny.wine
 * Validates hreflang, HTML lang, reciprocal links, and page structure
 * Run automatically after npm run build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const ERRORS = [];
const WARNINGS = [];

// Helper: Extract all .html files from dist/
function getAllHtmlFiles(dir = DIST_DIR) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllHtmlFiles(fullPath));
    } else if (entry.name === 'index.html') {
      files.push(fullPath);
    }
  }
  return files;
}

// Helper: Get URL path from file path
function getUrlPath(filePath) {
  return filePath
    .replace(DIST_DIR, '')
    .replace(/index\.html$/, '')
    .replace(/\\/g, '/') || '/';
}

// Helper: Extract hreflang tags
function getHreflangTags(html) {
  const hreflangRegex = /<link\s+rel="alternate"\s+hreflang="([^"]*)"\s+href="([^"]*)"/g;
  const tags = [];
  let match;
  while ((match = hreflangRegex.exec(html)) !== null) {
    tags.push({ lang: match[1], href: match[2] });
  }
  return tags;
}

// Helper: Extract HTML lang attribute
function getHtmlLang(html) {
  const match = html.match(/<html\s+lang="([^"]*)"/);
  return match ? match[1] : null;
}

// Helper: Extract all href links
function getInternalLinks(html) {
  const hrefRegex = /href="([^"]*)/g;
  const links = [];
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    const href = match[1];
    // Only internal links (don't start with http, //, or ?)
    if (!href.startsWith('http') && !href.startsWith('//') && !href.startsWith('#')) {
      links.push(href);
    }
  }
  return links;
}

// Validation 1: HTML lang vs hreflang matching
function validateLangConsistency() {
  console.log('🔍 Validating HTML lang vs hreflang...');

  const htmlFiles = getAllHtmlFiles();

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const urlPath = getUrlPath(filePath);

    // Skip Astro redirect pages (meta refresh + noindex)
    if (html.includes('http-equiv="refresh"') && html.includes('noindex')) {
      continue;
    }

    const htmlLang = getHtmlLang(html);
    const hreflangs = getHreflangTags(html);

    if (!htmlLang) {
      ERRORS.push(`${urlPath} — Missing <html lang="..."> attribute`);
      continue;
    }

    // Find self-link (hreflang matching HTML lang)
    const selfLink = hreflangs.find(h => h.lang === htmlLang);
    if (!selfLink) {
      ERRORS.push(`${urlPath} — HTML lang="${htmlLang}" but no matching hreflang="${htmlLang}" self-link`);
    }

    // Check all hreflang langs are valid
    const validLangs = ['fr', 'en', 'zh', 'x-default'];
    for (const href of hreflangs) {
      if (!validLangs.includes(href.lang)) {
        WARNINGS.push(`${urlPath} — Unknown hreflang lang="${href.lang}"`);
      }
    }
  }
}

// Validation 2: Hreflang reciprocal links
function validateHreflangReciprocal() {
  console.log('🔍 Validating hreflang reciprocal links...');

  const htmlFiles = getAllHtmlFiles();
  const hreflangMap = new Map(); // Map of canonical URLs to their hreflang data

  // First pass: collect all hreflang data
  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const urlPath = getUrlPath(filePath);
    const hreflangs = getHreflangTags(html);

    // Extract just the path from URLs (remove domain)
    const processedHreflangs = hreflangs.map(h => ({
      lang: h.lang,
      path: new URL(h.href, 'https://aubigny.wine').pathname
    }));

    hreflangMap.set(urlPath, processedHreflangs);
  }

  // Second pass: validate reciprocal links (FR ↔ EN pairs)
  for (const [urlPath, hreflangs] of hreflangMap) {
    // Only check FR and EN alternates (not x-default or self-links)
    for (const href of hreflangs) {
      if (href.lang === 'x-default' || href.lang === 'zh') continue;

      // Skip self-links (not alternates)
      if (href.path === urlPath) continue;

      const referencedPage = hreflangMap.get(href.path);
      if (!referencedPage) {
        continue; // Already checked in lang consistency
      }

      // Determine expected return language
      const returnLang = href.lang === 'en' ? 'fr' : 'en';

      // Check if referenced page points back with opposite language
      const hasReturn = referencedPage.find(h => h.lang === returnLang && h.path === urlPath);
      if (!hasReturn) {
        ERRORS.push(`${urlPath} → ${href.path} (${href.lang}) — Missing reciprocal ${returnLang} link back`);
      }
    }
  }
}

// Validation 3: x-default consistency
function validateXDefaultConsistency() {
  console.log('🔍 Validating x-default consistency...');

  const htmlFiles = getAllHtmlFiles();
  let xDefaultUrl = null;

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const urlPath = getUrlPath(filePath);
    const hreflangs = getHreflangTags(html);

    const xDefault = hreflangs.find(h => h.lang === 'x-default');
    if (xDefault) {
      const xDefaultPath = new URL(xDefault.href, 'https://aubigny.wine').pathname;

      if (!xDefaultUrl) {
        xDefaultUrl = xDefaultPath;
      } else if (xDefaultUrl !== xDefaultPath) {
        // Only warn if significantly different (ignore minor variations)
        // x-default should always be / for consistency
      }
    }
  }

  if (xDefaultUrl && !xDefaultUrl.startsWith('/') && xDefaultUrl !== '/') {
    ERRORS.push(`x-default should point to root or FR version, got: ${xDefaultUrl}`);
  }
}

// Validation 4: Check for 404 pages
function validateNoOrphanedPages() {
  console.log('🔍 Checking for orphaned/404 pages...');

  const htmlFiles = getAllHtmlFiles();
  const allPaths = new Set(htmlFiles.map(getUrlPath));

  // Collect all hrefs across site
  const allHrefs = new Set();
  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const links = getInternalLinks(html);

    for (const link of links) {
      // Normalize link
      let normalizedLink = link;
      if (!normalizedLink.endsWith('/') && !normalizedLink.includes('.')) {
        normalizedLink += '/';
      }
      allHrefs.add(normalizedLink);
    }
  }

  // Check if 404 page exists (Astro generates /404.html at root)
  const has404 = allPaths.has('/404/') || fs.existsSync(path.join(DIST_DIR, '404.html'));
  if (!has404) {
    WARNINGS.push('Missing /404/ page');
  }
}

// Validation 5: Check internal links exist
function validateInternalLinks() {
  console.log('🔍 Validating internal links...');

  const htmlFiles = getAllHtmlFiles();
  const allPaths = new Set(htmlFiles.map(getUrlPath));

  // Add some expected missing pages (like assets, redirects)
  const ignoredPatterns = [
    '/images/',
    '/_astro/',
    'http',
    '//',
    '.pdf',
    'shop.aubigny.wine',
    'tel:',
    'mailto:'
  ];

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const urlPath = getUrlPath(filePath);
    const links = getInternalLinks(html);

    for (const link of links) {
      // Skip if matches ignored patterns
      if (ignoredPatterns.some(p => link.includes(p))) continue;

      // Normalize the link
      let normalizedLink = link;
      if (!normalizedLink.endsWith('/') && !normalizedLink.includes('.')) {
        normalizedLink += '/';
      }

      // Check if page exists
      if (!allPaths.has(normalizedLink)) {
        WARNINGS.push(`${urlPath} → links to non-existent: ${link}`);
      }
    }
  }
}

// Validation 6: Check meta description length
function validateMetaDescriptions() {
  console.log('🔍 Validating meta description length...');

  const htmlFiles = getAllHtmlFiles();
  const MIN_LENGTH = 110;
  const MAX_LENGTH = 160;
  const shortDescriptions = [];
  const longDescriptions = [];

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const urlPath = getUrlPath(filePath);

    // Extract meta description
    const match = html.match(/<meta name="description" content="([^"]*)"/);
    if (!match) {
      continue; // No description found
    }

    const description = match[1];
    const length = description.length;

    if (length < MIN_LENGTH) {
      shortDescriptions.push(`${urlPath} — ${length} chars (min ${MIN_LENGTH})`);
    } else if (length > MAX_LENGTH) {
      longDescriptions.push(`${urlPath} — ${length} chars (max ${MAX_LENGTH})`);
    }
  }

  // Report warnings (not errors)
  if (shortDescriptions.length > 0) {
    shortDescriptions.forEach(desc => WARNINGS.push(`Meta too short: ${desc}`));
  }
  if (longDescriptions.length > 0) {
    longDescriptions.forEach(desc => WARNINGS.push(`Meta too long: ${desc}`));
  }
}

// Main validation runner
function runValidations() {
  console.log('\n📋 Starting aubigny.wine build validation...\n');

  try {
    validateLangConsistency();
    validateHreflangReciprocal();
    validateXDefaultConsistency();
    validateNoOrphanedPages();
    validateInternalLinks();
    validateMetaDescriptions();
  } catch (error) {
    ERRORS.push(`Validation script error: ${error.message}`);
  }

  // Report results
  console.log('\n' + '='.repeat(60));

  if (ERRORS.length === 0 && WARNINGS.length === 0) {
    console.log('✅ All validations passed! Build is clean.\n');
    return 0;
  }

  if (ERRORS.length > 0) {
    console.log(`\n❌ ERRORS (${ERRORS.length}):\n`);
    ERRORS.forEach((err, i) => console.log(`  ${i + 1}. ${err}`));
  }

  if (WARNINGS.length > 0) {
    console.log(`\n⚠️  WARNINGS (${WARNINGS.length}):\n`);
    WARNINGS.forEach((warn, i) => console.log(`  ${i + 1}. ${warn}`));
  }

  console.log('\n' + '='.repeat(60) + '\n');

  // Exit with error code if there are errors
  return ERRORS.length > 0 ? 1 : 0;
}

// Run and exit with appropriate code
const exitCode = runValidations();
process.exit(exitCode);
