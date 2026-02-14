import React from 'react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';
import {
  WHATSAPP_NUMBER,
  GOOMER_LINK,
  IFOOD_LINK,
  INSTAGRAM_LINK,
  INSTAGRAM_HANDLE,
  GOOGLE_MAPS_LINK,
  CONTACT,
} from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-azumi-dark text-white pt-24 pb-8 border-t border-gray-900 scroll-mt-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] text-[25vw] font-black font-japanese text-gray-900 pointer-events-none select-none opacity-50 z-0 leading-none" aria-hidden="true">
        安曇
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">

          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-8">
              <Logo className="w-16 h-16 text-3xl text-white border-white" />
              <img
                src="/logo-escrita.png"
                alt="Azumi"
                width={144}
                height={48}
                className="h-12 w-auto invert brightness-0 saturate-100"
              />
            </div>
            <p className="text-2xl font-light leading-snug text-gray-400">
              {CONTACT.address.street} <br />
              {CONTACT.address.neighborhood}, {CONTACT.address.city} - {CONTACT.address.state}
            </p>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-azumi-red font-bold uppercase tracking-widest border-b border-azumi-red pb-1 hover:text-white hover:border-white transition-all"
            >
              Ver no Mapa
            </a>
            <div className="flex gap-4 mt-6">
              <a
                href={GOOMER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-widest border border-azumi-red text-azumi-red px-4 py-2 hover:bg-azumi-red hover:text-white transition-all"
              >
                Cardápio Digital
              </a>
              <a
                href={IFOOD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-widest border border-gray-700 text-gray-400 px-4 py-2 hover:border-red-600 hover:text-red-500 transition-all"
              >
                iFood
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-right items-end">
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Reservas & Delivery</span>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-3xl md:text-5xl font-mono font-bold hover:text-azumi-red transition-colors">
                {CONTACT.phone}
              </a>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Social</span>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-end text-xl hover:text-azumi-red transition-colors group"
                aria-label="Instagram da Azumi"
              >
                {INSTAGRAM_HANDLE} <Instagram className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-800 pt-8">
          <div className="text-[10px] uppercase tracking-widest text-gray-600 space-y-2">
            <p>&copy; {new Date().getFullYear()} Azumi Izakaya.</p>
            <p>Feito por Xpace Digital.</p>
          </div>

          <div className="flex gap-12 mt-8 md:mt-0">
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-widest text-gray-600">{CONTACT.hours.weekday.days}</span>
              <span className="block font-bold">{CONTACT.hours.weekday.time}</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-widest text-gray-600">{CONTACT.hours.weekend.days}</span>
              <span className="block font-bold">{CONTACT.hours.weekend.time}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
