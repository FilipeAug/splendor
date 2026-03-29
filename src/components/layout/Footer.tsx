import { Link } from "react-router-dom";
import { Droplets, Mail, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0e5557] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Droplets size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Splendor</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Tecnologia magnética Timol para transformar sua água em hidratação
              de verdade.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:contato@splendor.com.br"
                aria-label="E-mail"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-1">
              Navegação
            </p>
            {[
              { label: "Início", href: "/" },
              { label: "Depoimentos", href: "/depoimentos" },
              { label: "Estudos Científicos", href: "/estudos" },
              { label: "Blog / Novidades", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Produto */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-1">
              Produtos
            </p>
            <a
              href="/#produtos"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Combo Mini — R$ 670
            </a>
            <a
              href="/#produtos"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Combo Mega — R$ 990
            </a>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/50 leading-relaxed">
                Garantia de 5 anos contra defeito de fabricação. Sem refil. Sem
                mensalidade.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Splendor / Timol. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Sylocimol + Top H+ — Tecnologia Timol
          </p>
        </div>
      </div>
    </footer>
  );
}
