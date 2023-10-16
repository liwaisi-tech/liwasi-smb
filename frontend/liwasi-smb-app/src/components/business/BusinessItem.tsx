import Link from "next/link"
import { AiFillDollarCircle, AiFillEdit, AiFillFileText, AiFillMinusCircle } from "react-icons/ai"
import ButtonLinkIcon from "../button/ButtonLinkIcon"

interface BusinessItemProps {
    business: Business,
    key?: number,
    fullIcons?: boolean
}

function BusinessItem(props: BusinessItemProps) {
    return (
        <div key={props.key} className="w-full flex justify-between flex-wrap border-b border-b-black py-1">
            <Link className="w-full md:w-2/3 lg:w-4/5" href={`/business/view/${props.business.id}`}>
                <div className="flex flex-col font-light text-black hover:cursor-pointer hover:bg-black hover:text-white">
                    <p className="text-sm font-normal">{props.business.name}</p>
                    <p className="font-extralight text-xs">{props.business.id}</p>
                </div>
            </Link>
            <div className="flex w-full md:w-1/3 lg:w-1/5 justify-center items-center py-1">
                <div className="flex justify-center bg-opacity-80 text-white bg-black rounded-lg px-2">
                    <ButtonLinkIcon
                        tooltip="Registrar nueva venta"
                        href={`#`}
                        icon={<AiFillDollarCircle size={20} />} />
                    <p>|</p>
                    <ButtonLinkIcon
                        tooltip="Registrar nuevo pago o gasto"
                        href={`#`}
                        icon={<AiFillMinusCircle size={20} />} />
                    {
                        props.fullIcons &&
                        <>
                            <p>|</p>
                            <ButtonLinkIcon
                                tooltip="Editar información de pyme"
                                href={`/business/edit/${props.business.id}`}
                                icon={<AiFillEdit size={20} />} />
                            <p>|</p>
                            <ButtonLinkIcon
                                tooltip="Transacciones más recientes"
                                href={`#`}
                                icon={<AiFillFileText size={20} />} />
                        </>
                    }
                </div>
            </div>

        </div>
    )
}

export default BusinessItem