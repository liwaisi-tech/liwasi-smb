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
                    className="flex md:hidden items-center text-white w-12"
                    onClick={toggleMenu}>
                    {
                        menuOpen ?
                            <AiOutlineClose size={28} />
                            :
                            <AiOutlineMenu size={28} />
                    }
                </div>
            </div>
        </header>
    )
}

export default NavBar