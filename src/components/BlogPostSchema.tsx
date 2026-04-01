interface BlogPostSchemaProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  tempoLeitura: string;
}

const BASE_URL = "https://splendorlight.com.br";

export function BlogPostSchema({ title, description, date, slug, tempoLeitura }: BlogPostSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": date,
    "dateModified": date,
    "url": `${BASE_URL}/novidades/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/novidades/${slug}`,
    },
    "author": {
      "@type": "Organization",
      "name": "Splendor",
      "url": BASE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Splendor",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon.svg`,
      },
    },
    "timeRequired": `PT${parseInt(tempoLeitura)}M`,
    "inLanguage": "pt-BR",
    "keywords": "sylocimol, água magnetizada, top h+, saúde",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
