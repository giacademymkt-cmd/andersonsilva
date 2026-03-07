import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Pillars } from './components/sections/Pillars';
import { Comparison } from './components/sections/Comparison';
import { Authority } from './components/sections/Authority';
import { Faq } from './components/sections/Faq';
import { ApplicationForm } from './components/forms/ApplicationForm';
import { Transformations } from './components/sections/Transformations';

function App() {
   return (
      <div className="min-h-screen font-sans text-text-main pb-0 selection:bg-primary-orange selection:text-white relative overflow-x-hidden">
         {/* Animated Background Elements */}
         <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-orange opacity-20 blur-[150px] rounded-full mix-blend-screen" style={{ animation: 'slow-pan 20s ease-in-out infinite alternate' }}></div>
            <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-primary-orange opacity-15 blur-[120px] rounded-full mix-blend-screen" style={{ animation: 'slow-pan 25s ease-in-out infinite alternate', animationDelay: '5s' }}></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-primary-orange opacity-20 blur-[180px] rounded-full mix-blend-screen" style={{ animation: 'slow-pan 30s ease-in-out infinite alternate', animationDelay: '10s' }}></div>
         </div>

         <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <Pillars />
            <Comparison />
            <Transformations />
            <Authority />
            <Faq />
            <ApplicationForm />

            {/* Downsell & Footer simple */}
            <footer className="py-12 border-t border-border-subtle bg-bg-darkest text-center text-xs text-text-muted mt-auto">
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
      </div>
   );
}

export default App;
