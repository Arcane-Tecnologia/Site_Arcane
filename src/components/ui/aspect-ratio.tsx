/*
Arquivo: src/components/ui/aspect-ratio.tsx
Objetivo: Componente de UI reutilizável.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }

