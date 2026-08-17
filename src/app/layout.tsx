/*
Arquivo: src/app/layout.tsx
Objetivo: Layout compartilhado entre páginas da respectiva área.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

import type { Metadata } from "next"
import "./globals.css"
import { cormorant, inter } from "@/lib/fonts"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { siteConfig } from "@/lib/site-config"
import { absoluteUrl, createPageMetadata, siteUrl } from "@/lib/seo"

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.brand.name,
      url: siteUrl,
      logo: absoluteUrl('/images/logo-arcane.webp'),
      email: siteConfig.contact.email,
      sameAs: [siteConfig.links.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteConfig.brand.name,
      url: siteUrl,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'pt-BR',
    },
  ],
}

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    path: '/',
  }),
  metadataBase: new URL("https://arcane.tech"),
  keywords: [
    "desenvolvimento de sistemas",
    "automacao de processos",
    "integracao com hardware",
    "software sob medida",
    "inteligencia artificial aplicada",
    "transformacao digital",
  ],
  authors: [{ name: siteConfig.brand.name }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} overflow-x-hidden font-inter antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
