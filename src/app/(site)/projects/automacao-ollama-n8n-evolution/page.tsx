import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
  Zap,
  Workflow,
  BrainCircuit,
  MessageSquare,
  Clock,
  Filter,
  Eye,
  DollarSign,
  Database,
  Building2,
  Stethoscope,
  Home,
  Wrench,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Lightbulb,
  MapPin,
} from 'lucide-react'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Case de Automação com IA para Geração de Leads | Arcane Tecnologia',
    description:
      'Conheça o projeto de integração entre Ollama, n8n e Evolution API para geração e qualificação de leads via WhatsApp, com automação inteligente e IA local.',
    path: '/projects/automacao-ollama-n8n-evolution',
    type: 'article',
  }),
  description:
    'Conheça o projeto de integração entre Ollama, n8n e Evolution API para geração e qualificação de leads via WhatsApp, com automação inteligente e IA local.',
  keywords: [
    'automação com IA',
    'n8n',
    'Ollama',
    'Evolution API',
    'WhatsApp',
    'geração de leads',
    'CRM',
    'automação comercial',
    'IA local',
    'Arcane Tecnologia',
  ],
}

const flowSteps = [
  { label: 'WhatsApp', icon: MessageSquare },
  { label: 'Evolution API', icon: Zap },
  { label: 'n8n', icon: Workflow },
  { label: 'Ollama', icon: BrainCircuit },
  { label: 'Classificação', icon: Filter },
  { label: 'CRM / Equipe', icon: Database },
]

const detailedSteps = [
  'Lead envia mensagem pelo WhatsApp.',
  'Evolution API captura o evento.',
  'n8n recebe e organiza os dados.',
  'Ollama interpreta a intenção da conversa.',
  'IA classifica o lead.',
  'Sistema envia a resposta inicial.',
  'Lead qualificado é encaminhado para CRM ou equipe comercial.',
]

const architectureSteps = [
  'Usuário no WhatsApp',
  'Evolution API',
  'Webhook no n8n',
  'Tratamento e normalização da mensagem',
  'Envio para Ollama',
  'Classificação da intenção',
  'Resposta automática ou encaminhamento humano',
  'CRM / Planilha / Banco de Dados / Notificação Comercial',
]

const functionalities = [
  'Captura automática de mensagens do WhatsApp.',
  'Identificação do contato e contexto da conversa.',
  'Processamento do payload via n8n.',
  'Análise da intenção da mensagem com Ollama.',
  'Classificação do lead por interesse, urgência e tipo de demanda.',
  'Geração de resposta inicial automatizada.',
  'Encaminhamento para atendimento humano quando necessário.',
  'Registro do lead em CRM, planilha ou banco de dados.',
  'Possibilidade de notificação para equipe comercial.',
  'Fluxo adaptável para diferentes tipos de negócio.',
]

const aiRoles = [
  'Identificação da intenção do cliente.',
  'Classificação do estágio do lead.',
  'Detecção de urgência.',
  'Separação entre dúvida, orçamento, suporte ou compra.',
  'Geração de resposta inicial contextual.',
  'Apoio na decisão de encaminhar ou não para atendimento humano.',
]

const benefits = [
  { icon: Clock, title: 'Resposta mais rápida', text: 'O atendimento inicial pode acontecer de forma automatizada, reduzindo o tempo entre o primeiro contato e a primeira resposta.' },
  { icon: Filter, title: 'Leads mais organizados', text: 'As mensagens deixam de ficar soltas no WhatsApp e passam a ser registradas em um fluxo comercial.' },
  { icon: BrainCircuit, title: 'Qualificação automática', text: 'A IA ajuda a separar contatos por intenção, interesse e prioridade.' },
  { icon: Workflow, title: 'Menos trabalho manual', text: 'A equipe reduz tarefas repetitivas e foca nos contatos com maior potencial.' },
  { icon: Eye, title: 'Mais contexto comercial', text: 'O vendedor recebe informações estruturadas antes de iniciar o atendimento.' },
  { icon: DollarSign, title: 'Controle de custos', text: 'O uso de IA local com Ollama reduz dependência de APIs externas e permite maior previsibilidade.' },
]

const localAiBenefits = [
  'Maior controle sobre os dados processados.',
  'Redução de dependência de APIs externas.',
  'Possibilidade de personalizar prompts e regras.',
  'Previsibilidade de custos.',
  'Flexibilidade técnica para evoluir o projeto.',
  'Integração com infraestrutura própria ou VPS.',
]

const useCases = [
  { icon: Briefcase, label: 'Prestadores de serviço' },
  { icon: Stethoscope, label: 'Clínicas e consultórios' },
  { icon: Home, label: 'Imobiliárias' },
  { icon: Wrench, label: 'Oficinas e assistência técnica' },
  { icon: GraduationCap, label: 'Escolas e cursos' },
  { icon: ShoppingCart, label: 'E-commerces' },
  { icon: Building2, label: 'Empresas B2B' },
  { icon: Lightbulb, label: 'Agências e consultorias' },
  { icon: MapPin, label: 'Negócios locais que vendem pelo WhatsApp' },
  { icon: Filter, label: 'PMEs que precisam organizar atendimento e pré-vendas' },
]

const expectedResults = [
  'Mais velocidade no atendimento inicial.',
  'Melhor organização dos leads.',
  'Menos perda de oportunidades.',
  'Mais clareza sobre o perfil dos contatos.',
  'Priorização de leads com maior intenção de compra.',
  'Base comercial mais preparada para follow-up.',
  'Processo mais escalável para o time de vendas.',
]

const problemPoints = [
  'Contatos chegam sem organização.',
  'Leads não são classificados por intenção.',
  'O tempo de resposta depende da disponibilidade humana.',
  'A equipe comercial recebe mensagens sem contexto.',
  'Não existe histórico estruturado para análise.',
  'O CRM ou planilha fica desatualizado.',
  'Oportunidades comerciais podem ser perdidas.',
]

const stackCards = [
  { title: 'Evolution API', text: 'Responsável pela integração com WhatsApp, permitindo capturar mensagens recebidas, enviar respostas e conectar o canal de atendimento ao fluxo automatizado.' },
  { title: 'n8n', text: 'Plataforma de automação usada para orquestrar o fluxo, conectar serviços, aplicar regras de negócio e organizar o caminho da conversa até a qualificação do lead.' },
  { title: 'Ollama', text: 'Camada de IA local utilizada para interpretar mensagens, identificar intenção, classificar leads e gerar respostas iniciais com maior controle de custo e dados.' },
  { title: 'CRM / Base Comercial', text: 'Destino final das informações qualificadas, permitindo que o time comercial acompanhe oportunidades com mais contexto e organização.' },
]

const overviewCards = [
  { icon: MessageSquare, title: 'Canal de entrada', text: 'WhatsApp integrado via Evolution API para captura e envio de mensagens.' },
  { icon: Workflow, title: 'Orquestração', text: 'n8n responsável pelo fluxo, regras, integrações e encaminhamentos.' },
  { icon: BrainCircuit, title: 'Inteligência', text: 'Ollama é utilizado para interpretação, classificação e geração de respostas com IA local.' },
]

export default function AutomacaoOllamaN8nEvolutionPage() {
  return (
    <>
      {/* 1. Hero do projeto */}
      <section className="section-shell-dark premium-grid relative overflow-hidden pt-28 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,155,124,0.22),transparent_24%)]" />
        <div className="container relative z-10 mx-auto px-6 pb-16 lg:px-12 lg:pb-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-brand-cyan"
          >
            <ArrowLeft size={12} />
            Voltar para projetos
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan backdrop-blur-sm">
                IA &amp; Automação
              </span>
              <h1 className="mt-5 font-cormorant text-[2.6rem] leading-[0.98] text-white sm:text-[3.4rem] lg:text-[4rem]">
                Integração Ollama, n8n e Evolution API para Geração de Leads
              </h1>
              <p className="mt-5 max-w-2xl font-inter text-sm leading-relaxed text-brand-ivory/84 lg:text-base">
                Solução inteligente que captura conversas do WhatsApp, interpreta a intenção do cliente com IA e
                encaminha leads qualificados para CRM ou equipe comercial.
              </p>
              <p className="mt-4 max-w-2xl font-inter text-sm leading-relaxed text-brand-sand/80">
                Este projeto demonstra como empresas podem transformar mensagens recebidas pelo WhatsApp em
                oportunidades comerciais estruturadas, reduzindo trabalho manual, melhorando o tempo de resposta e
                dando mais contexto para o time de vendas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#visao-geral"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-cyan bg-brand-cyan px-6 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-cyan-strong hover:text-white"
                >
                  Ver detalhes do projeto
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/solicitar-orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-brand-cyan"
                >
                  Solicitar solução semelhante
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="panel-shell-dark relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src="/projects/automacao-n8n.png"
                  alt="Ambiente técnico moderno com monitor, dashboard e fluxos de automação integrados."
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(63,45,39,0.08)_0%,rgba(63,45,39,0.52)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Resumo do projeto */}
      <section id="visao-geral" className="section-shell py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">Visão Geral</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              Do WhatsApp ao CRM: um fluxo comercial estruturado.
            </h2>
            <p className="mt-5 font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
              Muitas empresas recebem contatos pelo WhatsApp todos os dias, mas nem sempre conseguem organizar,
              classificar e acompanhar esses leads com eficiência. A proposta deste projeto foi criar um fluxo
              automatizado capaz de receber mensagens, interpretar o contexto da conversa, identificar intenção de
              compra e direcionar o lead para o próximo passo comercial.
            </p>
            <p className="mt-4 font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
              A solução integra Evolution API, n8n e Ollama para criar uma esteira de atendimento inicial,
              qualificação e organização de leads.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {overviewCards.map((card) => (
              <div key={card.title} className="panel-shell rounded-[1.8rem] p-6 lg:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cyan/20 bg-brand-cyan/10">
                  <card.icon size={20} className="text-brand-cyan-strong" />
                </div>
                <h3 className="mt-5 font-cormorant text-[1.6rem] text-[#342820]">{card.title}</h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-[#4f3d32]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. O problema */}
      <section className="section-shell-alt py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">O desafio</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              Receber mensagens não significa ter um processo comercial organizado.
            </h2>
            <p className="mt-5 font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
              O WhatsApp é um dos principais canais de venda para pequenas e médias empresas, mas o atendimento
              manual pode gerar perda de oportunidades quando não existe um processo claro de triagem e
              acompanhamento.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problemPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-[1.4rem] border border-white/60 bg-white/55 px-5 py-4 backdrop-blur-md"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-cyan-strong" />
                <p className="font-inter text-sm leading-relaxed text-[#4f3d32]">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-brand-cyan/20 bg-brand-cyan/8 p-6 lg:p-8">
            <p className="font-cormorant text-[1.6rem] leading-tight text-[#342820] lg:text-[2rem]">
              Receber mensagens não significa ter um processo comercial organizado.
            </p>
          </div>
        </div>
      </section>

      {/* 4. A solução */}
      <section className="section-shell py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">A solução desenvolvida</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              Um fluxo inteligente para transformar conversas em leads.
            </h2>
            <p className="mt-5 font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
              Foi estruturado um fluxo inteligente de automação para transformar conversas do WhatsApp em leads
              organizados. A Evolution API captura os eventos de mensagem, o n8n processa e orquestra as etapas, e
              o Ollama interpreta a intenção do usuário com IA local.
            </p>
            <p className="mt-4 font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
              A partir disso, o sistema pode responder de forma inicial, classificar o contato, identificar
              urgência, registrar informações importantes e encaminhar o lead para CRM, planilha, banco de dados ou
              equipe comercial.
            </p>
          </div>

          {/* Fluxo visual */}
          <div className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
              {flowSteps.map((step, index) => (
                <div key={step.label} className="flex items-center gap-2 lg:gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-md">
                    <step.icon size={16} className="text-brand-cyan-strong" />
                    <span className="font-inter text-[11px] uppercase tracking-[0.12em] text-[#4f3d32]">
                      {step.label}
                    </span>
                  </div>
                  {index < flowSteps.length - 1 && (
                    <ArrowRight size={14} className="text-brand-cyan-strong/60" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps numerados */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {detailedSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-[1.4rem] border border-white/60 bg-white/55 px-5 py-4 backdrop-blur-md"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3f2d27] font-inter text-[11px] font-semibold text-brand-sand">
                  {index + 1}
                </span>
                <p className="font-inter text-sm leading-relaxed text-[#4f3d32]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tecnologias utilizadas */}
      <section className="section-shell-alt py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">Stack utilizada</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              Tecnologias que sustentam o fluxo.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {stackCards.map((card) => (
              <div key={card.title} className="panel-shell rounded-[1.8rem] p-6 lg:p-8">
                <h3 className="font-cormorant text-[1.8rem] text-[#342820]">{card.title}</h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-[#4f3d32]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Funcionalidades do projeto */}
      <section className="section-shell py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">Funcionalidades implementadas</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              O que o sistema faz na prática.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {functionalities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.4rem] border border-white/60 bg-white/55 px-5 py-4 backdrop-blur-md"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-cyan" />
                <p className="font-inter text-sm leading-relaxed text-[#4f3d32]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Papel da IA */}
      <section className="section-shell-alt py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="max-w-2xl">
              <span className="section-kicker">Como a IA participa do processo</span>
              <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
                IA como camada de interpretação, não apenas de resposta.
              </h2>
              <p className="mt-5 font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
                A IA não foi aplicada apenas para responder mensagens. O principal papel do Ollama no fluxo é
                interpretar o contexto da conversa e transformar texto livre em informação útil para vendas.
              </p>
            </div>

            <div className="space-y-3">
              {aiRoles.map((role) => (
                <div
                  key={role}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-white/60 bg-white/55 px-5 py-4 backdrop-blur-md"
                >
                  <BrainCircuit size={18} className="mt-0.5 shrink-0 text-brand-cyan-strong" />
                  <p className="font-inter text-sm leading-relaxed text-[#4f3d32]">{role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-brand-cyan/20 bg-brand-cyan/8 p-6 lg:p-8">
            <p className="font-cormorant text-[1.6rem] leading-tight text-[#342820] lg:text-[2rem]">
              A automação prepara o lead para que o vendedor entre na conversa com mais contexto.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Benefícios para a empresa */}
      <section className="section-shell py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">Benefícios do projeto</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              Impacto direto na operação comercial.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="panel-shell rounded-[1.8rem] p-6 lg:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cyan/20 bg-brand-cyan/10">
                  <benefit.icon size={20} className="text-brand-cyan-strong" />
                </div>
                <h3 className="mt-5 font-cormorant text-[1.5rem] text-[#342820]">{benefit.title}</h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-[#4f3d32]">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Diferencial da IA local */}
      <section className="section-shell-alt py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="max-w-2xl">
              <span className="section-kicker">Por que usar Ollama e IA local?</span>
              <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
                Controle, custo e personalização.
              </h2>
              <p className="mt-5 font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
                O uso do Ollama permite executar modelos de IA localmente, oferecendo mais controle sobre dados,
                custos e personalização. Para empresas que querem testar automações inteligentes sem depender
                totalmente de APIs pagas, essa abordagem pode ser uma alternativa estratégica.
              </p>
            </div>

            <div className="space-y-3">
              {localAiBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-white/60 bg-white/55 px-5 py-4 backdrop-blur-md"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-cyan" />
                  <p className="font-inter text-sm leading-relaxed text-[#4f3d32]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Arquitetura sugerida */}
      <section className="section-shell py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">Arquitetura da solução</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              Modular, expansível e adaptável.
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-2xl">
            <div className="space-y-2">
              {architectureSteps.map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="w-full rounded-[1.2rem] border border-white/60 bg-white/70 px-5 py-3 text-center shadow-sm backdrop-blur-md">
                    <span className="font-inter text-sm font-medium text-[#4f3d32]">{step}</span>
                  </div>
                  {index < architectureSteps.length - 1 && (
                    <div className="h-6 w-px bg-brand-cyan-strong/30" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
              A arquitetura foi pensada para ser modular, permitindo substituir ou expandir componentes conforme a
              maturidade do negócio. O CRM pode ser uma planilha, Supabase, PostgreSQL, HubSpot, PipeRun, Kommo, RD
              Station ou qualquer sistema comercial com API.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Casos de uso */}
      <section className="section-shell-alt py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">Onde essa solução pode ser aplicada?</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              Aplicações reais para diferentes negócios.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.label}
                className="flex items-center gap-3 rounded-[1.4rem] border border-white/60 bg-white/55 px-5 py-4 backdrop-blur-md"
              >
                <useCase.icon size={18} className="shrink-0 text-brand-cyan-strong" />
                <p className="font-inter text-sm leading-relaxed text-[#4f3d32]">{useCase.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Resultado esperado */}
      <section className="section-shell py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="section-kicker">Resultado esperado</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-[#342820] lg:text-[3rem]">
              WhatsApp como porta de entrada do funil de vendas.
            </h2>
            <p className="mt-5 font-inter text-sm leading-relaxed text-[#4f3d32] lg:text-[15px]">
              Com a automação, a empresa passa a ter um processo mais claro para lidar com contatos comerciais. O
              WhatsApp deixa de ser apenas uma caixa de mensagens e passa a funcionar como uma porta de entrada
              estruturada para o funil de vendas.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {expectedResults.map((result) => (
              <div
                key={result}
                className="flex items-start gap-3 rounded-[1.4rem] border border-white/60 bg-white/55 px-5 py-4 backdrop-blur-md"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-cyan-strong" />
                <p className="font-inter text-sm leading-relaxed text-[#4f3d32]">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Seção comercial */}
      <section className="section-shell-dark premium-grid py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,155,124,0.18),transparent_24%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker justify-center">Automação não substitui o vendedor</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-tight text-white lg:text-[3rem]">
              O vendedor continua sendo essencial. A automação apenas aumenta sua eficiência.
            </h2>
            <p className="mt-5 font-inter text-sm leading-relaxed text-brand-ivory/84 lg:text-base">
              A proposta não é remover o atendimento humano, mas preparar melhor a conversa. A automação filtra,
              organiza e entrega contexto para que o time comercial fale com o lead certo, no momento certo e com
              mais informação.
            </p>
          </div>
        </div>
      </section>

      {/* 14. CTA final */}
      <section className="cta-shell py-16 lg:py-24">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <h2 className="mx-auto max-w-3xl font-cormorant text-[2.2rem] leading-tight text-white lg:text-[3.2rem]">
            Quer transformar seu WhatsApp em uma máquina de geração de leads?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-inter text-sm leading-relaxed text-white/90 lg:text-base">
            A Arcane Tecnologia desenvolve soluções de IA, automação e integração para empresas que querem vender
            melhor, reduzir tarefas manuais e organizar seus processos comerciais.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/solicitar-orcamento"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-cyan bg-brand-cyan px-8 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-cyan-strong hover:text-white"
            >
              Solicitar projeto semelhante
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/8 px-8 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-brand-cyan"
            >
              Falar com a Arcane
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
