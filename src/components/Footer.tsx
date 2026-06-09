import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, footerLinks } from '../data/mockData';

interface FooterProps {
  readonly className?: string;
}

export const Footer: React.FC<Readonly<FooterProps>> = ({ className = '' }) => {
  return (
    <>
      {/* Stadium crowd transition */}
      <div className="h-20 bg-gradient-to-t from-inverse-surface to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-12 opacity-10 flex items-end justify-around gap-1">
          {[8, 10, 6, 12, 9, 11, 7, 10, 8, 12, 6, 11].map((h, i) => (
            <div key={i} className="w-4 rounded-t-full bg-white" style={{ height: `${h * 4}px` }} />
          ))}
        </div>
      </div>

      <footer className={`bg-inverse-surface py-20 px-6 md:px-10 text-surface-variant soccer-pattern ${className}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src="/logo.png" alt="Logo Garra" className="h-14 w-auto shrink-0" />
            </div>
            <div className="text-3xl font-headline font-bold text-primary-fixed leading-none">
              {siteConfig.brandName} {siteConfig.brandSuffix}
            </div>
            <p className="text-base font-medium max-w-md leading-relaxed opacity-80">
              Há mais de uma década conectando as melhores marcas ao varejo do Piauí. Especialistas em distribuição inteligente e rentabilidade para o seu negócio.
            </p>
          </div>

          {/* Institutional links */}
          <div>
            <h4 className="font-bold text-inverse-on-surface mb-6 uppercase tracking-wider text-sm">Institucional</h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.institutional.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary-fixed transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-inverse-on-surface mb-6 uppercase tracking-wider text-sm">Central de Vendas</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">call</span>
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">location_on</span>
                <span>{siteConfig.location}</span>
              </li>
              <li className="pt-4">
                <div className="bg-primary/20 p-4 rounded-xl border border-primary/30">
                  <p className="text-xs font-bold text-primary-fixed leading-tight">
                    Distribuição certificada Dori para todo o estado.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-50">
          <p>© 2026 Garra Distribuidora Ltda.</p>
          <div className="flex gap-8">
            <span>Orgulho de ser Piauiense</span>
            <span>CNPJ: 03.187.161/0001-24</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
