import './globals.css'

export const metadata = {
  title: 'Foco Start',
  description: 'Sistemas inteligentes e automações modernas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
