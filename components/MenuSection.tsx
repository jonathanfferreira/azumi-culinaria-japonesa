import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { menuItems, categories } from '../data/menu';
import { WHATSAPP_ITEM_LINK } from '../constants';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-azumi-gray relative min-h-screen">
      <div className="absolute left-6 md:left-1/4 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <h2 className="text-6xl md:text-9xl font-serif font-black text-white/5 uppercase absolute -left-10 top-0 select-none pointer-events-none md:sticky md:top-20 leading-none" aria-hidden="true">
            Menu
          </h2>

          <div className="ml-auto w-full md:w-2/3 pl-0 md:pl-12">
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 border-b border-white/20 pb-6 items-center" role="tablist" aria-label="Categorias do menu">
              <span className="text-xs font-bold uppercase tracking-widest text-azumi-red mr-4">Categorias</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`text-sm md:text-base font-bold uppercase tracking-wider transition-all hover:text-white ${activeCategory === cat.id ? 'text-white line-through decoration-azumi-red decoration-2' : 'text-gray-500'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-12" role="tabpanel">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={WHATSAPP_ITEM_LINK(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex flex-col md:flex-row items-baseline gap-4 border-b border-white/10 pb-8 group-hover:border-azumi-red transition-colors duration-500">

                      <div className="flex-1">
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 group-hover:pl-4 transition-all duration-300">
                          {item.name}
                          {item.featured && <span className="ml-4 text-xs align-top text-azumi-red border border-azumi-red px-2 py-0.5 rounded-full">Star</span>}
                        </h3>
                        <p className="text-gray-400 font-light max-w-md group-hover:pl-4 transition-all duration-300 delay-75">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 md:gap-12 mt-4 md:mt-0">
                        <span className="text-2xl font-mono text-gray-300 group-hover:text-white transition-colors">
                          {item.price.toFixed(0)}<span className="text-sm align-top text-gray-500">,90</span>
                        </span>
                        <ArrowUpRight className="text-azumi-red opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </a>

                  <div
                    className={`fixed top-1/2 left-0 md:left-[10%] -translate-y-1/2 w-[30vw] aspect-[3/4] z-20 pointer-events-none transition-all duration-500 ease-out hidden md:block mix-blend-lighten opacity-0 ${hoveredItem === item.id ? 'opacity-60 scale-100 rotate-6 translate-x-4' : 'scale-95 -rotate-6'
                      }`}
                    aria-hidden="true"
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={1067}
                      className="w-full h-full object-cover contrast-125"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
