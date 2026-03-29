export function SEOSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sylocimol e Top H+",
    "description": "Tecnologia exclusiva de magnetização de água que transforma água comum em água bioativa, mais saudável e benéfica para o organismo.",
    "brand": {
      "@type": "Brand",
      "name": "Splendor"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1000"
    },
    "features": [
      "Dispensado de registro ANVISA",
      "20 anos de tradição",
      "Tecnologia magnética",
      "Sem eletricidade",
      "Sem manutenção"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}