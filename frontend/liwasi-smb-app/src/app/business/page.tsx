import RoundedCard from "@/components/RoundedCard"

async function loadBusinesses(): Promise<Array<Business>> {
    const response = await fetch("http://localhost:3000/api/business", { next: { revalidate: 0 } })
    return await response.json()
}



async function BusinessesPage() {
    const businesses = await loadBusinesses()
    console.log(businesses)
    return (
        <div className="w-full flex justify-center p-4">
            <div className="w-full md:w-3/4 flex flex-wrap justify-center">
                {
                    businesses.map((business) => {
                        return (
                            <RoundedCard
                                key={business.id}
                                id={business.id}
                                title={business.name ? business.name : ""}
                                alt1={business.address ? business.address : ""} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BusinessesPage