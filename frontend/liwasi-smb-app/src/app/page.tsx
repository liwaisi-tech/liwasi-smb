import LargeTitle from '@/components/LargeTitle'
import NavBar from '@/components/NavBar'
import RoundedBgButton from '@/components/RoundedBgButton'
import RoundedCard from '@/components/RoundedCard'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col w-3/4 justify-center">
      <LargeTitle title="Mis Pymes" className="px-4" />
      <div className="w-full flex justify-between items-center">
      <Link
        href="/business"
      >
        <RoundedBgButton text="Ver mis pymes" />
      </Link>

      <Link
        href="/business/new"
      >
        <RoundedBgButton text="Crear una pyme" />
      </Link>
      </div>
    </section>
  )
}
