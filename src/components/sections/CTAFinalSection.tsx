import { CTAButton } from "@/components/CTAButton";
import { CheckCircle, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import comboMiniGarrafaImage from "@/assets/combo-mini-garrafa.webp";

// TODO: Substituir pelos links reais da InfinityPay
const LINK_COMBO_MEGA = "https://checkout.infinitepay.io/LINK_MEGA_AQUI";
const LINK_COMBO_MINI = "https://checkout.infinitepay.io/LINK_MINI_AQUI";

interface CTAFinalSectionProps {
  onCTAClick: () => void;
}

export function CTAFinalSection({ onCTAClick }: CTAFinalSectionProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
              Sua água está pronta.{" "}
              <span className="text-cyan-300">Seu corpo está esperando.</span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Você já sabe o que a água comum não faz pelo seu organismo. São 20 anos de
              mercado, 47 estudos publicados e garantia de 5 anos.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                "20 anos de mercado comprovados",
                "47 estudos científicos publicados",
                "Sem refil. Sem mensalidade. Sem segredo.",
                "Garantia de 5 anos contra defeito de fabricação",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-white/85 text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={LINK_COMBO_MEGA}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button pulse-glow flex items-center justify-center gap-2"
              >
                Quero o Combo Mega — R$ 990
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={LINK_COMBO_MINI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-white/80 hover:text-white border border-white/30 hover:border-white rounded-full px-6 py-4 transition-all text-sm"
              >
                Quero o Combo Mini — R$ 670
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8 text-white/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-sm">Garantia 5 anos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Sem refil mensal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Entrega em todo Brasil</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-[80px] scale-125" />
              <img
                src={comboMiniGarrafaImage}
                alt="Sylocimol com garrafa — água magnetizada para toda família"
                className="relative w-full max-w-sm h-auto floating-animation drop-shadow-[0_20px_60px_rgba(0,180,216,0.2)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-white/80 text-sm font-medium">
              Entrega em todo o Brasil · Certificado de autenticidade incluso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
