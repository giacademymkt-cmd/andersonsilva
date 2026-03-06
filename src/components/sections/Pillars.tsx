import { Activity, Target, TrendingUp, Users, ArrowRight } from 'lucide-react';

function PillarCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-surface-card border border-border-subtle rounded-3xl p-8 flex flex-col items-center text-center hover:border-primary-orange/30 transition-colors">
      <div className="w-16 h-12 border border-primary-orange rounded-xl bg-primary-orange/5 flex items-center justify-center mb-6">
         <div className="text-primary-orange">{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-white mb-4 leading-tight">{title}</h3>
      <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
    </div>
  )
}

export function Pillars() {
  return (
    <section id="pilares" className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Metodologia</span>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white max-w-3xl mx-auto leading-tight">
           Os pilares da Filosofia da <br/> <span className="italic">Mentoria Anderson Fit:</span>
        </h2>
        <p className="text-text-muted mb-16 text-sm lg:text-base">
           Cada treino segue um processo testado e validado para maximizar resultados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PillarCard 
            icon={<Activity />}
            title="Visão de Saúde"
            desc="Antes de montar seu treino, mergulhamos na sua rotina: entendemos seu sono, seu tempo e seu cenário."
          />
          <PillarCard 
            icon={<Target />}
            title="Execução Inteligente"
            desc="Nada de achismo: cada decisão é guiada por uma periodização otimizada para alinhar esforço e objetivo."
          />
          <PillarCard 
            icon={<TrendingUp />}
            title="Resultado Visível"
            desc="Compromisso total com o ganho de massa, perda de gordura e mais energia no seu dia a dia."
          />
          <PillarCard 
            icon={<Users />}
            title="Parceria Estratégica"
            desc="Mais que um personal, um parceiro de rotina: proximidade, transparência e ajustes constantes semana a semana."
          />
        </div>

        <div className="mt-16 flex flex-col items-center">
           <a href="#aplicacao" className="bg-primary-orange text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary-orange-hover transition-colors flex items-center gap-3">
             QUERO TREINAR DE VERDADE <ArrowRight className="w-4 h-4" />
           </a>
           <p className="font-serif italic text-text-muted mt-6 text-sm">"Enquanto você pensa, sua barriga não diminui sozinha."</p>
        </div>
      </div>
    </section>
  );
}
