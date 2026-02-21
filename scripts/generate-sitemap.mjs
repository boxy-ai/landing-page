import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const SITE_ORIGIN = "https://boxy-ai.com";
const INDEXABLE_ROUTES = [
  "/",
  "/approach",
  "/privacy-security",
  "/unix-philosophy",
  "/about",
  "/hiring",
  "/join-beta",
];

const lastMod = new Date().toISOString().slice(0, 10);
const sitemapEntries = INDEXABLE_ROUTES.map((route) => {
  const url = route === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${route}`;
  return [
    "  <url>",
    `    <loc>${url}</loc>`,
    `    <lastmod>${lastMod}</lastmod>`,
    "  </url>",
  ].join("\n");
}).join("\n");

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  sitemapEntries,
  "</urlset>",
  "",
].join("\n");

const publicDir = path.resolve(process.cwd(), "public");
mkdirSync(publicDir, { recursive: true });
writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");

console.log("Generated public/sitemap.xml");
