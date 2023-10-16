"use client"
import LargeTitle from "@/components/LargeTitle"
import PanelMenu from "@/components/PanelMenu"
import RoundedCard from "@/components/RoundedCard"
import BusinessList from "@/components/business/BusinessList"
import EmptyBusinessList from "@/components/business/EmptyBusinessList"
import CardTitle from "@/components/card/CardTitle"
import { useEffect, useState } from "react"

async function BusinessesPage() {
    const empty: Business[] = []
    const [businesses, setBusinesses] = useState(empty)
    useEffect(() => {
        fetch(`/api/business/`)
            .then(res => res.json())
            .then(data => {
                setBusinesses(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(businesses)
    return (
        <div className="w-full flex justify-center p-4">
            <div className="w-full flex flex-wrap justify-center">
                <div className="w-full">
                    <LargeTitle title="Administra y gestiona tus emprendimientos." />
                </div>
                <CardTitle title="Mis Pymes">
                    {
                        businesses.length === 0 ?
                            <EmptyBusinessList />
                            :
                            <BusinessList businessList={businesses} fullIcons={true}/>
                    }
                </CardTitle>
            </div>
        </div>
    )
}

export default BusinessesPage