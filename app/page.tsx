import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react'

const whatsappBudget =
  'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20do%20site%20da%20Foco%20Start%20e%20gostaria%20de%20solicitar%20um%20orçamento.'

const whatsappTalk =
  'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20do%20site%20da%20Foco%20Start%20e%20gostaria%20de%20entender%20melhor%20as%20soluções.'

const navItems = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
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
    description: 'Organização de músicos, repertório, confirmações e lembretes em um painel acolhedor e ministerial.',
    image: '/projects/igrejas-dashboard.png',
    items: ['Confirmação de músicos', 'Repertório por culto', 'Avisos automáticos'],
  },
  {
    tag: 'Negócios',
    title: 'CRM com Atendimento Inteligente',
    description: 'Leads, clientes e conversas organizadas em uma interface corporativa focada em performance.',
    image: '/projects/crm-dashboard.png',
    items: ['Leads organizados', 'Histórico de contato', 'Follow-up automático'],
  },
  {
    tag: 'Eventos',
    title: 'Gestão de Contratos e Clientes',
    description: 'Eventos, contratos, pagamentos e agenda com visual sofisticado para operações premium.',
    image: '/projects/eventos-dashboard.png',
    items: ['Propostas digitais', 'Pagamentos', 'Painel do cliente'],
  },
]

const testimonials = [
  {
    name: 'Lucas Andrade',
    role: 'Gestor de equipe musical',
    text: 'A organização da equipe mudou completamente. O que antes era caos em grupos do WhatsApp virou um fluxo claro e profissional.',
  },
  {
    name: 'Mariana Costa',
    role: 'Pequeno negócio local',
    text: 'Hoje conseguimos acompanhar clientes, atendimentos e processos sem depender de planilhas espalhadas.',
  },
  {
    name: 'Rafael Mendes',
    role: 'Produtor de eventos',
    text: 'A percepção de profissionalismo aumentou muito depois que começamos a usar sistemas personalizados.',
  },
]

const faqs = [
  {
    question: 'Vocês criam sistemas personalizados?',
    answer: 'Sim. Cada solução é planejada de acordo com a necessidade da operação, negócio ou equipe.',
  },
  {
    question: 'Os sistemas funcionam no celular?',
    answer: 'Sim. Todas as plataformas são desenvolvidas com foco em responsividade e experiência mobile moderna.',
  },
  {
    question: 'É possível integrar com WhatsApp?',
    answer: 'Sim. Podemos automatizar notificações, lembretes, confirmações, atendimento e fluxos operacionais.',
  },
  {
    question: 'Vocês oferecem suporte?',
    answer: 'Sim. Os projetos podem incluir manutenção, suporte contínuo, melhorias e evolução do sistema.',
  },
]

const niches = ['Igrejas', 'Pequenos negócios', 'Eventos', 'Infoprodutores', 'Equipes comerciais', 'Prestadores de serviço']

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{text}</p> : null}
    </div>
  )
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Foco Start">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-white shadow-lg shadow-blue-600/25">
        FS
      </div>
      <div>
        <p className="font-bold leading-none tracking-tight text-white">Foco Start</p>
        <p className="text-xs text-slate-400">Soluções digitais</p>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#05070D] text-white selection:bg-blue-500/30">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-35" />

      <a
        href={whatsappTalk}
        className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-2xl shadow-green-500/30 transition hover:scale-105 md:flex"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>

      <a href={whatsappBudget} className="sticky-mobile-cta md:hidden">
        Solicitar orçamento <ArrowRight className="h-4 w-4" />
      </a>

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

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-36 md:pb-28 md:pt-44">
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
              <a href={whatsappBudget} className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500">
                Solicitar orçamento <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a href={whatsappTalk} className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold transition hover:-translate-y-0.5 hover:bg-white/[0.08]">
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#0B1020]/95 p-4 shadow-2xl shadow-blue-950/40">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#070B16] p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Painel Inteligente</h3>
                    <p className="text-sm text-slate-400">Foco Start Dashboard</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">Online</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="mb-2 text-sm text-slate-400">Fluxos automatizados</p>
                    <h4 className="text-4xl font-bold">24</h4>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="mb-2 text-sm text-slate-400">Eficiência</p>
                    <h4 className="text-4xl font-bold">+87%</h4>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {['Sistema de Escalas', 'CRM Inteligente', 'Dashboard Financeiro'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div>
                        <p className="font-medium">{item}</p>
                        <p className="text-sm text-slate-400">Solução moderna e organizada</p>
                      </div>
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="logo-cloud rounded-[2rem] border border-white/10 bg-white/[0.025] py-5">
          <div className="logo-track">
            {[...niches, ...niches].map((item, index) => (
              <span key={`${item}-${index}`} className="logo-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="O que fazemos" title="Soluções digitais sob medida." />
          <a href={whatsappTalk} className="w-fit rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-semibold transition hover:bg-white/[0.08]">
            Quero automatizar meu negócio
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div key={solution.title} className="rounded-3xl border border-white/10 bg-[#0B1020]/80 p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-blue-500/40">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/10">
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

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {concepts.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1020]/85 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/30">
              <div className="relative h-56 overflow-hidden border-b border-white/10 bg-white/[0.03] md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-left-top transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-md">
                  {project.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
                <div className="mt-5 space-y-3">
                  {project.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-4 text-sm text-slate-300">
                      <Check className="h-4 w-4 shrink-0 text-cyan-300" /> {item}
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

      <section id="depoimentos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Prova social" title="Negócios modernos precisam de processos modernos." />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-white/10 bg-[#0B1020]/80 p-7 shadow-xl shadow-black/10">
              <div className="mb-6 flex gap-1 text-cyan-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Sparkles key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="leading-relaxed text-slate-300">“{testimonial.text}”</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-white/10 bg-[#0B1020]/80 p-6">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{faq.answer}</p>
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
          <Logo />
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
