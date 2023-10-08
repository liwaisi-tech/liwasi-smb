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
    <section className="w-full flex justify-center">
      <div className="w-full md:w-2/3 ">
        <LargeTitle title={fullName} />
        <p className="py-1 font-extralight text-3xl text-primary-blue-dark"
        >
          {businessId}
        </p>
        <p className="pe-1 text-lg font-light text-primary-blue-dark">{name}</p>
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
    </section>
  )
}

export default ViewBusiness