"use client"
import LargeTitle from "@/components/LargeTitle"
import { Metadata } from "next"
import { useEffect, useState } from "react"
import { FcAddressBook, FcCellPhone, FcHome } from "react-icons/fc"

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
        <p className="pe-1 text-lg font-light text-primary-blue-dark">Nombre comercial: {name}</p>
        <div className="w-full flex items-start">
          <FcCellPhone size={32} />
          <p className="text-lg font-light text-primary-blue-dark">{phone}</p>
        </div>
        <div className="w-full flex items-start">
          <FcAddressBook size={32} />
          <p className="text-lg font-light text-primary-blue-dark">{email}</p>
        </div>
        <div className="w-full flex items-start">
          <FcHome size={32} />
          <p className="text-lg font-light text-primary-blue-dark">
            {
              `${address ? `${address}` : ""}${city ? `, ${city}` : ""}${state ? `, ${state}` : ""}`
            }
          </p>
        </div>
        <div className="w-full">

        </div>
      </div>
    </main>
  )
}

export default ViewBusiness