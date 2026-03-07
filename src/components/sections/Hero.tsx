import { ArrowRight, Target } from 'lucide-react';

function UserPlaceholder() {
  return (
    <div className="w-full h-full bg-surface-card flex items-end justify-center relative">
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity grayscale"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-bg-darkest via-bg-darkest/40 to-transparent"></div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
      <div className="w-full lg:w-[55%] relative z-10 flex flex-col items-start text-left pt-10">
        <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
          Acompanhamento Premium Personalizado
        </span>
        
        <h1 className="text-5xl md:text-[64px] font-bold leading-[1.05] mb-8 tracking-tight text-white">
          CONSTRUA UM CORPO FORTE E SUSTENTÁVEL <br className="hidden md:block"/> <span className="text-primary-orange">SEM GENERICIDADES.</span>
        </h1>
        
        <p className="text-lg text-text-muted mb-10 max-w-xl leading-relaxed">
          Um acompanhamento individualizado que respeita sua rotina agitada e ensina seu corpo a trabalhar a seu favor. Sem dietas malucas, sem treinos intermináveis.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mb-10 text-xs font-medium border border-border-subtle rounded-xl p-2 bg-surface-card/30 backdrop-blur-sm shadow-xl">
           <div className="flex items-center gap-2 px-3">
             <span className="text-primary-orange">+500</span> Alunas ativas
           </div>
           <div className="w-px h-4 bg-border-subtle hidden sm:block"></div>
           <div className="flex items-center gap-2 px-3">
             <span className="text-primary-orange">100%</span> Foco em saúde real
           </div>
        </div>

        <a href="#aplicacao" className="bg-primary-orange text-white px-8 py-4 rounded-xl font-bold text-sm lg:text-base hover:bg-primary-orange-hover transition-colors flex items-center gap-3">
          QUERO AVALIAR MEU CASO AGORA <ArrowRight className="w-4 h-4" />
        </a>
        <a href="#metodologia" className="text-text-muted hover:text-white mt-6 text-sm flex items-center gap-2 transition-colors">
          Quero conhecer a metodologia primeiro ↓
        </a>
      </div>

      <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
        <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-border-subtle">
           {/* Dynamic background glow inside the image container */}
           <div className="absolute top-10 right-10 w-96 h-96 bg-primary-orange opacity-20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
           
           <UserPlaceholder />

           {/* Floating Achievement Widget */}
           <div className="absolute top-20 -left-10 lg:-left-20 bg-surface-card border border-border-subtle p-3 pr-6 rounded-2xl flex items-center gap-4 shadow-2xl backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-primary-orange flex items-center justify-center">
                 <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                 <p className="text-xs font-medium text-white">Nova meta atingida</p>
                 <p className="text-[10px] text-text-muted">Massa magra construída</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
