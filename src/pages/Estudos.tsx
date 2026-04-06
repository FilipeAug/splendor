import { useState } from "react";
import { FileText, ImageIcon, Award, BookOpen, ExternalLink, Star } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import { estudos, tipoLabels, tipoColors, type TipoEstudo, type Estudo } from "@/data/estudos";

const filtros: { label: string; value: "todas" | TipoEstudo }[] = [
  { label: "Todos", value: "todas" },
  { label: "Estudos Científicos", value: "estudo" },
  { label: "Laudos Técnicos", value: "laudo" },
  { label: "Reconhecimentos", value: "reconhecimento" },
  { label: "Materiais Informativos", value: "folder" },
];

function isImage(arquivo: string) {
  return /\.(jpg|jpeg|png|webp)$/i.test(arquivo);
}

function TipoIcon({ tipo }: { tipo: TipoEstudo }) {
  if (tipo === "laudo") return <FileText size={16} />;
  if (tipo === "estudo") return <BookOpen size={16} />;
  if (tipo === "reconhecimento") return <Award size={16} />;
  return <ImageIcon size={16} />;
}

function EstudoCard({ estudo }: { estudo: Estudo }) {
  const imgFile = isImage(estudo.arquivo);
  const badgeClass = tipoColors[estudo.tipo];

  return (
    <div className="card-elevated flex flex-col gap-4 relative">
      {estudo.destaque && (
        <div className="absolute top-3 right-3">
          <Star size={14} className="fill-amber-400 text-amber-400" />
        </div>
      )}

      {imgFile && (
        <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100">
          <img
            src={estudo.arquivo}
            alt={estudo.titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div
        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full w-fit ${badgeClass}`}
      >
        <TipoIcon tipo={estudo.tipo} />
        {tipoLabels[estudo.tipo]}
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <h3 className="font-bold text-gray-900 text-sm leading-snug">
          {estudo.titulo}
        </h3>
        {estudo.instituicao && (
          <p className="text-xs text-[#167D7F] font-medium">{estudo.instituicao}</p>
        )}
        <p className="text-xs text-gray-500 leading-relaxed mt-1">
          {estudo.descricao}
        </p>
      </div>

      <a
        href={estudo.arquivo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#167D7F] hover:underline mt-auto"
      >
        <ExternalLink size={14} />
        {imgFile ? "Ver imagem" : "Abrir documento"}
      </a>
    </div>
  );
}

export default function Estudos() {
  usePageSEO({
    title: "Estudos Científicos — Sylocimol e Água Magnetizada",
    description: "Laudos técnicos, estudos da APTA, publicações internacionais e reconhecimentos que comprovam a eficácia da tecnologia Sylocimol e Top H+.",
    canonical: "/estudos",
    keywords: "sylocimol estudos, água magnetizada ciência, sylocimol comprovação, sylocimol ANVISA, laudos sylocimol",
  });

  const [filtroAtivo, setFiltroAtivo] = useState<"todas" | TipoEstudo>("todas");
  const [apenasDest, setApenasDest] = useState(false);

  const filtered = estudos.filter((e) => {
    const matchTipo = filtroAtivo === "todas" || e.tipo === filtroAtivo;
    const matchDest = !apenasDest || e.destaque;
    return matchTipo && matchDest;
  });

  const destaques = estudos.filter((e) => e.destaque);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium rounded-full px-4 py-2 mb-6 border border-white/10">
            <BookOpen size={16} />
            Ciência comprovada
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            20 anos de pesquisa.
            <br />
            47 estudos publicados.
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Isso não é promessa — é ciência. A Timol é a única empresa do setor
            com comprovação científica reconhecida internacionalmente.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0e5557] py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "47+", label: "Estudos publicados" },
            { num: "40+", label: "Cientistas envolvidos" },
            { num: "14 anos", label: "De pesquisa antes do lançamento" },
            { num: "1ª", label: "Empresa reconhecida internacionalmente no setor" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.num}</p>
              <p className="text-xs text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destaques */}
      {destaques.length > 0 && (
        <section className="py-14 bg-[#F3F3F1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-8">
              <Star size={18} className="fill-amber-400 text-amber-400" />
              <h2 className="text-xl font-bold text-gray-900">Estudos em destaque</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destaques.map((estudo) => (
                <EstudoCard key={estudo.id} estudo={estudo} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Todos */}
      <section className="py-14 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {filtros.map((f) => (
            <button
              key={f.value}
              onClick={() => setFiltroAtivo(f.value)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                filtroAtivo === f.value
                  ? "bg-[#167D7F] text-white border-[#167D7F]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#167D7F] hover:text-[#167D7F]"
              }`}
            >
              {f.label}
            </button>
          ))}
          <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer ml-auto">
            <input
              type="checkbox"
              checked={apenasDest}
              onChange={(e) => setApenasDest(e.target.checked)}
              className="rounded border-gray-300 accent-[#167D7F]"
            />
            Apenas destaques
          </label>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          {filtered.length} documento{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((estudo) => (
              <EstudoCard key={estudo.id} estudo={estudo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold">Nenhum resultado</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#F3F3F1] py-14 text-center px-6">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A ciência confirma. E a sua água?
          </h3>
          <p className="text-gray-500 mb-8">
            Experimente a tecnologia Timol e sinta a diferença em poucas semanas.
          </p>
          <a href="/#produtos" className="cta-button">
            Ver combos disponíveis
          </a>
        </div>
      </section>
    </div>
  );
}
