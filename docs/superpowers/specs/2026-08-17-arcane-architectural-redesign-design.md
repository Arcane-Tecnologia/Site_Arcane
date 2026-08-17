# Direção visual arquitetural da Arcane

## Decisão

Aplicar ao site a direção da referência arquitetural aprovada: uma presença técnica, precisa e contemporânea, com fundo marfim, navegação em café profundo, linhas finas, tipografia de alto contraste e um visual central inspirado em sistemas modulares.

## Tese visual

- **Autoridade técnica:** o layout deve parecer uma empresa que projeta sistemas críticos, não um SaaS genérico.
- **Calma editorial:** mais espaço, menos ornamento, menos cartões arredondados e uma hierarquia tipográfica mais clara.
- **Arquitetura como metáfora:** grids, módulos, diagramas e divisórias devem apoiar a mensagem sem competir com ela.
- **Conversão direta:** WhatsApp é a ação primária; orçamento e reunião permanecem acessíveis como caminhos secundários.

## Escopo

- Evoluir tokens globais de cor, superfície, raio, borda e textura sem remover a identidade marrom premium.
- Reestruturar header e footer compartilhados para a linguagem da referência.
- Reorganizar a homepage em hero assimétrico, faixa de capacidades, serviços, cases e processo.
- Usar um visual arquitetural dedicado no hero, com carregamento otimizado e alt text descritivo.
- Preservar rotas, conteúdo publicado, formulários, SEO, acessibilidade, WhatsApp e comportamento mobile.

## Fora de escopo

- Alterar banco de dados, autenticação ou regras de negócio.
- Reescrever o conteúdo de páginas internas sem necessidade visual.
- Substituir o logotipo ou criar uma nova identidade de marca.

## Critérios de aceitação

- Home e shell compartilhado comunicam a referência no primeiro viewport desktop e mobile.
- Header, CTA, links, foco visível e contraste permanecem acessíveis.
- Nenhuma rota pública quebra e o build continua reproduzível sem `DATABASE_URL`.
- Imagens continuam usando `next/image`, com `sizes`, dimensões e lazy loading adequados.
- A direção visual fica registrada e é validada no navegador antes do commit final.
