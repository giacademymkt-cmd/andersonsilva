import { motion } from 'framer-motion';

export function Authority() {
  return (
    <section id="sobre" className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-orange opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-border-subtle grayscale hover:grayscale-0 transition-all duration-700">
              <img src="/images/authority-photo.jpg" alt="Anderson Silva" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Fisiologista e Especialista</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Quem desenha o <br /> <span className="italic">seu caminho?</span>
            </h2>

            <div className="space-y-6 text-text-muted text-base mb-10 leading-relaxed">
              <p>
                Prazer, eu sou <strong className="text-white font-medium">Anderson Silva</strong>.
              </p>
              <p>
                Profissional de Educação Física especializado em Fisiologia do Exercício e Biomecânica. Decidi criar a Mentoria por uma frustração real com o mercado padrão: academias lotadas e aplicativos genéricos que tratam pessoas como números.
              </p>
              <p className="italic border-l-[3px] border-primary-orange pl-6 my-8 py-2 text-white">
                "Eu acredito que o treinamento deve se adaptar à sua vida, e não a sua vida se curvar a um método ditatorial. É com essa visão que atendo cada uma de minhas alunas."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg-darkest border border-border-subtle p-4 rounded-xl">
                <p className="font-bold text-white text-xl mb-1">+10 Anos</p>
                <p className="text-xs text-text-muted">de prática clínica</p>
              </div>
              <div className="bg-bg-darkest border border-border-subtle p-4 rounded-xl">
                <p className="font-bold text-white text-xl mb-1">Fisiologia</p>
                <p className="text-xs text-text-muted">Aplicada ao emagrecimento</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  )
}
