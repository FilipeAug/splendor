import { ShieldCheck, Clock, Star, ArrowRight, Check } from "lucide-react";

// TODO: Substituir pelos links reais da InfinityPay
const LINK_COMBO_MEGA = "https://checkout.infinitepay.io/LINK_MEGA_AQUI";
const LINK_COMBO_MINI = "https://checkout.infinitepay.io/LINK_MINI_AQUI";

const combos = [
  {
    id: "mini",
    nome: "Combo Mini",
    preco: "R$ 670",
    descricao: "Para jarras, garrafas e pequenos filtros",
    destaque: false,
    link: LINK_COMBO_MINI,
    itens: [
      "Sylocimol Mini",
      "Top H+ Mini",
      "Trata até 3 litros em 20 min",
      "Ideal para 1-2 pessoas",
    ],
    durabilidade: "Sylocimol: 30 anos · Top H+: 3 a 7 anos",
  },
  {
    id: "mega",
    nome: "Combo Mega",
    preco: "R$ 990",
    descricao: "Para purificadores, galões e grandes recipientes",
    destaque: true,
    link: LINK_COMBO_MEGA,
    itens: [
      "Sylocimol Mega",
      "Top H+ Mega",
      "Trata até 20 litros em 20 min",
      "Ideal para famílias e uso diário intenso",
    ],
    durabilidade: "Sylocimol: 30 anos · Top H+: 3 a 7 anos",
  },
];

export function ProdutosSection() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="divider mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o combo ideal para o seu consumo
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Você investe uma vez e transforma a qualidade da sua água por décadas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className={`relative rounded-3xl border-2 p-8 flex flex-col gap-6 transition-shadow ${
                combo.destaque
                  ? "border-[#167D7F] shadow-strong"
                  : "border-gray-200 shadow-soft hover:shadow-medium"
              }`}
            >
              {/* Badge "Mais recomendado" */}
              {combo.destaque && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-[#167D7F] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                    <Star size={12} fill="white" />
                    Mais recomendado
                  </span>
                </div>
              )}

              {/* Cabeçalho do card */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {combo.nome}
                </h3>
                <p className="text-sm text-gray-500">{combo.descricao}</p>
              </div>

              {/* Preço */}
              <div>
                <span className="text-4xl font-bold text-[#167D7F]">
                  {combo.preco}
                </span>
                <span className="text-gray-400 text-sm ml-2">à vista</span>
              </div>

              {/* Itens inclusos */}
              <ul className="flex flex-col gap-2">
                {combo.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-[#167D7F] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Durabilidade */}
              <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-50 rounded-xl px-4 py-3">
                <Clock size={14} className="text-[#3C9792]" />
                {combo.durabilidade}
              </div>

              {/* CTA */}
              <a
                href={combo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 font-bold rounded-full py-4 px-6 text-base transition-all duration-300 ${
                  combo.destaque
                    ? "cta-button"
                    : "border-2 border-[#167D7F] text-[#167D7F] hover:bg-[#167D7F] hover:text-white"
                }`}
              >
                Quero o {combo.nome}
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Risk reversal */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#167D7F]" />
            Garantia de 5 anos contra defeito de fabricação
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2">
            <Check size={18} className="text-[#167D7F]" />
            Certificado de autenticidade incluso
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-[#167D7F]" />
            Sem refil. Sem mensalidade.
          </div>
        </div>
      </div>
    </section>
  );
}
