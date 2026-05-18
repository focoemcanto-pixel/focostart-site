export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070D] text-white overflow-hidden">
      <section className="relative px-6 py-24 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-sm text-gray-300 mb-6">
              Sistemas • Automações • Tecnologia
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Transformamos
              <span className="text-blue-500"> processos manuais </span>
              em soluções inteligentes.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
              Criamos sistemas personalizados, automações e plataformas modernas para empresas, igrejas e negócios que desejam crescer com organização e tecnologia.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5571000000000"
                className="bg-blue-600 hover:bg-blue-500 transition px-7 py-4 rounded-2xl font-medium"
              >
                Solicitar orçamento
              </a>

              <a
                href="https://wa.me/5571000000000"
                className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-7 py-4 rounded-2xl font-medium"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-12 text-sm text-gray-400">
              <span>✔ Sistemas personalizados</span>
              <span>✔ Integrações WhatsApp</span>
              <span>✔ Dashboards modernos</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full" />

            <div className="relative bg-[#0B1020] border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-semibold text-lg">Painel Inteligente</h3>
                  <p className="text-gray-400 text-sm">Foco Start Dashboard</p>
                </div>

                <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm">
                  Online
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                  <p className="text-gray-400 text-sm mb-2">Automações</p>
                  <h4 className="text-3xl font-bold">24</h4>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                  <p className="text-gray-400 text-sm mb-2">Eficiência</p>
                  <h4 className="text-3xl font-bold">+87%</h4>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="font-medium">Sistema de Escalas</p>
                    <p className="text-sm text-gray-400">Igrejas e equipes</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="font-medium">CRM Inteligente</p>
                    <p className="text-sm text-gray-400">Atendimento automatizado</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dashboard Financeiro</p>
                    <p className="text-sm text-gray-400">Gestão moderna</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
