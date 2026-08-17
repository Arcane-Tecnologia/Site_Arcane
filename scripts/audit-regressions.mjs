import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)

async function source(path) {
  return readFile(new URL(path, root), 'utf8')
}

async function exists(path) {
  try {
    await access(new URL(path, root))
    return true
  } catch {
    return false
  }
}

assert.equal(await exists('./src/app/robots.ts'), true, 'robots.ts deve existir')
assert.equal(await exists('./src/app/sitemap.ts'), true, 'sitemap.ts deve existir')

const rootLayout = await source('./src/app/layout.tsx')
const globals = await source('./src/app/globals.css')
const nextConfig = await source('./next.config.ts')
const fonts = await source('./src/lib/fonts.ts')
const sitemap = await source('./src/app/sitemap.ts')
const prismaSchema = await source('./prisma/schema.prisma')
const securityMigrationPath = './prisma/migrations/20260817120000_add_contact_created_at_index/migration.sql'
const hasSecurityMigration = await exists(securityMigrationPath)
const header = await source('./src/components/layout/header.tsx')
const footer = await source('./src/components/layout/footer.tsx')
const referenceHome = await source('./src/components/sections/reference-home.tsx')
const chat = await source('./src/components/ui/floating-chat.tsx')
const gdpr = await source('./src/components/ui/gdpr-banner.tsx')
const leadForm = await source('./src/components/sections/contact-lead-page.tsx')
const supportForm = await source('./src/components/sections/contact-support-page.tsx')
const projectDetail = await source('./src/app/(site)/projects/[slug]/page.tsx')
const privacy = await source('./src/app/(site)/privacy/page.tsx')
const ollamaCase = await source('./src/app/(site)/projects/automacao-ollama-n8n-evolution/page.tsx')

assert.match(rootLayout, /createPageMetadata/, 'layout deve usar metadata com canonical')
assert.match(rootLayout, /application\/ld\+json/, 'layout deve publicar dados estruturados')
assert.doesNotMatch(nextConfig, /unoptimized:\s*true/, 'imagens devem usar o otimizador do Next')
assert.match(nextConfig, /formats:\s*\[\s*['"]image\/avif['"],\s*['"]image\/webp['"]\s*\]/, 'imagens devem negociar formatos modernos')
assert.match(nextConfig, /source:\s*['"]\/images\/\:path\*['"]/, 'imagens públicas devem ter política de cache explícita')
assert.match(fonts, /Cormorant_Garamond\(\{[\s\S]*weight:\s*\[['"]400['"],\s*['"]500['"],\s*['"]600['"],\s*['"]700['"]\]/, 'Cormorant deve carregar apenas pesos usados')
assert.doesNotMatch(fonts, /Playfair_Display/, 'fonte não utilizada não deve ser carregada')
assert.match(sitemap, /contentLastModified/, 'sitemap deve usar a data de conteúdo centralizada')
assert.match(header, /siteConfig\.contact\.salesEmail[\s\S]*text-brand-ivory(?!\/)/, 'e-mail do header deve manter contraste integral')
assert.doesNotMatch(referenceHome, /text-\[#b77956\]/, 'texto bronze em superfícies claras deve usar tom com contraste')
assert.doesNotMatch(referenceHome, /bg-\[#b77956\][\s\S]*text-\[#fff8ef\]/, 'badges bronze devem usar fundo com contraste AA')
assert.doesNotMatch(footer, /<h4\b/, 'seções do footer não devem saltar a hierarquia de headings')
assert.match(footer, /<h3\b/, 'seções do footer devem usar heading de terceiro nível')
assert.match(globals, /:focus-visible/, 'elementos focáveis devem ter indicador visual')
assert.match(globals, /prefers-reduced-motion/, 'animações devem respeitar redução de movimento')
assert.match(nextConfig, /poweredByHeader:\s*false/, 'Next não deve expor X-Powered-By')
assert.match(nextConfig, /X-Content-Type-Options[\s\S]*nosniff/, 'headers devem bloquear MIME sniffing')
assert.match(nextConfig, /Referrer-Policy[\s\S]*strict-origin-when-cross-origin/, 'referrer policy deve limitar vazamento de origem')
assert.match(nextConfig, /Permissions-Policy[\s\S]*camera=\(\), microphone=\(\), geolocation=\(\)/, 'permissões sensíveis devem ser desabilitadas')
assert.match(nextConfig, /Strict-Transport-Security[\s\S]*max-age=31536000/, 'HSTS deve ser enviado em produção')
assert.match(nextConfig, /Content-Security-Policy/, 'CSP deve restringir origens de script, imagem e conexão')
assert.match(prismaSchema, /model Contact[\s\S]*@@index\(\[createdAt\]\)/, 'Contact deve indexar listagem cronológica')
assert.equal(hasSecurityMigration, true, 'migração de índice de Contact deve existir')
if (hasSecurityMigration) {
  const securityMigration = await source(securityMigrationPath)
  assert.match(securityMigration, /CREATE INDEX[\s\S]*Contact[\s\S]*createdAt/, 'migração deve criar índice de createdAt')
}
assert.match(projectDetail, /generateMetadata/, 'cases dinâmicos devem ter metadata própria')
assert.match(globals, /--brand-clay:\s*#b77956/i, 'tokens terrosos devem existir')
assert.match(chat, /aria-expanded=\{isOpen\}/, 'chat deve expor aria-expanded')
assert.match(chat, /aria-label=\{isOpen \? 'Fechar conversa' : 'Abrir conversa'\}/, 'chat deve expor label de estado')
assert.match(gdpr, /aria-label="Fechar configurações de cookies"/, 'close de cookies deve ter nome acessível')
assert.match(leadForm, /htmlFor=\{fieldId\}/, 'formulário comercial deve associar label e campo')
assert.match(supportForm, /htmlFor=\{fieldId\}/, 'formulário de contato deve associar label e campo')
assert.match(privacy, /até 15 dias úteis/, 'copy de privacidade deve usar minúscula')
assert.match(ollamaCase, /Ollama é utilizado|Camada Ollama utilizada/, 'copy do case deve ter construção gramatical completa')

console.log('audit regressions: PASS')
