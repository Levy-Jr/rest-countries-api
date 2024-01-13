import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito_sans = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Rest Countries API',
  description: 'Frontend Mentor Rest Countries API Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className} bg-bg text-color-primary`}>{children}</body>
    </html>
  )
}
