"use client"
import LargeTitle from "@/components/LargeTitle"
import RoundedBgButton from "@/components/RoundedBgButton";
import SingleButton from "@/components/SingleButton";
import ButtonIcon from "@/components/button/ButtonIcon";
import CardTitle from "@/components/card/CardTitle"
import { useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillFileAdd } from "react-icons/ai";


function dummyData(): SaleDetail[] {
    return [
        {
            id: "1",
            sale_id: "1",
            product_id: "1",
            product_name: "Empanada",
            quantity: 5,
            price: 2000,
        },
        {
            id: "1",
            sale_id: "1",
            product_id: "2",
            product_name: "Cholao Mediano",
            quantity: 3,
            price: 4000,
        },
        {
            id: "1",
            sale_id: "1",
            product_id: "3",
            product_name: "Cholao Grande",
            quantity: 1,
            price: 6000,
        },
        {
            id: "1",
            sale_id: "1",
            product_id: "4",
            product_name: "Raspado",
            quantity: 4,
            price: 2000,
        }
    ]
}

function deleteItemProduct(data: SaleDetail[], productKey: string): SaleDetail[] {
    return data.filter(item => item.product_id !== productKey)
}

function BusinessSalePage() {
    const [data, setData] = useState<SaleDetail[]>(dummyData())
    function handleDelete(productKey: string) {
        setData(deleteItemProduct(data, productKey))

    }
    function getTotal(): number {
        return data.reduce((accumulator, detail) => {
            const subtotal = detail.price * detail.quantity;
            return accumulator + subtotal;
        }, 0);

    }
    return (
        <main className="w-full px-4">
            <LargeTitle title="Detalle de ventas" />
            <CardTitle title="Listado de ventas de [pyme]">
                <div className="w-full flex justify-between px-4">
                    <p>Venta #4</p>
                </div>
                <div className="w-full flex justify-between px-4">
                    <p>27 de Octubre de 2023 - 4:35 pm</p>
                    <div className="flex justify-around">
                        <p className="text-sm">Borrar</p>
                        <ButtonIcon>
                            <AiFillDelete size={24} />
                        </ButtonIcon>
                    </div>
                </div>
                <div className="w-full flex justify-between px-4 mb-4">
                    <p>Estado: Pendiente | Cancelada | Desistida</p>
                    <div className="flex justify-around">
                        <p className="text-sm">Agregar</p>
                        <ButtonIcon>
                            <AiFillFileAdd size={24} />
                        </ButtonIcon>
                    </div>
                </div>
                <div className="table w-full px-4">
                    <div className="table-header-group bg-bg-alternative rounded-lg text-white py-2">
                        <div className="table-row shadow-lg">
                            <div className="table-cell text-start py-4 rounded-tl-lg pl-4">
                                Producto
                            </div>
                            <div className="table-cell text-center">
                                Cantidad
                            </div>
                            <div className="table-cell text-end">
                                Subtotal
                            </div>
                            <div className="table-cell text-center rounded-tr-lg">
                                Acciones
                            </div>
                        </div>
                    </div>
                    {

                        data.map((detail, index) => (
                            <div className="table-row-group" key={index}>
                                <div className="table-row hover:cursor-pointer hover:bg-black hover:text-white">
                                    <div className="table-cell pl-4">
                                        {detail.product_name}
                                    </div>
                                    <div className="table-cell text-center">
                                        {detail.quantity}
                                    </div>
                                    <div className="table-cell text-end">
                                        {`$${detail.price * detail.quantity}`}
                                    </div>
                                    <div className="table-cell">
                                        <div className="w-full flex items-center justify-center">
                                            <AiFillEdit size={20} />
                                            <ButtonIcon onClick={() => handleDelete(detail.product_id)}>
                                                <AiFillDelete size={20} />
                                            </ButtonIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="table-footer-group  bg-bg-alternative text-white py-2">
                        <div className="table-cell rounded-bl-lg"></div>
                        <div className="table-cell text-end">Total:</div>
                        <div className="table-cell text-end">{`$${getTotal()}`}</div>
                        <div className="table-cell rounded-br-lg"></div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-end mt-2 px-4">
                    <SingleButton text="<- Atrás" className="text-bg-bg-alternative" />
                    <RoundedBgButton text="Pendiente" />
                    <RoundedBgButton text="Pagar" />
                </div>
            </CardTitle>
        </main>
    )
}

export default BusinessSalePage