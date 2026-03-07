import { Activity, Target, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="metodologia" className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">A Mentoria Anderson Fit</span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white max-w-3xl mx-auto leading-tight">
            Os pilares da nossa <br /> <span className="italic">Filosofia de Resultado:</span>
          </h2>
          <p className="text-text-muted mb-16 text-sm lg:text-base max-w-2xl mx-auto">
            Cada planejamento segue um processo testado e validado para maximizar resultados e garantir aderência à sua rotina real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PillarCard
            icon={<Activity />}
            title="Visão de Vida e Saúde"
            desc="Antes de montar seu treino, mergulhamos na sua rotina. Entendemos seu sono, seu estresse, seu tempo real e histórico."
          />
          <PillarCard
            icon={<Target />}
            title="Execução Inteligente"
            desc="Nada de achismo. Cada semana é estrategicamente desenhada para gerar progressão, variando volume e intensidade."
          />
          <PillarCard
            icon={<TrendingUp />}
            title="Autonomia e Educação"
            desc="Você não vai apenas executar, vai entender por que está executando, tornando-se independente e dona do próprio corpo."
          />
          <PillarCard
            icon={<Users />}
            title="Parceria Estratégica"
            desc="Mais que um personal, um parceiro de rotina. Proximidade, transparência e ajustes baseados em feedbacks por áudio e vídeo."
          />
        </div>

        {/* Bridge/Belief Section - The 30+ problem */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-left grid lg:grid-cols-2 gap-12 bg-surface-card border border-border-subtle rounded-3xl p-10 lg:p-16"
        >
          <div>
            <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">A VERDADE SOBRE A ESTAGNAÇÃO</span>
            <h3 className="text-3xl font-bold text-white mb-6">Por que tudo o que você tentou até hoje parou de funcionar?</h3>
            <p className="text-text-muted mb-4">Se você já passou dos 30, provavelmente já percebeu: o metabolismo muda, a energia não é a mesma e a massa muscular parece desaparecer, enquanto a gordura teima em ficar.</p>
            <p className="text-text-muted mb-8 text-white font-medium">Você não está falhando por falta de vontade. Você está aplicando estratégias genéricas em um corpo que precisa de especificidade.</p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-bg-darkest border border-border-subtle flex items-center justify-center shrink-0">📉</div>
              <div>
                <h4 className="font-bold text-white">Efeito Sanfona</h4>
                <p className="text-sm text-text-muted">Perde peso rápido com dietas restritivas, mas perde músculo junto. Ganha o dobro depois.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-bg-darkest border border-border-subtle flex items-center justify-center shrink-0">🔋</div>
              <div>
                <h4 className="font-bold text-white">Baixa Energia</h4>
                <p className="text-sm text-text-muted">Treinos exaustivos que sugam a energia que você precisava para trabalhar e viver.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-bg-darkest border border-border-subtle flex items-center justify-center shrink-0">⏱️</div>
              <div>
                <h4 className="font-bold text-white">A Armadilha do Tempo</h4>
                <p className="text-sm text-text-muted">Planilhas exigem 2h diárias, impossíveis de manter na rotina de uma mulher real.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center">
          <a href="#aplicacao" className="bg-primary-orange text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary-orange-hover transition-colors flex items-center gap-3">
            QUERO APLICAR PARA A MENTORIA <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section >
  );
}
