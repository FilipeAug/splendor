export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categoria: string;
  tempoLeitura: string;
  keywords?: string;
}

export interface Post extends PostMeta {
  content: string;
}

// Load all .md files from content/blog via Vite's import.meta.glob (?raw)
const rawFiles = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/**
 * Minimal frontmatter parser — avoids Node-only dependencies.
 * Handles only the YAML fields used in our posts.
 */
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlBlock = match[1];
  const content = match[2].trim();

  const data: Record<string, string> = {};
  for (const line of yamlBlock.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }

  return { data, content };
}

function parsePost(raw: string, slug: string): Post {
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title ?? "Sem título",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    categoria: data.categoria ?? "Geral",
    tempoLeitura: data.tempoLeitura ?? "3 min",
    keywords: data.keywords ?? undefined,
    content,
  };
}

export const posts: Post[] = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "";
    return parsePost(raw, slug);
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const categorias = Array.from(new Set(posts.map((p) => p.categoria)));
