const whatsappBudget =
  'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20do%20site%20da%20Foco%20Start%20e%20gostaria%20de%20solicitar%20um%20orçamento.'

const whatsappTalk =
  'https://wa.me/5571993392294?text=Olá!%20Vim%20através%20do%20site%20da%20Foco%20Start%20e%20gostaria%20de%20entender%20melhor%20as%20soluções.'

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
    title: 'Sistemas personalizados',
    text: 'Plataformas criadas sob medida para a realidade do seu negócio, equipe ou ministério.',
  },
  {
    title: 'Automações inteligentes',
    text: 'Fluxos automáticos para reduzir tarefas repetitivas, lembrar pessoas e acelerar processos.',
  },
  {
    title: 'Dashboards e painéis',
    text: 'Visualize dados, clientes, eventos, pagamentos e operação em interfaces modernas.',
  },
  {
    title: 'Integrações com WhatsApp',
    text: 'Mensagens, confirmações, lembretes, atendimentos e notificações conectadas ao seu fluxo.',
  },
  {
    title: 'Áreas do cliente',
    text: 'Portais para clientes acompanharem informações, documentos, status, entregas e solicitações.',
  },
  {
    title: 'Apps internos',
    text: 'Soluções web para equipes acessarem escalas, tarefas, arquivos, agendas e informações.',
  },
]

const concepts = [
  {
    tag: 'Igrejas',
    title: 'Sistema de Escalas Ministeriais',
    items: ['Confirmação de músicos', 'Repertório por culto', 'Avisos automáticos'],
  },
  {
    tag: 'Negócios',
    title: 'CRM com Atendimento Inteligente',
    items: ['Leads organizados', 'Histórico de contato', 'Follow-up automático'],
  },
  {
    tag: 'Eventos',
    title: 'Gestão de Contratos e Clientes',
    items: ['Propostas digitais', 'Pagamentos', 'Painel do cliente'],
  },
]

const niches = ['Igrejas', 'Pequenos negócios', 'Eventos', 'Infoprodutores', 'Equipes comerciais', 'Prestadores de serviço']

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070D] text-white overflow-hidden">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070D]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 font-black shadow-lg shadow-blue-600/30">
              FS
            </div>
            <div>
              <p className="font-bold leading-none">Foco Start</p>
              <p className="text-xs text-gray-400">Soluções digitais</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#solucoes" className="hover:text-white">Soluções</a>
            <a href="#projetos" className="hover:text-white">Projetos</a>
            <a href="#nichos" className="hover:text-white">Nichos</a>
            <a href="#processo" className="hover:text-white">Processo</a>
          </div>

          <a
            href={whatsappBudget}
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#05070D] transition hover:bg-blue-100"
          >
            Orçamento
          </a>
        </nav>
      </div>

      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_42%)]" />

        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              Sistemas • Automações • Tecnologia sob medida
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Transformamos
              <span className="text-blue-500"> processos manuais </span>
              em soluções inteligentes.
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
              Criamos sistemas personalizados, automações e plataformas modernas para empresas, igrejas e negócios que desejam crescer com organização e tecnologia.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={whatsappBudget} className="rounded-2xl bg-blue-600 px-7 py-4 font-medium transition hover:bg-blue-500">
                Solicitar orçamento
              </a>

              <a href={whatsappTalk} className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-medium transition hover:bg-white/10">
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-400">
              <span>✔ Sistemas personalizados</span>
              <span>✔ Integrações WhatsApp</span>
              <span>✔ Dashboards modernos</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#0B1020] p-6 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Painel Inteligente</h3>
                  <p className="text-sm text-gray-400">Foco Start Dashboard</p>
                </div>

                <div className="rounded-xl bg-blue-500/20 px-4 py-2 text-sm text-blue-400">Online</div>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
                  <p className="mb-2 text-sm text-gray-400">Automações</p>
                  <h4 className="text-3xl font-bold">24</h4>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
                  <p className="mb-2 text-sm text-gray-400">Eficiência</p>
                  <h4 className="text-3xl font-bold">+87%</h4>
                </div>
              </div>

              <div className="space-y-4">
                {['Sistema de Escalas', 'CRM Inteligente', 'Dashboard Financeiro'].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-sm text-gray-400">{index === 0 ? 'Igrejas e equipes' : index === 1 ? 'Atendimento automatizado' : 'Gestão moderna'}</p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Problemas reais</p>
          <h2 className="text-3xl font-bold md:text-5xl">Seu negócio ainda funciona no improviso?</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-gray-300">
              <span className="mb-4 block text-2xl">✕</span>
              {problem}
            </div>
          ))}
        </div>
      </section>

      <section id="solucoes" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">O que fazemos</p>
            <h2 className="text-3xl font-bold md:text-5xl">Soluções digitais sob medida.</h2>
          </div>
          <a href={whatsappTalk} className="w-fit rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-medium transition hover:bg-white/10">
            Quero automatizar meu negócio
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={solution.title} className="rounded-3xl border border-white/10 bg-[#0B1020] p-7 transition hover:-translate-y-1 hover:border-blue-500/40">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/15 text-blue-300">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{solution.title}</h3>
              <p className="leading-relaxed text-gray-400">{solution.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Conceitos de projetos</p>
          <h2 className="text-3xl font-bold md:text-5xl">Ideias visuais para mostrar o que é possível criar.</h2>
          <p className="mt-5 text-gray-400">Usamos protótipos e mockups para transformar uma necessidade abstrata em uma solução fácil de visualizar.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {concepts.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1020]">
              <div className="border-b border-white/10 bg-white/[0.03] p-5">
                <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-300">{project.tag}</span>
                <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
              </div>
              <div className="space-y-3 p-5">
                {project.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-gray-300">
                    ✔ {item}
                  </div>
                ))}
              </div>
              <div className="p-5 pt-0">
                <a href={whatsappTalk} className="block rounded-2xl bg-white px-5 py-4 text-center font-semibold text-[#05070D] transition hover:bg-blue-100">
                  Quero algo assim
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="nichos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 md:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Nichos atendidos</p>
            <h2 className="text-3xl font-bold md:text-5xl">Tecnologia aplicada à realidade do seu negócio.</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {niches.map((niche) => (
              <span key={niche} className="rounded-full border border-white/10 bg-[#05070D]/60 px-5 py-3 text-gray-300">
                {niche}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Como funciona</p>
          <h2 className="text-3xl font-bold md:text-5xl">Do caos operacional à solução funcionando.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {['Entendimento', 'Planejamento', 'Desenvolvimento', 'Implantação'].map((step, index) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-8 text-sm text-blue-300">0{index + 1}</p>
              <h3 className="mb-3 text-xl font-semibold">{step}</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {index === 0
                  ? 'Mapeamos sua operação e identificamos gargalos.'
                  : index === 1
                    ? 'Desenhamos a solução ideal para sua rotina.'
                    : index === 2
                      ? 'Criamos a plataforma com visual moderno e funcional.'
                      : 'Colocamos tudo no ar com suporte e ajustes finais.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-blue-600 p-10 shadow-2xl shadow-blue-600/20 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.24),transparent_38%)]" />
          <div className="relative max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">Seu negócio pode funcionar de forma muito mais inteligente.</h2>
            <p className="mb-8 text-lg text-blue-50/90">Fale com a Foco Start e descubra como transformar processos manuais em sistemas modernos, organizados e automáticos.</p>
            <a href={whatsappBudget} className="inline-flex rounded-2xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:bg-blue-50">
              Solicitar orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-gray-400 md:flex-row md:items-center">
          <p>© 2026 Foco Start. Sistemas inteligentes e automações modernas.</p>
          <div className="flex gap-5">
            <a href={whatsappTalk} className="hover:text-white">WhatsApp</a>
            <a href="#top" className="hover:text-white">Voltar ao topo</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
