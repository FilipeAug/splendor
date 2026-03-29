import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Resultados", href: "/resultados" },
  { label: "Estudos", href: "/estudos" },
  { label: "Novidades", href: "/novidades" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#F3F3F1]/95 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#167D7F] to-[#3C9792] flex items-center justify-center">
            <Droplets size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold text-[#167D7F] tracking-tight">
            Splendor
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-[#167D7F]"
                  : "text-gray-500 hover:text-[#167D7F]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/#produtos"
            className="cta-button !min-h-0 !py-3 !px-6 !text-sm"
          >
            Comprar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-[#167D7F] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                isActive(link.href)
                  ? "text-[#167D7F]"
                  : "text-gray-600 hover:text-[#167D7F]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#produtos"
            onClick={() => setMenuOpen(false)}
            className="cta-button !min-h-0 !py-3 !text-sm text-center"
          >
            Comprar
          </a>
        </div>
      )}
    </header>
  );
}
