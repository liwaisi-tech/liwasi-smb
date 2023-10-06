import { NextResponse } from "next/server";


export async function GET(request : Request, { params }: { params: { businessId: string }}) {
    //Llamar el microservicio de business
    console.log(params)
    const id = (params.businessId as string) ?  params.businessId as string : ""
    const response = await fetch(`http://localhost:8010/business/${id}`);
    const business = await response.json();
    return NextResponse.json(business)
}