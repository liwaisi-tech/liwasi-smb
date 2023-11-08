"use client"
import TransactionList from "@/components/TransactionList"
import CardTitle from "@/components/card/CardTitle"
import { useEffect, useState } from "react"
import { AiFillEdit } from "react-icons/ai"

function ViewBusiness({ params }: { params: { businessId: string } }) {
  const [business, setBusiness] = useState<Business>({ id: "" })
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
          setBusiness(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])
  return (
    <main className="w-full flex justify-center">
      <div className="w-full flex flex-col justify-center p-4">
        <h3 className="font-extralight text-white text-3xl md:text-4xl">
          {business.name}
        </h3>
        {
          business.phone &&
          <p className="text-base font-light text-detail">
            <span>Teléfono: </span>{business.phone}
          </p>
        }
        {
          business.email &&
          <p className="text-base font-light text-detail">{business.email}</p>
        }
        {
          business.address &&
          <p className="text-base font-light text-detail">
            {
              `${business.address} ${business.city ? `, ${business.city}` : ""}${business.state ? `, ${business.state}` : ""}`
            }
          </p>
        }
        <div className="w-full flex flex-wrap justify-between pt-2">
          <div className="w-full pt-2">
            <TransactionList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ViewBusiness