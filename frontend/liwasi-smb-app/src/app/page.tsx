import LargeTitle from '@/components/LargeTitle'
import NavBar from '@/components/NavBar'
import RoundedCard from '@/components/RoundedCard'

export default function Home() {
  return (
    <section className="flex flex-col">
      <LargeTitle title="Mis Pymes" className="px-4"/>
      <div className="w-full flex flex-wrap items-center md:items-start justify-center md:justify-start md:px-4">
        <RoundedCard 
          title="Mitsa Pizza"
        />
      </div>
    </section>
  )
}
