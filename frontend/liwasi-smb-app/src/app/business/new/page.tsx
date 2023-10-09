"use client"
import FormButtons from "@/components/FormButtons"
import InputLabel from "@/components/InputLabel"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

function NewBusinessPage({ params }: { params: { businessId: string } }) {
    const router = useRouter()
    const [businessId, setBusinessId] = useState("")
    const [fullName, setFullName] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")


    useEffect(() => {
        if (params.businessId) {
            fetch(`/api/business/${params.businessId}`)
                .then(res => res.json())
                .then(data => {
                    setBusinessId(data.id)
                    setFullName(data.full_name)
                    setName(data.name)
                    setEmail(data.email)
                    setPhone(data.phone)
                    setAddress(data.address)
                    setCity(data.city)
                    setState(data.state)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])

    async function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("prevent default")
        let response: Response
        if (!params.businessId || params.businessId === "") {
            response = await fetch("/api/business", {
                method: "POST",
                body: JSON.stringify({
                    id: businessId,
                    full_name: fullName,
                    name: name,
                    email: email,
                    phone: phone,
                    address: address,
                    city: city,
                    state: state
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } else {
            console.log(JSON.stringify({
                id: businessId,
                full_name: fullName,
                name: name,
                email: email,
                phone: phone,
                address: address,
                city: city,
                state: state
            }))
            response = await fetch(`/api/business/${params.businessId}`, {
                method: "PUT",
                body: JSON.stringify({
                    id: businessId,
                    full_name: fullName,
                    name: name,
                    email: email,
                    phone: phone,
                    address: address,
                    city: city,
                    state: state
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }


        if (response.ok) {
            router.push(`/business/view/${businessId}`)
        }
        const data = await response.json()
        //TODO: Mostrar un mensaje de error en pantalla.
        console.log(data)
    }
    return (
        <div className="w-full flex justify-center px-4">
            <div className="w-full flex md:w-2/3">
                <form onSubmit={onSubmitHandler} className="w-full">
                    <InputLabel
                        id="id"
                        label="Identificación (NIT)*"
                        type="text"
                        onChange={(e) => setBusinessId(e.target.value)}
                        value={businessId} />
                    <InputLabel
                        id="full_name"
                        label="Nombre o razón social*"
                        type="text"
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName} />
                    <InputLabel
                        id="name"
                        label="Nombre (opcional)"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                    <InputLabel
                        id="email"
                        label="Correo electrónico (opcional)"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    <InputLabel
                        id="phone"
                        label="Teléfono"
                        type="tel"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone} />
                    <InputLabel
                        id="address"
                        label="Dirección (opcional)"
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address} />
                    <InputLabel
                        id="city"
                        label="Ciudad (opcional)"
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city} />
                    <InputLabel
                        id="state"
                        label="Departamento (opcional)"
                        type="text"
                        onChange={(e) => setState(e.target.value)}
                        value={state} />
                    <FormButtons
                        text={params.businessId ? "Actualizar" : "Crear"}
                    />
                </form>
            </div>
        </div>
    )
}

export default NewBusinessPage