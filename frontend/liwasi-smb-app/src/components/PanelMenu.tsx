import Link from "next/link"

function PanelMenu() {
    return (
        <div className="hidden md:flex md:w-1/5 md:h-auto bg-slate-700">
            <ul className="w-full px-2 pt-1 text-white font-light text-lg">
                <li>
                    <div className="w-full">
                        <Link
                            className="hover:z-20 hover:shadow-sm hover:font-normal hover:cursor-pointer before:scale-x-0 before:origin-bottom-right hover:before:scale-y-100 hover:before:origin-bottom-left"
                            href="/business">
                            Mis Pymes
                        </Link>
                    </div>
                </li>
                <li>
                    <ul>
                        <li>
                            <Link
                                className="px-2 hover:z-20 hover:shadow-sm hover:font-normal"
                                href="/business/new">
                                Crear una Pyme
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default PanelMenu