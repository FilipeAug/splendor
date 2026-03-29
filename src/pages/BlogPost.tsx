import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getPostBySlug, posts } from "@/data/blog";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? "");

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <h1 className="text-3xl font-bold text-gray-900">Post não encontrado</h1>
        <p className="text-gray-500">Este artigo não existe ou foi removido.</p>
        <Link
          to="/novidades"
          className="inline-flex items-center gap-2 text-[#167D7F] font-semibold hover:underline"
        >
          <ArrowLeft size={16} />
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  const outros = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header do post */}
      <section className="hero-gradient pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/novidades"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar para o Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold bg-white/15 text-white px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={11} />
              {post.categoria}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-white/70 text-base leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.tempoLeitura} de leitura
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-gray prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-strong:text-gray-900
            prose-a:text-[#167D7F] prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-[#167D7F] prose-blockquote:bg-[#F3F3F1] prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
            prose-ul:text-gray-600 prose-li:my-1
            prose-hr:border-gray-200">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3F3F1] py-14 text-center px-6">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para transformar sua água?
          </h3>
          <p className="text-gray-500 mb-8">
            Conheça os combos Sylocimol + Top H+ e experimente a diferença.
          </p>
          <a href="/#produtos" className="cta-button">
            Ver combos disponíveis
          </a>
        </div>
      </section>

      {/* Outros posts */}
      {outros.length > 0 && (
        <section className="py-14 max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Leia também</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outros.map((p) => (
              <Link
                key={p.slug}
                to={`/novidades/${p.slug}`}
                className="group card-elevated flex flex-col gap-3"
              >
                <span className="text-xs font-semibold text-[#167D7F]">
                  {p.categoria}
                </span>
                <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-[#167D7F] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  {p.excerpt}
                </p>
                <span className="text-xs text-gray-400">
                  {formatDate(p.date)} · {p.tempoLeitura}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
