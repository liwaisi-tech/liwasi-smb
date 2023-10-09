"use client"
import { useRouter } from "next/navigation"
import RoundedBgButton from "./RoundedBgButton"
import SingleButton from "./SingleButton"

interface FormButtonsProps {
    text: string;
}
function FormButtons(props: FormButtonsProps) {
    const router = useRouter()
    return (
        <div className="w-full flex items-end justify-end px-2 py-4">
            <SingleButton text="Cancelar" onClick={() => router.back()} type="button" />
            <RoundedBgButton text={props.text} type="submit"/>
        </div>
    )
}

export default FormButtons