/**
 * Post-build pre-rendering script.
 *
 * For each known route it creates a directory with an index.html that has:
 *  - Correct <title>, <meta description>, <canonical>, Open Graph, Twitter Card
 *  - JSON-LD structured data
 *  - A <noscript> block with the key textual content (visible to crawlers)
 *  - The SPA bundle still loads and hydrates normally
 *
 * Run after `vite build`:  node scripts/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");
const BASE_URL = "https://splendorlight.com.br";
const SITE_NAME = "Splendor — Sylocimol e Top H+";

// ── Route definitions ──────────────────────────────────────────────
const routes = [
  {
    path: "/",
    title: "Transforme sua Água em Fonte de Saúde | Sylocimol e Top H+",
    description:
      "Descubra como a tecnologia exclusiva do Sylocimol e Top H+ pode tornar sua água mais leve, hidratante e benéfica para todo o organismo. Dispensado de registro ANVISA.",
    keywords:
      "sylocimol, top h+, água magnetizada, magnetizador de água, água saudável, saúde",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: BASE_URL,
      description:
        "Tecnologia exclusiva de magnetização de água. Sylocimol e Top H+ transformam sua água em fonte de saúde.",
    },
    noscriptContent: `
      <h1>Sylocimol e Top H+ — Transforme sua Água em Fonte de Saúde</h1>
      <p>Descubra como a tecnologia exclusiva do Sylocimol e Top H+ pode tornar sua água mais leve, hidratante e benéfica para todo o organismo. Dispensado de registro ANVISA. Mais de 20 anos de tradição.</p>
      <p>O Sylocimol é um magnetizador de água que reorganiza as moléculas através de campo magnético constante, tornando a água mais leve e fácil de ser absorvida pelo organismo.</p>
      <p>O Top H+ complementa o Sylocimol adicionando cálcio e magnésio na proporção ideal de 67% e 33%.</p>
      <h2>Benefícios</h2>
      <ul>
        <li>Maior hidratação celular</li>
        <li>Água rica em cálcio e magnésio</li>
        <li>Dispensado de registro ANVISA</li>
        <li>Sem eletricidade, sem manutenção</li>
        <li>Mais de 30 anos de durabilidade</li>
      </ul>
      <a href="/novidades">Blog — Artigos sobre Sylocimol e Saúde</a>
      <a href="/resultados">Depoimentos reais de quem usa Sylocimol</a>
      <a href="/estudos">Estudos científicos</a>
    `,
  },
  {
    path: "/novidades",
    title: "Blog — Artigos sobre Sylocimol, Água Magnetizada e Saúde",
    description:
      "Conteúdo científico e educativo sobre Sylocimol, Top H+, água magnetizada e seus benefícios para a saúde. Estudos, depoimentos e guias de uso.",
    keywords:
      "sylocimol, blog sylocimol, água magnetizada, top h+, saúde, magnetizador de água",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog Splendor",
      url: `${BASE_URL}/novidades`,
      description:
        "Ciência, saúde e dicas sobre hidratação com Sylocimol e Top H+.",
      publisher: { "@type": "Organization", name: "Splendor" },
    },
    noscriptContent: `
      <h1>Blog Splendor — Artigos sobre Sylocimol e Saúde</h1>
      <p>Ciência, saúde e dicas sobre hidratação — conteúdo para quem quer entender melhor a água magnetizada.</p>
      <ul>
        <li><a href="/novidades/o-que-e-sylocimol-como-funciona">O que é Sylocimol e como funciona? Guia completo</a></li>
        <li><a href="/novidades/como-usar-sylocimol-protocolo">Como usar o Sylocimol + Top H+: o protocolo completo</a></li>
        <li><a href="/novidades/minerais-agua-saude-cardiovascular">Magnésio na água: o mineral que protege o coração</a></li>
        <li><a href="/novidades/agua-magnetizada-e-osteoporose">Água magnetizada e osteoporose: o que diz a ciência</a></li>
      </ul>
    `,
  },
  {
    path: "/novidades/o-que-e-sylocimol-como-funciona",
    title: "O que é Sylocimol e como funciona? Guia completo",
    description:
      "Entenda o que é o Sylocimol, como ele magnetiza a água, quais são os benefícios comprovados e por que mais de 200 famílias relatam resultados positivos. Guia completo com base em estudos e depoimentos reais.",
    keywords:
      "sylocimol, o que é sylocimol, sylocimol funciona, sylocimol como funciona, água magnetizada, magnetizador de água, sylocimol benefícios",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "O que é Sylocimol e como funciona? Guia completo",
      datePublished: "2026-04-01",
      url: `${BASE_URL}/novidades/o-que-e-sylocimol-como-funciona`,
      author: { "@type": "Organization", name: "Splendor" },
      publisher: { "@type": "Organization", name: "Splendor" },
      description:
        "Entenda o que é o Sylocimol, como ele magnetiza a água, quais são os benefícios comprovados.",
    },
    noscriptContent: `
      <h1>O que é Sylocimol e como funciona? Guia completo</h1>
      <p>O Sylocimol é um magnetizador de água. Trata-se de um dispositivo compacto, feito com ímãs permanentes de alta intensidade, que reorganiza as moléculas da água através de campo magnético constante.</p>
      <h2>Características principais</h2>
      <ul>
        <li>Não usa eletricidade</li>
        <li>Não precisa de manutenção</li>
        <li>Dispensado de registro pela ANVISA</li>
        <li>Durabilidade de mais de 30 anos</li>
        <li>Mais de 20 anos de tradição no mercado</li>
      </ul>
      <h2>O Sylocimol funciona mesmo?</h2>
      <p>Ao longo de mais de 20 anos, foram coletados mais de 200 depoimentos em vídeo de pessoas que relatam melhorias em diversas condições.</p>
      <h2>O que a ciência diz?</h2>
      <p>O Sylocimol é respaldado por estudos da APTA, publicações no Journal of Clinical Densitometry, laudo do laboratório Falcão Bauer e reconhecimento da ONU.</p>
      <a href="/novidades">Ver todos os artigos</a>
      <a href="/estudos">Ver estudos científicos</a>
      <a href="/resultados">Ver depoimentos reais</a>
    `,
  },
  {
    path: "/novidades/como-usar-sylocimol-protocolo",
    title: "Como usar o Sylocimol + Top H+: o protocolo completo",
    description:
      "Posicionamento, tempo de espera, quantidade diária e cuidados com a manutenção. Tudo que você precisa saber para aproveitar ao máximo a água magnetizada e mineralizada.",
    keywords:
      "como usar sylocimol, protocolo sylocimol, sylocimol como funciona, como usar top h+, água magnetizada como fazer",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Como usar o Sylocimol + Top H+: o protocolo completo",
      datePublished: "2026-03-29",
      url: `${BASE_URL}/novidades/como-usar-sylocimol-protocolo`,
      author: { "@type": "Organization", name: "Splendor" },
      publisher: { "@type": "Organization", name: "Splendor" },
    },
    noscriptContent: `
      <h1>Como usar o Sylocimol + Top H+: o protocolo completo</h1>
      <p>Posicionamento, tempo de espera, quantidade diária e cuidados com a manutenção. Guia completo de uso do Sylocimol e Top H+.</p>
      <h2>Passo 1: Posicionar o Sylocimol</h2>
      <p>O Sylocimol funciona por campo magnético constante. Tempo de espera: 20 minutos.</p>
      <h2>Passo 2: Adicionar o Top H+</h2>
      <p>As pedras de dolomita liberam cálcio e magnésio gradualmente.</p>
      <h2>Passo 3: O protocolo de consumo</h2>
      <p>Beba 600 ml em jejum pela manhã. Quantidade diária: peso (kg) × 35 ml.</p>
    `,
  },
  {
    path: "/novidades/minerais-agua-saude-cardiovascular",
    title: "Magnésio na água: o mineral que protege o coração",
    description:
      "Estudos na Finlândia mostraram redução de até 25% em problemas cardíacos em populações com ingestão adequada de magnésio via água.",
    keywords:
      "magnésio na água, sylocimol coração, saúde cardiovascular, água magnetizada pressão, top h+ magnésio",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Magnésio na água: o mineral que protege o coração",
      datePublished: "2026-03-22",
      url: `${BASE_URL}/novidades/minerais-agua-saude-cardiovascular`,
      author: { "@type": "Organization", name: "Splendor" },
      publisher: { "@type": "Organization", name: "Splendor" },
    },
    noscriptContent: `
      <h1>Magnésio na água: o mineral que protege o coração</h1>
      <p>Na Finlândia, pesquisadores descobriram que populações com acesso a água rica em magnésio apresentavam até 25% menos casos de infarto.</p>
      <p>O Top H+ replica a proporção de 67% cálcio e 33% magnésio encontrada nas águas mais benéficas para a saúde cardiovascular.</p>
    `,
  },
  {
    path: "/novidades/agua-magnetizada-e-osteoporose",
    title: "Água magnetizada e osteoporose: o que diz a ciência",
    description:
      "Um estudo publicado no Journal of Clinical Densitometry encontrou resultados surpreendentes sobre a relação entre minerais na água e a densidade mineral óssea.",
    keywords:
      "água magnetizada osteoporose, sylocimol osteoporose, cálcio na água, densidade óssea, top h+ ossos",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Água magnetizada e osteoporose: o que diz a ciência",
      datePublished: "2026-03-15",
      url: `${BASE_URL}/novidades/agua-magnetizada-e-osteoporose`,
      author: { "@type": "Organization", name: "Splendor" },
      publisher: { "@type": "Organization", name: "Splendor" },
    },
    noscriptContent: `
      <h1>Água magnetizada e osteoporose: o que diz a ciência</h1>
      <p>O Journal of Clinical Densitometry publicou uma pesquisa mostrando que populações que consomem água rica em cálcio e magnésio apresentam menor incidência de osteoporose.</p>
      <p>O Top H+ adiciona cálcio e magnésio na proporção 67% e 33% e o Sylocimol torna esses minerais até 3 vezes mais biodisponíveis.</p>
    `,
  },
  {
    path: "/resultados",
    title: "Depoimentos Reais — Resultados com Sylocimol e Top H+",
    description:
      "Mais de 200 depoimentos em vídeo de pessoas que relatam melhorias na saúde com Sylocimol e Top H+. Veja os resultados reais.",
    keywords:
      "sylocimol depoimentos, sylocimol resultados, sylocimol funciona, água magnetizada resultados, sylocimol antes e depois",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Depoimentos — Resultados com Sylocimol",
      url: `${BASE_URL}/resultados`,
      description: "Mais de 200 depoimentos reais de usuários do Sylocimol e Top H+.",
    },
    noscriptContent: `
      <h1>Depoimentos Reais — Resultados com Sylocimol e Top H+</h1>
      <p>Mais de 200 depoimentos em vídeo de pessoas que relatam melhorias na saúde após começarem a usar o Sylocimol e Top H+.</p>
      <p>Condições relatadas: ácido úrico, pressão arterial, colesterol, diabetes, osteoporose, alergias, energia e disposição.</p>
    `,
  },
  {
    path: "/estudos",
    title: "Estudos Científicos — Sylocimol e Água Magnetizada",
    description:
      "Laudos técnicos, estudos da APTA, publicações internacionais e reconhecimentos que comprovam a eficácia da tecnologia Sylocimol e Top H+.",
    keywords:
      "sylocimol estudos, água magnetizada ciência, sylocimol comprovação, sylocimol ANVISA, laudos sylocimol",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Estudos Científicos — Sylocimol",
      url: `${BASE_URL}/estudos`,
      description:
        "Laudos técnicos e estudos que embasam a tecnologia Sylocimol e Top H+.",
    },
    noscriptContent: `
      <h1>Estudos Científicos — Sylocimol e Água Magnetizada</h1>
      <p>Conheça os laudos técnicos, estudos científicos e reconhecimentos que embasam a tecnologia do Sylocimol e Top H+.</p>
      <ul>
        <li>Estudos da APTA — Propriedades da água magnetizada e redução de gordura e sódio no sangue</li>
        <li>Journal of Clinical Densitometry — Densidade mineral óssea</li>
        <li>Laudo Falcão Bauer — Certificação de qualidade</li>
        <li>Reconhecimento ONU</li>
        <li>Estudo de Osteoporose — Dr. Geraldo Balieiro (publicado nos EUA)</li>
      </ul>
    `,
  },
];

// ── Redirect for old indexed URL ─────────────────────────────────
const redirects = [
  {
    from: "/por-que-a-agua-magnetizada-pelo-sylocimol-traz-tantos-beneficios",
    to: "/novidades/o-que-e-sylocimol-como-funciona",
  },
];

// ── Main ─────────────────────────────────────────────────────────
const template = readFileSync(resolve(DIST, "index.html"), "utf-8");

let count = 0;

for (const route of routes) {
  const fullTitle =
    route.path === "/"
      ? route.title
      : `${route.title} | ${SITE_NAME}`;
  const canonical = `${BASE_URL}${route.path === "/" ? "" : route.path}`;

  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${fullTitle}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`
  );

  // Replace meta keywords
  html = html.replace(
    /<meta name="keywords" content="[^"]*"/,
    `<meta name="keywords" content="${route.keywords}"`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonical}"`
  );

  // Replace og tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${fullTitle}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${route.description}"`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonical}"`
  );

  // Replace twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${fullTitle}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${route.description}"`
  );

  // Inject JSON-LD and noscript before </head> and after <div id="root">
  const jsonLd = `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>`;
  html = html.replace("</head>", `${jsonLd}\n</head>`);

  // Add noscript content inside #root for crawlers
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><noscript>${route.noscriptContent.trim()}</noscript></div>`
  );

  // Write to correct path
  const outputDir =
    route.path === "/" ? DIST : resolve(DIST, route.path.slice(1));
  const outputFile =
    route.path === "/"
      ? resolve(DIST, "index.html")
      : resolve(outputDir, "index.html");

  if (route.path !== "/") {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputFile, html, "utf-8");
  count++;
}

// ── Redirects ────────────────────────────────────────────────────
for (const redirect of redirects) {
  const redirectHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0;url=${redirect.to}" />
  <link rel="canonical" href="${BASE_URL}${redirect.to}" />
  <title>Redirecionando...</title>
  <script>window.location.replace("${redirect.to}");</script>
</head>
<body>
  <p>Redirecionando para <a href="${redirect.to}">${redirect.to}</a>...</p>
</body>
</html>`;

  const dir = resolve(DIST, redirect.from.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "index.html"), redirectHtml, "utf-8");
  count++;
}

console.log(`✓ Pre-rendered ${count} pages (${routes.length} routes + ${redirects.length} redirects)`);
