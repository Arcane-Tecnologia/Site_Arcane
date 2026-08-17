'use client'

import Link from 'next/link'
import { CalendarDays, FileText, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ConversionActionConfig, ConversionCtaConfig } from '@/lib/cta-config'
import { defaultConversionCtas } from '@/lib/cta-config'

type ConversionAction = 'budget' | 'meeting' | 'whatsapp'
type ConversionSurface = 'light' | 'dark'

interface ConversionCTAsProps {
  ctas?: ConversionCtaConfig
  className?: string
  compact?: boolean
  primaryAction?: ConversionAction
  secondaryAction?: ConversionAction
  surface?: ConversionSurface
}

type ActionButtonConfig = ConversionActionConfig & {
  icon: typeof FileText
  kind: 'link' | 'external'
}

export function ConversionCTAs({
  ctas = defaultConversionCtas,
  className,
  compact = false,
  primaryAction = 'budget',
  secondaryAction = 'meeting',
  surface = 'dark',
}: ConversionCTAsProps) {
  const actionConfig: Record<ConversionAction, ActionButtonConfig> = {
    budget: {
      ...ctas.budget,
      icon: FileText,
      kind: ctas.budget.href.startsWith('http') ? 'external' : 'link',
    },
    meeting: {
      ...ctas.meeting,
      icon: CalendarDays,
      kind: ctas.meeting.href.startsWith('http') ? 'external' : 'link',
    },
    whatsapp: {
      ...ctas.whatsapp,
      icon: MessageCircle,
      kind: ctas.whatsapp.href.startsWith('http') ? 'external' : 'link',
    },
  }

  const wrapperClasses = compact
    ? 'flex flex-wrap items-center gap-2'
    : 'flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3'

  const primary = primaryAction === 'meeting' ? null : actionConfig[primaryAction]
  const secondary = secondaryAction === 'meeting' ? null : actionConfig[secondaryAction]

  const baseClasses = compact
    ? 'h-10 px-4 text-[11px] tracking-[0.1em]'
    : 'h-12 px-6 text-[11px] tracking-[0.14em]'

  const primaryClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-full border font-inter font-semibold uppercase transition-all duration-300',
    baseClasses,
    surface === 'light'
      ? 'border-brand-cyan-strong bg-brand-cyan-strong text-white shadow-[0_22px_56px_-26px_rgba(183,121,86,0.42)] hover:-translate-y-0.5 hover:bg-brand-graphite hover:border-brand-graphite hover:text-white'
      : 'border-brand-terracotta/70 bg-[linear-gradient(135deg,#8e5c44_0%,#60483d_58%,#3f2d27_150%)] text-white shadow-[0_24px_66px_-28px_rgba(183,121,86,0.5)] hover:-translate-y-0.5 hover:shadow-[0_30px_74px_-28px_rgba(183,121,86,0.64)]'
  )

  const secondaryClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-full border font-inter font-semibold uppercase transition-all duration-300',
    baseClasses,
    surface === 'light'
      ? 'border-[#d8c1ae]/85 bg-[#fffaf4]/78 text-[#342820] shadow-[0_18px_44px_-30px_rgba(63,45,39,0.18)] backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-brand-cyan-strong'
      : 'border-brand-ivory/18 bg-[#3f2d27]/72 text-brand-ivory shadow-[0_22px_60px_-36px_rgba(63,45,39,0.72)] backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-cyan/60 hover:text-brand-cyan'
  )

  return (
    <div className={cn(wrapperClasses, className)}>
      {primary && <ActionButton action={primary} className={primaryClasses} compact={compact} />}
      {secondary && <ActionButton action={secondary} className={secondaryClasses} compact={compact} />}
    </div>
  )
}

function ActionButton({
  action,
  className,
  compact,
}: {
  action: ActionButtonConfig
  className: string
  compact: boolean
}) {
  const Icon = action.icon

  if (action.kind === 'external') {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <Icon size={compact ? 13 : 14} />
        {action.label}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className}>
      <Icon size={compact ? 13 : 14} />
      {action.label}
    </Link>
  )
}
