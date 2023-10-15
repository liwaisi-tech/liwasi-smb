"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import PanelMenu from './PanelMenu'
function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }
    return (
        <header className="w-full">
            <div
                className="md:hidden w-full md:bg-bg-alternative py-2 shadow-sm bg-black"
            >
                <div className="md:hidden flex items-center justify-between">
                    <div className="px-2">
                        <Image
                            src="/images/liwasi-logo.png"
                            width={30}
                            height={30}
                            alt="Liwasi Logo"
                        />
                    </div>
                    <p className="text-white font-light text-base">Liwasi Pymes</p>
                    <div
                        className="flex justify-center text-white w-12 z-[50]"
                        onClick={toggleMenu}>
                        {
                            menuOpen ?
                                <AiOutlineClose size={24} />
                                :
                                <AiOutlineMenu size={24} />
                        }
                    </div>
                </div>
            </div>
            <div
                className={
                    menuOpen ?
                        "md:hidden absolute top-0 bottom-0 right-0 left-0 flex w-full h-screen bg-black ease-in duration-300"
                        :
                        "md:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex w-full h-screen ease-in duration-300"
                }
            >
                <div
                    className="w-full z-[25]"
                >
                    <PanelMenu />
                </div>
            </div>
        </header>
    )
}

export default NavBar