import { Shield, Award, Globe, FlaskConical, HeartPulse, Zap, ChevronDown } from "lucide-react";
import sylocimolTopHImage from "@/assets/sylocimol-top-h-novo.png";

interface HeroSectionProps {
  onCTAClick: () => void;
}

const trustBadges = [
  { icon: Award, label: "20 Anos" },
  { icon: FlaskConical, label: "47 Estudos" },
  { icon: Globe, label: "Reconhecido Internacionalmente" },
  { icon: Shield, label: "Dispensado ANVISA" },
  { icon: HeartPulse, label: "Zero Contraindicações" },
];

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Copy */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full px-4 py-2 mb-6 border border-white/10">
                <FlaskConical className="h-4 w-4" />
                Validado por 47 estudos científicos
              </div>

              <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
                A água que você bebe pode estar deixando suas células com sede
                <span className="block mt-2 text-cyan-300">
                  mesmo que você tome 2 litros por dia.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                O Sylocimol + Top H+ transforma água comum em água que seu corpo
                absorve de verdade. Até 8× mais leve, mineralizada com cálcio e
                magnésio.
              </p>

              <button
                onClick={onCTAClick}
                className="cta-button pulse-glow w-full sm:w-auto"
              >
                <Zap className="h-5 w-5" />
                QUERO SABER COMO FUNCIONA
              </button>

              <p className="text-white/50 text-sm mt-4">
                Consulta gratuita e sem compromisso via WhatsApp
              </p>
            </div>

            {/* Product */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-56 sm:w-72 md:w-80 lg:w-[400px]">
                <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-[80px] scale-110" />
                <img
                  src={sylocimolTopHImage}
                  alt="Sylocimol e Top H+ — magnetizador e mineralizador de água"
                  className="relative w-full h-auto floating-animation drop-shadow-[0_20px_60px_rgba(0,180,216,0.25)]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 lg:mt-16">
            <div className="flex flex-wrap justify-center gap-3">
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-full px-4 py-2.5"
                  >
                    <Icon className="h-4 w-4 text-cyan-300 flex-shrink-0" />
                    <span className="text-white/90 text-xs sm:text-sm font-medium whitespace-nowrap">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <ChevronDown className="h-6 w-6 text-white/30 animate-bounce" />
        </div>
      </section>

      {/* Floating CTA */}
      <div className="floating-cta">
        <a href="#produtos" className="cta-button-blue">
          <Zap className="h-4 w-4" />
          VER PRODUTOS
        </a>
      </div>
    </>
  );
}
