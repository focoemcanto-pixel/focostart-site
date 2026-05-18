import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://focostart.com.br'),
  title: {
    default: 'Foco Start | Sistemas inteligentes e automações modernas',
    template: '%s | Foco Start',
  },
  description:
    'Desenvolvimento de sistemas personalizados, automações inteligentes e plataformas modernas para empresas, igrejas e negócios.',
  keywords: [
    'sistemas personalizados',
    'automação',
    'software sob medida',
    'dashboard',
    'sistema para igrejas',
    'crm',
    'automação whatsapp',
    'desenvolvimento web',
    'foco start',
  ],
  authors: [{ name: 'Foco Start' }],
  creator: 'Foco Start',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://focostart.com.br',
    title: 'Foco Start | Sistemas inteligentes e automações modernas',
    description:
      'Automatize processos, organize operações e modernize seu negócio com soluções digitais inteligentes.',
    siteName: 'Foco Start',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foco Start',
    description:
      'Sistemas personalizados, automações inteligentes e plataformas modernas para negócios.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
