/*
Arquivo: src/components/ui/floating-chat.tsx
Objetivo: Componente de UI reutilizável.
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import type { ConversionActionConfig } from '@/lib/cta-config'
import { defaultConversionCtas } from '@/lib/cta-config'
import { siteConfig } from '@/lib/site-config'

interface FloatingChatProps {
  action?: ConversionActionConfig
}

export function FloatingChat({ action = defaultConversionCtas.whatsapp }: FloatingChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isExternalAction = action.href.startsWith('http')
  const isWhatsAppAction = action.href.includes('wa.me')

  return (
    <>
      <motion.button
        type="button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 220 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-brand-terracotta/40 bg-[linear-gradient(135deg,#3f2d27_0%,#60483d_52%,#8e5c44_140%)] text-brand-terracotta shadow-[0_26px_70px_-24px_rgba(63,45,39,0.58)] transition-all hover:-translate-y-0.5 hover:shadow-[0_32px_80px_-24px_rgba(183,121,86,0.42)]"
        aria-label={isOpen ? 'Fechar conversa' : 'Abrir conversa'}
        aria-expanded={isOpen}
        aria-controls="floating-chat-panel"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <FaWhatsapp size={25} />
              <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] text-[#342820]">
                <Sparkles size={9} />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="floating-chat-panel"
            role="dialog"
            aria-label="Atendimento comercial"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[22rem] overflow-hidden rounded-[1.75rem] border border-brand-terracotta/20 bg-[#3f2d27] shadow-[0_40px_90px_-40px_rgba(63,45,39,0.68)]"
          >
            <div className="bg-[radial-gradient(circle_at_top_left,rgba(210,155,124,0.24),transparent_32%),linear-gradient(135deg,#3f2d27_0%,#60483d_56%,#8e5c44_150%)] px-5 py-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <FaWhatsapp size={22} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-inter text-sm font-medium text-white">
                    {siteConfig.brand.name}
                  </h3>
                  <p className="mt-1 font-inter text-xs leading-relaxed text-white/78">
                    {isWhatsAppAction
                      ? 'Atendimento comercial para diagnóstico técnico e próximos passos.'
                      : 'Canal rápido para abrir uma conversa comercial com o time da Arcane.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#3f2d27] p-5">
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-sm leading-relaxed text-brand-ivory/86">
                  {isWhatsAppAction
                    ? 'Conte rapidamente o contexto da sua operação, o problema central e o nível de urgência.'
                    : 'Abra um contato comercial rápido para compartilhar contexto, objetivo e urgência do projeto.'}
                </p>
                <span className="mt-3 block font-inter text-[10px] uppercase tracking-[0.16em] text-brand-sand/62">
                  Resposta inicial em até 1 hora útil
                </span>
              </div>

              {isExternalAction ? (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-brand-terracotta/70 bg-[linear-gradient(135deg,#d29b7c_0%,#b77956_58%,#8e5c44_150%)] px-4 py-3 font-inter text-sm font-semibold text-white shadow-[0_22px_52px_-28px_rgba(183,121,86,0.5)] transition-all hover:-translate-y-0.5 hover:text-white"
                >
                  <FaWhatsapp size={18} />
                  {action.label}
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <Link
                  href={action.href}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-brand-terracotta/70 bg-[linear-gradient(135deg,#d29b7c_0%,#b77956_58%,#8e5c44_150%)] px-4 py-3 font-inter text-sm font-semibold text-white shadow-[0_22px_52px_-28px_rgba(183,121,86,0.5)] transition-all hover:-translate-y-0.5 hover:text-white"
                >
                  <FaWhatsapp size={18} />
                  {action.label}
                  <ArrowUpRight size={14} />
                </Link>
              )}

              <p className="mt-3 text-center font-inter text-[10px] text-brand-sand/62">
                {isExternalAction ? 'Abre o canal em uma nova aba' : 'Abre o canal diretamente no site'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
