import { NextResponse } from "next/server";

function POST(request: Request, {params}: {params: {businessId: string}}){
    return NextResponse.json("Creando Pymes")
}