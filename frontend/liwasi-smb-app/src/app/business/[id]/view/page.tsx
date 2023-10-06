import LargeTitle from "@/components/LargeTitle"
import NavBar from "@/components/NavBar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Ver | Mis pymes',
    description: 'Ver la información de tu pyme',
  }
function ViewBusiness() {
  return (
    <section className="w-full">
      <LargeTitle title="Modo lectura" className="px-4"/>
    </section>
  )
}

export default ViewBusiness