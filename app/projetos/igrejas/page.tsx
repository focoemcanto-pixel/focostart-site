import { ArrowLeft, ArrowRight, Bell, Check, MessageCircle, Music2, Smartphone, Users, Workflow } from 'lucide-react'

const whatsappBudget =
  'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20da%20página%20do%20projeto%20para%20igrejas%20da%20Foco%20Start%20e%20gostaria%20de%20solicitar%20um%20orçamento.'

const modules = [
  {
    icon: Workflow,
    title: 'Painel administrativo',
    text: 'Controle escalas, cultos, ministérios, músicos, repertórios e confirmações em um só lugar.',
  },
  {
    icon: Smartphone,
    title: 'Interface mobile para membros',
    text: 'Cada integrante acessa convites, datas, funções, repertório e informações do culto pelo celular.',
  },
  {
    icon: Bell,
    title: 'Convites e confirmações',
    text: 'Envie convites de escala, acompanhe respostas e reduza mensagens manuais em grupos.',
  },
  {
    icon: MessageCircle,
    title: 'Disparos no WhatsApp',
    text: 'Automatize lembretes, avisos de escala, repertórios e confirmações com mensagens organizadas.',
  },
]

const showcaseImages = [
  {
    title: 'Dashboard Administrativo',
    description: 'Visão geral da operação ministerial, escalas, confirmações e gestão de ministérios.',
    image: '/projects/igrejas/dashboard-admin.png',
  },
  {
    title: 'Interface Mobile do Membro',
    description: 'Cada integrante acessa escalas, repertório e confirmações pelo celular.',
    image: '/projects/igrejas/mobile-membro.png',
  },
  {
    title: 'Convite de Escala',
    description: 'Convites organizados com confirmação rápida e informações completas.',
    image: '/projects/igrejas/convite-escala.png',
  },
  {
    title: 'Automação WhatsApp',
    description: 'Lembretes automáticos, notificações e comunicação inteligente.',
    image: '/projects/igrejas/automacao-whatsapp.png',
  },
  {
    title: 'Repertório Inteligente',
    description: 'Organização de músicas, tons, observações e ordem do culto.',
    image: '/projects/igrejas/repertorio.png',
  },
  {
    title: 'Analytics e Relatórios',
    description: 'Métricas de participação, confirmações e engajamento ministerial.',
    image: '/projects/igrejas/analytics.png',
  },
]

const flows = [
  'Cadastro de cultos e eventos',
  'Montagem da escala por função',
  'Envio de convite aos membros',
  'Confirmação pelo painel mobile',
  'Liberação do repertório do culto',
  'Lembretes automáticos antes do evento',
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070D]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-white shadow-lg shadow-blue-600/25">FS</div>
          <div>
            <p className="font-bold leading-none tracking-tight text-white">Foco Start</p>
            <p className="text-xs text-slate-400">Soluções digitais</p>
          </div>
        </a>

        <a href={whatsappBudget} className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#05070D] transition hover:-translate-y-0.5 hover:bg-blue-100">
          Solicitar orçamento
        </a>
      </nav>
    </header>
  )
}

export default function ChurchProjectPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070D] text-white selection:bg-blue-500/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-30" />
      <Header />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-36 md:pt-44">
        <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Voltar para a página inicial
        </a>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-100">
              Sistema para igrejas • Escalas • Repertório • WhatsApp
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Uma gestão ministerial mais organizada, moderna e automática.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Um conceito de plataforma para igrejas que precisam organizar escalas, músicos, ministérios, repertórios, confirmações e comunicações sem depender de mensagens soltas no WhatsApp.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={whatsappBudget} className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500">
                Quero uma solução assim <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
            <img src="/projects/igrejas-dashboard.png" alt="Dashboard para gestão ministerial" className="rounded-[1.5rem] object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <div key={module.title} className="rounded-3xl border border-white/10 bg-[#0B1020]/85 p-6 shadow-xl shadow-black/10">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/15 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{module.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{module.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Showcase das interfaces</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Cada frente do sistema resolve uma parte da operação.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Explore as interfaces e visualize como uma plataforma personalizada pode transformar a organização do ministério.
          </p>
        </div>

        <div className="space-y-10">
          {showcaseImages.map((item, index) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1020]/85 shadow-2xl shadow-black/20"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    Interface 0{index + 1}
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-lg leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <a
                    href={whatsappBudget}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-[#05070D] transition hover:bg-blue-100"
                  >
                    Quero algo assim
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-12">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Fluxo inteligente</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Do planejamento ao lembrete automático.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {flows.map((flow, index) => (
              <div key={flow} className="rounded-3xl border border-white/10 bg-[#05070D]/60 p-5">
                <p className="mb-5 text-sm font-semibold text-cyan-300">0{index + 1}</p>
                <p className="font-medium text-slate-200">{flow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
