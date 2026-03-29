import { AlertTriangle, Droplets } from "lucide-react";
import aguaClusterGif from "@/assets/agua-cluster.gif";

const sinaisAlerta = [
  "Cansaço persistente mesmo dormindo bem",
  "Sensação de corpo pesado ou 'enferrujado'",
  "Dores musculares sem causa clara",
  "Dificuldade de concentração ao longo do dia",
  "Ossos ou articulações fragilizadas",
  "Sensação de sede mesmo depois de beber água",
];

export function ProblemaSection() {
  return (
    <section className="py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="h-4 w-4" />
            Você precisa saber disso
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-tight mb-6">
            Por que você pode estar bebendo água e{" "}
            <span className="text-gradient">ainda assim estar desidratado?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Copy */}
          <div className="space-y-5 text-gray-600 text-[1.0625rem] leading-relaxed">
            <p>
              A água que sai da torneira, mesmo filtrada, passou por um processo que a
              deixa <strong className="text-gray-900">"pesada"</strong>.
            </p>
            <p>
              Tratamentos com cloro, armazenamento em caixas d'água, encanamentos e
              falta de movimento fazem com que as moléculas se agrupem em grandes
              aglomerados chamados{" "}
              <strong className="text-gray-900">clusters</strong>.
            </p>

            {/* Callout */}
            <div className="relative bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
              <Droplets className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
              <p className="text-blue-900 font-semibold text-lg leading-snug pr-8">
                Esses aglomerados são grandes demais para entrar nos poros das membranas
                celulares. Você bebe água, mas suas células absorvem uma fração do que deveriam.
              </p>
            </div>

            <p>
              Um estudo internacional com 256 amostras confirmou que{" "}
              <strong className="text-gray-900">
                a água brasileira é naturalmente pobre em cálcio e magnésio
              </strong>
              , os dois minerais mais importantes para ossos, músculos e coração.
            </p>
          </div>

          {/* Visual side */}
          <div className="space-y-6">
            {/* Cluster GIF — maior no mobile */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-3xl p-5 sm:p-8 flex flex-col items-center">
              <div className="w-full max-w-[320px] sm:max-w-none mx-auto aspect-square sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl flex items-center justify-center shadow-md mb-4">
                <img
                  src={aguaClusterGif}
                  alt="Moléculas de água agrupadas em clusters — dificultam absorção celular"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 text-center font-medium">
                Moléculas agrupadas (clusters) que não passam pela membrana celular
              </p>
            </div>

            {/* Warning signs */}
            <div className="card-elevated">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </span>
                Você reconhece algum desses sinais?
              </h3>
              <ul className="space-y-3.5">
                {sinaisAlerta.map((sinal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">{sinal}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-amber-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-amber-800">
                  Esses podem ser sinais de que sua água não está chegando onde precisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
