import { FlaskConical, BookOpen, Globe, Microscope, ShieldCheck } from "lucide-react";

const credenciais = [
  {
    icon: FlaskConical,
    numero: "20 anos",
    label: "de mercado",
  },
  {
    icon: BookOpen,
    numero: "47 estudos",
    label: "científicos publicados",
  },
  {
    icon: Globe,
    numero: "Única empresa",
    label: "com reconhecimento internacional",
  },
  {
    icon: Microscope,
    numero: "14 anos",
    label: "de pesquisa antes do lançamento",
  },
  {
    icon: ShieldCheck,
    numero: "Zero",
    label: "contraindicações",
  },
];

export function ProvaRapidaSection() {
  return (
    <section className="bg-[#0e5557] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {credenciais.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1 group-hover:bg-white/20 transition-colors">
                  <Icon size={20} className="text-[#3C9792]" />
                </div>
                <span className="text-white font-bold text-base leading-tight">
                  {item.numero}
                </span>
                <span className="text-white/60 text-xs leading-snug">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
