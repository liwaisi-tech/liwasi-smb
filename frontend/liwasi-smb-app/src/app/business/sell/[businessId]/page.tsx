"use client"
import LargeTitle from '@/components/LargeTitle'
import CardTitle from '@/components/card/CardTitle'
import ProductSearch from '@/components/product/ProductSearch'
import ProductTable from '@/components/product/ProductTable'
import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle, AiFillFileAdd, AiOutlineSearch } from 'react-icons/ai'

function SellPage({ params }: { params: { businessId: string } }) {
  const empty: Business = {
    id: "",
    full_name: ""
  }
  const [business, setBusinesses] = useState(empty)
  useEffect(() => {
    fetch(`/api/business/${params.businessId}`)
      .then(res => res.json())
      .then(data => setBusinesses(data))
      .catch(err => console.log(err))
  }, [])
  const [productList, setProductList] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const sumTotal = productList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    setTotal(sumTotal)

  }, [productList])

  function removeProduct(id: string) {
    setProductList(productList.filter(product => product.id !== id))
  }

  function addProduct(product: Product, quantity: number) {
    if (!product || product.id === "" || quantity <= 0) {
      return
    }
    product.quantity = quantity
    setProductList([...productList, product])
  }
  return (
    <main className="w-full text-white px-4">
      {
        business.id !== "" &&
        <>
          <LargeTitle title={`Registra nueva venta de ${business.name}`} />
          <div className="flex w-full flex-wrap">
            <div className="w-full md:w-1/3 ">
              <div className="w-full">
                <CardTitle title="Productos:">
                  <ProductSearch addProduct={addProduct} />
                </CardTitle>
              </div>
            </div>
            <div className=" w-full md:w-2/3">
              <div className="w-full md:w-auto md:ml-1 md:pt-0 pt-1">
                <CardTitle title="Detalle de la venta:">
                  <ProductTable products={productList} onDelete={removeProduct} />
                </CardTitle>
                <div className="w-full flex items-center justify-end px-4">
                  <p>Total: <strong>{total}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </main>
  )
}

export default SellPage