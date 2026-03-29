import { CTAButton } from "@/components/CTAButton";
import {
  Droplets,
  Zap,
  Activity,
  Heart,
  Leaf,
  Shield,
  Bone,
  Timer,
} from "lucide-react";

interface BeneficiosSectionProps {
  onCTAClick: () => void;
}

const benefits = [
  {
    icon: Droplets,
    title: "Hidratação celular real",
    description:
      "Moléculas menores penetram nos poros celulares com facilidade. Seu corpo para de 'correr atrás' de hidratação.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: Zap,
    title: "Mais energia e disposição",
    description:
      "A água ionizada melhora a oxigenação do sangue. Seu corpo produz mais energia com menos esforço.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Bone,
    title: "Ossos mais fortes",
    description:
      "O cálcio do Top H+ chega às células 3× mais fácil que cálcio comum. Prevenção real de osteoporose.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: Heart,
    title: "Coração mais protegido",
    description:
      "O magnésio relaxa a musculatura cardíaca e mantém o cálcio dissolvido no sangue.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
  },
  {
    icon: Activity,
    title: "Menos inflamação e dores",
    description:
      "A redução da acidez corporal é um dos principais mecanismos contra inflamações crônicas.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    icon: Timer,
    title: "Envelhecimento mais lento",
    description:
      "A redução de radicais livres retarda o envelhecimento celular e melhora a vitalidade geral.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: Shield,
    title: "Imunidade fortalecida",
    description:
      "Células bem hidratadas funcionam melhor. Sistema imunológico mais eficiente e resistente.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Leaf,
    title: "Natural e sem contraindicações",
    description:
      "Não é medicamento. Pode ser usado por toda a família, incluindo crianças e idosos.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
];

export function BeneficiosSection({ onCTAClick }: BeneficiosSectionProps) {
  return (
    <section className="py-16 md:py-28 section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-tight mb-5">
            O que muda quando sua água{" "}
            <span className="text-gradient">começa a funcionar de verdade</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className={`${benefit.color} rounded-2xl p-6 transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border border-transparent hover:border-gray-100`}
              >
                <div
                  className={`${benefit.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`${benefit.iconColor} h-6 w-6`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 md:mt-20">
          <CTAButton onClick={onCTAClick} size="lg">
            QUERO TODOS ESSES BENEFÍCIOS
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
