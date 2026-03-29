import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import { posts, categorias } from "@/data/blog";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const categoriaColors: Record<string, string> = {
  Pesquisa: "bg-teal-50 text-teal-700",
  Saúde: "bg-blue-50 text-blue-700",
  Uso: "bg-amber-50 text-amber-700",
  Geral: "bg-gray-50 text-gray-700",
};

export default function Blog() {
  const [catAtiva, setCatAtiva] = useState<string>("Todas");

  const filteredPosts =
    catAtiva === "Todas"
      ? posts
      : posts.filter((p) => p.categoria === catAtiva);

  const postDestaque = posts[0];
  const demais = filteredPosts.slice(catAtiva === "Todas" ? 1 : 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium rounded-full px-4 py-2 mb-6 border border-white/10">
            <BookOpen size={16} />
            Novidades e conteúdo
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Blog Splendor
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Ciência, saúde e dicas sobre hidratação — conteúdo para quem quer
            entender melhor o que coloca no corpo.
          </p>
        </div>
      </section>

      {/* Filtros por categoria */}
      <section className="sticky top-[64px] z-40 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-3 overflow-x-auto scrollbar-hide">
          {["Todas", ...categorias].map((cat) => (
            <button
              key={cat}
              onClick={() => setCatAtiva(cat)}
              className={`flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                catAtiva === cat
                  ? "bg-[#167D7F] text-white border-[#167D7F]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#167D7F] hover:text-[#167D7F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        {/* Post em destaque — só exibe quando "Todas" */}
        {catAtiva === "Todas" && postDestaque && (
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-4">
              Mais recente
            </p>
            <Link
              to={`/novidades/${postDestaque.slug}`}
              className="group block bg-[#F3F3F1] rounded-3xl overflow-hidden hover:shadow-medium transition-shadow"
            >
              <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                      categoriaColors[postDestaque.categoria] ?? "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {postDestaque.categoria}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#167D7F] transition-colors leading-snug">
                    {postDestaque.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">
                    {postDestaque.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{formatDate(postDestaque.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {postDestaque.tempoLeitura}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[#167D7F] group-hover:bg-[#3C9792] transition-colors">
                  <ArrowRight size={22} className="text-white" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid de posts */}
        {demais.length > 0 && (
          <>
            {catAtiva === "Todas" && (
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-6">
                Mais artigos
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demais.map((post) => (
                <Link
                  key={post.slug}
                  to={`/novidades/${post.slug}`}
                  className="group card-elevated flex flex-col gap-4 hover:border-[#167D7F]/30 transition-colors"
                >
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full w-fit ${
                      categoriaColors[post.categoria] ?? "bg-gray-50 text-gray-700"
                    }`}
                  >
                    <Tag size={10} className="inline mr-1" />
                    {post.categoria}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#167D7F] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.tempoLeitura}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold">Nenhum post nesta categoria</p>
          </div>
        )}
      </div>
    </div>
  );
}
