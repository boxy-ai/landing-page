import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, getSeoForPath, SITE_NAME, SITE_ORIGIN } from "../seo";

interface SeoHeadProps {
  pathname: string;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let meta = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
}

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  if (pathOrUrl.startsWith("/")) {
    return `${SITE_ORIGIN}${pathOrUrl}`;
  }

  return `${SITE_ORIGIN}/${pathOrUrl}`;
}

export function SeoHead({ pathname }: SeoHeadProps) {
  useEffect(() => {
    const meta = getSeoForPath(pathname);
    const canonicalUrl =
      meta.canonicalPath === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${meta.canonicalPath}`;
    const ogTitle = meta.ogTitle ?? meta.title;
    const ogDescription = meta.ogDescription ?? meta.description;
    const ogImage = toAbsoluteUrl(meta.ogImage ?? DEFAULT_OG_IMAGE);
    const twitterTitle = meta.twitterTitle ?? ogTitle;
    const twitterDescription = meta.twitterDescription ?? ogDescription;
    const twitterImage = toAbsoluteUrl(meta.twitterImage ?? ogImage);

    document.title = meta.title;
    upsertCanonical(canonicalUrl);

    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "robots", meta.robots);

    upsertMeta("property", "og:title", ogTitle);
    upsertMeta("property", "og:description", ogDescription);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:image", ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", twitterTitle);
    upsertMeta("name", "twitter:description", twitterDescription);
    upsertMeta("name", "twitter:image", twitterImage);
  }, [pathname]);

  return null;
}
