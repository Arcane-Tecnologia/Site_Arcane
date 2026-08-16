# Auditoria completa — Arcane Tecnologia

**Data:** 15 de agosto de 2026  
**Ambiente:** `http://localhost:3000`  
**Escopo:** UX, navegação, botões, formulários, SEO técnico, acessibilidade básica, responsividade, enquadramento visual e revisão textual.

## Veredito executivo

O site está funcional no fluxo principal: as 25 rotas públicas carregaram, os destinos internos responderam, não houve erro de console e não foi detectado overflow horizontal em desktop ou mobile. Menu, conversa flutuante, validações de formulário e âncora interna do case foram exercitados.

Os ajustes prioritários são de SEO técnico e semântica/acessibilidade, não de quebra estrutural:

1. Criar `robots.txt`, `sitemap.xml` e canonical por rota.
2. Criar metadados específicos para páginas institucionais, listagem de serviços/projetos e 8 cases dinâmicos.
3. Associar labels aos campos dos formulários e expor corretamente o estado dos controles iconográficos.
4. Corrigir dois pontos de copy identificados na leitura: `é de Até 15 dias úteis` e `Ollama utilizado...`.
5. Modernizar a direção visual para uma linguagem terrosa premium sem perder o contraste técnico da marca.

## Método e evidências

- 25 rotas públicas testadas em viewport desktop de `1440 × 900`.
- As mesmas 25 rotas testadas em viewport mobile de `390 × 844`.
- 50 screenshots de viewport preservados em [`evidence/`](./evidence/), além de estados de menu, conversa e validação.
- Links internos deduplicados e verificados por resposta HTTP local.
- Inspeção de DOM para `title`, descrição, canonical, `lang`, headings, imagens, alt, links, botões, overflow e elementos fixos.
- `pnpm lint`: passou.
- `pnpm typecheck`: passou.
- `pnpm build:frontend-only`: passou; apenas registrou `DATABASE_URL not configured`, esperado para o build sem backend.
- Limite: o banner de cookies já estava consentido no navegador corrente; seus estados foram revisados no código, mas não foi possível exercitar o banner visível sem alterar o armazenamento de consentimento.

## Matriz de cobertura

| Métrica | Resultado |
|---|---:|
| Rotas carregadas | 25/25 |
| Erros de rota | 0 |
| Erros/warnings relevantes no console | 0 |
| Links internos quebrados | 0 |
| Overflow horizontal desktop | 0/25 |
| Overflow horizontal mobile | 0/25 |
| Elementos interativos fora da viewport mobile | 0 |
| Imagens sem `alt` | 0 |
| Recursos de imagem com resposta inválida | 0/17 |
| Canonical ausente | 25/25 |
| `robots.txt` | 404 |
| `sitemap.xml` | 404 |
| Rotas não-home com title herdado | 14 |

## Achados prioritários

### P1 — SEO técnico incompleto

**Evidência:** `/robots.txt` e `/sitemap.xml` retornam 404; nenhuma das 25 rotas expõe canonical; não foi encontrado JSON-LD, `Organization`, `Service`, `WebSite` ou `CaseStudy`.

**Impacto:** descoberta e consolidação de URL ficam dependentes apenas de links internos e heurísticas do buscador. Também há risco de snippets repetidos porque várias páginas herdam o mesmo title, description e Open Graph.

**Ajuste:** adicionar `app/robots.ts`, `app/sitemap.ts` e `alternates.canonical` por página. Incluir JSON-LD mínimo para organização, site, serviços e cases públicos.

### P1 — Metadados genéricos em páginas públicas

**Evidência:** `/about`, `/services`, `/projects`, `/privacy`, `/terms`, `/cookies` e 8 cases dinâmicos usam o title global `Arcane Tecnologia | Arquitetura, automação e software sob medida`. A description também é herdada em 14 páginas não-home.

**Ajuste:** criar metadata própria para cada página e `generateMetadata` para `/projects/[slug]`, usando título, resumo, imagem e canonical do projeto.

### P2 — Labels de formulário não estão associados aos campos

**Evidência:** os campos aparecem com nome acessível derivado do placeholder, enquanto os `<label>` não possuem `htmlFor` e os inputs não possuem `id` estável.

**Impacto:** leitores de tela podem não anunciar o rótulo correto; placeholders não devem ser a única fonte de identificação.

**Ajuste:** gerar `id` por campo e associar `<label htmlFor={id}>`. Preservar mensagens de erro junto ao campo com `aria-describedby` e `aria-invalid`.

### P2 — Estado do botão de conversa não é exposto

**Evidência:** ao abrir o painel, o ícone troca para `X`, mas o botão continua com `aria-label="Abrir conversa"`, sem `aria-expanded` ou `aria-controls`.

**Ajuste:** usar `aria-label={isOpen ? 'Fechar conversa' : 'Abrir conversa'}`, `aria-expanded={isOpen}` e um id para o painel.

### P2 — Botões sem `type="button"` fora de formulários

**Evidência:** header, conversa flutuante e banner de cookies usam `<button>` sem tipo explícito. Hoje eles não estão aninhados em formulário, mas o comportamento padrão é `submit`.

**Ajuste:** declarar `type="button"` em todos os controles que não submetem formulário.

### P2 — Botão de fechar configurações de cookies sem nome acessível

**Evidência:** o botão com ícone `X` do painel de configurações não possui `aria-label` nem texto visível.

**Ajuste:** adicionar `aria-label="Fechar configurações de cookies"`.

### P3 — Ajustes de copy encontrados

- `/privacy`: `Nosso prazo padrão de resposta é de Até 15 dias úteis.` → `Nosso prazo padrão de resposta é de até 15 dias úteis.`
- `/projects/automacao-ollama-n8n-evolution`: o bloco rotulado como `Inteligência` usa `Ollama utilizado...`. Sugestão: `Ollama é utilizado...` ou `Camada Ollama utilizada...`.
- Padronização editorial recomendada: decidir se termos como `backoffice`, `follow-up`, `trust pages`, `go-live` e `fullstack` permanecerão em inglês ou terão equivalentes em português.

## Testes de interação

| Fluxo | Resultado | Observação |
|---|---|---|
| Menu mobile abrir/fechar | Passou | Abre `Mapa do site`, exibe links e retorna ao estado fechado. |
| Conversa flutuante abrir/fechar | Passou com ajuste recomendado | Painel abre e fecha; nome acessível não muda para “Fechar”. |
| CTA da home | Passou | `Solicitar orçamento` e `Ver projetos selecionados` apontam para rotas válidas. |
| Cards de serviços | Passou | As 6 ofertas apontam para cases de serviço válidos. |
| Cards de projetos | Passou | Os 9 slugs de projeto respondem localmente. |
| Âncora do case | Passou | `#visao-geral` navega e deixa o alvo visível abaixo do header fixo. |
| Formulário `/contact` vazio | Passou | Mostra mensagens de nome, e-mail, assunto e mensagem. |
| Formulário `/agendar-reuniao` vazio | Passou | Mostra mensagens dos campos obrigatórios. |
| Formulário `/solicitar-orcamento` vazio | Passou | Bloqueia o envio e mostra mensagens de validação. |
| Faixa de investimento | Passou | Com os demais campos preenchidos, bloqueia orçamento sem faixa. |
| Envio real para backend | Não executado | Evitado para não criar lead persistido durante a auditoria. |
| Banner de cookies | Limitado | Consentimento já existente no navegador; estados conferidos no código. |

Estados visuais de interação:

![Menu mobile aberto](./evidence/home--mobile-menu-open.png)

![Conversa flutuante aberta](./evidence/home--mobile-chat-open.png)

![Validação do formulário de contato](./evidence/contact--mobile-validation.png)

## Auditoria por página

Em todas as páginas abaixo: carregamento, `h1`, assets, links internos, mobile e ausência de overflow foram verificados. Quando houver ajuste específico, ele aparece na coluna “Ajuste”.

| # | Rota | O que foi encontrado | Ajuste |
|---:|---|---|---|
| 1 | `/` | Hero, CTAs, serviços, projetos, sobre e footer renderizam. | SEO técnico global; refinamento visual premium. |
| 2 | `/about` | Conteúdo institucional e CTA de reunião funcionam. | Title, description, canonical e schema próprios. |
| 3 | `/services` | 6 ofertas e fluxo de enquadramento renderizam; links válidos. | Metadata/canonical próprios; schema de serviços. |
| 4 | `/services/sistemas-web-personalizados` | Detalhe completo, imagem, aplicações, benefícios e CTAs funcionam. | Canonical/OG específico. |
| 5 | `/services/sistemas-exclusivos` | Detalhe completo e CTAs funcionam. | Canonical/OG específico. |
| 6 | `/services/sites-premium` | Detalhe completo e CTAs funcionam. | Canonical/OG específico. |
| 7 | `/services/e-commerce` | Detalhe completo e CTAs funcionam. | Canonical/OG específico. |
| 8 | `/services/automacao-integracoes-hardware` | Detalhe completo, imagem e CTAs funcionam. | Canonical/OG específico. |
| 9 | `/services/ia-automacoes-comerciais` | Detalhe completo, imagem e CTAs funcionam. | Canonical/OG específico. |
| 10 | `/projects` | Listagem de cases e navegação respondem. | Title/description/canonical e schema de coleção. |
| 11 | `/projects/automacao-ollama-n8n-evolution` | Case longo, âncora e CTAs respondem; metadata própria já existe. | Canonical/schema; corrigir copy de “Ollama utilizado”. |
| 12 | `/projects/plataforma-fintech-ledger-imutavel` | Case renderiza e links anterior/próximo/CTAs funcionam. | Metadata própria, canonical e schema. |
| 13 | `/projects/bot-trading-spot-gestao-risco` | Case renderiza e links anterior/próximo/CTAs funcionam. | Metadata própria, canonical e schema. |
| 14 | `/projects/entrevistas-ia-whatsapp` | Case renderiza e links anterior/próximo/CTAs funcionam. | Metadata própria, canonical e schema. |
| 15 | `/projects/otimizacao-anuncios-marketplace` | Case renderiza e links anterior/próximo/CTAs funcionam. | Metadata própria, canonical e schema. |
| 16 | `/projects/cadencia-emails-auditoria` | Case renderiza e links anterior/próximo/CTAs funcionam. | Metadata própria, canonical e schema. |
| 17 | `/projects/etiquetas-eletronicas-atualizacao-massiva` | Case renderiza e links anterior/próximo/CTAs funcionam. | Metadata própria, canonical e schema. |
| 18 | `/projects/gestao-acao-social-lgpd` | Case renderiza e links anterior/próximo/CTAs funcionam. | Metadata própria, canonical e schema. |
| 19 | `/projects/saas-gestao-personal-trainers` | Case renderiza; navegação interna responde. | Metadata própria, canonical e schema. |
| 20 | `/contact` | Formulário e validação vazia funcionam; links de contato e rede válidos. | Associar labels, aria de erros, canonical próprio. |
| 21 | `/agendar-reuniao` | Formulário e validação vazia funcionam; campos condicionais renderizam. | Associar labels, aria de erros, canonical próprio. |
| 22 | `/solicitar-orcamento` | Formulário e regra de faixa de investimento funcionam. | Associar labels, aria de erros, canonical próprio. |
| 23 | `/privacy` | Texto legal renderiza; sem overflow. | Corrigir `Até`; title/canonical próprios. |
| 24 | `/terms` | Texto legal renderiza; sem overflow. | Title/canonical próprios. |
| 25 | `/cookies` | Texto legal renderiza; sem overflow. | Title/canonical próprios; testar banner em estado limpo. |

### Evidência visual por rota

As capturas abaixo são viewport-only, aceitas para evitar o artefato de repetição causado pelo screenshot full-page em páginas com header fixo.

#### 1. `/`

![Desktop — home](./evidence/home--desktop-viewport.png)
![Mobile — home](./evidence/home--mobile-viewport.png)

#### 2. `/about`

![Desktop — about](./evidence/about--desktop-viewport.png)
![Mobile — about](./evidence/about--mobile-viewport.png)

#### 3. `/services`

![Desktop — services](./evidence/services--desktop-viewport.png)
![Mobile — services](./evidence/services--mobile-viewport.png)

#### 4. `/services/sistemas-web-personalizados`

![Desktop — sistemas web](./evidence/services--sistemas-web-personalizados--desktop-viewport.png)
![Mobile — sistemas web](./evidence/services--sistemas-web-personalizados--mobile-viewport.png)

#### 5. `/services/sistemas-exclusivos`

![Desktop — sistemas exclusivos](./evidence/services--sistemas-exclusivos--desktop-viewport.png)
![Mobile — sistemas exclusivos](./evidence/services--sistemas-exclusivos--mobile-viewport.png)

#### 6. `/services/sites-premium`

![Desktop — sites premium](./evidence/services--sites-premium--desktop-viewport.png)
![Mobile — sites premium](./evidence/services--sites-premium--mobile-viewport.png)

#### 7. `/services/e-commerce`

![Desktop — e-commerce](./evidence/services--e-commerce--desktop-viewport.png)
![Mobile — e-commerce](./evidence/services--e-commerce--mobile-viewport.png)

#### 8. `/services/automacao-integracoes-hardware`

![Desktop — hardware](./evidence/services--automacao-integracoes-hardware--desktop-viewport.png)
![Mobile — hardware](./evidence/services--automacao-integracoes-hardware--mobile-viewport.png)

#### 9. `/services/ia-automacoes-comerciais`

![Desktop — IA comercial](./evidence/services--ia-automacoes-comerciais--desktop-viewport.png)
![Mobile — IA comercial](./evidence/services--ia-automacoes-comerciais--mobile-viewport.png)

#### 10. `/projects`

![Desktop — projetos](./evidence/projects--desktop-viewport.png)
![Mobile — projetos](./evidence/projects--mobile-viewport.png)

#### 11. `/projects/automacao-ollama-n8n-evolution`

![Desktop — case Ollama](./evidence/projects--automacao-ollama-n8n-evolution--desktop-viewport.png)
![Mobile — case Ollama](./evidence/projects--automacao-ollama-n8n-evolution--mobile-viewport.png)

#### 12. `/projects/plataforma-fintech-ledger-imutavel`

![Desktop — fintech](./evidence/projects--plataforma-fintech-ledger-imutavel--desktop-viewport.png)
![Mobile — fintech](./evidence/projects--plataforma-fintech-ledger-imutavel--mobile-viewport.png)

#### 13. `/projects/bot-trading-spot-gestao-risco`

![Desktop — trading](./evidence/projects--bot-trading-spot-gestao-risco--desktop-viewport.png)
![Mobile — trading](./evidence/projects--bot-trading-spot-gestao-risco--mobile-viewport.png)

#### 14. `/projects/entrevistas-ia-whatsapp`

![Desktop — entrevistas IA](./evidence/projects--entrevistas-ia-whatsapp--desktop-viewport.png)
![Mobile — entrevistas IA](./evidence/projects--entrevistas-ia-whatsapp--mobile-viewport.png)

#### 15. `/projects/otimizacao-anuncios-marketplace`

![Desktop — marketplace](./evidence/projects--otimizacao-anuncios-marketplace--desktop-viewport.png)
![Mobile — marketplace](./evidence/projects--otimizacao-anuncios-marketplace--mobile-viewport.png)

#### 16. `/projects/cadencia-emails-auditoria`

![Desktop — cadência](./evidence/projects--cadencia-emails-auditoria--desktop-viewport.png)
![Mobile — cadência](./evidence/projects--cadencia-emails-auditoria--mobile-viewport.png)

#### 17. `/projects/etiquetas-eletronicas-atualizacao-massiva`

![Desktop — etiquetas](./evidence/projects--etiquetas-eletronicas-atualizacao-massiva--desktop-viewport.png)
![Mobile — etiquetas](./evidence/projects--etiquetas-eletronicas-atualizacao-massiva--mobile-viewport.png)

#### 18. `/projects/gestao-acao-social-lgpd`

![Desktop — ação social](./evidence/projects--gestao-acao-social-lgpd--desktop-viewport.png)
![Mobile — ação social](./evidence/projects--gestao-acao-social-lgpd--mobile-viewport.png)

#### 19. `/projects/saas-gestao-personal-trainers`

![Desktop — personal trainers](./evidence/projects--saas-gestao-personal-trainers--desktop-viewport.png)
![Mobile — personal trainers](./evidence/projects--saas-gestao-personal-trainers--mobile-viewport.png)

#### 20. `/contact`

![Desktop — contato](./evidence/contact--desktop-viewport.png)
![Mobile — contato](./evidence/contact--mobile-viewport.png)

#### 21. `/agendar-reuniao`

![Desktop — reunião](./evidence/agendar-reuniao--desktop-viewport.png)
![Mobile — reunião](./evidence/agendar-reuniao--mobile-viewport.png)

#### 22. `/solicitar-orcamento`

![Desktop — orçamento](./evidence/solicitar-orcamento--desktop-viewport.png)
![Mobile — orçamento](./evidence/solicitar-orcamento--mobile-viewport.png)

#### 23. `/privacy`

![Desktop — privacidade](./evidence/privacy--desktop-viewport.png)
![Mobile — privacidade](./evidence/privacy--mobile-viewport.png)

#### 24. `/terms`

![Desktop — termos](./evidence/terms--desktop-viewport.png)
![Mobile — termos](./evidence/terms--mobile-viewport.png)

#### 25. `/cookies`

![Desktop — cookies](./evidence/cookies--desktop-viewport.png)
![Mobile — cookies](./evidence/cookies--mobile-viewport.png)

## Escopo de modernização — terroso premium

### Direção

Manter a autoridade técnica e a estrutura editorial atual, trocando o azul/ciano dominante por uma linguagem mais quente, sofisticada e material: marrom café, argila, areia, oliva discreto e preto mineral. O resultado deve parecer uma consultoria de engenharia premium, não um dashboard SaaS genérico.

### Paleta proposta

| Função | Cor | Uso |
|---|---|---|
| Fundo mineral | `#191613` | hero, header, footer e áreas de autoridade |
| Café profundo | `#2B211B` | superfícies escuras e navegação |
| Argila | `#A85D3A` | CTA principal, estados ativos e destaques |
| Terracota clara | `#C9815D` | hover, ícones e microacentos |
| Areia | `#E8D8C5` | fundos claros e blocos de conteúdo |
| Marfim | `#F7F1E8` | texto principal em áreas claras |
| Oliva seco | `#6E7353` | tags, dados operacionais e apoio visual |
| Grafite | `#37312B` | corpo de texto e bordas suaves |

### Tipografia e ritmo

- Manter uma serif editorial para headings, mas reduzir variação extrema de tamanho no hero mobile.
- Usar uma sans humanista para corpo, navegação, labels e dados técnicos.
- Reduzir tracking excessivo em labels uppercase; priorizar leitura antes de atmosfera.
- Estabelecer escala: `h1` desktop entre 64–88 px, mobile entre 44–54 px; corpo entre 16–18 px.
- Aumentar contraste e espaçamento vertical nas seções de formulário e legal.

### Componentes a modernizar

1. **Header:** fundo mineral translúcido, active state em argila e CTA terracota com texto marfim.
2. **Hero:** imagem com tratamento quente/monocromático, bloco de mensagem mais curto e prova operacional visível já na primeira dobra.
3. **Cards:** superfícies areia/marfim, bordas café com baixa opacidade, labels oliva e hover com elevação discreta.
4. **CTAs:** um CTA primário argila, um secundário outline café; evitar excesso de gradientes ciano.
5. **Formulários:** campos com fundo marfim, foco argila, mensagens de erro com vermelho queimado e labels sempre associados.
6. **Chat e cookies:** controles com estados acessíveis, dimensões mínimas de toque de 44 px e maior separação da área de conteúdo.
7. **Cases:** usar uma faixa de metadados com argila/oliva para categoria, stack e impacto; preservar leitura técnica.

### Ordem recomendada

**Fase 1 — Base e confiança**

- SEO técnico: robots, sitemap, canonical, metadata e JSON-LD.
- Acessibilidade dos formulários e controles.
- Correção de copy e padronização de termos.

**Fase 2 — Sistema visual**

- Tokens terrosos em `globals.css`.
- Header, CTA, cards, badges, inputs e estados de foco.
- Ajuste da escala tipográfica e do hero mobile.

**Fase 3 — Conversão premium**

- Melhorar prova social/cases na home.
- Introduzir indicadores de impacto e stack com mais hierarquia.
- Refinar fluxo de orçamento/reunião e rastreamento de conversão.

**Fase 4 — Performance e conteúdo**

- Revisar imagens remotas, compressão e `sizes`.
- Criar OG images por serviço/case.
- Expandir conteúdo de cases com resultados mensuráveis e links semânticos.

### Critérios de aceite da modernização

- Nenhum overflow em `390`, `768`, `1024` e `1440` px.
- Contraste revisado para texto, CTA, labels e foco.
- Todos os campos anunciados por label, erro e estado.
- Cada rota com title, description, canonical e OG coerentes.
- `robots.txt` e `sitemap.xml` respondendo 200.
- Menu, chat, cookies, CTAs, âncoras e formulários revalidados após a troca visual.

## Arquivos de evidência

- [`route-audit.json`](./route-audit.json)
- [`mobile-audit.json`](./mobile-audit.json)
- [`link-statuses.json`](./link-statuses.json)
- [`image-statuses.json`](./image-statuses.json)
- [`rendered-text.txt`](./rendered-text.txt)
- [Screenshots](./evidence/)

## Execução dos ajustes

Os ajustes recomendados foram aplicados após a auditoria:

- SEO: canonical, metadados por rota, Open Graph/Twitter, JSON-LD de Organization/WebSite, `robots.txt` e `sitemap.xml` com as 25 URLs públicas.
- Acessibilidade: associação entre labels e campos, estados ARIA no menu/chat, diálogo do chat identificado, botões com tipo explícito e fechamento de cookies nomeado.
- Conteúdo: correções gramaticais em privacidade e no case de Ollama.
- Visual: tokens de argila, terracota, areia, marfim, oliva e café em `globals.css`; CTAs, cards, chat, header e overlays atualizados; contraste do hero mobile reforçado.
- Regressão automatizada: `pnpm test:regressions` criado e aprovado.

### Verificação pós-ajuste

- 25/25 rotas carregadas em desktop e mobile.
- 25/25 rotas com title, description, canonical e exatamente um `h1`.
- 0 overflow horizontal e 0 controles interativos fora da viewport em 390 px.
- 0 erros ou warnings de console no smoke test final.
- 53 botões inspecionados; nenhum sem nome acessível ou tipo inválido. Os 3 botões `submit` pertencem aos formulários e mantêm o tipo correto.
- Chat, menu mobile e associação dos campos dos formulários revalidados no navegador.
- `robots.txt` e `sitemap.xml` respondendo HTTP 200; sitemap com 25 entradas.
- `pnpm lint`, `pnpm typecheck`, `pnpm build:frontend-only` e `pnpm test:regressions` aprovados.
