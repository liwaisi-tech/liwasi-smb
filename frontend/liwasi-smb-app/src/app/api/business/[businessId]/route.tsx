import { NextResponse } from "next/server";


export async function GET(request : Request, { params }: { params: { businessId: string }}) {
    //Llamar el microservicio de business
    console.log(`businessId: ${params.businessId}`)
    const id = (params.businessId as string) ?  params.businessId as string : ""
    const response = await fetch(`http://${process.env.SMB_API_REST_HOST}:8010/business/${id}`, {next: { revalidate: 0 }});
    const business = await response.json();
    return NextResponse.json(business)
}

export async function PUT(request: Request) {
    const body = await request.json()
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    }
    if (!body.id || body.id === ""){
        return NextResponse.json({ error: 'Business id is required' }, { status: 400 })
    }
    const response = await fetch(`http://${process.env.SMB_API_REST_HOST}:8010/business/${body.id}`, requestOptions)
    const status = await response.status
    if (response.ok) {
        return NextResponse.json({status: status})
    }
    return NextResponse.json({ error: `status response: ${status}` }, { status: status })
}
