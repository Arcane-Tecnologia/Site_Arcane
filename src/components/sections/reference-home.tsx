/*
Arquivo: src/components/sections/reference-home.tsx
Objetivo: Homepage principal orientada pela referência visual fornecida.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Cpu,
  Landmark,
  Map,
  MessageCircle,
  Network,
  Search,
  Settings2,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react'
import type { ConversionCtaConfig } from '@/lib/cta-config'
import { services, serviceProcessSteps } from '@/lib/site-content/services'
import { projects, type ProjectItem } from '@/lib/site-content/projects'
import { cn } from '@/lib/utils'

interface ReferenceHomeProps {
  ctas: ConversionCtaConfig
  heroTitle: string
  heroSubtitle: string
}

const capabilityItems = [
  { label: 'Sistemas sob medida', description: 'Soluções alinhadas ao negócio e à operação.', icon: Settings2 },
  { label: 'IA aplicada', description: 'Modelos e automações com impacto real.', icon: Sparkles },
  { label: 'Fintech', description: 'Segurança, performance e conformidade.', icon: Landmark },
  { label: 'IoT', description: 'Conectividade, telemetria e controle inteligente.', icon: Cpu },
  { label: 'Automação', description: 'Processos, RPA e workﬂows críticos.', icon: Workflow },
  { label: 'Integrações', description: 'APIs, ERPs e sistemas legados.', icon: Network },
]

const processIcons = [Search, Target, Network, Map, Code2, Sparkles]

export function ReferenceHome({ ctas, heroTitle, heroSubtitle }: ReferenceHomeProps) {
  return (
    <div className="bg-[#fffaf4] text-[#342820]">
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
    <section className="relative overflow-hidden border-b border-[#d9c8b7] bg-[#fffaf4] pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(183,121,86,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(183,121,86,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="container relative mx-auto grid items-center gap-10 px-6 pb-10 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:px-7 md:pb-10 lg:gap-10 lg:px-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 max-w-2xl md:pb-5"
        >
          <span className="section-kicker">Engenharia para operação crítica</span>
          <h1 className="mt-5 max-w-xl font-cormorant text-[2.9rem] leading-[0.98] tracking-[-0.02em] text-[#342820] sm:text-[3.6rem] md:text-[2.55rem] lg:text-[4.55rem]">
            {title}
          </h1>
          <div className="mt-6 h-px w-16 bg-[#8e5c44]" />
          <p className="mt-5 max-w-lg font-inter text-sm leading-7 text-[#5c4a3c] lg:text-base">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={ctas.whatsapp.href}
              target={ctas.whatsapp.href.startsWith('http') ? '_blank' : undefined}
              rel={ctas.whatsapp.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#8e5c44] px-5 font-inter text-[11px] font-semibold uppercase tracking-[0.13em] text-[#fff8ef] shadow-[0_18px_40px_-22px_rgba(183,121,86,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#60483d]"
            >
              <MessageCircle size={15} />
              Conversar sobre o projeto
            </a>
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#c9ad96] bg-[#fffaf4] px-5 font-inter text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8e5c44] transition-all hover:-translate-y-0.5 hover:border-[#b77956]"
            >
              Explorar cases
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-[#c9ad96] bg-[#60483d] shadow-[0_30px_80px_-42px_rgba(63,45,39,0.55)] sm:min-h-[28rem] md:min-h-[20rem] lg:min-h-[31rem]"
        >
          <Image
            src="/projects/automacao-n8n.png"
            alt="Painel operacional com automações, integrações e indicadores de leads"
            fill
            priority
            loading="eager"
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 56vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(63,45,39,0.08),rgba(63,45,39,0.42))]" />
          <div className="absolute left-4 top-4 rounded-lg border border-white/35 bg-[#fffaf4]/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:left-8 sm:top-8">
            <p className="font-inter text-[9px] uppercase tracking-[0.16em] text-[#8e5c44]">Painel operacional</p>
            <div className="mt-2 grid grid-cols-3 gap-4">
              <Metric label="Disponibilidade" value="99,97%" />
              <Metric label="Transações hoje" value="1.482" />
              <Metric label="Tempo médio" value="182 ms" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 max-w-[13rem] rounded-lg border border-[#d29b7c]/50 bg-[#211a16]/90 p-4 text-[#fff9f2] shadow-2xl backdrop-blur-md sm:bottom-8 sm:right-8">
            <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-[#e3b398]">Arquitetura de referência</p>
            <div className="mt-3 flex items-center gap-2 font-inter text-[10px] text-[#fff9f2]/85">
              <span className="rounded border border-[#d29b7c]/50 px-2 py-1">Cliente</span>
              <ArrowRight size={11} className="text-[#e3b398]" />
              <span className="rounded border border-[#d29b7c]/50 px-2 py-1">API</span>
              <ArrowRight size={11} className="text-[#e3b398]" />
              <span className="rounded border border-[#d29b7c]/50 px-2 py-1">Dados</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-inter text-[8px] text-[#75665b]">{label}</p>
      <p className="mt-1 font-cormorant text-lg leading-none text-[#342820]">{value}</p>
    </div>
  )
}

function CapabilitiesStrip() {
  return (
    <section className="border-b border-[#d9c8b7] bg-[#fffaf4]">
      <div className="container mx-auto grid grid-cols-2 px-6 py-5 sm:grid-cols-3 md:grid-cols-6 lg:px-12">
        {capabilityItems.map(({ label, description, icon: Icon }, index) => (
          <div
            key={label}
            className={cn(
              'flex items-center gap-3 border-[#e2d4c7] px-3 py-3 lg:px-4',
              index % 2 === 1 && 'border-l sm:border-l-0 lg:border-l',
              index > 1 && 'sm:border-l lg:border-l',
              index === 0 && 'sm:border-l-0'
            )}
          >
            <Icon size={21} strokeWidth={1.35} className="shrink-0 text-[#8e5c44]" />
            <div>
              <p className="font-inter text-[10px] font-semibold text-[#3c2d24]">{label}</p>
              <p className="mt-1 font-inter text-[9px] leading-4 text-[#75665b]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="bg-[#fffaf4] py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading eyebrow="Serviços" title="Soluções sob medida para desafios reais" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#decfc1] bg-[#fffaf4] shadow-[0_16px_38px_-34px_rgba(63,45,39,0.5)] transition-all hover:-translate-y-1 hover:border-[#d29b7c] hover:shadow-[0_24px_46px_-34px_rgba(183,121,86,0.45)]"
              >
                <div className="relative h-40 overflow-hidden border-b border-[#decfc1]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(63,45,39,0.5))]" />
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-[#fffaf4] px-2.5 py-1 font-inter text-[9px] uppercase tracking-[0.12em] text-[#8e5c44]">
                    {service.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-cormorant text-[1.55rem] leading-[1.05] text-[#342820]">{service.title}</h3>
                  <p className="mt-3 flex-1 font-inter text-xs leading-5 text-[#75665b]">{service.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-inter text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8e5c44]">
                    Saiba mais
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
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
    <section className="bg-[#f5ece2] py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading eyebrow="Cases selecionados" title="Resultados que geram impacto" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {featuredCases.map((project) => (
            <CaseCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-[#c9ad96] bg-[#fffaf4] px-5 py-3 font-inter text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8e5c44] transition-colors hover:border-[#b77956]"
          >
            Ver todos os cases
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

const featuredCases: ProjectItem[] = projects.filter((project) => project.featured).slice(0, 4)

function CaseCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group overflow-hidden rounded-xl border border-[#d5c2b0] bg-[#fffaf4] shadow-[0_14px_34px_-30px_rgba(63,45,39,0.46)] transition-all hover:-translate-y-1 hover:border-[#d29b7c]"
    >
      <div className="relative h-36 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: project.coverPosition ?? 'center center' }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#8e5c44] px-2.5 py-1 font-inter text-[9px] font-semibold uppercase tracking-[0.12em] text-[#fff8ef]">
          {project.segment}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-cormorant text-[1.35rem] leading-[1.05] text-[#342820]">{project.title}</h3>
        <p className="mt-3 line-clamp-3 font-inter text-xs leading-5 text-[#75665b]">{project.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-inter text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8e5c44]">
          Ver case completo
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function ProcessSection() {
  return (
    <section className="bg-[#f7efe5] py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading eyebrow="Como trabalhamos" title="Processo claro, engenharia consistente" />
        <div className="mt-10 grid gap-7 sm:grid-cols-2 md:grid-cols-6">
          {serviceProcessSteps.map((step, index) => {
            const Icon = processIcons[index]
            return (
              <div key={step.number} className="relative text-center">
                {index < serviceProcessSteps.length - 1 ? (
                  <span className="absolute left-[calc(50%+2.1rem)] right-[calc(-50%-2.1rem)] top-9 hidden border-t border-dashed border-[#d29b7c] lg:block" />
                ) : null}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d5b69c] bg-[#fffaf4] text-[#8e5c44] shadow-sm">
                  <Icon size={22} strokeWidth={1.35} />
                </div>
                <p className="mt-3 font-cormorant text-lg text-[#8e5c44]">{step.number}</p>
                <h3 className="mt-1 font-cormorant text-[1.22rem] leading-none text-[#342820]">{step.title.replace(' do contexto', '').replace(' do problema', '')}</h3>
                <p className="mt-2 font-inter text-[11px] leading-4 text-[#75665b]">{step.description}</p>
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
    <div className="text-center">
      <span className="section-kicker justify-center">{eyebrow}</span>
      <h2 className="mt-3 font-cormorant text-[2.25rem] leading-none text-[#342820] sm:text-[2.7rem]">{title}</h2>
    </div>
  )
}
