import { FlaskConical, BookOpen, GraduationCap, Globe, ExternalLink } from "lucide-react";
import cartaPrescricao from "@/assets/carta-prescricao.jpg";
import termoIdoneidade from "@/assets/termo-idoneidade.jpeg";

const stats = [
  {
    icon: FlaskConical,
    value: "47",
    label: "Estudos científicos publicados",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: GraduationCap,
    value: "40+",
    label: "Cientistas envolvidos na pesquisa",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: BookOpen,
    value: "14",
    label: "Anos de pesquisa antes do lançamento",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Globe,
    value: "20+",
    label: "Anos de mercado",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export function ProvaCientificaSection() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full px-4 py-2 mb-6">
            <FlaskConical className="h-4 w-4" />
            Comprovação científica
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-tight">
            20 anos de pesquisa. 47 estudos publicados.{" "}
            <span className="text-gradient">Isso não é promessa, é ciência.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`${stat.bg} rounded-2xl p-6 text-center transition-transform hover:scale-[1.02]`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`text-3xl md:text-4xl font-extrabold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Content + Documents side by side on desktop */}
        <div className="space-y-12">
          {/* Text */}
          <div className="max-w-3xl mx-auto space-y-5 text-gray-600 text-[1.0625rem] leading-relaxed">
            <p>
              A Timol é a{" "}
              <strong className="text-gray-900">
                única empresa do setor reconhecida internacionalmente
              </strong>{" "}
              com comprovação científica para seus produtos magnéticos.
            </p>
            <p>
              Mais de 40 cientistas das áreas de Engenharia Química, Biologia,
              Nutrição, Farmácia e Bioquímica, em parceria com a{" "}
              <strong className="text-gray-900">
                Universidade Estadual de Maringá (UEM)
              </strong>
              , continuam pesquisando e publicando resultados.
            </p>
            <p>
              Estudos comprovam benefícios como aumento da densidade mineral óssea,
              redução da viscosidade sanguínea, melhoria na oxigenação e redução de
              radicais livres.
            </p>

            <a
              href="https://scholar.google.com.br/scholar?hl=pt-BR&as_sdt=0%2C5&q=sylocimol&oq="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-2 group"
            >
              <BookOpen className="h-5 w-5" />
              Ver estudos científicos publicados
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Documents side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-elevated">
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                Dispensado de prescrição médica
              </h4>
              <img
                src={cartaPrescricao}
                alt="Carta de independência de prescrição médica"
                className="w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="card-elevated">
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                Termo de idoneidade
              </h4>
              <img
                src={termoIdoneidade}
                alt="Termo de idoneidade do produto"
                className="w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
