# Design QA — Arcane Tecnologia

## Resultado

`final result: passed`

## Referência e escopo

- Referência visual: `C:\Users\Administrador\.codex\attachments\7128ab6a-fc2e-4015-96d1-673929c854a5\image-1.jpeg`
- Dimensão da referência: 900 × 1600 px.
- Página avaliada: homepage pública em `http://localhost:3000/`.
- Estado: tema claro padrão, menu fechado, sem interação pendente.
- Densidade: captura em viewport do navegador, device scale 1.
- Superfícies avaliadas: tipografia, composição, espaçamento, cores, imagens, conteúdo, responsividade, acessibilidade e interações.

## Evidências

- Topo desktop: `C:\Users\Administrador\Documents\Site_Arcane_QA\reference-home-900-top.png`
- Serviços desktop: `C:\Users\Administrador\Documents\Site_Arcane_QA\reference-home-900-services.png`
- Processo desktop: `C:\Users\Administrador\Documents\Site_Arcane_QA\reference-home-900-process.png`
- Topo mobile: `C:\Users\Administrador\Documents\Site_Arcane_QA\reference-home-390-top.png`
- Comparação lado a lado: `C:\Users\Administrador\Documents\Site_Arcane_QA\design-qa-comparison-top.png`

As capturas cobrem a área inicial, a transição para serviços e a seção de processo. A comparação foi feita com a referência recortada na mesma largura da captura desktop, além de uma verificação dedicada em viewport mobile.

## Correspondência implementada

- Header fixo com faixa marrom profunda, navegação responsiva e CTA de orçamento.
- Hero em duas colunas, com mensagem editorial à esquerda e dashboard real do projeto de automação à direita.
- Cards sobrepostos de métrica e arquitetura para reproduzir a leitura de produto/engenharia da referência.
- Faixa de seis capacidades técnicas.
- Seção de serviços com seis cards e imagens reais já existentes no projeto.
- Seção de cases com quatro projetos destacados.
- Processo operacional com seis etapas.
- CTA final e rodapé mantidos dentro da linguagem premium terrosa do site.

## Achados e decisões

### P0/P1/P2

Nenhum problema P0, P1 ou P2 permanece após os ajustes.

### Divergências intencionais aceitas

- O header da referência é claro; o site usa uma faixa marrom profunda porque esse foi o ajuste solicitado anteriormente para o header.
- A imagem composta da referência foi traduzida para uma composição editável com o dashboard local `public/projects/automacao-n8n.png` e cards de apoio, preservando o conteúdo real do projeto.
- Os elementos flutuantes existentes de chat e marca permanecem como chrome funcional do produto e não fazem parte da referência visual.
- Em 900 px o header usa uma versão compacta de logo e navegação para evitar colisão horizontal.

### Correções aplicadas durante o QA

- Hero desktop inicialmente alto e estreito, com título quebrando em excesso: grade, escala tipográfica e altura da imagem foram compactadas para o breakpoint médio.
- Logo mobile inicialmente cortada: largura responsiva foi ajustada para preservar a marca em 390 px.
- Faixa de capacidades inicialmente com três colunas no desktop de 900 px: passou a usar seis colunas a partir do breakpoint médio.
- Aviso de LCP da imagem principal: imagem hero passou a carregar com prioridade.
- Aviso de comportamento de scroll do Next: atributo `data-scroll-behavior` foi incluído no elemento raiz.

## Interações verificadas

- CTA “Explorar cases”: navegou corretamente para `/projects`.
- Menu mobile: abriu com `aria-expanded=true`, exibiu o controle “Fechar menu” e fechou corretamente.
- Viewport desktop de 900 px: sem overflow horizontal.
- Viewport mobile de 390 px: sem overflow horizontal; logo, título e menu visíveis.
- Console do navegador em nova execução limpa: sem logs de erro ou warning.

## Verificações complementares

- `pnpm lint`: passou.
- `pnpm typecheck`: passou.
- `pnpm build:frontend-only`: passou.
- Build gerou as rotas públicas de início, serviços, projetos, contato, agendamento, páginas legais, `robots.txt` e `sitemap.xml`.

## Escopo de modernização visual

### Direção

Manter uma estética de engenharia premium: sóbria, quente, técnica e com bastante espaço negativo. A base deve combinar marrom café, terracota, areia, oliva escuro e marfim, usando contraste alto para leitura e CTAs.

### Tokens sugeridos

| Função | Cor | Uso |
| --- | --- | --- |
| Café profundo | `#2B211B` | Header, rodapé e superfícies de autoridade |
| Marrom carvão | `#211B17` | Texto principal e fundos escuros |
| Terracota | `#A95736` | Acentos, links ativos, bordas e detalhes |
| Argila clara | `#C98261` | Hover, indicadores e microdestaques |
| Areia | `#E7D7C6` | Cards, divisórias e fundos secundários |
| Marfim | `#F6F0E8` | Fundo principal e áreas de respiro |
| Oliva técnico | `#59624B` | Sinalização de processo e estados positivos |

### Próximas melhorias recomendadas

- Criar um sistema único de tokens para cores, raios, sombras e espaçamento.
- Evoluir os cards de serviço para microinterações de hover com deslocamento mínimo e borda terracota.
- Criar variações de composição para páginas internas mantendo o mesmo hero editorial.
- Adicionar estados de foco visíveis e consistentes a todos os elementos interativos.
- Medir Core Web Vitals em ambiente publicado após conectar as fontes e imagens definitivas.
