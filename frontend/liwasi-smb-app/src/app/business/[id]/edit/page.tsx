"use client"
import EditButtons from "@/components/EditButtons"
import InputLabel from "@/components/InputLabel"
import LargeTitle from "@/components/LargeTitle"
import { useParams } from "next/navigation"
import { FormEvent } from "react"
function EditBusiness() {

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const target = event.target as typeof event.target & {
            id: { value: string };
            full_name: { value: string };
            name: { value: string };
            email: { value: string };
            phone: { value: string };
            address: { value: string };
            city: { value: string };
            state: { value: string };
        };
        console.log(target)
    }

    const params = useParams()
    const id = params.id ? params.id as string : ""
    return (
        <main className="w-full flex flex-col items-center justify-center">
            <LargeTitle title="Editar pyme" className="px-4" />
            <div className="w-full px-4 md:w-2/3">
                <form onSubmit={onSubmit}>
                    <InputLabel
                        id="id"
                        label="Identificación (NIT)*"
                        type="text"
                        value={id} />
                    <InputLabel
                        id="full_name"
                        label="Nombre o razón social*"
                        type="text"
                        value="Liwasi Food SAS" />
                    <InputLabel
                        id="name"
                        label="Nombre (opcional)"
                        type="text"
                        value="Mitsa Pizza - Pizzería artesanal" />
                    <InputLabel
                        id="email"
                        label="Correo electrónico (opcional)"
                        type="email"
                        value="mitsapizza@gmail.com" />
                    <InputLabel
                        id="phone"
                        label="Teléfono"
                        type="tel"
                        value="31051427" />
                    <InputLabel
                        id="address"
                        label="Dirección (opcional)"
                        type="text"
                        value="Cra. 14 # 78-78" />
                    <InputLabel
                        id="city"
                        label="Ciudad (opcional)"
                        type="text"
                        value="Santa Helena de Cusiva, Maní" />
                    <InputLabel
                        id="state"
                        label="Departamento (opcional)"
                        type="text"
                        value="Casanare" />
                    <EditButtons />
                </form>

            </div>
        </main>
    )
}

export default EditBusiness