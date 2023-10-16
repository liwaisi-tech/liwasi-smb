import { AiFillDelete } from "react-icons/ai";
import ButtonIcon from "../button/ButtonIcon";

interface ProductTableProps {
    products: Product[];
    onDelete: (id: string) => void;
}

function ProductTable(props: ProductTableProps) {
    return (
        <>
            {
                props.products.length > 0 &&
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-black text-sm font-extralight">
                            <th className="text-left px-1 font-normal">Descripción</th>
                            <th className="px-1 font-normal">Precio</th>
                            <th className="px-1 font-normal">Cantidad</th>
                            <th className="px-1 font-normal">Subtotal</th>
                            <th className="px-1 font-normal"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.map(product =>
                            <tr
                                className="text-black text-xs items-center font-light hover:bg-black hover:text-white"
                                key={product.id}>
                                <td className="text-left">{product.name}</td>
                                <td className="text-center justify-center">{product.price}</td>
                                <td className="text-center justify-center">{product.quantity}</td>
                                <td className="text-center justify-center">{(product.price * product.quantity)}</td>
                                <td><ButtonIcon onClick={() => props.onDelete(product.id)}>
                                    <AiFillDelete size={20} />
                                </ButtonIcon>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </>
    )
}
export default ProductTable