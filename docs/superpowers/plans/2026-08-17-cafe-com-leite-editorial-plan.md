# Café com Leite Editorial Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Atualizar a paleta visual de todas as páginas públicas do Site Arcane para uma direção de café com leite editorial, clara e premium.

**Architecture:** A mudança será concentrada primeiro nos tokens e utilitários de `src/app/globals.css`, preservando aliases legados para as classes `brand-cyan*`. Em seguida, componentes compartilhados e páginas públicas terão os valores literais escuros/slate mais visíveis alinhados aos novos tokens, sem alterar rotas, fontes, conteúdo ou lógica.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Framer Motion, pnpm.

## Global Constraints

- Usar a paleta aprovada em `docs/superpowers/specs/2026-08-17-cafe-com-leite-editorial-design.md`.
- Manter a estrutura de rotas, copy, fontes, espaçamentos e interações existentes.
- Não adicionar dependências nem criar uma segunda linguagem de motion.
- Preservar as classes `brand-cyan*` como aliases visuais bronze durante a migração.
- Verificar home em desktop/mobile e rotas públicas principais após a alteração.
- Rodar `pnpm lint` e `pnpm typecheck` antes do commit de implementação.

---

### Task 1: Registrar a direção visual e o plano

**Files:**
- Create: `docs/superpowers/specs/2026-08-17-cafe-com-leite-editorial-design.md`
- Create: `docs/superpowers/plans/2026-08-17-cafe-com-leite-editorial-plan.md`

**Interfaces:**
- Produces: paleta, escopo, critérios de aceitação e sequência de implementação para as tarefas seguintes.

- [x] **Step 1: Escrever a especificação visual aprovada**
- [x] **Step 2: Escrever este plano com arquivos e verificações concretas**
- [ ] **Step 3: Fazer commit da documentação antes da implementação**

### Task 2: Atualizar tokens e shells globais

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: paleta aprovada na especificação visual.
- Produces: variáveis globais de marrom, creme e bronze consumidas pelos componentes existentes.

- [ ] **Step 1: Substituir valores de `:root` e `.dark` pelos valores aprovados**
- [ ] **Step 2: Ajustar `body`, `.section-shell`, `.section-shell-alt`, `.section-shell-dark`, `.panel-shell`, `.panel-shell-dark`, `.cta-shell` e utilitários de halo/divisor**
- [ ] **Step 3: Manter os aliases `brand-cyan*` apontando para bronze e remover aparência azul/ciano**
- [ ] **Step 4: Confirmar que o CSS continua compilando no dev server**

### Task 3: Alinhar componentes compartilhados e primeira dobra

**Files:**
- Modify: `src/components/layout/header.tsx`
- Modify: `src/components/layout/footer.tsx`
- Modify: `src/components/sections/hero.tsx`
- Modify: `src/components/ui/conversion-ctas.tsx`
- Modify: `src/components/ui/floating-chat.tsx`

**Interfaces:**
- Consumes: tokens e shells globais atualizados na Task 2.
- Produces: navegação, hero, CTAs, rodapé e chat com a mesma direção editorial.

- [ ] **Step 1: Trocar o header quase preto por café médio/profundo e manter logo/navegação legíveis**
- [ ] **Step 2: Ajustar overlays do hero para cacau translúcido e acentos bronze**
- [ ] **Step 3: Ajustar variantes de CTA, footer e chat para bronze/creme/café**
- [ ] **Step 4: Verificar estados ativo, hover, mobile e foco dos componentes compartilhados**

### Task 4: Corrigir valores literais nas páginas públicas

**Files:**
- Modify: `src/components/sections/reference-home.tsx`
- Modify: páginas públicas em `src/app/(site)/**/page.tsx` que ainda usam valores literais `#191613`, `#2b211b`, `#403128`, `#7f4228` ou superfícies slate em áreas visíveis.

**Interfaces:**
- Consumes: tokens globais e componentes compartilhados atualizados.
- Produces: consistência visual nas páginas home, serviços, projetos, sobre, contato, orçamento, reunião e páginas legais.

- [ ] **Step 1: Localizar os valores antigos restantes com `rg`**
- [ ] **Step 2: Substituir overlays, fundos, bordas e textos literais por tokens/valores marrons equivalentes**
- [ ] **Step 3: Preservar contraste em cards de imagem e blocos escuros**
- [ ] **Step 4: Revisar o diff para garantir que nenhuma copy ou rota mudou**

### Task 5: Verificar rotas e qualidade

**Files:**
- Test: rotas públicas no servidor local; nenhum arquivo adicional esperado.

**Interfaces:**
- Consumes: implementação completa das Tasks 2–4.
- Produces: confirmação de renderização, lint e typecheck sem regressões.

- [ ] **Step 1: Verificar `/`, `/services`, `/projects`, `/about`, `/contact`, `/solicitar-orcamento` e `/agendar-reuniao` com `Invoke-WebRequest`**
- [ ] **Step 2: Abrir a home no navegador local e revisar visualmente desktop/mobile**
- [ ] **Step 3: Rodar `pnpm lint`**
- [ ] **Step 4: Rodar `pnpm typecheck`**
- [ ] **Step 5: Rodar `pnpm test:regressions` se estiver disponível e registrar o resultado**
- [ ] **Step 6: Fazer commit da implementação e enviar ao remoto `origin/main`**

