import LargeTitle from "@/components/LargeTitle"
import RoundedBgButton from "@/components/RoundedBgButton";
import SingleButton from "@/components/SingleButton";
import CardTitle from "@/components/card/CardTitle"
import { AiFillDelete, AiFillEdit, AiFillFileAdd } from "react-icons/ai";


interface SaleDetail {
    product: string;
    quantity: number;
    subtotal: number;
}

function dummyData(): SaleDetail[] {
    return [
        {
            product: "Empanadas",
            quantity: 3,
            subtotal: 6000,
        },
        {
            product: "Cholao Mediano",
            quantity: 1,
            subtotal: 4000,
        },
        {
            product: "Cholao Grande",
            quantity: 2,
            subtotal: 12000,
        },
        {
            product: "Raspado",
            quantity: 5,
            subtotal: 10000,
        }
    ]
}

function BusinessSalePage() {
    const data = dummyData()
    return (
        <main className="w-full px-4">
            <LargeTitle title="Detalle de ventas" />
            <CardTitle title="Listado de ventas de [pyme]">
                <div className="w-full flex justify-between px-4">
                    <p>Venta #4</p>
                    <div className="flex justify-around">
                        <p className="text-sm">Borrar</p>
                        <AiFillDelete size={24} />
                    </div>
                </div>
                <div className="w-full flex justify-between px-4">
                    <p>27 de Octubre de 2023 - 4:35 pm</p>
                    <div className="flex justify-around">
                        <p className="text-sm">Editar</p>
                        <AiFillEdit size={24} />
                    </div>
                </div>
                <div className="w-full flex justify-between px-4 mb-4">
                    <p>Estado: Pendiente | Cancelada | Desistida</p>
                    <div className="flex justify-around">
                        <p className="text-sm">Agregar</p>
                        <AiFillFileAdd size={24} />
                    </div>
                </div>
                <div className="table w-full px-4">
                    <div className="table-header-group bg-bg-alternative rounded-lg text-white py-2">
                        <div className="table-row">
                            <div className="table-cell text-start">
                                Producto
                            </div>
                            <div className="table-cell text-center">
                                Cantidad
                            </div>
                            <div className="table-cell text-center">
                                Subtotal
                            </div>
                            <div className="table-cell text-center">
                                Acciones
                            </div>
                        </div>
                    </div>
                    {

                        data.map((detail, index) => (
                            <div className="table-row-group" key={index}>
                                <div className="table-row">
                                    <div className="table-cell">
                                        {detail.product}
                                    </div>
                                    <div className="table-cell text-center">
                                        {detail.quantity}
                                    </div>
                                    <div className="table-cell text-end">
                                        {`$${detail.subtotal}`}
                                    </div>
                                    <div className="table-cell">
                                        <div className="w-full flex items-center justify-center">
                                            <AiFillEdit size={20} />
                                            <AiFillDelete size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="table-footer-group  bg-bg-alternative text-white py-2">
                        <div className="table-cell"></div>
                        <div className="table-cell text-end">Total:</div>
                        <div className="table-cell text-end">$32000</div>
                        <div className="table-cell"></div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-end mt-2 px-4">
                    <SingleButton text="<- Atrás" className="text-bg-bg-alternative"/>
                    <RoundedBgButton text="Pendiente" />
                    <RoundedBgButton text="Pagar"/>
                </div>
            </CardTitle>
        </main>
    )
}

export default BusinessSalePage