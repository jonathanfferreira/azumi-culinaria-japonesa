import React from 'react';
import { Tv, Soup } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-azumi-offwhite text-azumi-dark relative overflow-hidden">

      <div className="container mx-auto px-6">

        <h2 className="text-[12vw] leading-[0.8] font-black font-serif uppercase mb-20 break-words mix-blend-multiply opacity-90">
          Tradição <span className="text-azumi-red block ml-[10vw]">Pop</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-12">
            <div className="text-xl md:text-2xl font-light leading-relaxed border-l-4 border-azumi-dark pl-8">
              <p className="mb-8">
                O <strong>Azumi</strong> é um portal direto para Aomori e Gunma. Zero adaptações para "paladar brasileiro". Aqui o sabor é bruto, real e nostálgico.
              </p>
              <p>
                Comemos assistindo anime. O telão nunca desliga. É Naruto no prato e One Piece na tela.
              </p>
            </div>

            <div className="flex gap-12">
              <div>
                <Soup size={48} className="mb-4 text-azumi-red" />
                <h4 className="font-bold text-lg uppercase tracking-widest mb-2 text-outline-dark">Sabor</h4>
                <p className="text-sm text-gray-600 max-w-[150px]">Receitas de vó, executadas com precisão cirúrgica.</p>
              </div>
              <div>
                <Tv size={48} className="mb-4 text-azumi-red" />
                <h4 className="font-bold text-lg uppercase tracking-widest mb-2 text-outline-dark">Cultura</h4>
                <p className="text-sm text-gray-600 max-w-[150px]">O único Izakaya onde Otaku é VIP.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=800&auto=format&fit=crop"
                alt="Tigela de lamen autêntico com caldo rico e acompanhamentos"
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
                className="w-full contrast-125 transition-all duration-500"
              />
              <span className="absolute bottom-4 left-4 text-white bg-azumi-red px-2 py-1 text-xs font-bold uppercase tracking-widest" aria-hidden="true">Fig. 01 — Authentic</span>
            </div>

            <div className="w-[80%] self-end relative z-10 -mt-20">
              <img
                src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800"
                alt="Ambiente interno do Izakaya com iluminação quente"
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
                className="w-full contrast-125 transition-all duration-500 border-8 border-azumi-offwhite"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
