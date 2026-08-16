/*
Arquivo: src/components/layout/header.tsx
Objetivo: Componente estrutural de layout (ex.: header/footer).
Guia rápido: consulte imports no topo, depois tipos/constantes, e por fim a exportação principal.
*/

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'
import type { ConversionCtaConfig } from '@/lib/cta-config'
import { siteConfig } from '@/lib/site-config'

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

  // O header agora funciona como uma faixa de autoridade em café profundo,
  // então navegação e ações mantêm contraste claro em todos os estados.
  const useDarkText = false

  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b border-brand-terracotta/30 bg-[#2b211b]/95 shadow-[0_22px_80px_-44px_rgba(25,22,19,0.82)] backdrop-blur-2xl transition-all duration-500"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
            <Link href="/" className="relative z-50 shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src="/images/logo-arcane.webp"
                  alt="Arcane Tecnologia"
                  width={1600}
                  height={500}
                  className="block h-auto w-[280px] max-w-none shrink-0 brightness-0 invert sm:w-[360px] md:w-[210px] lg:w-[540px] drop-shadow-[0_0_1px_rgba(255,255,255,0.30)]"
                  priority
                />
              </motion.div>
            </Link>

            <div className="hidden items-center gap-3 md:flex lg:gap-8">
              <div
                className={cn(
                  'flex items-center gap-1 rounded-full border px-2 py-1 backdrop-blur-md transition-all duration-300',
                  useDarkText
                    ? 'border-slate-300/80 bg-white/72'
                    : 'border-white/12 bg-white/6'
                )}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'relative inline-flex items-center rounded-full px-3 py-2 font-inter text-[10px] uppercase tracking-[0.12em] transition-all duration-300 lg:px-4 lg:text-[11px] lg:tracking-[0.14em]',
                        isItemActive(item.href)
                          ? useDarkText
                            ? 'bg-[#191613] text-white shadow-[0_14px_30px_-20px_rgba(43,33,27,0.54)]'
                            : 'bg-white/10 text-white'
                          : useDarkText
                            ? 'text-slate-600 hover:bg-white hover:text-slate-950'
                            : 'text-white/74 hover:bg-white/6 hover:text-white'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href={`mailto:${siteConfig.contact.salesEmail}`}
                  className={cn(
                    'inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.18em] transition-colors',
                    useDarkText ? 'text-slate-600 hover:text-brand-cyan-strong' : 'text-white/72 hover:text-white'
                  )}
                >
                  {siteConfig.contact.salesEmail}
                  <ArrowUpRight size={12} />
                </a>
              </div>

              <ConversionCTAs
                ctas={ctas}
                compact
                primaryAction="meeting"
                secondaryAction="budget"
                surface={useDarkText ? 'light' : 'dark'}
                className="justify-end"
              />
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 md:hidden',
                useDarkText
                  ? 'border-slate-300/80 bg-white/72 text-slate-950'
                  : 'border-white/12 bg-white/6 text-white'
              )}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              aria-controls="site-navigation-menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="absolute inset-0 premium-grid section-shell-dark"
            >
              <div className="flex h-full flex-col justify-between px-8 pb-10 pt-28">
                <div>
                  <span className="section-kicker">Mapa do site</span>
                  <nav id="site-navigation-menu" className="mt-8 flex flex-col gap-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + index * 0.06 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            'group flex items-center justify-between border-b border-white/8 py-4 font-cormorant text-[2rem] tracking-[0.08em] transition-colors duration-300',
                            isItemActive(item.href)
                              ? 'text-brand-cyan'
                              : 'text-slate-300 hover:text-white'
                          )}
                        >
                          {item.label}
                          <ArrowUpRight
                            size={18}
                            className="opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="space-y-5">
                  <p className="max-w-md font-inter text-sm leading-relaxed text-slate-300">
                    Arquitetura técnica, automação e software sob medida para operações que exigem controle real.
                  </p>
                  <ConversionCTAs
                    ctas={ctas}
                    primaryAction="meeting"
                    secondaryAction="whatsapp"
                    surface="dark"
                    className="w-full max-w-xl"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
