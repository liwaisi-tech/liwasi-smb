"use client"
import RoundedBgButton from "@/components/RoundedBgButton"
import TransactionList from "@/components/TransactionList"
import { useEffect, useState } from "react"
import { AiFillEdit } from "react-icons/ai"

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
        <div className="w-full flex flex-wrap justify-between pt-2">
          <div className="w-full md:w-[48%] p-1 bg-slate-200 rounded-lg shadow-md">
            <div className="w-full flex justify-between">
              <h3 className="text-sm font-normal">Horarios de atención:</h3>
              <button className="flex  hover:shadow-mdfont-semibold text-xs items-center bg-primary-blue-dark text-white justify-normal px-1 rounded-md">
                Editar
                <AiFillEdit size={16} />
              </button>
            </div>
            <div className="w-full text-xs font-light">
              <p>
                LUN, MAR, MIE, JUE, VIE - 8:00 AM - 5:00 PM
              </p>
              <p>
                SAB, DOM - 4:00 PM - 10:00 PM
              </p>
            </div>
          </div>
          <div className="w-full md:w-[48%] p-1 mt-2 md:mt-0 bg-slate-200 rounded-lg shadow-md">
            <div className="w-full ">
              <h3 className="text-sm font-normal">Accesos rápidos:</h3>
              <div className="w-full flex items-center justify-around">
                <button className="p-1 mx-1 bg-green-700 text-white rounded-md text-sm font-normal px-2 py-1">
                  Abrir
                </button>
                <button className="p-1 mx-1 bg-red-700 text-white rounded-md text-sm font-normal px-2 py-1">
                  Cerrar
                </button>
                <button className="p-1 mx-1 bg-orange-600 text-white rounded-md text-sm font-normal px-2 py-1">
                  Gasto
                </button>
                <button className="p-1 mx-1 bg-sky-700 text-white rounded-md text-sm font-normal px-2 py-1">
                  Venta
                </button>
              </div>
            </div>
          </div>
          <div className="w-full pt-2">
            <TransactionList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ViewBusiness