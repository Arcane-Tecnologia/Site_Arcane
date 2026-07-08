/*
Arquivo: src/app/(site)/layout.tsx
Objetivo: Layout compartilhado entre páginas da respectiva área.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GDPRBanner } from "@/components/ui/gdpr-banner"
import { FloatingChat } from "@/components/ui/floating-chat"
import { getGlobalConversionCtas } from '@/lib/page-content'

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ctas = await getGlobalConversionCtas()

  return (
    <>
      <Header ctas={ctas} />
      <main className="overflow-x-clip">{children}</main>
      <Footer ctas={ctas} />
      <FloatingChat action={ctas.whatsapp} />
      <GDPRBanner />
    </>
  )
}
