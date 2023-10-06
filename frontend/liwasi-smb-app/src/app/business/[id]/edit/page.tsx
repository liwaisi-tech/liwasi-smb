import EditButtons from "@/components/EditButtons"
import InputLabel from "@/components/InputLabel"
import LargeTitle from "@/components/LargeTitle"
import NavBar from "@/components/NavBar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Editar| Mis pymes',
    description: 'Editar la información de tu pyme',
}
function EditBusiness() {
    return (
        <section className="w-full">
            <NavBar />
            <LargeTitle title="Editar pyme" className="px-4" />
            <div className="w-full px-4">
                <form action="">
                    <InputLabel
                        label="Identificación (NIT)*"
                        type="text"
                        value="2215691165" />
                    <InputLabel
                        label="Nombre o razón social*"
                        type="text"
                        value="Liwasi Food SAS" />
                    <InputLabel
                        label="Nombre (opcional)"
                        type="text"
                        value="Mitsa Pizza - Pizzería artesanal" />
                    <InputLabel
                        label="Correo electrónico (opcional)"
                        type="email"
                        value="mitsapizza@gmail.com" />
                    <InputLabel
                        label="Teléfono"
                        type="tel"
                        value="31051427" />
                    <InputLabel
                        label="Dirección (opcional)"
                        type="text"
                        value="Cra. 14 # 78-78" />
                    <InputLabel
                        label="Ciudad (opcional)"
                        type="text"
                        value="Santa Helena de Cusiva, Maní" />
                    <InputLabel
                        label="Departamento (opcional)"
                        type="text"
                        value="Casanare" />
                    <EditButtons />
                </form>

            </div>
        </section>
    )
}

export default EditBusiness