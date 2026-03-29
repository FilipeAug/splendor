import { CTAButton } from "@/components/CTAButton";
import { Play } from "lucide-react";

interface VideoSectionProps {
  onCTAClick: () => void;
}

const takeaways = [
  {
    num: "1",
    title: "O problema da água",
    desc: "Por que clusters moleculares impedem a hidratação celular",
    color: "bg-blue-600",
  },
  {
    num: "2",
    title: "A ciência por trás",
    desc: "Como a magnetização e mineralização atuam na molécula da água",
    color: "bg-cyan-600",
  },
  {
    num: "3",
    title: "Resultado no corpo",
    desc: "Mais absorção, mais energia, mais saúde para você e sua família",
    color: "bg-emerald-600",
  },
];

export function VideoSection({ onCTAClick }: VideoSectionProps) {
  return (
    <section className="py-16 md:py-28 section-alt">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full px-4 py-2 mb-6">
            <Play className="h-4 w-4" />
            Assista em 5 minutos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-tight mb-5">
            Entenda como{" "}
            <span className="text-gradient">isso funciona</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Veja como a tecnologia do Sylocimol e Top H+ transforma moléculas de
            água comum em água que seu corpo absorve de verdade.
          </p>
        </div>

        {/* Video */}
        <div className="relative rounded-2xl overflow-hidden shadow-strong bg-gray-900">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/SZWrsvGhwvs"
              title="Como funciona o Sylocimol e Top H+"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Takeaways */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-14">
          {takeaways.map((item) => (
            <div key={item.num} className="card-elevated text-center">
              <div
                className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-white font-bold text-sm">{item.num}</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <CTAButton onClick={onCTAClick} size="lg">
            QUERO ENTENDER MELHOR PARA MINHA FAMÍLIA
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
