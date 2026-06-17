import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

const META_PIXEL_ID = '35840726372209449'

export const metadata: Metadata = {
  metadataBase: new URL('https://focostart.com.br'),
  title: {
    default: 'Foco Start | Sites profissionais sem mensalidade de hospedagem',
    template: '%s | Foco Start',
  },
  description:
    'Criação de sites profissionais, landing pages e sistemas sob medida para empresas e profissionais que querem transmitir credibilidade e receber clientes pelo WhatsApp.',
  keywords: [
    'site profissional',
    'criação de sites',
    'landing page',
    'site sem mensalidade',
    'site com whatsapp',
    'site para arquitetos',
    'site para psicólogos',
    'site para pequenas empresas',
    'sistemas personalizados',
    'desenvolvimento web',
    'foco start',
  ],
  authors: [{ name: 'Foco Start' }],
  creator: 'Foco Start',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://focostart.com.br',
    title: 'Foco Start | Sites profissionais sem mensalidade de hospedagem',
    description:
      'Tenha um site rápido, moderno e integrado ao WhatsApp para transmitir mais credibilidade e conquistar mais clientes.',
    siteName: 'Foco Start',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foco Start | Sites profissionais',
    description:
      'Sites profissionais, landing pages e sistemas sob medida para negócios que querem vender mais.',
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

        <Script id="meta-whatsapp-events" strategy="afterInteractive">
          {`
            (function () {
              var OLD_WHATSAPP_NUMBER = '5571993392294';
              var NEW_WHATSAPP_NUMBER = '5571997178807';

              function isWhatsAppUrl(url) {
                return typeof url === 'string' && (
                  url.indexOf('wa.me/') !== -1 ||
                  url.indexOf('api.whatsapp.com/') !== -1 ||
                  url.indexOf('web.whatsapp.com/') !== -1
                );
              }

              function getMetaTestEventCode() {
                try {
                  var params = new URLSearchParams(window.location.search);
                  return params.get('test_event_code') || params.get('testEventCode') || '';
                } catch (error) {
                  return '';
                }
              }

              function replaceWhatsAppNumber(url) {
                if (!isWhatsAppUrl(url)) return url;
                return url.replace(OLD_WHATSAPP_NUMBER, NEW_WHATSAPP_NUMBER);
              }

              function normalizeWhatsAppLinks() {
                var links = document.querySelectorAll('a[href]');
                links.forEach(function (link) {
                  if (!isWhatsAppUrl(link.href)) return;
                  link.href = replaceWhatsAppNumber(link.href);
                });
              }

              function buildEventPayload(link, category) {
                var buttonText = (link.innerText || link.getAttribute('aria-label') || 'WhatsApp').trim();
                var testEventCode = getMetaTestEventCode();
                var payload = {
                  content_name: 'WhatsApp CTA',
                  content_category: category,
                  button_text: buttonText,
                  page_url: window.location.href,
                  whatsapp_number: NEW_WHATSAPP_NUMBER,
                };

                if (testEventCode) {
                  payload.test_event_code = testEventCode;
                }

                return payload;
              }

              function sendWhatsAppLead(link) {
                if (typeof window.fbq !== 'function') return;

                window.fbq('track', 'Lead', buildEventPayload(link, 'whatsapp_lead'));
                window.fbq('track', 'Contact', buildEventPayload(link, 'whatsapp_contact'));
              }

              normalizeWhatsAppLinks();

              document.addEventListener('click', function (event) {
                var target = event.target;
                var link = target && target.closest ? target.closest('a') : null;

                if (!link || !isWhatsAppUrl(link.href)) return;

                link.href = replaceWhatsAppNumber(link.href);
                sendWhatsAppLead(link);

                if (
                  event.defaultPrevented ||
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey ||
                  link.target === '_blank'
                ) {
                  return;
                }

                event.preventDefault();
                var destination = replaceWhatsAppNumber(link.href);

                setTimeout(function () {
                  window.location.href = destination;
                }, 350);
              }, true);
            })();
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
