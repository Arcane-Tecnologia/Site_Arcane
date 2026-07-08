/*
Arquivo: src/components/providers/theme-provider.tsx
Objetivo: Provider global de contexto para a aplicação.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

