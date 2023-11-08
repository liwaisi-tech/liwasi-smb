import Image from "next/image"
import Link from "next/link"

interface PanelMenuProps {
    fallback?: () => void
}

function PanelMenu(props: PanelMenuProps) {
    return (
        <div className="w-full">
            <div className="flex items-center justify-center">
                <Link href="/" onClick={props.fallback}>
                    <Image
                        src="/images/liwasi-logo.png"
                        width={80}
                        height={80}
                        alt="Liwasi Logo"
                    />
                </Link>
            </div>
            <div className="w-full items-center justify-start text-white">
                <div className="flex flex-col">
                    <nav className="text-detail">
                        <ul className="pl-2">
                            <li>
                                <p>Pymes</p>
                                <ul className="pl-2">
                                    <li className="hover:text-white" onClick={props.fallback}>
                                        <Link href="/business/">Mis pymes</Link>
                                    </li>
                                    <li className="hover:text-white" onClick={props.fallback}><a href="#editar">Nueva venta</a></li>
                                    <li className="hover:text-white" onClick={props.fallback}><a href="#editar">Registrar gasto</a></li>
                                    <li className="hover:text-white" onClick={props.fallback}>
                                        <Link href="/business/new">Crear pyme</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>Inventarios</p>
                                <ul className="pl-2">
                                    <li className="hover:text-white" onClick={props.fallback}>
                                        <Link href="/category/">Categorías</Link>
                                    </li>
                                    <li className="hover:text-white" onClick={props.fallback}>
                                        <Link href="/product/">Productos</Link>
                                    </li>
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