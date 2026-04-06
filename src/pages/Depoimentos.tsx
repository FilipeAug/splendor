import { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight, Star, X, Play } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import depoimentosData from "@/data/depoimentos.json";

interface Depoimento {
  id: string;
  nome: string;
  cidade: string;
  condicao: string;
  condicaoLabel: string;
  frase: string;
  tempoResultado: string;
  driveId: string;
}

const depoimentos: Depoimento[] = depoimentosData as Depoimento[];
const PER_PAGE = 12;

const categorias = Array.from(
  new Map(depoimentos.map((d) => [d.condicao, d.condicaoLabel])).entries()
).sort((a, b) => a[1].localeCompare(b[1]));

// Destaques na seção de vídeos — um por categoria representativa
const depoimentosDestaque = [
  depoimentos.find((d) => d.condicao === "Fibromialgia"),
  depoimentos.find((d) => d.condicao === "Diabetes"),
  depoimentos.find((d) => d.condicao === "Artrite_Artrose"),
  depoimentos.find((d) => d.condicao === "Osteoporose"),
  depoimentos.find((d) => d.condicao === "Problema_de_Pressao"),
  depoimentos.find((d) => d.condicao === "Dor_no_Corpo"),
].filter(Boolean) as Depoimento[];

function driveEmbedUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

function VideoCard({ dep }: { dep: Depoimento }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
      <div className="relative aspect-video bg-gray-900">
        {playing ? (
          <iframe
            src={driveEmbedUrl(dep.driveId)}
            title={`Depoimento — ${dep.nome}`}
            className="w-full h-full"
            allow="autoplay"
            allowFullScreen
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center cursor-pointer bg-gradient-to-br from-[#167D7F]/20 to-[#0e5557]/30"
            onClick={() => setPlaying(true)}
          >
            {/* Ícone de play grande */}
            <div className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110">
              <Play size={28} className="text-[#167D7F] ml-1" fill="#167D7F" />
            </div>
            {/* Badge categoria */}
            <div className="absolute top-3 left-3">
              <span className="bg-[#167D7F] text-white text-xs font-bold px-3 py-1 rounded-full">
                {dep.condicaoLabel}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="font-bold text-gray-900 text-sm leading-snug">{dep.nome}</p>
        {dep.cidade && dep.cidade !== "Não informado" && (
          <p className="text-xs text-gray-400">{dep.cidade}</p>
        )}
        {dep.tempoResultado && (
          <p className="text-xs font-semibold text-[#167D7F]">⏱ {dep.tempoResultado}</p>
        )}
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
          "{dep.frase}"
        </p>
      </div>
    </div>
  );
}

function DepoimentoCard({ dep }: { dep: Depoimento }) {
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const PREVIEW_LENGTH = 240;
  const isLong = dep.frase.length > PREVIEW_LENGTH;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      {/* Vídeo embutido */}
      <div className="relative aspect-video bg-gray-100">
        {playing ? (
          <iframe
            src={driveEmbedUrl(dep.driveId)}
            title={`Vídeo — ${dep.nome}`}
            className="w-full h-full"
            allow="autoplay"
            allowFullScreen
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center cursor-pointer bg-gradient-to-br from-[#167D7F]/10 to-[#3C9792]/20"
            onClick={() => setPlaying(true)}
          >
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition-transform">
              <Play size={20} className="text-[#167D7F] ml-0.5" fill="#167D7F" />
            </div>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-bold text-gray-900 text-sm">{dep.nome}</p>
            {dep.cidade && dep.cidade !== "Não informado" && (
              <p className="text-xs text-gray-400">{dep.cidade}</p>
            )}
          </div>
          <span className="flex-shrink-0 text-xs font-semibold text-[#167D7F] bg-[#167D7F]/10 rounded-full px-2.5 py-1 text-center leading-tight">
            {dep.condicaoLabel}
          </span>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        {dep.tempoResultado && (
          <p className="text-xs font-semibold text-[#167D7F]">⏱ {dep.tempoResultado}</p>
        )}
        <p className="text-xs text-gray-600 leading-relaxed">
          "{expanded || !isLong ? dep.frase : dep.frase.slice(0, PREVIEW_LENGTH) + "…"}"
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-semibold text-[#167D7F] hover:underline text-left"
          >
            {expanded ? "Ver menos" : "Ler mais"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Depoimentos() {
  usePageSEO({
    title: "Depoimentos Reais — Resultados com Sylocimol e Top H+",
    description: "Mais de 200 depoimentos em vídeo de pessoas que relatam melhorias na saúde com Sylocimol e Top H+. Veja os resultados reais.",
    canonical: "/resultados",
    keywords: "sylocimol depoimentos, sylocimol resultados, sylocimol funciona, água magnetizada resultados, sylocimol antes e depois",
  });

  const [search, setSearch] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("todas");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return depoimentos.filter((d) => {
      const matchCat = categoriaAtiva === "todas" || d.condicao === categoriaAtiva;
      const matchSearch =
        !q ||
        d.nome.toLowerCase().includes(q) ||
        d.frase.toLowerCase().includes(q) ||
        d.condicaoLabel.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, categoriaAtiva]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategoria = (cat: string) => { setCategoriaAtiva(cat); setPage(1); };
  const handleSearch = (val: string) => { setSearch(val); setPage(1); };

  return (
    <div className="min-h-screen bg-[#F3F3F1]">
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            O que mudou na vida de quem já usa
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            {depoimentos.length} depoimentos em vídeo de pessoas reais — organizados por condição de saúde.
          </p>
        </div>
      </section>

      {/* ── VÍDEOS EM DESTAQUE ── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#167D7F]/10 flex items-center justify-center">
              <Play size={16} className="text-[#167D7F] ml-0.5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Assista</p>
              <h2 className="text-xl font-bold text-gray-900">Depoimentos em destaque</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {depoimentosDestaque.map((dep) => (
              <VideoCard key={dep.id} dep={dep} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTROS ── */}
      <section className="py-10 px-6 bg-[#F3F3F1]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Todos os depoimentos</h2>
            <p className="text-sm text-gray-500">Cada card tem o vídeo e a transcrição — filtre pela condição que quiser ver</p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-96 mb-6">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nome, condição ou texto…"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#167D7F] focus:ring-2 focus:ring-[#167D7F]/20 shadow-sm"
            />
            {search && (
              <button onClick={() => handleSearch("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={15} />
              </button>
            )}
          </div>

          {/* Filtros por condição */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
            Filtrar por condição
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => handleCategoria("todas")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                categoriaAtiva === "todas"
                  ? "bg-[#167D7F] text-white border-[#167D7F] shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#167D7F] hover:text-[#167D7F]"
              }`}
            >
              Todas
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                categoriaAtiva === "todas" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {depoimentos.length}
              </span>
            </button>
            {categorias.map(([key, label]) => {
              const count = depoimentos.filter((d) => d.condicao === key).length;
              const isActive = categoriaAtiva === key;
              return (
                <button
                  key={key}
                  onClick={() => handleCategoria(key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                    isActive
                      ? "bg-[#167D7F] text-white border-[#167D7F] shadow-md scale-[1.02]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#167D7F] hover:text-[#167D7F] hover:bg-[#167D7F]/5"
                  }`}
                >
                  {label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-white/25 text-white" : "bg-[#167D7F]/10 text-[#167D7F]"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {(search || categoriaAtiva !== "todas") && (
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-500">
                <span className="font-bold text-[#167D7F]">{filtered.length}</span> resultado{filtered.length !== 1 ? "s" : ""}
                {categoriaAtiva !== "todas" && (
                  <> em <span className="font-semibold">{categorias.find(([k]) => k === categoriaAtiva)?.[1]}</span></>
                )}
              </p>
              <button
                onClick={() => { handleCategoria("todas"); handleSearch(""); }}
                className="text-xs text-gray-400 hover:text-gray-600 underline"
              >
                limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginated.map((dep) => (
                <DepoimentoCard key={dep.id} dep={dep} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 bg-white rounded-2xl">
              <p className="text-lg font-semibold mb-2">Nenhum resultado</p>
              <p className="text-sm">Tente outros termos ou remova os filtros.</p>
            </div>
          )}

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-2.5 rounded-xl bg-white border-2 border-gray-200 hover:border-[#167D7F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-1.5">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (page <= 3) pageNum = i + 1;
                  else if (page >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = page - 2 + i;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`w-10 h-10 rounded-xl text-sm font-bold transition-colors ${
                        page === pageNum
                          ? "bg-[#167D7F] text-white shadow-md"
                          : "bg-white border-2 border-gray-200 text-gray-600 hover:border-[#167D7F]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-2.5 rounded-xl bg-white border-2 border-gray-200 hover:border-[#167D7F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 text-center px-6 border-t border-gray-100">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Quer ser o próximo?</h3>
          <p className="text-gray-500 mb-8">Experimente o Sylocimol + Top H+ e transforme a qualidade da sua água.</p>
          <a href="/#produtos" className="cta-button">Ver combos disponíveis</a>
        </div>
      </section>
    </div>
  );
}
