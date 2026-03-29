export type TipoEstudo = "laudo" | "estudo" | "reconhecimento" | "folder";

export interface Estudo {
  id: string;
  titulo: string;
  tipo: TipoEstudo;
  arquivo: string;
  descricao: string;
  instituicao?: string;
  ano?: number;
  destaque?: boolean;
}

export const estudos: Estudo[] = [
  {
    id: "1",
    titulo: "Estudo APTA — Propriedades da Água Magnetizada",
    tipo: "estudo",
    arquivo: "/estudos/Estudo APTA 1.pdf",
    descricao:
      "Primeiro estudo da APTA investigando as propriedades físico-químicas da água tratada com campo magnético.",
    instituicao: "APTA",
    destaque: true,
  },
  {
    id: "2",
    titulo: "Estudo APTA — Redução de Gordura e Sódio no Sangue",
    tipo: "estudo",
    arquivo: "/estudos/Estudo da APTA - Redução de gordura e sódio no sangue.pdf",
    descricao:
      "Estudo que demonstra a redução de gorduras e sódio no sangue com o uso regular da água magnetizada.",
    instituicao: "APTA",
    destaque: true,
  },
  {
    id: "3",
    titulo: "Estudo APTA 2 — Continuação da Pesquisa",
    tipo: "estudo",
    arquivo: "/estudos/Estudo APTA 2.pdf",
    descricao:
      "Segundo estudo da APTA ampliando os resultados sobre os efeitos da água magnetizada no organismo.",
    instituicao: "APTA",
  },
  {
    id: "4",
    titulo: "Estudo — Água Magnetizada na Agricultura",
    tipo: "estudo",
    arquivo: "/estudos/ESTUDO Agua magnetizada na agricultura.pdf",
    descricao:
      "Pesquisa sobre a aplicação da água magnetizada na agricultura, com resultados de produtividade e qualidade.",
  },
  {
    id: "5",
    titulo: "Estudo de Osteoporose publicado nos EUA — Dr. Geraldo Balieiro",
    tipo: "estudo",
    arquivo: "/estudos/Estudo Osteoporose publicado nos EUA - Dr. Geraldo Balieiro.pdf",
    descricao:
      "Pesquisa publicada nos Estados Unidos sobre os efeitos da mineralização da água na prevenção da osteoporose.",
    instituicao: "Dr. Geraldo Balieiro",
    destaque: true,
  },
  {
    id: "6",
    titulo: "Journal of Clinical Densitometry",
    tipo: "estudo",
    arquivo: "/estudos/Journal of Clinical Densitometry.pdf",
    descricao:
      "Publicação científica internacional sobre densidade mineral óssea e o impacto dos minerais da água.",
    destaque: true,
  },
  {
    id: "7",
    titulo: "Publicação P&T — Farmácia e Terapêutica",
    tipo: "estudo",
    arquivo: "/estudos/Publicação P&T.pdf",
    descricao:
      "Artigo publicado na revista Pharmacy & Therapeutics sobre os benefícios da água mineralizada e magnetizada.",
  },
  {
    id: "8",
    titulo: "Coletânea TIMOL — Estudos e Resultados",
    tipo: "estudo",
    arquivo: "/estudos/Coletânea TIMOL.pdf",
    descricao:
      "Compilação de estudos e resultados realizados com a tecnologia Timol ao longo dos anos de pesquisa.",
    instituicao: "Timol",
    destaque: true,
  },
  {
    id: "9",
    titulo: "Zootec — Gasometria",
    tipo: "estudo",
    arquivo: "/estudos/Zootec Gasometria.pdf",
    descricao:
      "Estudo de gasometria em animais demonstrando os efeitos da água magnetizada na oxigenação sanguínea.",
  },
  {
    id: "10",
    titulo: "Laudo Falcão Bauer — Análise do Sylocimol",
    tipo: "laudo",
    arquivo: "/estudos/Laudo Hiper Miner - Falcao Bauer.pdf",
    descricao:
      "Laudo técnico do laboratório Falcão Bauer certificando a qualidade e composição do produto Sylocimol.",
    instituicao: "Falcão Bauer",
    destaque: true,
  },
  {
    id: "11",
    titulo: "Laudo Laboratório Falcão Bauer",
    tipo: "laudo",
    arquivo: "/estudos/Laudo laboratório Falcão Bauer.jpeg",
    descricao:
      "Laudo de análise laboratorial emitido pela Falcão Bauer atestando a composição e segurança do produto.",
    instituicao: "Falcão Bauer",
  },
  {
    id: "12",
    titulo: "Termo de Idoneidade",
    tipo: "reconhecimento",
    arquivo: "/estudos/Termo de idoneidade - corrigido.jpeg",
    descricao:
      "Documento oficial atestando a idoneidade e conformidade da tecnologia Timol.",
    destaque: true,
  },
  {
    id: "13",
    titulo: "Banner Idoneidade Timol",
    tipo: "reconhecimento",
    arquivo: "/estudos/Banner Idoneidade Timol - Final.jpg",
    descricao: "Certificado de idoneidade da Timol exibido em formato visual.",
    instituicao: "Timol",
  },
  {
    id: "14",
    titulo: "Reconhecimento ONU",
    tipo: "reconhecimento",
    arquivo: "/estudos/Banner ONU.jpg",
    descricao:
      "Reconhecimento e menção honrosa da tecnologia Timol em esfera internacional.",
    destaque: true,
  },
  {
    id: "15",
    titulo: "Reconhecimento ONU 2",
    tipo: "reconhecimento",
    arquivo: "/estudos/Banner ONU 2.jpg",
    descricao:
      "Segundo documento de reconhecimento internacional da tecnologia Timol.",
  },
  {
    id: "16",
    titulo: "Banner Ministério da Saúde",
    tipo: "reconhecimento",
    arquivo: "/estudos/Banner Ministerio da saude.jpg",
    descricao:
      "Reconhecimento do Ministério da Saúde relacionado ao uso e segurança da água mineralizada.",
  },
  {
    id: "17",
    titulo: "Moção de Aplausos",
    tipo: "reconhecimento",
    arquivo: "/estudos/Moção de aplausos.jpg",
    descricao:
      "Documento de reconhecimento e homenagem recebido pela Timol por suas contribuições à saúde.",
  },
  {
    id: "18",
    titulo: "Carta — Independe de Prescrição Médica",
    tipo: "reconhecimento",
    arquivo: "/estudos/carta independe prescrição médica.jpg",
    descricao:
      "Carta oficial atestando que o produto não requer prescrição médica para uso.",
  },
  {
    id: "19",
    titulo: "Falcão Bauer — Slides Técnicos",
    tipo: "laudo",
    arquivo: "/estudos/Falcão Bauer - Slide (1).pdf",
    descricao:
      "Apresentação técnica do laboratório Falcão Bauer sobre análises e resultados dos produtos Timol.",
    instituicao: "Falcão Bauer",
  },
  {
    id: "20",
    titulo: "Folder Maior — Magnoterapia e Curvas",
    tipo: "folder",
    arquivo: "/estudos/Folder Maior - Magnoterapia - Curvas.pdf",
    descricao:
      "Material educativo completo sobre magnoterapia, curvas de eficácia e uso da tecnologia Timol.",
  },
  {
    id: "21",
    titulo: "Folder Osteoporose",
    tipo: "folder",
    arquivo: "/estudos/Folder Osteoporose.pdf",
    descricao:
      "Material informativo sobre a relação entre a água mineralizada e a prevenção da osteoporose.",
  },
  {
    id: "22",
    titulo: "Folder Osteoporose — Versão em Espanhol",
    tipo: "folder",
    arquivo: "/estudos/Print Folder Osteoporose  - Versão em Espanhol.jpg",
    descricao:
      "Versão em espanhol do folder sobre osteoporose, para distribuição em países de língua espanhola.",
  },
  {
    id: "23",
    titulo: "Tabela Osteoporose",
    tipo: "estudo",
    arquivo: "/estudos/Tabela-osteoporose.jpg",
    descricao:
      "Tabela comparativa com dados sobre osteoporose e a influência dos minerais da água.",
  },
  {
    id: "24",
    titulo: "Livro San Diego — Pesquisa Internacional",
    tipo: "estudo",
    arquivo: "/estudos/Livro San Diego.pdf",
    descricao:
      "Publicação de pesquisa apresentada em San Diego sobre os efeitos da água magnetizada e mineralizada na saúde humana.",
    destaque: true,
  },
];

export const tipoLabels: Record<TipoEstudo, string> = {
  laudo: "Laudo Técnico",
  estudo: "Estudo Científico",
  reconhecimento: "Reconhecimento",
  folder: "Material Informativo",
};

export const tipoColors: Record<TipoEstudo, string> = {
  laudo: "bg-blue-50 text-blue-700",
  estudo: "bg-teal-50 text-teal-700",
  reconhecimento: "bg-amber-50 text-amber-700",
  folder: "bg-gray-50 text-gray-700",
};
