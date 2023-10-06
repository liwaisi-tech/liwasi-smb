"use client"
import { useRouter } from "next/navigation"
import RoundedBgButton from "./RoundedBgButton"
import SingleButton from "./SingleButton"

function EditButtons() {
    const router = useRouter()
    return (
        <div className="w-full flex items-end justify-end px-2 py-4">
            <SingleButton text="Cancelar" onClick={() => router.back()} />
            <RoundedBgButton text="Guardar" />
        </div>
    )
}

export default EditButtons