/*
Arquivo: src/lib/fonts.ts
Objetivo: Funções utilitárias e integrações compartilhadas.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

import { Cormorant_Garamond, Inter } from 'next/font/google'

// Fonte elegante para títulos e textos destacados
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Fonte moderna para corpo de texto
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})


