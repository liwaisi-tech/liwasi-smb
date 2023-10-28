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
            Id: "1",
            SaleId: "1",
            ProductId: "1",
            ProductName: "Empanada",
            Quantity: 5,
            Price: 2000,
        },
        {
            Id: "1",
            SaleId: "1",
            ProductId: "2",
            ProductName: "Cholao Mediano",
            Quantity: 2,
            Price: 4000,
        },
        {
            Id: "1",
            SaleId: "1",
            ProductId: "3",
            ProductName: "Cholao Grande",
            Quantity: 1,
            Price: 6000,
        },
        {
            Id: "1",
            SaleId: "1",
            ProductId: "4",
            ProductName: "Raspado",
            Quantity: 4,
            Price: 2000,
        }
    ]
}

function deleteItemProduct(data: SaleDetail[], productKey: string): SaleDetail[] {
    return data.filter(item => item.ProductId !== productKey)
}

function BusinessSalePage() {
    const [data, setData] = useState<SaleDetail[]>(dummyData())
    function handleDelete(productKey: string) {
        setData(deleteItemProduct(data, productKey))

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
                                <div className="table-row">
                                    <div className="table-cell pl-4">
                                        {detail.ProductName}
                                    </div>
                                    <div className="table-cell text-center">
                                        {detail.Quantity}
                                    </div>
                                    <div className="table-cell text-end">
                                        {`$${detail.Price * detail.Quantity}`}
                                    </div>
                                    <div className="table-cell">
                                        <div className="w-full flex items-center justify-center">
                                            <AiFillEdit size={20} />
                                            <ButtonIcon onClick={() => handleDelete(detail.ProductId)}>
                                                <AiFillDelete size={20} />
                                            </ButtonIcon>
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
                    <SingleButton text="<- Atrás" className="text-bg-bg-alternative" />
                    <RoundedBgButton text="Pendiente" />
                    <RoundedBgButton text="Pagar" />
                </div>
            </CardTitle>
        </main>
    )
}

export default BusinessSalePage