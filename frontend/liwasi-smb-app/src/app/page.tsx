import LargeTitle from '@/components/LargeTitle'
import NavBar from '@/components/NavBar'
import PanelMenu from '@/components/PanelMenu'
import RoundedBgButton from '@/components/RoundedBgButton'
import RoundedCard from '@/components/RoundedCard'
import Link from 'next/link'

export default function Home() {
  // return (
  //   <main className="flex w-full justify-center">
  //     <PanelMenu />
  //     <div className="w-full md:w-3/4">
  //       <LargeTitle title="Mis Pymes" className="px-4" />
  //       <div className="w-full flex justify-between items-center">
  //         <Link
  //           href="/business"
  //         >
  //           <RoundedBgButton text="Ver mis pymes" />
  //         </Link>

  //         <Link
  //           href="/business/new"
  //         >
  //           <RoundedBgButton text="Crear una pyme" />
  //         </Link>
  //       </div>
  //     </div>
  //   </main>
  // )
  return (
    <main className="flex w-full">
      <LargeTitle title="Liwasi Pymes - Panel de administración" className="w-full px-4 pt-2" />
    </main>
  )
}
