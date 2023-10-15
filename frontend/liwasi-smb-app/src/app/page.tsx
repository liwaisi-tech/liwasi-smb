import LargeTitle from '@/components/LargeTitle'
import NavBar from '@/components/NavBar'
import PanelMenu from '@/components/PanelMenu'
import RoundedBgButton from '@/components/RoundedBgButton'
import RoundedCard from '@/components/RoundedCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex w-full">
      <LargeTitle title="Liwasi Pymes - Panel de administración" className="w-full px-4 pt-2" />
    </main>
  )
}
