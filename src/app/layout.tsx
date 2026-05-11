import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WYBOB',
  description: 'Chapeaux premium WYBOB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}