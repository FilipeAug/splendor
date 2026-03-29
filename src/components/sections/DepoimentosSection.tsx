import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

interface DepoimentosSectionProps {
  onCTAClick: () => void;
}

const testimonialVideos = [
  {
    id: "7cSFzZHcRxo",
    name: "50% de melhora nas dores musculares no primeiro mês!",
    quote:
      "Sofria muito com a recuperação muscular após exercícios e com cólicas menstruais. Em um mês, minhas dores musculares já melhoraram 50% e neste ciclo não senti cólica alguma.",
    condition: "Dores e cólica",
  },
  {
    id: "BFN47xVGUvE",
    name: "As minhas dores da fibromialgia simplesmente zeraram!",
    quote:
      "Eu convivia com ansiedade que evoluiu para crises de pânico, além das dores da fibromialgia que me paralisavam. Minhas dores zeraram, ganhei mais disposição e voltei a me exercitar.",
    condition: "Fibromialgia",
  },
  {
    id: "GWAY0few6eg",
    name: "Abandonei o café e já sinto a diferença nas roupas!",
    quote:
      "Fazia muito tempo que eu não dormia bem. Minha disposição melhorou absurdamente! Voltei a ter um sono reparador, sinto a pele e o cabelo melhores.",
    condition: "Disposição e sono",
  },
  {
    id: "hqNBs_Mp6Ic",
    name: "Sofria com a psoríase há mais de 5 anos, veja o resultado!",
    quote:
      "Em 108 dias tive um resultado surpreendente. A psoríase que me incomodava há mais de 5 anos praticamente desapareceu.",
    condition: "Psoríase",
  },
];

export function DepoimentosSection({ onCTAClick }: DepoimentosSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonialVideos.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length
    );

  const getVisibleVideos = () => {
    const videos = [];
    for (let i = 0; i < Math.min(3, testimonialVideos.length); i++) {
      const index = (currentIndex + i) % testimonialVideos.length;
      videos.push({ ...testimonialVideos[index], index });
    }
    return videos;
  };

  const current = testimonialVideos[currentIndex];

  return (
    <section className="py-16 md:py-28 section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-tight mb-5">
            Histórias reais,{" "}
            <span className="text-gradient">vidas transformadas</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Veja os depoimentos de pessoas que transformaram sua saúde com o
            Sylocimol e Top H+
          </p>
        </div>

        {/* Desktop — 3 videos */}
        <div className="hidden md:block">
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-medium hover:shadow-strong transition-all hover:scale-110 flex-shrink-0"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            <div className="grid grid-cols-3 gap-5 flex-1">
              {getVisibleVideos().map((video, displayIndex) => (
                <div key={`${video.index}-${displayIndex}`} className="card-elevated overflow-hidden p-0">
                  <div className="relative aspect-[9/16] bg-gray-100">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={`Depoimento — ${video.name}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {video.condition}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm leading-snug">
                      {video.name}
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      "{video.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white shadow-medium hover:shadow-strong transition-all hover:scale-110 flex-shrink-0"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile — single */}
        <div className="md:hidden">
          <div className="max-w-sm mx-auto">
            <div className="card-elevated overflow-hidden p-0">
              <div className="relative aspect-[9/16] bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${current.id}`}
                  title={`Depoimento — ${current.name}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {current.condition}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 mb-2 text-sm leading-snug">
                  {current.name}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  "{current.quote}"
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-5 px-2">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white shadow-medium"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <div className="flex gap-2">
                {testimonialVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Ver depoimento ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 rounded-full bg-white shadow-medium"
                aria-label="Próximo"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop indicators */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {testimonialVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Ver depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="text-center mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton onClick={onCTAClick} size="lg">
            QUERO TRANSFORMAR MINHA SAÚDE TAMBÉM
          </CTAButton>
          <Link
            to="/resultados"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#167D7F] hover:underline"
          >
            Ver todos os resultados
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
