import { motion } from 'framer-motion';

function CompareItem({ text, side, isLast }: { text: string, side: 'left' | 'right', isLast?: boolean }) {
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
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
            >
               <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Comparação Detalhada</span>
               <h2 className="text-3xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
                  Por que <span className="italic">somos diferentes</span> das planilhas de internet?
               </h2>
               <p className="text-text-muted mt-6 text-sm">O seu corpo não é uma máquina de suar. É um sistema fisiológico inteligente.</p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="border border-border-subtle rounded-3xl overflow-hidden flex flex-col md:flex-row bg-surface-card text-sm"
            >
               <div className="w-full md:w-1/2">
                  <div className="bg-bg-darkest p-6 text-center border-b border-border-subtle text-text-muted font-bold tracking-widest text-xs uppercase">
                     Apps Genéricos & Planilhas
                  </div>
                  <div className="flex flex-col">
                     <CompareItem text="Você nunca entende os vídeos, não sabe se a postura está certa, ou pior: se lesiona silenciosamente." side="left" />
                     <CompareItem text="Falam apenas sobre 'aumentar a carga', mas ignoram a sua biomecânica e conforto articular." side="left" />
                     <CompareItem text="Prometem resultados mágicos em 15 dias (projeto verão que destrói a saúde mental)." side="left" />
                     <CompareItem text="Limitam-se a te mandar um PDF e largar você à própria sorte na academia." isLast side="left" />
                  </div>
               </div>

               {/* The Orange Highlighted Side */}
               <div className="w-full md:w-1/2 border-l border-border-subtle bg-bg-dark relative">
                  <div className="absolute inset-0 bg-primary-orange opacity-5 pointer-events-none"></div>
                  <div className="bg-primary-orange p-6 text-center border-b border-primary-orange text-white font-bold tracking-widest text-xs uppercase shadow-[0_4px_20px_rgba(255,77,0,0.3)] z-10 relative">
                     Mentoria Anderson Fit
                  </div>
                  <div className="flex flex-col relative z-10">
                     <CompareItem text="Você recebe correções de vídeo detalhadas, garantindo segurança e recrutamento máximo da musculatura." side="right" />
                     <CompareItem text="Nós olhamos o todo: se você dormiu mal, adaptamos a carga para proteger seu sistema nervoso." side="right" />
                     <CompareItem text="Falamos a verdade: focamos na constância sustentável. O resultado é efeito colateral de um corpo saudável." side="right" />
                     <CompareItem text="WhatsApp aberto para tirar dúvidas na hora do treino, como se eu estivesse ao seu lado." isLast side="right" />
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
