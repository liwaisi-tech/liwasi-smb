import Image from "next/image"

function PanelMenu() {
    return (
        <div className="w-full">
            <div className="flex items-center justify-center">
                <Image
                    src="/images/liwasi-logo.png"
                    width={80}
                    height={80}
                    alt="Liwasi Logo"
                />
            </div>
            <div className="w-full items-center justify-start text-white">
                <div className="flex flex-col">
                    <nav className="text-text-detail">
                        <ul className="pl-2">
                            <li>
                                <a href="#pymes">Pymes</a>
                                <ul className="pl-2">
                                    <li className="hover:text-white"><a href="#crear">Ver todas</a></li>
                                    <li className="hover:text-white"><a href="#editar">Nueva venta</a></li>
                                    <li className="hover:text-white"><a href="#editar">Registrar gasto</a></li>
                                    <li className="hover:text-white"><a href="#editar">Crear pyme</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#inventario">Inventarios</a>
                                <ul className="pl-2">
                                    <li className="hover:text-white"><a href="#categorias">Categorías</a></li>
                                    <li className="hover:text-white"><a href="#producto">Productos</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default PanelMenu