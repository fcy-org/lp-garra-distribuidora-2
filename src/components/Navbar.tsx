import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, navLinks } from '../data/mockData';
import logoGarra from '../images/Logo garra (sem fundo).png';

interface NavbarProps {
  readonly className?: string;
}

export const Navbar: React.FC<Readonly<NavbarProps>> = ({ className = '' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`fixed top-0 z-50 w-full bg-primary/95 backdrop-blur-md border-b border-primary-container shadow-lg ${className}`}>
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 md:px-10 h-20">
        <Link to="/" className="flex items-center gap-3 text-2xl font-headline font-bold transition-transform hover:scale-105 active:scale-95">
          <img src={logoGarra} alt="Logo Garra" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-bold hover:bg-secondary-fixed transition-all active:scale-95 shadow-lg"
          >
            Receber Catálogo
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-primary/98 backdrop-blur-lg border-b border-primary-container shadow-2xl md:hidden animate-fade-in-up">
          <div className="flex flex-col p-6 gap-4 max-w-7xl mx-auto px-6 md:px-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-white/90 hover:text-white py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-bold text-center mt-2 shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              Receber Catálogo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
