import { ArrowLeft, ArrowRight, Bell, Check, MessageCircle, Music2, Smartphone, Users, Workflow, Zap } from 'lucide-react'

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

function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[2.5rem] border border-white/15 bg-black p-3 shadow-2xl shadow-cyan-500/10">
      <div className="rounded-[2rem] bg-[#07111F] p-4">
        <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-white/20" />
        <div className="mb-5 rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10 p-4">
          <p className="text-xs text-cyan-200">Próximo culto</p>
          <h3 className="mt-2 text-xl font-bold">Domingo, 19h</h3>
          <p className="mt-1 text-xs text-slate-300">Vocal • Ministério de Louvor</p>
        </div>
        <div className="space-y-3">
          {['Confirmar presença', 'Ver repertório', 'Abrir localização'].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm">
              <span>{item}</span>
              <Check className="h-4 w-4 text-cyan-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WhatsAppMockup() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#08111F] p-5 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-green-500 text-white"><MessageCircle className="h-5 w-5" /></div>
        <div>
          <p className="font-semibold">Automação WhatsApp</p>
          <p className="text-xs text-slate-400">Convite enviado automaticamente</p>
        </div>
      </div>
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-green-500/15 p-4 text-sm leading-relaxed text-slate-100">
        Olá, Ana! Você foi escalada para o culto de domingo às 19h como vocal. Confirme sua presença e acesse o repertório pelo painel.
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/[0.04] p-3 text-center text-xs text-cyan-200">Confirmar</div>
        <div className="rounded-xl bg-white/[0.04] p-3 text-center text-xs text-cyan-200">Ver repertório</div>
      </div>
    </div>
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
              <a href="#interfaces" className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold transition hover:bg-white/[0.08]">
                Ver interfaces
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

      <section id="interfaces" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Interfaces do projeto</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Cada pessoa vê o que precisa, no momento certo.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">A força do sistema está em separar a experiência do administrador, dos membros e das automações.</p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <PhoneMockup />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#0B1020]/85 p-6">
              <Users className="mb-5 h-8 w-8 text-cyan-300" />
              <h3 className="mb-3 text-2xl font-bold">Painel do membro</h3>
              <p className="leading-relaxed text-slate-400">O músico acessa pelo celular, vê convites de escala, função, data, horário, local e repertório.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#0B1020]/85 p-6">
              <Music2 className="mb-5 h-8 w-8 text-amber-300" />
              <h3 className="mb-3 text-2xl font-bold">Repertório organizado</h3>
              <p className="leading-relaxed text-slate-400">Músicas separadas por culto, tom, referência, observações e momento de entrada.</p>
            </div>
            <div className="md:col-span-2">
              <WhatsAppMockup />
            </div>
          </div>
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-400/20 bg-gradient-to-br from-blue-600 to-cyan-500 p-10 shadow-2xl shadow-blue-600/20 md:p-16">
          <div className="relative max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Sua igreja ainda organiza tudo manualmente?</h2>
            <p className="mb-8 text-lg leading-relaxed text-blue-50/90">A Foco Start pode desenhar uma solução personalizada para sua realidade ministerial.</p>
            <a href={whatsappBudget} className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50">
              Solicitar orçamento pelo WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
