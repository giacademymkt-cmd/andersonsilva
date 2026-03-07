import { ChevronDown, ArrowRight } from 'lucide-react';

function FaqItem({ q, a }: { q: string, a: string }) {
  return (
    <details className="group bg-transparent border border-border-subtle rounded-xl cursor-pointer hover:border-text-muted transition-colors text-left [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center divide-x divide-border-subtle list-none">
        <div className="flex-1 p-5 font-medium text-white text-sm pl-6">{q}</div>
        <div className="w-14 h-[60px] bg-primary-orange flex items-center justify-center shrink-0 group-hover:bg-primary-orange-hover transition-colors rounded-r-xl">
          <ChevronDown className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform" />
        </div>
      </summary>
      <div className="p-5 pl-6 pt-0 text-text-muted text-sm border-t border-border-subtle/50 mt-2 pb-6">
        {a}
      </div>
    </details>
  )
}

export function Faq() {
  return (
    <section id="faq" className="py-24 border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-16">
            <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Dúvidas Frequentes</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Transparência total
            </h2>
            <p className="text-text-muted text-sm">Tire todas as suas dúvidas sobre o funcionamento da Mentoria.</p>
          </div>
          
          <div className="w-full flex flex-col gap-3">
             <FaqItem 
                q="A Mentoria é só para quem já treina pesado?" 
                a="Não. Ajustamos a rotina independentemente de você ser completamente iniciante ou já treinar há anos. O objetivo é a sua progressão estruturada, respeitando sua fase." 
              />
             <FaqItem 
                q="Tenho pouco tempo, consigo resultado treinando 3x na semana?" 
                a="Com certeza. Menos é mais quando o treino é executado com a intensidade e a escolha de exercícios corretas para sua fase. Eu ajustarei o volume exatamente para os dias que você tem." 
             />
             <FaqItem 
                q="Eu preciso seguir dieta muito restrita?" 
                a="Nós trabalhamos em conjunto com seus hábitos. Não sou nutricionista e não prescrevo dietas, mas educo sobre como aliar a alimentação ao treinamento de forma fisiologicamente realista." 
             />
             <FaqItem 
                q="Como funciona a avaliação dos vídeos de correção?" 
                a="Você grava a execução dos exercícios principais pelo celular durante o treino, me envia no WhatsApp, e eu analiso seus ângulos apontando exatamente o que ajustar na biomecânica." 
             />
          </div>

          <div className="mt-12">
             <a href="#aplicacao" className="bg-primary-orange text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary-orange-hover transition-colors flex items-center gap-3">
               PREENCHER APLICAÇÃO AGORA <ArrowRight className="w-4 h-4" />
             </a>
          </div>
      </div>
    </section>
  );
}
