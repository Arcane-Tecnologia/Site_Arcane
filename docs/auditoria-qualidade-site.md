# Auditoria de qualidade do site Arcane

**Data:** 17/08/2026  
**Ambiente:** build e servidor de produção local (`localhost`)  
**Escopo:** aplicação Next.js, rotas públicas, assets, SEO, acessibilidade, headers e schema Prisma.

## Resumo executivo

O build frontend-only foi concluído com sucesso e as rotas públicas geradas pelo sitemap responderam localmente. A base de SEO, semântica HTML, sitemap, robots.txt e fontes está presente. Foram identificadas correções acionáveis em otimização de imagens, cache de assets, contraste, hierarquia de headings e headers de segurança.

HTTPS/SSL, CDN, Brotli, indexação no Google e métricas reais de servidor/banco dependem do ambiente publicado e não podem ser comprovados pelo servidor local.

## Checklist inicial

| Item | Status inicial | Evidência local |
| --- | --- | --- |
| Velocidade de carregamento | Parcial | FCP 432 ms, TTFB 268 ms e LCP 1.116 ms em Chromium local |
| Core Web Vitals | Parcial | CLS 0; INP não mensurado por falta de interação qualificada |
| Responsividade mobile | A validar | Requer execução nos viewports mobile e tablet |
| Compatibilidade entre navegadores | A validar | Requer Chromium, Firefox e WebKit |
| Otimização de imagens | Ajuste necessário | `images.unoptimized` estava ativo |
| Minificação CSS/JavaScript | Parcial | Build de produção concluído; bundles ainda precisam de inspeção final |
| Cache do navegador e servidor | Ajuste necessário | HTML tem cache; imagens públicas usavam `max-age=0` |
| Compressão GZIP/Brotli | Parcial | GZIP confirmado localmente; Brotli depende da infraestrutura publicada |
| Uso de CDN | Não verificável | Depende do provedor de produção |
| Otimização de fontes | Parcial | `next/font` e `display: swap` presentes; pesos precisam de revisão |
| Estrutura HTML semântica | Parcial | `header`, `nav`, `main` e `footer` presentes; heading order com falha |
| SEO técnico | Parcial | Metadata, canonical, Open Graph, Twitter e JSON-LD presentes |
| Indexação no Google | Não verificável | Requer Search Console ou consulta pública após deploy |
| Sitemap XML | Confirmado localmente | `/sitemap.xml` responde 200 e lista as rotas públicas |
| Arquivo robots.txt | Confirmado localmente | `/robots.txt` responde 200 com sitemap declarado |
| Links quebrados e erros 404 | Parcial | Rotas do sitemap respondem 200; crawl completo ainda necessário |
| Redirecionamentos 301/302 | Parcial | Normalização de trailing slash usa 308; não há regras próprias |
| Segurança HTTPS/SSL | Não verificável | Requer domínio publicado |
| Acessibilidade | Ajuste necessário | axe apontou contraste e ordem de headings |
| Performance do servidor e banco | Parcial | Banco não configurado localmente; query de leads ordena por `createdAt` |

## Comandos de verificação

```text
pnpm lint
pnpm typecheck
pnpm test:regressions
pnpm build:frontend-only
```

Para repetir a auditoria visual, iniciar o servidor de produção local e verificar as rotas públicas com um navegador automatizado em Chromium, Firefox e WebKit. Medir Core Web Vitals, executar axe, testar teclado/foco, verificar `prefers-reduced-motion`, extrair links internos e conferir status HTTP de cada rota.

## Pendências dependentes de produção

- Confirmar certificado SSL, redirecionamento HTTP → HTTPS e HSTS no domínio publicado.
- Confirmar CDN, cache de edge e negociação Brotli.
- Confirmar indexação e cobertura no Google Search Console.
- Medir TTFB, LCP, INP e consultas do banco com tráfego e dados reais.

## Resultado final da implementação

### Checklist final

| Item | Resultado final | Evidência |
| --- | --- | --- |
| Velocidade de carregamento | Validado localmente | Produção local: FCP 272 ms, LCP 272 ms e TTFB 5,4 ms |
| Core Web Vitals | Parcialmente validado | CLS 0; INP não mensurado por ausência de interação qualificada |
| Responsividade mobile | Validado | Viewport 390×844 sem overflow em home, contato, serviços e projetos |
| Compatibilidade entre navegadores | Parcial | Chromium validado; Firefox, Edge e WebKit não estavam disponíveis no ambiente |
| Otimização de imagens | Corrigido | Next Image ativo, `sizes` revisado e resposta AVIF confirmada |
| Minificação CSS/JavaScript | Validado pelo build | Build de produção concluído sem erro |
| Cache do navegador e servidor | Corrigido | `/images/*` com `max-age=86400` e stale-while-revalidate |
| Compressão GZIP/Brotli | Parcial | GZIP confirmado localmente; Brotli depende do provedor publicado |
| Uso de CDN | Não verificável localmente | Depende do ambiente de produção |
| Otimização de fontes | Corrigido | Playfair removida por não uso; pesos reduzidos e `display: swap` mantido |
| Estrutura HTML semântica | Corrigido | Hierarquia do footer ajustada para headings de terceiro nível |
| SEO técnico | Validado localmente | Metadata, canonical, Open Graph, Twitter Cards e JSON-LD presentes |
| Indexação no Google | Não verificável localmente | Requer Search Console ou domínio publicado |
| Sitemap XML | Validado | 25 rotas listadas e todas responderam HTTP 200 |
| Arquivo robots.txt | Validado | `/robots.txt` responde 200 com sitemap declarado |
| Links quebrados e erros 404 | Validado no inventário público | Rotas do sitemap 25/25 em 200; rota inexistente em 404 |
| Redirecionamentos 301/302 | Validado | Trailing slash normalizado com 308 permanente |
| Segurança HTTPS/SSL | Não verificável localmente | Requer domínio publicado |
| Acessibilidade | Corrigido localmente | axe sem violações em home, contato, serviços e projetos |
| Performance do servidor e banco | Parcialmente corrigido | Índice `Contact.createdAt` criado; métricas reais dependem de `DATABASE_URL` |

### Headers e entrega

O servidor de produção local confirmou:

- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `Permissions-Policy` restringindo câmera, microfone e geolocalização;
- HSTS configurado para produção;
- CSP configurada e página carregando sem erros de aplicação;
- GZIP ativo;
- `X-Powered-By` removido;
- imagem otimizada em AVIF pelo endpoint do Next.

### Commits produzidos

- `f776771 docs: add site quality audit baseline`
- `b0fe642 perf: optimize images fonts and asset caching`
- `b224ff7 fix: resolve accessibility and semantic heading issues`
- `8d430d5 security: harden response headers and database indexing`
- `289321e fix: harden mobile accessibility contrast`

### Observações de execução

O build em modo frontend-only registra apenas os avisos esperados de `DATABASE_URL` ausente e de dados desatualizados do `baseline-browser-mapping`. Esses avisos não impediram lint, typecheck, regressions ou build.
