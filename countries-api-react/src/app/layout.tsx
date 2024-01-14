import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from '@/utils/providers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

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
    <html lang="en" className='dark'>
      <body className={`${nunito_sans.className} bg-bg dark:bg-dark-bg text-color dark:text-dark-color`}>
        <Providers>
          <header className='el-color dark:bg-dark-el-color py-6 shadow-md'>
            <div className='flex justify-between w-[min(69.375rem,100%-2rem)] mx-auto'>
              <h1 className='font-extrabold'>Where in the world?</h1>
              <button className='flex items-center gap-2 font-semibold'><FontAwesomeIcon icon={faMoon} width={14} />Dark Mode</button>
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  )
}
