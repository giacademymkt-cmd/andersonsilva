import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Pillars } from './components/sections/Pillars';
import { Comparison } from './components/sections/Comparison';
import { Authority } from './components/sections/Authority';
import { Faq } from './components/sections/Faq';
import { ApplicationForm } from './components/forms/ApplicationForm';

function App() {
  return (
    <div className="min-h-screen font-sans text-text-main pb-0 selection:bg-primary-orange selection:text-white">
      <Navbar />
      <Hero />
      <Pillars />
      <Comparison />
      <Authority />
      <Faq />
      <ApplicationForm />
      
      {/* Downsell & Footer simple */}
      <footer className="py-12 border-t border-border-subtle bg-bg-darkest text-center text-xs text-text-muted mt-20">
         <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.instagram.com/mentorfitness_andersonsilva/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange transition-colors">
               Instagram
            </a>
            <a href="https://wa.me/555182241584" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange transition-colors">
               WhatsApp
            </a>
         </div>
         <p>Anderson Fit © {new Date().getFullYear()}. Todos os direitos reservados.</p>
         <p className="mt-2">Fisiologia, Treinamento e Individualidade Biológica.</p>
      </footer>
    </div>
  );
}

export default App;
