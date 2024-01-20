import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from '@/utils/providers'
import Header from '@/components/Header'

const nunito_sans = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Rest Countries API',
  description: 'Frontend Mentor Rest Countries API With Theme Color Switch Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className} bg-bg dark:bg-dark-bg text-color dark:text-dark-color`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
