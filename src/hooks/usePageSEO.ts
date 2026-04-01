import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
}

const BASE_URL = "https://splendorlight.com.br";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.webp`;
const SITE_NAME = "Splendor — Sylocimol e Top H+";

/**
 * Updates document <head> meta tags dynamically for each page.
 * On unmount, restores defaults so navigating back to Home works correctly.
 */
export function usePageSEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  keywords,
}: PageSEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    const image = ogImage ?? DEFAULT_IMAGE;

    // Title
    document.title = fullTitle;

    // Meta tags
    setMeta("description", description);
    setMeta("keywords", keywords ?? "");
    setMetaProperty("og:title", fullTitle);
    setMetaProperty("og:description", description);
    setMetaProperty("og:type", ogType);
    setMetaProperty("og:url", fullCanonical);
    setMetaProperty("og:image", image);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // Canonical link
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) {
      link.href = fullCanonical;
    }

    return () => {
      // Restore defaults on unmount
      document.title = "Transforme sua Água em Fonte de Saúde | Sylocimol e Top H+";
      setMeta("description", "Descubra como a tecnologia exclusiva do Sylocimol e Top H+ pode tornar sua água mais leve, hidratante e benéfica para todo o organismo. Dispensado de registro ANVISA.");
      setMeta("keywords", "agua magnetizada, sylocimol, top h+, saude, magnetizador agua, agua saudavel, filtro agua");
      setMetaProperty("og:title", "Transforme sua Água em Fonte de Saúde | Sylocimol e Top H+");
      setMetaProperty("og:description", "Tecnologia exclusiva que transforma sua água em fonte de saúde e vitalidade. Dispensado de registro ANVISA. 20 anos de tradição.");
      setMetaProperty("og:type", "website");
      setMetaProperty("og:url", BASE_URL);
      setMetaProperty("og:image", DEFAULT_IMAGE);
      setMeta("twitter:title", "Transforme sua Água em Fonte de Saúde | Sylocimol e Top H+");
      setMeta("twitter:description", "Tecnologia exclusiva que transforma sua água em fonte de saúde e vitalidade");
      setMeta("twitter:image", DEFAULT_IMAGE);
      if (link) link.href = BASE_URL;
    };
  }, [title, description, canonical, ogType, ogImage, keywords]);
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.content = content;
}
