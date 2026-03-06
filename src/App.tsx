import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Pillars } from './components/sections/Pillars';
import { Comparison } from './components/sections/Comparison';
import { Faq } from './components/sections/Faq';
import { ApplicationForm } from './components/forms/ApplicationForm';

function App() {
  return (
    <div className="min-h-screen font-sans text-text-main pb-0 selection:bg-primary-orange selection:text-white">
      <Navbar />
      <Hero />
      <Pillars />
      <Comparison />
      <Faq />
      <ApplicationForm />
      
      {/* Downsell & Footer simple */}
      <footer className="py-8 border-t border-border-subtle bg-bg-darkest text-center text-xs text-text-muted mt-20">
         <p>Anderson Fit © {new Date().getFullYear()}. Todos os direitos reservados.</p>
         <p className="mt-2">Fisiologia, Treinamento e Individualidade Biológica.</p>
      </footer>
    </div>
  );
}

export default App;
