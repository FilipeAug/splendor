import { CTAButton } from "@/components/CTAButton";
import { ArrowRight } from "lucide-react";
import sylocimolMiniImage from "@/assets/sylocimol-mini.webp";
import topHImage from "@/assets/top-h.webp";
import aguaMagnetizadaGif from "@/assets/agua-magnetizada.gif";

interface SolucaoSectionProps {
  onCTAClick: () => void;
}

const steps = [
  {
    number: 1,
    title: "Posicione o Sylocimol na água",
    description:
      "Coloque dentro do purificador, garrafa ou qualquer recipiente. Em 20 minutos, o campo magnético reorganiza as moléculas, quebrando os clusters.",
    detail: "Dura 30 anos. Sem refil. Sem manutenção.",
  },
  {
    number: 2,
    title: "Adicione o Top H+",
    description:
      "As pedras de dolomita liberam cálcio e magnésio na proporção ideal (67% e 33%). Com o Sylocimol, os minerais viram hidróxidos alcalinos, 3× mais absorvíveis.",
    detail: "Dura de 3 a 7 anos.",
  },
  {
    number: 3,
    title: "Beba seguindo o protocolo",
    description:
      "600 ml em jejum pela manhã. Depois, a quantidade ideal para seu peso (peso × 35 = ml/dia). Evite refrigerantes e bebidas ácidas.",
    detail: "Simples. Sem mudanças drásticas na rotina.",
  },
];

export function SolucaoSection({ onCTAClick }: SolucaoSectionProps) {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-tight mb-5">
            Conheça o <span className="text-blue-700">Sylocimol</span> +{" "}
            <span className="text-cyan-600">Top H+</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A combinação que transforma sua água em hidratação de verdade
          </p>
        </div>

        {/* Products side by side */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {/* Sylocimol */}
          <div className="card-elevated group">
            <div className="flex flex-col items-center text-center">
              <img
                src={sylocimolMiniImage}
                alt="Sylocimol, magnetizador de água"
                className="w-40 md:w-52 h-auto mb-6 drop-shadow-md group-hover:scale-105 transition-transform"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Sylocimol</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">
                Magnetizador de água
              </p>
              <p className="text-gray-500 leading-relaxed">
                Usa um campo magnético constante para realizar a hidrólise da água,
                quebrando aglomerados moleculares e tornando-a{" "}
                <strong className="text-gray-900">até 8× mais leve</strong>.
                Suas células absorvem a água com muito mais facilidade.
              </p>
            </div>
          </div>

          {/* Top H+ */}
          <div className="card-elevated group">
            <div className="flex flex-col items-center text-center">
              <img
                src={topHImage}
                alt="Top H+, mineralizador de água"
                className="w-40 md:w-52 h-auto mb-6 drop-shadow-md group-hover:scale-105 transition-transform"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Top H+</h3>
              <p className="text-sm font-semibold text-cyan-600 mb-4 tracking-wide uppercase">
                Mineralizador de água
              </p>
              <p className="text-gray-500 leading-relaxed">
                Adiciona{" "}
                <strong className="text-gray-900">
                  cálcio e magnésio na proporção ideal
                </strong>
                , 67% e 33%, usando pedras naturais de dolomita. Enriquece a água
                com os minerais que o corpo brasileiro mais precisa.
              </p>
            </div>
          </div>
        </div>

        {/* Why together */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl p-8 md:p-12 mb-16 md:mb-24 border border-blue-100/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Por que os dois juntos?
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Quando você adiciona minerais à água sem magnetizá-la, a água fica mais
                  "pesada" e ainda mais difícil de absorver.
                </p>
                <p>
                  O Sylocimol resolve isso: ao ionizar a água, ele transforma os minerais
                  do Top H+ em{" "}
                  <strong className="text-gray-900">
                    hidróxidos alcalinos, 3× mais fáceis de ser absorvidos pelas células
                  </strong>{" "}
                  do que minerais comuns.
                </p>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-blue-100 mt-4">
                  <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="font-semibold text-gray-900">
                    Um sem o outro funciona. Os dois juntos, funcionam completamente.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-medium">
                <div className="gif-container mx-auto">
                  <img
                    src={aguaMagnetizadaGif}
                    alt="Água magnetizada, moléculas reorganizadas"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-sm text-gray-400 text-center mt-4 font-medium">
                  Água magnetizada: moléculas livres e absorvíveis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-14">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Como usar em 3 passos
          </h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="card-elevated text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md">
                  <span className="text-white font-extrabold text-xl">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-500 leading-relaxed mb-5 text-[0.9375rem]">
                  {step.description}
                </p>
                <span className="inline-block text-sm font-semibold text-blue-700 bg-blue-50 px-4 py-2 rounded-lg">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton onClick={onCTAClick} size="lg">
            QUERO ESSA TECNOLOGIA NA MINHA CASA
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
