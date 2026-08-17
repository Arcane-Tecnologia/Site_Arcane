# Café com Leite Editorial — Especificação Visual

## Objetivo

Atualizar a identidade visual de todas as páginas públicas do site Arcane para uma paleta de marrons claros, marfim, areia e bronze, criando uma percepção mais premium, quente e leve sem alterar a arquitetura, a tipografia, o conteúdo ou os fluxos de conversão existentes.

## Direção visual

- **Tom:** autoridade técnica com sofisticação editorial e calor humano.
- **Temperatura:** marrom quente, com baixa saturação e superfícies de papel claro.
- **Contraste:** café profundo para texto e seções de autoridade; bronze reservado para ações, sinais e estados ativos.
- **Ritmo:** preservar a composição atual e reduzir o peso visual de áreas quase pretas, mantendo respiro nas superfícies claras.
- **Motion:** manter as animações existentes; não adicionar novos efeitos durante esta atualização de paleta.

## Paleta aprovada

| Função | Valor | Uso |
| --- | --- | --- |
| Página | `#F5ECE2` | Fundo geral e transições suaves |
| Papel | `#FFFAF4` | Cards, formulários e superfícies elevadas |
| Areia | `#E7D5C3` | Seções alternadas e áreas de apoio |
| Café profundo | `#3F2D27` | Header, rodapé e seções escuras |
| Café médio | `#60483D` | Textos de autoridade, bordas e estados ativos |
| Bronze | `#B77956` | CTA principal, links ativos e detalhes |
| Bronze forte | `#8E5C44` | Hover e contraste de ação |
| Bronze suave | `#EBD5C5` | Badges, ícones e realces leves |
| Tinta | `#342820` | Texto principal em superfícies claras |
| Texto suave | `#4F3D32` | Texto corrido e descrições |
| Texto muted | `#7D6A5D` | Labels auxiliares e metadados |

As classes legadas `brand-cyan*` serão mantidas como aliases internos durante a mudança para evitar regressões de layout, mas passarão a renderizar a família bronze/marrom. Nenhum tom azul/ciano deve permanecer perceptível na interface.

## Escopo de aplicação

1. **Fundação global:** variáveis de cor, gradientes do body, grid decorativo, divisores, halos e shells de seção.
2. **Navegação:** header desktop e mobile, item ativo, menu, botão de menu e CTA compacto.
3. **Primeira dobra:** overlay do hero, textos, CTAs e linha de acabamento.
4. **Superfícies:** cards de serviços/projetos, painéis de formulários, badges, inputs e estados de foco.
5. **Áreas de autoridade:** footer, CTA shells, páginas de serviços, projetos, contato, sobre, termos, privacidade e cookies.
6. **Elementos persistentes:** chat flutuante, botões de conversão e componentes de interação.
7. **Hard-coded colors:** substituir os valores antigos mais escuros e os tons slate usados em superfícies públicas por tokens ou equivalentes marrons coerentes.

## Critérios de aceitação

- Todas as rotas públicas continuam acessíveis e renderizam sem erro.
- Header e hero deixam de parecer quase pretos; o contraste permanece suficiente para leitura.
- CTAs primários continuam sendo o ponto de maior contraste visual.
- Cards, formulários e rodapé compartilham a mesma linguagem de marrom, creme e bronze.
- Não há alteração de copy, URLs, fontes, estrutura de navegação ou lógica de dados.
- A home é verificada em desktop e mobile; as rotas de serviços, projetos, contato e sobre recebem uma checagem de renderização.
- `pnpm lint` e `pnpm typecheck` passam após a alteração.

