import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PanelMenu from '@/components/PanelMenu'
import BottomBar from '@/components/BottomBar'

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
      <body className={`${inter.className} bg-bg-alternative`}>
        <div className="flex items-start">
          <div className="hidden text-white bg-black md:flex md:w-1/5 md:h-screen">
            <PanelMenu />
          </div>
          <div className="w-full md:w-4/5">
            <NavBar />
            {children}
            <BottomBar />
          </div>
        </div>
      </body>
    </html>
  )
}
