/*
Arquivo: src/lib/fonts.ts
Objetivo: Funções utilitárias e integrações compartilhadas.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'

// Fonte elegante para títulos e textos destacados
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Fonte moderna para corpo de texto
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// Fonte sofisticada alternativa para títulos
export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

