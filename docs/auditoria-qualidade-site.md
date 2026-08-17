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
