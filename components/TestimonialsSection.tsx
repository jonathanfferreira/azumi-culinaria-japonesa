import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Rhuana Carolina",
    role: "Local Guide",
    content: "Culinária japonesa sem ser o sushi básico. Aqui temos lámen, carê, guioza... Sabor muito rico e delicioso!",
  },
  {
    id: 2,
    name: "Tomohiro Hayasaki",
    role: "Cliente",
    content: "Comida original e excelente! Se vc quiser fazer imersão em culinária japonesa tradicional, esse é o lugar certo.",
  },
  {
    id: 3,
    name: "Isabela Martins",
    role: "Local Guide",
    content: "Quando eu fui, estava passando Naruto no telão. O local é bem aconchegante e cheio de referências de anime.",
  },
  {
    id: 4,
    name: "Kaue Cano",
    role: "Local Guide",
    content: "The best authentic Japanese food in town, feels like your aunt’s place - I love it.",
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-azumi-red text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] mb-12 border-b border-white/30 pb-4">Veredito Google (4.8/5)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col justify-between h-full border-l border-white/20 pl-6 hover:border-white transition-colors duration-300">
              <p className="text-lg md:text-xl font-serif font-bold leading-tight mb-6">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider">{t.name}</h4>
                  <span className="text-[10px] opacity-70 uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;