import { Dumbbell } from 'lucide-react';

export function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <header className="bg-bg-darkest/80 backdrop-blur-xl border border-border-subtle rounded-3xl h-16 flex items-center justify-between px-2 pr-2 pl-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-primary-orange flex items-center justify-center">
            <Dumbbell className="text-white w-4 h-4" />
          </div>
          <span className="text-xl font-medium tracking-wide text-white">AndersonFit</span>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#pilares" className="hover:text-white transition-colors">Pilares</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#faq" className="hover:text-white transition-colors">F.A.Q</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </nav>

        <a 
          href="https://wa.me/555182241584?text=Ol%C3%A1%2C%20Anderson!%20Vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20a%20Mentoria."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block bg-transparent border border-border-subtle text-white px-6 py-2 rounded-2xl hover:bg-surface-hover transition-colors text-sm"
        >
          Falar no WhatsApp
        </a>
      </header>
    </div>
  );
}
