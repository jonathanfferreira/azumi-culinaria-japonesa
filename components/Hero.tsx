import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-azumi-dark text-azumi-offwhite pt-24 pb-12">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-50 mix-blend-overlay" aria-hidden="true"></div>

      <div className="absolute top-0 right-0 w-[80vh] h-[80vh] bg-azumi-red rounded-full opacity-5 blur-[120px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">

        <div className="flex justify-end mb-8 md:mb-0">
          <div className="text-right">
            <span className="block text-xs font-bold tracking-[0.3em] uppercase opacity-70 mb-2">Since 2024</span>
            <span className="block text-sm font-serif italic text-azumi-red">Joinville, SC</span>
          </div>
        </div>

        <div className="relative">
          <h1 className="font-serif font-black leading-[0.85] tracking-tightest mix-blend-difference">
            <span className="block text-[15vw] md:text-[12rem] uppercase pointer-events-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              Azumi
            </span>
            <div
              className="absolute top-[35%] md:top-1/2 right-0 md:right-[15%] w-[45vw] md:w-[350px] aspect-[3/4] overflow-hidden z-20 border-2 border-azumi-dark transition-all duration-700 ease-out"
              style={{ transform: `translateY(${offset * 0.1}px) rotate(3deg)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=800&auto=format&fit=crop"
                alt="Arte vibrante de Ramen estilo pop-art"
                fetchPriority="high"
                width={800}
                height={1067}
                className="w-full h-full object-cover scale-125"
              />
            </div>

            <span className="block text-[12vw] md:text-[8rem] text-outline-white pl-[5vw] md:pl-20 z-10 relative pointer-events-none select-none">
              Izakaya
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between mt-12 md:mt-20 gap-8 relative z-30">
          <div className="relative">
            <div className="absolute -inset-4 bg-azumi-dark/80 blur-xl md:hidden -z-10 rounded-full" aria-hidden="true"></div>
            <p className="text-lg font-light leading-relaxed text-gray-400 max-w-[60%] md:max-w-md relative z-10">
              Não é apenas comida japonesa. <br />
              É uma <span className="text-white font-bold">experiência sensorial</span> inspirada nas ruas noturnas de Aomori.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <Button as="a" href="#menu" variant="primary" className="rounded-none bg-azumi-red border-2 border-azumi-red text-white hover:bg-white hover:text-azumi-red transition-all uppercase tracking-widest text-sm py-4 px-8 shadow-lg">
              Menu / Cardápio
            </Button>
            <span className="h-[1px] w-20 bg-gray-800 hidden md:block" aria-hidden="true"></span>
            <div className="hidden md:flex flex-col items-center gap-2 text-gray-600 animate-pulse" aria-hidden="true">
              <span className="text-[10px] uppercase tracking-widest rotate-90 origin-left translate-x-3">Scroll</span>
              <ArrowDown size={16} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/3 left-0 text-[30rem] font-japanese font-black text-white/5 pointer-events-none select-none z-0 writing-vertical-rl leading-none"
        style={{ transform: `translateY(${offset * -0.2}px)` }}
        aria-hidden="true"
      >
        味
      </div>

    </section>
  );
};

export default Hero;
