# Arcane Audit Adjustments Implementation Plan

> **For agentic workers:** Execute the tasks inline with a red-green verification loop for each behavior change.

**Goal:** Aplicar os achados da auditoria do site Arcane: SEO indexável, controles acessíveis, copy corrigida e direção visual terrosa premium.

**Architecture:** Manter o App Router e os componentes existentes. Centralizar metadados e tokens visuais em arquivos já usados pelo projeto, adicionar endpoints estáticos de SEO no App Router e corrigir acessibilidade nos componentes compartilhados para que todas as páginas herdem o comportamento.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide.

## Global Constraints

- Preservar as 25 rotas públicas e os CTAs existentes.
- Não adicionar dependências para resolver SEO, acessibilidade ou paleta.
- Manter o texto em português brasileiro e a marca Arcane como engenharia premium.
- Validar em `1440 × 900`, `390 × 844`, lint, typecheck e build.

### Task 1: Regression coverage

**Files:**
- Create: `scripts/audit-regressions.mjs`
- Modify: `package.json`

- [ ] Criar assertions que confirmem a existência de `app/robots.ts`, `app/sitemap.ts`, tokens terrosos, `aria-expanded` no chat, labels associadas e copy corrigida.
- [ ] Rodar `node scripts/audit-regressions.mjs` e confirmar falha antes das mudanças.

### Task 2: Technical SEO

**Files:**
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Create: `src/lib/seo.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/(site)/services/page.tsx`
- Modify: `src/app/(site)/projects/page.tsx`
- Modify: `src/app/(site)/projects/[slug]/page.tsx`
- Modify: `src/app/(site)/about/page.tsx`
- Modify: `src/app/(site)/privacy/page.tsx`
- Modify: `src/app/(site)/terms/page.tsx`
- Modify: `src/app/(site)/cookies/page.tsx`

- [ ] Criar `robots.txt` e sitemap com rotas institucionais, serviços e projetos publicados.
- [ ] Centralizar helpers de metadata com canonical, Open Graph e Twitter.
- [ ] Adicionar metadata específica às páginas que hoje herdam o title global.
- [ ] Adicionar `generateMetadata` por slug para cases dinâmicos.
- [ ] Rodar a regression coverage e confirmar GREEN.

### Task 3: Accessible interactions and forms

**Files:**
- Modify: `src/components/ui/floating-chat.tsx`
- Modify: `src/components/ui/gdpr-banner.tsx`
- Modify: `src/components/layout/header.tsx`
- Modify: `src/components/sections/contact-lead-page.tsx`
- Modify: `src/components/sections/contact-support-page.tsx`

- [ ] Expor estado e relação do chat com `aria-expanded`, `aria-controls` e label de abrir/fechar.
- [ ] Marcar botões não-submit com `type="button"` e nomear o close de cookies.
- [ ] Associar `label` e campo com ids determinísticos e propagar erro via `aria-describedby`/`aria-invalid`.
- [ ] Rodar a regression coverage e confirmar GREEN.

### Task 4: Terracotta premium visual system and copy

**Files:**
- Modify: `src/app/globals.css`
- Modify: shared CTA/card classes in existing page and component files only where needed
- Modify: `src/app/(site)/privacy/page.tsx`
- Modify: `src/app/(site)/projects/automacao-ollama-n8n-evolution/page.tsx`

- [ ] Trocar tokens ciano/azul por mineral, café, argila, terracota, areia, marfim e oliva.
- [ ] Atualizar superfícies, CTA, dividers, focus ring, grid e field shell sem alterar a ordem das seções.
- [ ] Corrigir copy e manter as labels de navegação e conversão.
- [ ] Rodar a regression coverage e confirmar GREEN.

### Task 5: Full verification

**Commands:**
- `node scripts/audit-regressions.mjs`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build:frontend-only`
- Browser/IAB route smoke test for all 25 routes at desktop and mobile sizes.

- [ ] Confirmar que todas as rotas carregam sem overlay ou erro de console.
- [ ] Confirmar `robots.txt`, `sitemap.xml`, canonical, metadata e imagens.
- [ ] Confirmar menu, chat, formulários e CTA.
- [ ] Capturar screenshots antes de concluir.
