"use client"
import LargeTitle from '@/components/LargeTitle'
import CardTitle from '@/components/card/CardTitle'
import BusinessList from '@/components/business/BusinessList'
import EmptyBusinessList from '@/components/business/EmptyBusinessList'
import { use, useEffect, useState } from 'react'

export default function Home() {
  const emptyBusinessList: Business[] = []
  const [businessList, setBusinessList] = useState(emptyBusinessList)
  useEffect(() => {
    fetch('http://localhost:3000/api/business')
      .then(res => res.json())
      .then(data => setBusinessList(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <main className="w-full px-2">
      <LargeTitle title="Home Page" className="w-full px-4 pt-2" />
      <div className="w-full flex flex-wrap items-stretch justify-start mt-3">
        <CardTitle title="Mis Pymes">
          {
            businessList.length === 0 ?
              <EmptyBusinessList />
              :
              <BusinessList businessList={businessList} />
          }
        </CardTitle>
      </div>
    </main>
  )
}
