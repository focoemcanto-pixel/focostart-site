import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

const META_PIXEL_ID = '35840726372209449'

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
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
