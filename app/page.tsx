import { ArrowRight, Check, ChevronRight, Clock3, Layers3, MessageCircle, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react'

const whatsappBudget = 'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20do%20site%20da%20Foco%20Start%20e%20gostaria%20de%20solicitar%20um%20orçamento.'
const whatsappTalk = 'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20do%20site%20da%20Foco%20Start%20e%20gostaria%20de%20entender%20melhor%20as%20soluções.'

const navItems = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Diferenciais', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

const heroBenefits = [
  'Sem mensalidade de hospedagem',
  'Integração com WhatsApp',
  'Site rápido e responsivo',
  'Entrega rápida',
]

const sitePreviewItems = [
  'WhatsApp integrado',
  'Formulário de contato',
  'SEO básico',
  'Google Maps',
  'Responsivo no celular',
  'Sem mensalidade de hospedagem',
]

const solutions = [
  {
    icon: Layers3,
    title: 'Site Profissional',
    text: 'Ideal para empresas, clínicas, escritórios, arquitetos, psicólogos e prestadores de serviço que precisam transmitir credibilidade online.',
  },
  {
    icon: Zap,
    title: 'Landing Page de Vendas',
    text: 'Páginas diretas, modernas e pensadas para transformar visitantes em contatos no WhatsApp.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integrado',
    text: 'Botões, formulários e chamadas estratégicas para facilitar o contato do cliente interessado.',
  },
  {
    icon: ShieldCheck,
    title: 'Sem mensalidade de hospedagem',
    text: 'Uma estrutura moderna para a maioria dos sites institucionais, sem depender de planos mensais de hospedagem.',
  },
  {
    icon: Workflow,
    title: 'Sistemas Personalizados',
    text: 'Quando seu negócio precisa ir além de um site comum, criamos soluções sob medida para sua operação.',
  },
  {
    icon: Clock3,
    title: 'Entrega Express',
    text: 'Projetos objetivos, com comunicação direta e foco em colocar sua presença digital no ar rapidamente.',
  },
]

const concepts = [
  {
    tag: 'Arquitetos',
    title: 'Site profissional para arquitetos',
    description: 'Apresente portfólio, serviços, diferenciais e receba contatos qualificados diretamente pelo WhatsApp.',
    image: '/projects/igrejas-dashboard.png',
    href: whatsappTalk,
    cta: 'Quero um site assim',
    items: ['Portfólio organizado', 'WhatsApp em destaque', 'Imagem premium'],
  },
  {
    tag: 'Serviços',
    title: 'Landing page para captar clientes',
    description: 'Uma página objetiva para campanhas, anúncios e profissionais que precisam gerar mais oportunidades.',
    image: '/projects/crm-dashboard.png',
    href: whatsappTalk,
    cta: 'Quero captar clientes',
    items: ['Headline forte', 'Prova de autoridade', 'Chamada para WhatsApp'],
  },
  {
    tag: 'Empresas',
    title: 'Sistema sob medida para negócios',
    description: 'Para empresas que precisam organizar clientes, contratos, atendimentos, agenda e processos internos.',
    image: '/projects/eventos-dashboard.png',
    href: whatsappTalk,
    cta: 'Quero algo personalizado',
    items: ['Área do cliente', 'Processos organizados', 'Painel administrativo'],
  },
]

const differentials = [
  { title: 'Sem plataformas prontas', text: 'Seu projeto é desenvolvido com estrutura própria, sem aparência genérica de template comum.' },
  { title: 'Sem mensalidade abusiva', text: 'Você paga pela criação do site e não fica preso a mensalidades desnecessárias de hospedagem.' },
  { title: 'Foco em conversão', text: 'A página é pensada para gerar confiança e levar o visitante para o WhatsApp.' },
]

const faqs = [
  {
    question: 'Preciso pagar hospedagem?',
    answer: 'Na maioria dos sites institucionais, não. Usamos uma estrutura moderna que elimina mensalidades de hospedagem para esse tipo de projeto. O domínio continua sendo responsabilidade do cliente.',
  },
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'Projetos express podem ser entregues entre 3 e 7 dias, dependendo da complexidade e da velocidade no envio das informações.',
  },
  {
    question: 'O site funciona bem no celular?',
    answer: 'Sim. Todos os sites são responsivos e pensados para abrir bem em celulares, tablets e computadores.',
  },
  {
    question: 'Vocês também criam sistemas personalizados?',
    answer: 'Sim. Além de sites e landing pages, também desenvolvemos sistemas, painéis, áreas do cliente e automações sob medida.',
  },
]

const niches = ['Arquitetos', 'Psicólogos', 'Clínicas', 'Escritórios', 'Igrejas', 'Pequenos negócios', 'Prestadores de serviço']

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Foco Start">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-white shadow-lg shadow-blue-600/25">FS</div>
      <div>
        <p className="font-bold leading-none tracking-tight text-white">Foco Start</p>
        <p className="text-xs text-slate-400">Sites e sistemas digitais</p>
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

function ProjectImage({ project }: { project: (typeof concepts)[number] }) {
  return (
    <a href={project.href} className="relative block h-64 overflow-hidden border-b border-white/10 bg-white/[0.03] md:h-72">
      <img src={project.image} alt={project.title} className="h-full w-full object-cover object-left-top transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />
      <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-md">{project.tag}</span>
    </a>
  )
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#05070D] text-white selection:bg-blue-500/30">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-35" />
      <a href={whatsappTalk} className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-2xl shadow-green-500/30 transition hover:scale-105 md:flex" aria-label="WhatsApp"><MessageCircle className="h-7 w-7 text-white" /></a>
      <a href={whatsappBudget} className="sticky-mobile-cta md:hidden">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070D]/78 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="transition hover:text-white">{item.label}</a>)}
          </div>
          <a href={whatsappBudget} className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#05070D] transition hover:-translate-y-0.5 hover:bg-blue-100">Orçamento</a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-lg shadow-black/20">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />Sites Profissionais • Landing Pages • Sistemas Sob Medida
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl lg:text-8xl">
              Seu negócio ainda depende apenas do <span className="text-gradient">Instagram?</span>
            </h1>
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Criamos sites profissionais, rápidos e integrados ao WhatsApp para empresas e profissionais que querem transmitir mais credibilidade e conquistar mais clientes.
            </p>
            <div className="mb-10 grid max-w-xl gap-3 sm:grid-cols-2">
              {heroBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                  <Check className="h-4 w-4 shrink-0 text-cyan-300" /> {benefit}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappBudget} className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500">Solicitar orçamento <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
              <a href="#projetos" className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold transition hover:-translate-y-0.5 hover:bg-white/[0.08]">Ver exemplos</a>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#0B1020]/95 p-4 shadow-2xl shadow-blue-950/40">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#070B16] p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Seu Site Profissional</h3>
                    <p className="text-sm text-slate-400">Foco Start Express</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">Online</div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><p className="mb-2 text-sm text-slate-400">Hospedagem</p><h4 className="text-4xl font-bold">R$0</h4></div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><p className="mb-2 text-sm text-slate-400">Entrega</p><h4 className="text-4xl font-bold">3-7d</h4></div>
                </div>
                <div className="mt-6 space-y-4">
                  {sitePreviewItems.map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div>
                        <p className="font-medium">{item}</p>
                        <p className="text-sm text-slate-400">Estrutura moderna para vender mais</p>
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
          <div className="logo-track">{[...niches, ...niches].map((item, index) => <span key={`${item}-${index}`} className="logo-item">{item}</span>)}</div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-[#0B1020]/80 p-8 shadow-xl shadow-black/10 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Presença digital</p>
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">Quanto você está perdendo por depender apenas das redes sociais?</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-400">Quando um cliente procura seu negócio, ele precisa encontrar uma apresentação profissional, serviços claros, formas de contato e confiança para chamar no WhatsApp.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {['Credibilidade profissional', 'Serviços organizados', 'Portfólio em destaque', 'Contato rápido no WhatsApp'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-slate-200"><Check className="mb-4 h-5 w-5 text-cyan-300" />{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="O que fazemos" title="Sites, landing pages e sistemas para negócios que querem crescer." />
          <a href={whatsappTalk} className="w-fit rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-semibold transition hover:bg-white/[0.08]">Quero meu site profissional</a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div key={solution.title} className="rounded-3xl border border-white/10 bg-[#0B1020]/80 p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-blue-500/40">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/10"><Icon className="h-5 w-5" /></div>
                <h3 className="mb-3 text-xl font-semibold">{solution.title}</h3>
                <p className="leading-relaxed text-slate-400">{solution.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section id="projetos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Exemplos de soluções" title="Seu cliente precisa se encantar antes de comprar." text="Criamos páginas modernas para apresentar seu negócio com clareza, autoridade e chamada direta para o WhatsApp." />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {concepts.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1020]/85 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/30">
              <ProjectImage project={project} />
              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
                <div className="mt-5 space-y-3">
                  {project.items.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-4 text-sm text-slate-300"><Check className="h-4 w-4 shrink-0 text-cyan-300" /> {item}</div>)}
                </div>
                <a href={project.href} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-center font-semibold text-[#05070D] transition hover:bg-blue-100">{project.cta} <ChevronRight className="h-4 w-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="depoimentos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Por que escolher" title="Uma entrega bonita por fora e inteligente por dentro." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {differentials.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0B1020]/80 p-7 shadow-xl shadow-black/10">
              <div className="mb-6 flex gap-1 text-cyan-300">{Array.from({ length: 5 }).map((_, index) => <Sparkles key={index} className="h-4 w-4" />)}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.04] p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Oferta de entrada</p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Site Express</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">Uma página profissional para colocar seu negócio no ar, apresentar seus serviços e gerar contatos pelo WhatsApp.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {['Design moderno', 'Página profissional', 'WhatsApp integrado', 'Formulário de contato', 'Responsivo', 'Publicação online', 'Sem mensalidade de hospedagem', 'A partir de R$ 997'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#0B1020]/80 p-5 text-slate-200"><Check className="mb-4 h-5 w-5 text-cyan-300" />{item}</div>
            ))}
          </div>
          <a href={whatsappBudget} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500">Quero meu Site Express <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Perguntas frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => <div key={faq.question} className="rounded-3xl border border-white/10 bg-[#0B1020]/80 p-6"><h3 className="text-lg font-semibold">{faq.question}</h3><p className="mt-3 leading-relaxed text-slate-400">{faq.answer}</p></div>)}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-400/20 bg-gradient-to-br from-blue-600 to-cyan-500 p-10 shadow-2xl shadow-blue-600/20 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.28),transparent_38%)]" />
          <div className="relative max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Seu negócio merece mais do que apenas um Instagram.</h2>
            <p className="mb-8 text-lg leading-relaxed text-blue-50/90">Tenha um site profissional, rápido, integrado ao WhatsApp e preparado para transformar visitantes em clientes.</p>
            <a href={whatsappBudget} className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50">Solicitar orçamento pelo WhatsApp <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-400 md:flex-row md:items-center">
          <Logo />
          <p>© 2026 Foco Start. Sites profissionais, landing pages e sistemas sob medida.</p>
          <div className="flex gap-5"><a href={whatsappTalk} className="transition hover:text-white">WhatsApp</a><a href="#top" className="transition hover:text-white">Voltar ao topo</a></div>
        </div>
      </footer>
    </main>
  )
}
