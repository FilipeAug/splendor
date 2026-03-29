import { useState } from "react";
import { CTAButton } from "@/components/CTAButton";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

interface FAQSectionProps {
  onCTAClick: () => void;
}

const faqs = [
  {
    question: "O que é o Sylocimol? É um filtro?",
    answer:
      "Não. O Sylocimol não filtra a água, ele magnetiza. Usa um campo magnético constante para reorganizar as moléculas de água, quebrando os aglomerados (clusters) que impedem a absorção celular. Para filtrar, recomendamos usar junto com um purificador como os da Purific.",
  },
  {
    question: "E o Top H+? Preciso usar os dois juntos?",
    answer:
      "O Top H+ é um mineralizador que adiciona cálcio e magnésio à água na proporção ideal (67% e 33%). Quando usado com o Sylocimol, os minerais se transformam em hidróxidos alcalinos, 3 vezes mais fáceis de absorver do que minerais comuns. Um potencializa o outro.",
  },
  {
    question: "Precisa de refil ou manutenção?",
    answer:
      "Não. O Sylocimol não usa refil e dura 30 anos. Basta lavar uma vez por mês com esponja macia e detergente neutro. O Top H+ tem durabilidade de 3 a 7 anos.",
  },
  {
    question: "Essa tecnologia tem comprovação científica?",
    answer:
      "Sim. A Timol é a única empresa do setor com reconhecimento internacional. São 47 estudos científicos publicados, em parceria com a Universidade Estadual de Maringá (UEM) e outras instituições, apresentados em congressos médicos e revistas científicas internacionais.",
  },
  {
    question: "É um medicamento? Tem contraindicações?",
    answer:
      "Não é medicamento e não tem função terapêutica ou de cura. Tem ação natural e não interfere em nenhum tratamento médico. Pode ser usado por crianças, idosos, gestantes e animais, sem contraindicações conhecidas.",
  },
  {
    question: "Quanto tempo dura a água magnetizada?",
    answer:
      "Até 72 horas em recipiente aberto. Por tempo indeterminado em recipiente fechado ou lacrado hermeticamente.",
  },
  {
    question: "Muda o sabor da água?",
    answer:
      "Não. O Sylocimol age no nível molecular, sem alterar sabor, cor ou odor da água.",
  },
  {
    question: "Precisa de energia elétrica ou instalação?",
    answer:
      "Não precisa de nada disso. Basta colocar o Sylocimol e o Top H+ dentro do seu filtro, purificador ou jarra. Funcionam de forma totalmente natural, sem energia, sem peças móveis e sem manutenção.",
  },
];

export function FAQSection({ onCTAClick }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-tight mb-5">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Esclarecemos as principais dúvidas. Tem outras? Fale conosco!
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/30 shadow-sm"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center gap-4 text-left p-5 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 flex-1 leading-snug">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-blue-600 rotate-180" : "bg-gray-100"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-colors ${
                        isOpen ? "text-white" : "text-gray-400"
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6 text-[0.9375rem]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-20">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-10 text-center border border-blue-100/50">
            <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Ainda tem dúvidas? Vamos conversar!
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Nossos consultores estão prontos para esclarecer tudo sobre como o
              Sylocimol e Top H+ podem beneficiar sua família.
            </p>
            <CTAButton onClick={onCTAClick} size="lg">
              QUERO TIRAR MINHAS DÚVIDAS
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
