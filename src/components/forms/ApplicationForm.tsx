import React, { useState } from 'react';

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    objetivo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase intergration will go here
    console.log('Sending data:', formData);
    alert('Aplicação enviada na versão de demonstração!');
  };

  return (
    <section id="aplicacao" className="py-24 border-t border-border-subtle bg-bg-dark">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-surface-card border border-border-subtle rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Orange Glow in the form background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange opacity-5 blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-10 relative z-10">
            <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">O Próximo Passo</span>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Aplicar para a Mentoria Anderson Fit
            </h2>
            <p className="text-text-muted text-sm">
              Trabalhamos com turmas reduzidas para garantir máxima qualidade. Preencha seus dados reais e avaliaremos seu perfil.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-text-muted mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="nome" 
                required
                className="w-full bg-bg-darkest border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
                placeholder="Como devemos te chamar"
                onChange={e => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">E-mail Principal</label>
                  <input 
                     type="email" 
                     id="email" 
                     required
                     className="w-full bg-bg-darkest border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
                     placeholder="seu@email.com"
                     onChange={e => setFormData({...formData, email: e.target.value})}
                  />
               </div>
               <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-text-muted mb-2">WhatsApp</label>
                  <input 
                     type="tel" 
                     id="whatsapp" 
                     required
                     className="w-full bg-bg-darkest border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
                     placeholder="(DDD) 9 9999-9999"
                     onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                  />
               </div>
            </div>

            <div>
              <label htmlFor="objetivo" className="block text-sm font-medium text-text-muted mb-2">Qual seu principal obstáculo biológico ou de rotina hoje?</label>
              <textarea 
                id="objetivo" 
                rows={4}
                required
                className="w-full bg-bg-darkest border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors resize-none"
                placeholder="Exemplo: Fiquei muito tempo parada, efeito sanfona, dores nas costas..."
                onChange={e => setFormData({...formData, objetivo: e.target.value})}
              ></textarea>
            </div>

            <div className="pt-2">
               <button type="submit" className="w-full bg-primary-orange text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-primary-orange-hover transition-colors shadow-[0_0_20px_rgba(255,77,0,0.2)]">
                 ENVIAR MINHA APLICAÇÃO 
               </button>
               <p className="text-center text-xs text-text-muted mt-4">
                  🔒 Seus dados estão 100% seguros conosco. Vagas sujeitas à disponibilidade de agenda.
               </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
