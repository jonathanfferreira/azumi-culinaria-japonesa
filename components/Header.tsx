import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_ORDER_LINK, GOOMER_LINK } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { href: GOOMER_LINK, label: "Menu", external: true },
    { href: "#experience", label: "A Casa" },
    { href: "#location", label: "Local" },
  ];

  return (
    <>
      <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-azumi-red focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold">
        Pular para o conteúdo
      </a>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white ${isScrolled ? 'py-4 bg-azumi-dark/90 backdrop-blur-md shadow-lg' : 'py-8 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="group flex items-center gap-4">
            <Logo className="w-10 h-10 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform" />
            <img
              src="/logo-escrita.png"
              alt="Azumi"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto invert brightness-0 saturate-100 hidden md:block group-hover:scale-105 transition-all"
            />
          </a>

          <nav className="hidden md:flex items-center gap-12" aria-label="Menu principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-bold uppercase tracking-widest hover:line-through decoration-azumi-red decoration-2 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Reservar
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <div className="flex flex-col gap-1.5 items-end"><span className="w-8 h-[2px] bg-white"></span><span className="w-4 h-[2px] bg-white"></span></div>}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-azumi-red z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col gap-8 text-center" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-5xl font-black font-serif text-white hover:text-black transition-colors"
              onClick={handleCloseMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-mono uppercase tracking-widest text-white mt-8 border-b-2 border-white pb-2 inline-block"
            onClick={handleCloseMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Fazer Pedido
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
