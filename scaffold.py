import os

files = {
    ".specify/memory/constitution.md": """# Projeto Landing Page - Profissional de Educação Física

## Objetivo do Projeto
Criar uma landing page focada em vender prioritariamente uma mentoria de 3 a 6 meses para um profissional de educação física. O desafio de 10 dias deve ser apenas uma oferta secundária (downsell).

## Público-Alvo
- **Principal:** Mulheres de 30 a 60+ anos (dores: tentativas frustradas de emagrecimento, perda de massa muscular, baixa energia, ganho de gordura abdominal, rotina corrida).
- **Secundário:** Homens de 25 a 60+ buscando estética, saúde e desempenho.

## Posicionamento
- **Vender:** Método individualizado, acompanhamento real, educação e autonomia, resultado sustentável, suporte premium.
- **Não Vender:** Dieta restritiva, treino genérico, solução rápida.

## Identidade Visual
- Preto (autoridade), Branco (clareza), Cinza escuro (sofisticação), Verde (saúde e equilíbrio), Laranja (CTA).
- Estilo limpo, premium, profissional, mobile first, imagens reais.

## Arquitetura
- **Stitch:** UI/UX, DOM, CSS, renderização visual premium.
- **Antigravity:** Lógica, rotas, backend, Supabase, Vercel, orquestração.
""",

    ".agents/rules/project-context.md": """---
description: Contexto Geral do Projeto e Regras de Negócio
---
# Regras de Contexto do Projeto

1. A oferta principal é SEMPRE a mentoria (3 a 6 meses).
2. O desafio de 10 dias é oferta secundária (nunca a principal).
3. O foco do conteúdo deve atacar as dores do público principal (mulheres 30-60+).
4. Evitar qualquer comunicação que pareça "coach de emagrecimento genérico".
""",

    ".agents/rules/brand-system.md": """---
description: Regras de Identidade Visual e Design System
---
# Sistema de Marca (Brand System)

## Cores
- **Primary/Authority:** Preto (#000000)
- **Background/Clarity:** Branco (#FFFFFF)
- **Surface/Sophistication:** Cinza Escuro (#1F2937 ou similar)
- **Health/Balance:** Verde (ex: #10B981)
- **Action/CTA:** Laranja (ex: #F97316)

## Tipografia e UI
- UI limpa, sem excesso de informações.
- Foco absoluto em Mobile First.
- Imagens devem ser fotográficas reais, nunca ilustrações genéricas ou bancos de imagens de baixa qualidade.
""",

    ".agents/rules/landing-page-strategy.md": """---
description: Estratégia de Conversão da Landing Page
---
# Estratégia da Landing Page

- **Hero Section:** Promessa focada em saúde, autonomia e acompanhamento real para o público principal.
- **Dores:** Seção de identificação com o público (falta de energia, tentativa de dietas, perda de massa).
- **A Solução:** Apresentação do método da mentoria.
- **Prova Social:** Depoimentos reais (não inventar).
- **Oferta Secundária:** Estrategicamente posicionada após a recusa da mentoria ou como alternativa de entrada.
""",

    ".agents/rules/technical-architecture.md": """---
description: Arquitetura Técnica Obrigatória (Antigravity + Supabase + Vercel)
---
# Arquitetura Técnica

- **Framework:** React / Next.js (a definir conforme deploy desejado para Vercel).
- **Backend/DB:** Supabase.
- **Orquestração:** Antigravity lidera a lógica de negócio, integrações, rotas e arquitetura.
- **Visual:** Stitch (via MCP) será acionado exclusivamente para gerar os componentes de interface (UI/CSS/DOM).
""",

    ".agents/rules/stitch-mcp-orchestration.md": """---
description: Como orquestrar as chamadas ao Stitch via MCP
---
# Orquestração do Stitch

1. Antigravity NUNCA deve tentar criar designs finais ou CSS complexo sozinho.
2. Todas as demandas de layout, criação visual e responsividade devem ser delegadas ao Stitch de forma sequencial (uma tela/componente por vez).
3. Antigravity fornecerá wireframes conceituais ou descrições claras para o Stitch renderizar a UI.
4. Após o Stitch gerar, o Antigravity deve refatorar/limpar o código para integração com Supabase/React.
""",

    ".agents/rules/ui-generation-policy.md": """---
description: Políticas para a Geração de UI
---
# Política de Geração de UI

- **Premium Feel:** Todo componente gerado deve ter aspecto premium (sombras suaves, tipografia de alta qualidade, espaçamento generoso).
- **Mobile First:** Todo layout deve ser projetado primeiro para celular.
- **Consistência:** Manter o snapshot/importação base do Stitch sempre consistente.
""",

    ".agents/rules/asset-usage-policy.md": """---
description: Política de Uso de Assets Físicos
---
# Política de Assets

- Usar assets reais do cliente sempre que possível.
- NUNCA inventar rostos, nomes ou resultados (provas sociais/depoimentos).
- Pedir ao cliente caso faltem imagens de alta resolução ou vídeos de background.
""",

    ".agents/skills/repo-research/SKILL.md": """---
name: Repo Research
description: Skill para mapear, auditar e pesquisar o repositório atual em busca de padrões e pendências.
---
# Instruções
Sempre que o projeto mudar de fase, faça uma auditoria rápida para entender o estado atual do código.
Pesquise as pastas `pages`, `components`, `public` e entenda o que o Stitch já gerou.
""",

    ".agents/skills/landing-page-copy/SKILL.md": """---
name: Landing Page Copy
description: Skill para estruturar copywriting focado nas dores das mulheres de 30 a 60+ anos.
---
# Instruções
O copy deve evitar clichês esportivos.
Priorizar palavras como: Constância, Energia, Acompanhamento, Autonomia, Equilíbrio.
Evitar palavras como: Projeto Verão, Secar, Dieta Restrita, No Pain No Gain.
""",

    ".agents/skills/offer-positioning/SKILL.md": """---
name: Offer Positioning
description: Skill que garante a hierarquia entre Mentoria e Desafio.
---
# Instruções
Nas seções de CTA, a Mentoria sempre ocupa 80% do foco. O Desafio entra como uma alternativa secundária para quem ainda não quer o compromisso de 3-6 meses.
""",

    ".agents/skills/social-proof-assembler/SKILL.md": """---
name: Social Proof Assembler
description: Skill para gerenciar e injetar depoimentos e casos de sucesso.
---
# Instruções
Nunca invente provas. Se não houver, crie a estrutura (placeholders descritivos) e informe ao cliente o que precisa ser enviado.
""",

    ".agents/skills/visual-consistency/SKILL.md": """---
name: Visual Consistency
description: Skill para avaliar e manter a consistência estética do projeto.
---
# Instruções
Verifique se a paleta definida no `brand-system.md` está sendo rigorosamente seguida em todos os componentes.
""",

    ".agents/skills/prompt-optimizer/SKILL.md": """---
name: Prompt Optimizer
description: Skill para otimizar prompts enviados ao Stitch MCP.
---
# Instruções
Sempre envie prompts detalhados para o Stitch. Inclua a paleta, a requisição mobile-first e exija estilo premium e limpo.
""",

    ".agents/skills/style-extractor/SKILL.md": """---
name: Style Extractor
description: Skill para extrair tokens e CSS relevantes da UI gerada.
---
# Instruções
Ao receber código do Stitch, normalize os tokens de CSS (cores, espaçamentos, tipografia) para um arquivo global centralizado ou Tailwind config.
""",

    ".agents/skills/react-componentizer/SKILL.md": """---
name: React Componentizer
description: Skill para converter saídas visuais HTML/CSS do Stitch em componentes React escaláveis.
---
# Instruções
1. Identifique partes repetidas.
2. Crie componentes funcionais bem tipados/documentados.
3. Extraia lógicas e isole estado visual do estado de negócio.
""",

    ".agents/skills/sequential-processing-loop/SKILL.md": """---
name: Sequential Processing Loop
description: Skill para processar rotas ou componentes complexos de forma sequencial.
---
# Instruções
Quando houver múltiplas telas, processe uma por vez.
Ex: Generate Home > Refactor Home > Generate About > Refactor About.
""",

    ".agents/skills/react-architecture-linter/SKILL.md": """---
name: React Architecture Linter
description: Skill para auditar a estrutura do React garantindo escalabilidade para Supabase.
---
# Instruções
Garanta que os serviços de API (Supabase) fiquem separados da UI (Stitch).
""",

    ".agents/skills/remotion-engine/SKILL.md": """---
name: Remotion Engine
description: Skill para preparar integrações de vídeo/animação com Remotion (se necessário futuramente).
---
# Instruções
Mantenha estruturado um diretório de media para eventual uso de vídeos estáticos ou gerados.
""",

    ".agents/workflows/bootstrap-project.md": """---
description: Fluxo de inicialização e estruturação base
---
# Fluxo de Inicialização
1. Configurar Next.js ou React.
2. Injetar tokens da marca (design system).
3. Configurar Supabase CLI ou client.
""",

    ".agents/workflows/import-stitch-snapshot.md": """---
description: Fluxo para atualizar o projeto com código gerado via Stitch
---
# Importação Stitch
1. Solicitar componente/página ao Stitch.
2. Receber o snapshot.
3. Componentizar o resultado em React.
4. Aplicar lógicas do Antigravity.
""",

    ".agents/workflows/generate-routes-sequentially.md": """---
description: Fluxo para construção sequencial das páginas
---
# Construção Sequencial
1. Definir lista de rotas.
2. Executar `import-stitch-snapshot` para a rota 1.
3. Validar consistência.
4. Executar `import-stitch-snapshot` para a rota 2, e assim por diante.
""",

    ".agents/workflows/review-conversion-quality.md": """---
description: Fluxo de revisão focada em conversão para vendas de mentoria
---
# Revisão de Conversão
1. Analisar clareza do Hero.
2. Validar carregamento mobile.
3. Garantir hierarquia Mentoria > Desafio.
""",

    "docs/brief.md": """# Projeto de Landing Page - Profissional de Educação Física
Landing page com arquitetura Antigravity x Stitch, focada em converter mulheres de 30-60+ anos para uma mentoria premium de médio prazo (3-6 meses).
""",

    "docs/content-map.md": """# Mapa de Conteúdo e Rotas
- `/` - Landing Page Principal
  - Hero Section (Promessa Mentoria)
  - Identificação (Dores)
  - Solução (O que é a Mentoria)
  - Autoridade (Sobre o Profissional)
  - CTA Principal
  - Downsell (Desafio de 10 dias)
  - FAQ
""",

    "docs/missing-materials.md": """# Materiais Pendentes do Cliente

## Assets Visuais
- [ ] Fotos em alta resolução do profissional (estilo life-style, premium, não-genérico).
- [ ] Logotipo em vetor e PNG transparente (se houver).
- [ ] Vídeo de apresentação/VSL para o Hero (opcional, mas altamente recomendado).

## Provas Sociais
- [ ] Prints ou vídeos curtos de depoimentos reais de alunos da Mentoria.
- [ ] Fotos de antes/depois (com consentimento, focando em saúde e estética real).

## Copy
- [ ] Traz das principais objeções que o cliente ouve diariamente.
- [ ] Detalhamento técnico rápido do que está incluso na Mentoria (qtd de treinos, suporte, reuniões, etc).
- [ ] Preço ou formato de precificação da Mentoria e do Desafio.
""",

    "docs/client-request-checklist.md": """# Checklist de Solicitação ao Cliente
- [ ] Enviar lista de fotos e vídeos necessários.
- [ ] Solicitar depoimentos reais.
- [ ] Definir precificação para inclusão nos CTAs.
- [ ] Confirmar redes sociais principais (Instagram, WhatsApp) para links.
""",

    "docs/implementation-plan.md": """# Plano de Implementação

1. **Apresentação de Estrutura:** Validar esse setup inicial com o usuário.
2. **Setup do App:** Criar ambiente via Next.js ou vite (`npx create-next-app` ou `create-vite`).
3. **Stitch Setup:** Gerar a camada visual do Navbar e Hero Section pelo Stitch.
4. **Integração Backend:** Conectar Supabase para captura de leads ou gerenciamento de acessos do "Desafio".
""",

    "docs/database-schema.md": """# Esquema de Banco de Dados Previsível (Supabase)

## Tabela: leads
- `id`: uuid (PK)
- `name`: text
- `email`: text
- `phone`: text (whatsapp)
- `interest`: enum ('mentorship', 'challenge')
- `created_at`: timestamp
"""
}

def create_files():
    base_dir = r"d:\LP ANDERSON"
    os.makedirs(base_dir, exist_ok=True)
    
    for path, content in files.items():
        full_path = os.path.join(base_dir, path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
            
if __name__ == "__main__":
    create_files()
    print("Project initialized successfully.")
