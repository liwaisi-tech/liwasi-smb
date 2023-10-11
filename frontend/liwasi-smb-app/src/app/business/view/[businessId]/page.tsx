"use client"
import { useEffect, useState } from "react"

function ViewBusiness({ params }: { params: { businessId: string } }) {
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
  return (
    <main className="w-full flex justify-center">
      <div className="w-full flex flex-col justify-center p-4">
        <h3 className="font-extralight text-primary-blue-dark text-3xl md:text-4xl">
          {fullName}
        </h3>
        <p className="py-1 font-semibold text-sm md:text-base text-primary-blue-dark"
        >
          {businessId}
        </p>
        <div className="w-full">
          <hr className="mx-8 bg-slate-300 mb-2" />
        </div>
        {
          name &&
          <p className="pe-1 text-lg text-black font-light">
            <span>Nombre comercial: </span>{`${name}`}
          </p>
        }
        {
          phone &&
          <p className="text-lg font-light text-black">
            <span>Teléfono: </span>{phone}
          </p>
        }
        {
          email &&
          <p className="text-lg font-light text-black">{email}</p>
        }
        {
          address &&
          <p className="text-lg font-light text-black">
            {
              `${address ? `${address}` : ""}${city ? `, ${city}` : ""}${state ? `, ${state}` : ""}`
            }
          </p>
        }
        <div className="w-full">
        </div>
      </div>
    </main>
  )
}

export default ViewBusiness