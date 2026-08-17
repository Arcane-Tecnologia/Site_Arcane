/*
Arquivo: src/components/ui/button.tsx
Objetivo: Componente de UI reutilizável.
Guia rápido: imports, variantes visuais e exportação do componente.
*/

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border border-brand-cyan-strong bg-brand-cyan-strong text-white shadow-[0_24px_60px_-28px_rgba(183,121,86,0.42)] hover:-translate-y-0.5 hover:bg-brand-graphite hover:border-brand-graphite hover:text-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-line-subtle bg-white/70 text-[#3f2d27] shadow-[0_18px_44px_-34px_rgba(63,45,39,0.2)] backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-white",
        secondary:
          "border border-white/12 bg-[#3f2d27]/84 text-brand-ivory shadow-[0_24px_60px_-38px_rgba(63,45,39,0.68)] hover:-translate-y-0.5 hover:border-brand-cyan/60 hover:text-brand-cyan",
        ghost:
          "text-[#4f3d32] hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        premium:
          "border border-brand-terracotta/70 bg-[linear-gradient(135deg,#8e5c44_0%,#60483d_55%,#3f2d27_140%)] text-white shadow-[0_28px_70px_-30px_rgba(183,121,86,0.5)] hover:-translate-y-0.5 hover:shadow-[0_34px_78px_-28px_rgba(183,121,86,0.64)]",
        "premium-secondary":
          "border border-white/14 bg-white/8 text-white shadow-[0_24px_70px_-44px_rgba(0,0,0,0.62)] backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-cyan/55 hover:bg-white/12 hover:text-brand-ice",
      },
      size: {
        default: "h-11 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-12 px-7 has-[>svg]:px-5",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

