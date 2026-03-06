function CompareItem({ text, side, isLast }: { text: string, side: 'left'|'right', isLast?: boolean }) {
  return (
    <div className={`p-6 text-sm border-b ${side === 'right' ? 'border-primary-orange/20 text-white font-medium' : 'border-border-subtle text-text-muted'} ${isLast ? 'border-b-0' : ''} h-32 flex items-center justify-center text-center`}>
       {text}
    </div>
  )
}

export function Comparison() {
  return (
    <section className="py-24" id="sobre">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Comparação</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
             Por que <span className="italic">somos diferentes</span> das planilhas de internet
          </h2>
          <p className="text-text-muted mt-6 text-sm">Veja a diferença entre o que os apps vendem e a abordagem individual da Mentoria.</p>
        </div>

        <div className="border border-border-subtle rounded-3xl overflow-hidden flex flex-col md:flex-row bg-surface-card text-sm">
           <div className="w-full md:w-1/2">
              <div className="bg-bg-darkest p-6 text-center border-b border-border-subtle text-text-muted font-bold tracking-widest text-xs uppercase">
                 Planilhas Prontas vs Apps
              </div>
              <div className="flex flex-col">
                 <CompareItem text="Você nunca entende os vídeos, ou pior: se lesiona." side="left" />
                 <CompareItem text="Falam só de carga, mas não entendem sua biomecânica." side="left" />
                 <CompareItem text="Treinos genéricos que só te cansam e não atraem hipertrofia." side="left" />
                 <CompareItem text="Limitam-se a entregar o PDF e deixar você se virar." side="left" />
                 <CompareItem text="Prometem resultados rápidos e milagrosos (projeto verão de 15 dias)." isLast side="left" />
              </div>
           </div>
           
           {/* The Orange Highlighted Side */}
           <div className="w-full md:w-1/2 border-l border-border-subtle bg-bg-dark relative">
              <div className="absolute inset-0 bg-primary-orange opacity-5 pointer-events-none"></div>
              <div className="bg-primary-orange p-6 text-center border-b border-primary-orange text-white font-bold tracking-widest text-xs uppercase">
                 Mentoria Anderson Fit
              </div>
              <div className="flex flex-col relative z-10">
                 <CompareItem text="Você recebe feedbacks semanais, correções de vídeo e acesso ao WhatsApp." side="right" />
                 <CompareItem text="Nós olhamos o todo: analisamos sua alimentação, sono e execução." side="right" />
                 <CompareItem text="Estratégias personalizadas para preservar sua saúde articular e esculpir músculos." side="right" />
                 <CompareItem text="Trabalhamos como parceiros: plano de ação flexível caso imprevistos aconteçam." side="right" />
                 <CompareItem text="Falamos a verdade: foco em constância de longo prazo, sem atalhos que destruam sua mente." isLast side="right" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
