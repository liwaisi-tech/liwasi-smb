import formatNumber from "@/util/Format"

const products: Product[] = [
    { name: "Miel De Abejas 100% Pura 500g", price: 21500, quantity: 1, total: 21500 },
    { name: "Pizza llanerita Personal", price: 5000, quantity: 3, total: 15000 },
    { name: "Pan masa madre 1000gr", price: 10000, quantity: 2, total: 20000 },
]

function ProductTable({ productList }: { productList?: Product[] }) {
    if (!productList || productList.length === 0) {
        productList = products
    }
    return (
        <div className="py-2 text-sm bg-slate-300 rounded-md px-1 mt-1">
            {
                productList.length > 0 &&
                <table className="table-auto w-full ">
                    <thead className="font-semibold">
                        <tr>
                            <th className="text-left">Producto</th>
                            <th>Valor</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="font-light">

                        {
                            productList.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td className="text-center">{formatNumber(product.price)}</td>
                                    <td className="text-center">{product.quantity}</td>
                                    <td className="text-center">{formatNumber(product.total)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div >
    )
}

export default ProductTable