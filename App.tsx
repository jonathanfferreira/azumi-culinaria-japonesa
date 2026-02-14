import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { WHATSAPP_ORDER_LINK } from './constants';

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-azumi-dark min-h-screen text-gray-100 selection:bg-azumi-red selection:text-white">
        <Header />
        <main>
          <Hero />
          <MenuSection />
          <ExperienceSection />
          <TestimonialsSection />
        </main>
        <Footer />

        <a
          href={WHATSAPP_ORDER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-900/40 transition-all duration-300 hover:scale-110 md:hidden flex items-center justify-center animate-bounce-slow"
          aria-label="Pedir no WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>
    </ErrorBoundary>
  );
}

export default App;
