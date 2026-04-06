import { usePageSEO } from "@/hooks/usePageSEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProvaRapidaSection } from "@/components/sections/ProvaRapidaSection";
import { ProblemaSection } from "@/components/sections/ProblemaSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { SolucaoSection } from "@/components/sections/SolucaoSection";
import { BeneficiosSection } from "@/components/sections/BeneficiosSection";
import { ProvaCientificaSection } from "@/components/sections/ProvaCientificaSection";
import { DepoimentosSection } from "@/components/sections/DepoimentosSection";
import { ProdutosSection } from "@/components/sections/ProdutosSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTAFinalSection } from "@/components/sections/CTAFinalSection";

const scrollToProdutos = () => {
  document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  usePageSEO({
    title: "Transforme sua Água em Fonte de Saúde",
    description: "Descubra como a tecnologia exclusiva do Sylocimol e Top H+ pode tornar sua água mais leve, hidratante e benéfica para todo o organismo. Dispensado de registro ANVISA.",
    canonical: "/",
    keywords: "sylocimol, top h+, água magnetizada, magnetizador de água, água saudável, saúde",
  });

  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <HeroSection onCTAClick={scrollToProdutos} />

      {/* 2. Prova Social Rápida — barra de credenciais */}
      <ProvaRapidaSection />

      {/* 3. Problema — Por que a água comum não hidrata suas células */}
      <ProblemaSection />

      {/* 4. Vídeo explicativo */}
      <VideoSection onCTAClick={scrollToProdutos} />

      {/* 5. Solução + Como funciona */}
      <SolucaoSection onCTAClick={scrollToProdutos} />

      {/* 6. Benefícios */}
      <BeneficiosSection onCTAClick={scrollToProdutos} />

      {/* 7. Prova científica */}
      <ProvaCientificaSection />

      {/* 8. Depoimentos em vídeo */}
      <DepoimentosSection onCTAClick={scrollToProdutos} />

      {/* 9. Produtos e Preços */}
      <ProdutosSection />

      {/* 10. FAQ / Objeções */}
      <FAQSection onCTAClick={scrollToProdutos} />

      {/* 11. CTA Final */}
      <CTAFinalSection onCTAClick={scrollToProdutos} />
    </main>
  );
};

export default Index;
