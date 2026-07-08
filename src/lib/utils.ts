/*
Arquivo: src/lib/utils.ts
Objetivo: Funções utilitárias e integrações compartilhadas.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

