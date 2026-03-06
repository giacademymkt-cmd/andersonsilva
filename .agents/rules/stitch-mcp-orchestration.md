---
description: Como orquestrar as chamadas ao Stitch via MCP
---
# Orquestração do Stitch

1. Antigravity NUNCA deve tentar criar designs finais ou CSS complexo sozinho.
2. Todas as demandas de layout, criação visual e responsividade devem ser delegadas ao Stitch de forma sequencial (uma tela/componente por vez).
3. Antigravity fornecerá wireframes conceituais ou descrições claras para o Stitch renderizar a UI.
4. Após o Stitch gerar, o Antigravity deve refatorar/limpar o código para integração com Supabase/React.
