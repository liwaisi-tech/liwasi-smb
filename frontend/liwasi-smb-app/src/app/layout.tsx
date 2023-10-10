import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import PanelMenu from '@/components/PanelMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liwasi Pymes',
  description: 'Página de inicio de Liwasi Pymes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="w-full flex">
          <PanelMenu />
          <div className="w-full md:w-4/5">
            {children}
          </div>
        </div>


      </body>
    </html>
  )
}
