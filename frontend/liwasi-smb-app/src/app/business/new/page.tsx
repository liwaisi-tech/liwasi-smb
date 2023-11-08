"use client"
import FormButtons from "@/components/FormButtons"
import InputLabel from "@/components/InputLabel"
import LargeTitle from "@/components/LargeTitle"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

function NewBusinessPage({ params }: { params: { businessId: string } }) {
    const router = useRouter()
    const emptyBusiness :Business = {
        id: ""
    }
    const [business, setBusiness] = useState<Business>(emptyBusiness)
    useEffect(() => {
        console.log("Cargando información de pyme")
        if (params.businessId) {
            fetch(`/api/business/${params.businessId}`)
                .then(res => res.json())
                .then(data => {
                    console.log(`resultado de POST: ${data}`)
                    setBusiness(data)
                    console.log(`resultado de business: ${business.id}`)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])

    async function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let response: Response
        if (!params.businessId || params.businessId === "") {
            response = await fetch("/api/business", {
                method: "POST",
                body: JSON.stringify({
                    name: business?.name,
                    email: business?.email,
                    phone: business?.phone,
                    address: business?.address,
                    city: business?.city,
                    state: business?.state
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response)
        } else {
            response = await fetch(`/api/business/${params.businessId}`, {
                method: "PUT",
                body: JSON.stringify({
                    id: business?.id,
                    name: business?.name,
                    email: business?.email,
                    phone: business?.phone,
                    address: business?.address,
                    city: business?.city,
                    state: business?.state
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }


        if (response.ok) {
            router.push(`/business/`)
        }
        const data = await response.json()
        //TODO: Mostrar un mensaje de error en pantalla.
        console.log(data)
    }
    return (
        <div className="w-full flex justify-center p-4">
            <form onSubmit={onSubmitHandler} className="md:w-3/5">
                <div className="w-full">
                    {
                        params.businessId ?
                            <LargeTitle title={`Liwasi Pymes - Editando tu pyme ${params.businessId}`} />
                            :
                            <LargeTitle title="Liwasi Pymes - Crea tu pyme!" />
                    }
                </div>
                <InputLabel
                    id="name"
                    label="Nombre (opcional)"
                    type="text"
                    onChange={(e) => {
                        business.name = e.target.value
                        setBusiness(business)
                    }}
                    value={business.name} />
                <InputLabel
                    id="email"
                    label="Correo electrónico (opcional)"
                    type="email"
                    onChange={(e) => {
                        business.email = e.target.value
                        setBusiness(business)
                    }}
                    value={business.email} />
                <InputLabel
                    id="phone"
                    label="Teléfono"
                    type="tel"
                    onChange={(e) => {
                        business.phone = e.target.value
                        setBusiness(business)
                    }}
                    value={business.phone} />
                <InputLabel
                    id="address"
                    label="Dirección (opcional)"
                    type="text"
                    onChange={(e) => {
                        business.address = e.target.value
                        setBusiness(business)
                    }}
                    value={business.address} />
                <InputLabel
                    id="city"
                    label="Ciudad (opcional)"
                    type="text"
                    onChange={(e) => {
                        business.city = e.target.value
                        setBusiness(business)
                    }}
                    value={business.city} />
                <InputLabel
                    id="state"
                    label="Departamento (opcional)"
                    type="text"
                    onChange={(e) => {
                        business.state = e.target.value
                        setBusiness(business)
                    }}
                    value={business.state} />
                <FormButtons
                    text={params.businessId ? "Actualizar" : "Crear"}
                />
            </form>
        </div>
    )
}

export default NewBusinessPage