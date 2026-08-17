/*
Arquivo: src/components/layout/header.tsx
Objetivo: Navegação principal com direção técnica e arquitetural.
*/

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'
import type { ConversionCtaConfig } from '@/lib/cta-config'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/services' },
  { label: 'Projetos', href: '/projects' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
]

export function Header({ ctas }: { ctas: ConversionCtaConfig }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isItemActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#6f4a36] bg-[#21150f] shadow-[0_20px_60px_-42px_rgba(23,13,8,0.9)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between gap-6 lg:h-[5.5rem]">
            <Link href="/" className="relative z-50 shrink-0" onClick={() => setIsOpen(false)}>
              <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
                <Image
                  src="/images/logo-arcane.webp"
                  alt="Arcane Tecnologia"
                  width={1600}
                  height={500}
                  className="block h-auto w-[178px] max-w-none brightness-0 invert sm:w-[205px] lg:w-[225px]"
                  priority
                />
              </motion.div>
            </Link>

            <div className="hidden items-center gap-7 lg:flex lg:gap-10">
              <nav className="flex items-center gap-5 lg:gap-7" aria-label="Navegação principal">
                {navItems.map((item, index) => (
                  <motion.div key={item.href} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'relative inline-flex items-center py-2 font-inter text-[10px] uppercase tracking-[0.14em] text-[#d6c0b1] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#c1835e] after:transition-all after:duration-300 lg:text-[11px]',
                        isItemActive(item.href) ? 'text-[#fffaf4] after:right-0' : 'after:right-full hover:text-[#fffaf4] hover:after:right-0'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <a
                href={ctas.whatsapp.href}
                target={ctas.whatsapp.href.startsWith('http') ? '_blank' : undefined}
                rel={ctas.whatsapp.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 border border-[#c1835e] px-4 py-2.5 font-inter text-[10px] font-semibold uppercase tracking-[0.12em] text-[#fffaf4] transition-colors hover:bg-[#c1835e] hover:text-[#21150f]"
              >
                <MessageCircle size={14} />
                Falar no WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 inline-flex h-10 w-10 items-center justify-center border border-[#8a5b43] text-[#fffaf4] transition-colors hover:bg-[#c1835e] hover:text-[#21150f] lg:hidden"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              aria-controls="site-navigation-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 lg:hidden">
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.32 }} className="absolute inset-0 bg-[#21150f]">
              <div className="flex h-full flex-col justify-between px-8 pb-10 pt-28">
                <div>
                  <span className="section-kicker text-[#d49b73]">Mapa do site</span>
                  <nav id="site-navigation-menu" className="mt-8 flex flex-col" aria-label="Navegação mobile">
                    {navItems.map((item, index) => (
                      <motion.div key={item.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 + index * 0.05 }}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'group flex items-center justify-between border-b border-[#5a3b2c] py-4 font-inter text-2xl font-semibold tracking-[-0.04em] transition-colors',
                            isItemActive(item.href) ? 'text-[#d49b73]' : 'text-[#fffaf4] hover:text-[#d49b73]'
                          )}
                        >
                          {item.label}
                          <ArrowUpRight size={18} className="opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="space-y-5">
                  <p className="max-w-md font-inter text-sm leading-relaxed text-[#d6c0b1]">Arquitetura técnica, automação e software sob medida para operações que exigem controle real.</p>
                  <ConversionCTAs ctas={ctas} primaryAction="whatsapp" secondaryAction="budget" surface="dark" className="w-full max-w-xl" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
