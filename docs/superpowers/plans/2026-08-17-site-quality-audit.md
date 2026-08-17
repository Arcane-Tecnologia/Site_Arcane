# Auditoria e correção de qualidade do site Arcane — Plano de execução

> Plano executado no repositório `Site_Arcane` em 17/08/2026.

**Objetivo:** auditar a qualidade técnica do site, corrigir os problemas acionáveis localmente, registrar as evidências e separar as entregas em commits por categoria.

**Arquitetura:** manter o site Next.js 16 com conteúdo institucional estático, melhorar entrega de imagens e fontes, corrigir acessibilidade e aplicar headers de segurança sem introduzir dependências novas. Itens que dependem do provedor de produção serão registrados como não verificáveis localmente.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Prisma 7 e pnpm.

## Restrições

- Preservar a direção visual de marrons claros premium.
- Executar a auditoria com o ambiente local e evidências do código.
- Não afirmar CDN, Brotli, HTTPS/SSL ou indexação Google sem ambiente publicado acessível.
- Criar commits separados por categoria e verificar cada grupo antes do commit.

## Entregas

1. Baseline e documentação da auditoria.
2. Performance, imagens, fontes e cache.
3. Acessibilidade, semântica e responsividade.
4. Headers de segurança e índice para leads.
5. Verificação final, documentação de resultados e push.

## Execução registrada

As etapas foram executadas com commits separados por categoria. A verificação final inclui lint, typecheck, auditoria de regressões, build frontend-only, headers do servidor local, Core Web Vitals, axe, rotas do sitemap, 404, redirecionamento 308, imagens e viewport mobile.
