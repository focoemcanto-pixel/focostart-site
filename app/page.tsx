import { ArrowRight, Check, ChevronRight, Clock3, Layers3, MessageCircle, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react'

const whatsappBudget =
  'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20do%20site%20da%20Foco%20Start%20e%20gostaria%20de%20solicitar%20um%20orçamento.'

const whatsappTalk =
  'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20do%20site%20da%20Foco%20Start%20e%20gostaria%20de%20entender%20melhor%20as%20soluções.'

const navItems = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Nichos', href: '#nichos' },
  { label: 'Processo', href: '#processo' },
]

const metrics = [
  { label: 'Tempo economizado', value: '+18h', detail: 'por semana' },
  { label: 'Fluxos automatizados', value: '24', detail: 'operações ativas' },
  { label: 'Eficiência operacional', value: '+87%', detail: 'menos retrabalho' },
]

const problems = [
  'Atendimento espalhado no WhatsApp',
  'Planilhas confusas e retrabalho',
  'Processos manuais repetitivos',
  'Equipe sem organização clara',
  'Clientes sem acompanhamento',
  'Perda de tempo operacional',
]

const solutions = [
  {
    icon: Layers3,
    title: 'Sistemas personalizados',
    text: 'Plataformas criadas sob medida para a realidade do seu negócio, equipe ou ministério.',
  },
  {
    icon: Zap,
    title: 'Automações inteligentes',
    text: 'Fluxos automáticos para reduzir tarefas repetitivas, lembrar pessoas e acelerar processos.',
  },
  {
    icon: Workflow,
    title: 'Dashboards e painéis',
    text: 'Visualize dados, clientes, eventos, pagamentos e operação em interfaces modernas.',
  },
  {
    icon: MessageCircle,
    title: 'Integrações com WhatsApp',
    text: 'Mensagens, confirmações, lembretes, atendimentos e notificações conectadas ao seu fluxo.',
  },
  {
    icon: ShieldCheck,
    title: 'Áreas do cliente',
    text: 'Portais para clientes acompanharem informações, documentos, status, entregas e solicitações.',
  },
  {
    icon: Clock3,
    title: 'Apps internos',
    text: 'Soluções web para equipes acessarem escalas, tarefas, arquivos, agendas e informações.',
  },
]

const concepts = [
  {
    tag: 'Igrejas',
    title: 'Sistema de Escalas Ministeriais',
    description: 'Organização de músicos, repertório, confirmações e lembretes em um só painel.',
    items: ['Confirmação de músicos', 'Repertório por culto', 'Avisos automáticos'],
  },
  {
    tag: 'Negócios',
    title: 'CRM com Atendimento Inteligente',
    description: 'Leads, clientes e conversas organizadas para vender e atender melhor.',
    items: ['Leads organizados', 'Histórico de contato', 'Follow-up automático'],
  },
  {
    tag: 'Eventos',
    title: 'Gestão de Contratos e Clientes',
    description: 'Propostas, contratos, pagamentos, agenda e área do cliente com visual premium.',
    items: ['Propostas digitais', 'Pagamentos', 'Painel do cliente'],
  },
]

const niches = ['Igrejas', 'Pequenos negócios', 'Eventos', 'Infoprodutores', 'Equipes comerciais', 'Prestadores de serviço']

const steps = [
  {
    title: 'Entendimento',
    text: 'Mapeamos sua operação e identificamos onde existe perda de tempo, ruído e retrabalho.',
  },
  {
    title: 'Planejamento',
    text: 'Desenhamos a solução ideal, priorizando clareza, simplicidade e resultado prático.',
  },
  {
    title: 'Desenvolvimento',
    text: 'Criamos uma plataforma moderna, responsiva, organizada e preparada para evoluir.',
  },
  {
    title: 'Implantação',
    text: 'Colocamos tudo no ar com orientação, ajustes finais e suporte para a operação começar bem.',
  },
]

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Foco Start">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-white shadow-lg shadow-blue-600/25 transition group-hover:scale-105">
        FS
      </div>
      <div>
        <p className="font-bold leading-none tracking-tight">Foco Start</p>
        <p className="text-xs text-slate-400">Soluções digitais</p>
      </div>
    </a>
  )
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{text}</p> : null}
    </div>
  )
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  )
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
    >
      {children}
    </a>
  )
}

function DashboardMockup() {
  return (
    <div className="relative animate-float">
      <div className="absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/10 bg-[#0B1020]/95 p-3 shadow-2xl shadow-blue-950/40 ring-1 ring-white/5 backdrop-blur">
        <div className="rounded-[1.5rem] border border-white/10 bg-[#070B16] p-5">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Painel Inteligente</h3>
              <p className="text-sm text-slate-400">Foco Start Dashboard</p>
            </div>
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">Online</div>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/8 bg-white/[0.045] p-4">
                <p className="mb-2 text-xs text-slate-400">{metric.label}</p>
                <h4 className="text-2xl font-bold">{metric.value}</h4>
                <p className="mt-1 text-[11px] text-slate-500">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-medium">Fluxo operacional</p>
                <Sparkles className="h-4 w-4 text-cyan-300" />
              </div>
              <div className="space-y-3">
                {['Novo lead recebido', 'Mensagem enviada', 'Orçamento solicitado', 'Reunião agendada'].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white/[0.045] p-3">
                    <div className="grid h-7 w-7 place-items-center rounded-lg bg-blue-500/15 text-xs text-blue-300">{index + 1}</div>
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
              <p className="mb-4 text-sm font-medium">Status</p>
              <div className="space-y-4">
                {['Escalas', 'Clientes', 'Pagamentos'].map((item, index) => (
                  <div key={item}>
                    <div className="mb-2 flex justify-between text-xs text-slate-400">
                      <span>{item}</span>
                      <span>{index === 0 ? '92%' : index === 1 ? '78%' : '64%'}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                        style={{ width: index === 0 ? '92%' : index === 1 ? '78%' : '64%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#05070D] text-white selection:bg-blue-500/30">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-35" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070D]/78 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={whatsappBudget}
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#05070D] transition hover:-translate-y-0.5 hover:bg-blue-100"
          >
            Orçamento
          </a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-36 md:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-lg shadow-black/20">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Sistemas • Automações • Tecnologia sob medida
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl lg:text-8xl">
              Transformamos <span className="text-gradient">processos manuais</span> em soluções inteligentes.
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Criamos sistemas personalizados, automações e plataformas modernas para empresas, igrejas e negócios que desejam crescer com organização e tecnologia.
            </p>

            <div className="flex flex-wrap gap-4">
              <PrimaryButton href={whatsappBudget}>Solicitar orçamento</PrimaryButton>
              <SecondaryButton href={whatsappTalk}>Falar no WhatsApp</SecondaryButton>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 text-sm text-slate-400">
              {['Sistemas personalizados', 'Integrações WhatsApp', 'Dashboards modernos'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  <Check className="h-4 w-4 text-cyan-300" /> {item}
                </span>
              ))}
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Problemas reais" title="Seu negócio ainda funciona no improviso?" />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-slate-300 transition hover:-translate-y-1 hover:border-red-400/25 hover:bg-red-400/[0.035]">
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-red-500/10 text-lg text-red-300">×</span>
              {problem}
            </div>
          ))}
        </div>
      </section>

      <section id="solucoes" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="O que fazemos" title="Soluções digitais sob medida." />
          <SecondaryButton href={whatsappTalk}>Quero automatizar meu negócio</SecondaryButton>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div key={solution.title} className="group rounded-3xl border border-white/10 bg-[#0B1020]/80 p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#0D1429]">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/10 transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{solution.title}</h3>
                <p className="leading-relaxed text-slate-400">{solution.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section id="projetos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="Conceitos de projetos"
          title="Ideias visuais para mostrar o que é possível criar."
          text="Protótipos e mockups ajudam seu cliente a enxergar a solução antes mesmo dela existir em produção."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {concepts.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0B1020]/85 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-300/30">
              <div className="h-40 border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.20),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
                <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-cyan-200">{project.tag}</span>
                <div className="mt-8 grid grid-cols-3 gap-2">
                  <div className="h-14 rounded-2xl bg-white/10" />
                  <div className="h-14 rounded-2xl bg-white/10" />
                  <div className="h-14 rounded-2xl bg-white/10" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
                <div className="mt-5 space-y-3">
                  {project.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-4 text-sm text-slate-300">
                      <Check className="h-4 w-4 text-cyan-300" /> {item}
                    </div>
                  ))}
                </div>
                <a href={whatsappTalk} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-center font-semibold text-[#05070D] transition hover:bg-blue-100">
                  Quero algo assim <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="nichos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-2xl shadow-black/20 md:p-12">
          <SectionHeader eyebrow="Nichos atendidos" title="Tecnologia aplicada à realidade do seu negócio." />

          <div className="mt-10 flex flex-wrap gap-3">
            {niches.map((niche) => (
              <span key={niche} className="rounded-full border border-white/10 bg-[#05070D]/60 px-5 py-3 text-slate-300 shadow-sm">
                {niche}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Como funciona" title="Do caos operacional à solução funcionando." />

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-8 text-sm font-semibold text-cyan-300">0{index + 1}</p>
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-400/20 bg-gradient-to-br from-blue-600 to-cyan-500 p-10 shadow-2xl shadow-blue-600/20 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.28),transparent_38%)]" />
          <div className="relative max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Seu negócio pode funcionar de forma muito mais inteligente.</h2>
            <p className="mb-8 text-lg leading-relaxed text-blue-50/90">Fale com a Foco Start e descubra como transformar processos manuais em sistemas modernos, organizados e automáticos.</p>
            <a href={whatsappBudget} className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50">
              Solicitar orçamento pelo WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-400 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo />
          </div>
          <p>© 2026 Foco Start. Sistemas inteligentes e automações modernas.</p>
          <div className="flex gap-5">
            <a href={whatsappTalk} className="transition hover:text-white">WhatsApp</a>
            <a href="#top" className="transition hover:text-white">Voltar ao topo</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
