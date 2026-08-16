/*
Arquivo: src/app/(site)/page.tsx
Objetivo: Arquivo de código da aplicação.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

import { ReferenceHome } from '@/components/sections/reference-home'
import { getGlobalConversionCtas, mergePublishedPageContent } from '@/lib/page-content'

const homeDefaults = {
  hero_heading: 'Software, automação e IA para transformar complexidade em vantagem operacional.',
  hero_subheading:
    'Desenvolvemos software sob medida, integramos sistemas e automatizamos processos críticos para empresas que não podem parar.',
  hero_cta_label: 'Solicitar orçamento',
  hero_cta_url: '/solicitar-orcamento',
  intro_title: 'Soluções sob medida para desafios reais',
  intro_text: 'Arquitetura, automação e IA aplicadas à operação que precisa ganhar previsibilidade.',
}

export default async function Home() {
  const [homeContent, globalCtas] = await Promise.all([
    mergePublishedPageContent('home', homeDefaults),
    getGlobalConversionCtas(),
  ])

  const heroCtas = {
    ...globalCtas,
    budget: {
      label: homeContent.hero_cta_label,
      href: homeContent.hero_cta_url,
    },
  }

  return (
    <div className="bg-background">
      <ReferenceHome
        ctas={heroCtas}
        heroTitle={homeContent.hero_heading}
        heroSubtitle={homeContent.hero_subheading}
      />
    </div>
  )
}
