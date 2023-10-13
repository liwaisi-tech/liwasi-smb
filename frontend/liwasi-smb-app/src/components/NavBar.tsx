"use client"
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }
    return (
        <header className="w-full">
            <div
                className="w-full flex justify-between bg-primary-blue-dark py-4"
            >
                <Link href="/">
                    <div className="flex text-center flex-col pl-2">
                        <p className='font-medium text-white text-xl'>Liwasi</p>
                        <p className='font-light text-white text-sm'>Pymes</p>
                    </div>
                </Link>
                <div
                    className="flex md:hidden items-center text-white w-12 z-[50]"
                    onClick={toggleMenu}>
                    {
                        menuOpen ?
                            <AiOutlineClose size={28} />
                            :
                            <AiOutlineMenu size={28} />
                    }
                </div>
            </div>
            <div
                className={
                    menuOpen ?
                        "md:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-sky-700 text-center ease-in duration-300"
                        :
                        "md:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen text-center ease-in duration-300"
                }
            >
                <div
                    className="w-full text-blue-500 text-xl z-[25]"
                >
                    <div
                        className="w-full mb-5 pb-2 flex justify-center items-center mx-auto"
                    >
                        <Link
                            href="/"
                            passHref
                            onClick={toggleMenu}
                        >
                            Liwasy Pymes
                        </Link>
                    </div>
                    <ul
                        className="px-4 font-normal cursor-pointer text-white"
                    >
                        <li
                            className="py-3"
                            onClick={toggleMenu}
                        >
                            <Link href="/business">Mis Pymes</Link>
                        </li>
                        <li
                            className="py-3"
                            onClick={toggleMenu}
                        >
                            <Link href="/business/new">Crear Pyme</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar