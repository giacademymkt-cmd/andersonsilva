import { ChevronDown, ArrowRight } from 'lucide-react';

function FaqItem({ q }: { q: string }) {
  return (
    <div className="bg-transparent border border-border-subtle rounded-xl flex items-center group cursor-pointer hover:border-text-muted transition-colors divide-x divide-border-subtle text-left">
      <div className="flex-1 p-5 font-medium text-white text-sm pl-6">{q}</div>
      <div className="w-14 h-[60px] bg-primary-orange flex items-center justify-center shrink-0 group-hover:bg-primary-orange-hover transition-colors rounded-r-xl">
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="py-24 border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-16">
            <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Dúvidas</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Dúvidas frequentes respondidas com transparência
            </h2>
            <p className="text-text-muted text-sm">Profissionais genéricos são baratos. Especialistas que resolvem, não.</p>
          </div>
          
          <div className="w-full flex flex-col gap-3">
             <FaqItem q="Preciso já estar frequentando academia para entrar?" />
             <FaqItem q="Meu tempo é curto. Consigo resultado treinando 3x por semana?" />
             <FaqItem q="Qual o nível de dificuldade do Desafio de 10 dias?" />
             <FaqItem q="Eu preciso fazer dieta super restritiva junto com a Mentoria?" />
          </div>

          <div className="mt-12">
             <a href="#contato" className="bg-primary-orange text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary-orange-hover transition-colors flex items-center gap-3">
               TIRAR DÚVIDA NO WHATSAPP <ArrowRight className="w-4 h-4" />
             </a>
          </div>
      </div>
    </section>
  );
}
