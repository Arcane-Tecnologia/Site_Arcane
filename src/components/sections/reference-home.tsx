/*
Arquivo: src/components/sections/reference-home.tsx
Objetivo: Homepage principal orientada pela direção arquitetural aprovada.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Box,
  Braces,
  Database,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Network,
  Search,
  Sparkles,
  Workflow,
} from 'lucide-react'
import type { ConversionCtaConfig } from '@/lib/cta-config'
import { services, serviceProcessSteps } from '@/lib/site-content/services'
import { projects, type ProjectItem } from '@/lib/site-content/projects'

interface ReferenceHomeProps {
  ctas: ConversionCtaConfig
  heroTitle: string
  heroSubtitle: string
}

const capabilityItems = [
  { label: 'Aplicações', description: 'Soluções escaláveis e de alta performance.', icon: Box },
  { label: 'Integração', description: 'Sistemas, dados e pessoas conectados.', icon: Network },
  { label: 'Dados', description: 'Modelagem, governança e inteligência.', icon: Database },
  { label: 'Segurança', description: 'Proteção, conformidade e controle.', icon: LockKeyhole },
]

const processIcons = [Search, Workflow, Network, Layers3, Braces, Sparkles]

export function ReferenceHome({ ctas, heroTitle, heroSubtitle }: ReferenceHomeProps) {
  return (
    <div className="bg-[#f7f2eb] text-[#261b16]">
      <ReferenceHero ctas={ctas} title={heroTitle} subtitle={heroSubtitle} />
      <CapabilitiesStrip />
      <ServicesSection />
      <CasesSection />
      <ProcessSection />
    </div>
  )
}

function ReferenceHero({
  ctas,
  title,
  subtitle,
}: {
  ctas: ConversionCtaConfig
  title: string
  subtitle: string
}) {
  return (
    <section className="architectural-surface relative overflow-hidden border-b border-[#d8cabc] pt-28 lg:pt-32">
      <div className="container relative mx-auto grid items-center gap-12 px-6 pb-12 md:grid-cols-[0.82fr_1.18fr] md:gap-8 md:px-8 lg:gap-14 lg:px-12 lg:pb-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 max-w-xl"
        >
          <span className="section-kicker">Arquitetura · Dados · Tecnologia</span>
          <h1 className="mt-7 max-w-xl font-inter text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.065em] text-[#261b16] sm:text-[3.8rem] md:text-[3.1rem] lg:text-[4.65rem]">
            {title}
          </h1>
          <div className="mt-7 h-px w-12 bg-[#a86842]" />
          <p className="mt-6 max-w-lg font-inter text-sm leading-7 text-[#69564a] lg:text-base">
            {subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={ctas.whatsapp.href}
              target={ctas.whatsapp.href.startsWith('http') ? '_blank' : undefined}
              rel={ctas.whatsapp.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#241710] px-5 font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-[#fffaf4] shadow-[0_18px_36px_-24px_rgba(36,23,16,0.75)] transition-all hover:-translate-y-0.5 hover:bg-[#5b3828]"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center gap-2 border border-[#9f765d] bg-transparent px-5 font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5b3828] transition-colors hover:border-[#241710] hover:bg-[#fffaf4]"
            >
              Ver cases
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="relative min-h-[20rem] overflow-hidden border border-[#d3c3b4] bg-[#eee6dd] shadow-[0_36px_80px_-48px_rgba(54,34,24,0.55)] sm:min-h-[28rem] lg:min-h-[35rem]"
        >
          <Image
            src="/images/arcane-architecture-hero.webp"
            alt="Composição arquitetural modular representando aplicações, dados e integrações"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f2eb]/30 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2 border border-[#b98a68]/50 bg-[#f7f2eb]/85 px-3 py-2 backdrop-blur-sm sm:left-6 sm:top-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a86842]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5b3828]">Sistema · 01</span>
          </div>
          <div className="absolute bottom-4 right-4 border border-[#4c3327]/20 bg-[#fffaf4]/88 px-3 py-2 backdrop-blur-sm sm:bottom-6 sm:right-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8f6045]">Estrutura modular</p>
            <p className="mt-1 font-inter text-[10px] text-[#5b3828]">Segura · escalável · integrada</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CapabilitiesStrip() {
  return (
    <section className="border-b border-[#d8cabc] bg-[#f7f2eb]">
      <div className="container mx-auto grid px-6 sm:grid-cols-2 md:grid-cols-4 lg:px-12">
        {capabilityItems.map(({ label, description, icon: Icon }, index) => (
          <div
            key={label}
            className={`flex items-start gap-4 border-[#d8cabc] px-3 py-6 sm:px-5 md:py-7 ${index > 0 ? 'border-t sm:border-t-0 sm:border-l' : ''} ${index > 1 ? 'md:border-l' : ''}`}
          >
            <Icon size={22} strokeWidth={1.25} className="mt-0.5 shrink-0 text-[#a86842]" />
            <div>
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#33231b]">{label}</p>
              <p className="mt-1 font-inter text-[10px] leading-4 text-[#786457]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="bg-[#f7f2eb] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading eyebrow="Capacidades" title="Engenharia que estrutura o futuro das empresas." />
        <div className="mt-12 grid gap-px border border-[#d8cabc] bg-[#d8cabc] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="bg-[#f7f2eb]"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full min-h-[15rem] flex-col p-6 transition-colors hover:bg-[#fffaf4] lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#a86842]">0{index + 1}</span>
                  <ArrowRight size={16} className="text-[#a86842] transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mt-12 max-w-[14rem] font-inter text-xl font-semibold leading-tight tracking-[-0.04em] text-[#33231b]">{service.title}</h3>
                <p className="mt-3 max-w-xs font-inter text-xs leading-5 text-[#786457]">{service.excerpt}</p>
                <span className="mt-auto pt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-[#a86842]">{service.category}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CasesSection() {
  return (
    <section className="border-y border-[#443027] bg-[#241710] py-20 text-[#fffaf4] lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker text-[#d49b73]">Cases selecionados</span>
            <h2 className="mt-5 font-inter text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#fffaf4] sm:text-[3.1rem]">
              Sistemas que funcionam no mundo real.
            </h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.16em] text-[#d7b49d] transition-colors hover:text-white">
            Ver todos os cases
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.filter((project) => project.featured).slice(0, 2).map((project, index) => (
            <CaseCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group grid min-h-[22rem] overflow-hidden border border-[#695044] bg-[#33231b] transition-colors hover:border-[#c18a67] sm:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[13rem] overflow-hidden sm:min-h-0">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: project.coverPosition ?? 'center center' }}
          sizes="(max-width: 640px) 100vw, 30vw"
        />
        <div className="absolute inset-0 bg-[#241710]/30" />
      </div>
      <div className="flex flex-col p-6 lg:p-7">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#d49b73]">0{index + 1} · {project.segment}</span>
        <h3 className="mt-auto max-w-sm font-inter text-2xl font-semibold leading-tight tracking-[-0.05em] text-[#fffaf4]">{project.title}</h3>
        <p className="mt-3 max-w-sm font-inter text-sm leading-6 text-[#d7b49d]">{project.excerpt}</p>
        <span className="mt-7 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#d49b73]">
          Explorar projeto
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function ProcessSection() {
  return (
    <section className="architectural-surface border-b border-[#d8cabc] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading eyebrow="Como trabalhamos" title="Clareza em cada camada do processo." />
        <div className="mt-14 grid border-l border-[#d8cabc] sm:grid-cols-2 lg:grid-cols-3">
          {serviceProcessSteps.map((step, index) => {
            const Icon = processIcons[index]
            return (
              <div key={step.number} className="relative border-b border-r border-t border-[#d8cabc] p-6 lg:min-h-[12rem] lg:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#a86842]">{step.number}</span>
                  <Icon size={19} strokeWidth={1.25} className="text-[#a86842]" />
                </div>
                <h3 className="mt-10 font-inter text-lg font-semibold tracking-[-0.03em] text-[#33231b]">{step.title.replace(' do contexto', '').replace(' do problema', '')}</h3>
                <p className="mt-2 max-w-xs font-inter text-xs leading-5 text-[#786457]">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="mt-5 font-inter text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#33231b] sm:text-[3.1rem]">{title}</h2>
    </div>
  )
}
