export type RobotsDirective = "index,follow" | "noindex,nofollow";

export interface RouteSeoMeta {
  title: string;
  description: string;
  canonicalPath: string;
  robots: RobotsDirective;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export const SITE_ORIGIN = "https://boxy-ai.com";
export const SITE_NAME = "Boxy";
export const DEFAULT_OG_IMAGE = "/og-image.png";

const ROUTE_SEO: Record<string, RouteSeoMeta> = {
  "/": {
    title: "Boxy | Your AI that works before you ask",
    description:
      "Boxy ingests your digital context to anticipate needs and generate actionable proposals while keeping privacy inside the Box.",
    canonicalPath: "/",
    robots: "index,follow",
  },
  "/approach": {
    title: "Our Approach | Boxy",
    description:
      "How Boxy builds proactive personal intelligence with deep context, deterministic GUI agents, and fast, reliable execution.",
    canonicalPath: "/approach",
    robots: "index,follow",
  },
  "/privacy-security": {
    title: "Privacy & Security | Boxy",
    description:
      "Learn how Boxy keeps identity inside the Box with local obfuscation, local embedding, and privacy-safe cloud inference.",
    canonicalPath: "/privacy-security",
    robots: "index,follow",
  },
  "/unix-philosophy": {
    title: "Unix Philosophy | Boxy",
    description:
      "Why Boxy uses Unix-style agent design: small focused agents with explicit capability manifests and contained blast radius.",
    canonicalPath: "/unix-philosophy",
    robots: "index,follow",
  },
  "/about": {
    title: "About Boxy",
    description:
      "Meet the Boxy team and principles behind personal intelligence: privacy-first architecture, deterministic systems, and rapid shipping.",
    canonicalPath: "/about",
    robots: "index,follow",
  },
  "/hiring": {
    title: "Careers | Boxy",
    description:
      "Join Boxy to build the future of personal intelligence across engineering, growth, and product.",
    canonicalPath: "/hiring",
    robots: "index,follow",
  },
  "/join-beta": {
    title: "Join the Beta | Boxy",
    description:
      "Request access to Boxy's closed beta and share your use case for proactive personal intelligence.",
    canonicalPath: "/join-beta",
    robots: "index,follow",
  },
};

const NOT_FOUND_SEO: RouteSeoMeta = {
  title: "Page Not Found | Boxy",
  description: "This page does not exist on Boxy.",
  canonicalPath: "/404",
  robots: "noindex,nofollow",
};

function normalizePath(pathname: string) {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function getSeoForPath(pathname: string): RouteSeoMeta {
  const normalizedPath = normalizePath(pathname);
  return ROUTE_SEO[normalizedPath] ?? NOT_FOUND_SEO;
}

export const INDEXABLE_ROUTES = Object.values(ROUTE_SEO).map((route) => route.canonicalPath);
