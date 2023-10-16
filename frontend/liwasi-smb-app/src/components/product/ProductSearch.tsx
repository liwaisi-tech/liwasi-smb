"use client"
import { useState } from "react"
import { AiFillCheckCircle, AiOutlineSearch } from "react-icons/ai"

interface ProductSearchProps {
    addProduct: (product: Product, quantity: number) => void
}

function ProductSearch(props: ProductSearchProps) {
    const [addCount, setAddCount] = useState(0)
    const emptyProduct: Product = {
        id: "",
        name: "",
        price: 0,
        quantity: 0,
    }
    const [product, setProduct] = useState<Product>(emptyProduct)
    const products: Product[] = [
        {
            id: "1",
            name: "Miel De Abejas 100% Pura 310gr",
            price: 18500,
            quantity: 0
        },
        {
            id: "2",
            name: "Miel De Abejas 100% Pura 500gr",
            price: 21500,
            quantity: 0
        },
        {
            id: "3",
            name: "Mitsa Pizza (Personal) 100gr",
            price: 12500,
            quantity: 0
        },
        {
            id: "4",
            name: "Empanada",
            price: 1500,
            quantity: 0
        },
        {
            id: "5",
            name: "Cholao mediano 250gr",
            price: 3500,
            quantity: 0
        },
    ]
    const [searchList, setSearchList] = useState<Product[]>([])
    const [search, setSearch] = useState("")
    function handleInputChange(value: string) {
        setSearch(value)
        if (value === "") {
            setSearchList([])
            return
        }
        const filteredProducts = products.filter(product => product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        setSearchList(filteredProducts)
    }
    function handleProductSelected(product: Product) {
        setProduct(product)
        setSearch(product.name)
        setSearchList([])
    }
    function handleAdd() {
        if (addCount === 0) {
            return
        }
        setSearch("")
        props.addProduct(product, addCount)
        setProduct(emptyProduct)
        setAddCount(0)
    }
    return (
        <>
            <div className="w-full rounded-lg py-1 flex items-center text-black bg-white">
                <div className="px-1">
                    <AiOutlineSearch size={18} />
                </div>
                <input
                    onChange={(e) => handleInputChange(e.target.value)}
                    type="text" className="w-full ml-2 outline-none text-sm"
                    value={search}
                    placeholder="Buscar producto" />
                <input
                    onChange={e => setAddCount(parseInt(e.target.value))}
                    className="w-10 text-sm font-light" type="number" min={0} value={addCount} />
                <button
                    onClick={handleAdd}
                    className="px-1"><AiFillCheckCircle size={20} /></button>
            </div>
            <div className="flex flex-col absolute">
                {
                    searchList.map(product =>
                        <div
                            onClick={() => handleProductSelected(product)}
                            key={product.id}
                            className="items-center justify-between bg-bg-alternative rounded-lg p-2 my-1 cursor-pointer hover:bg-black hover:text-white">
                            <p className="text-sm">{product.name}</p>
                        </div>
                    )
                }
            </div>
        </>

    )
}

export default ProductSearch