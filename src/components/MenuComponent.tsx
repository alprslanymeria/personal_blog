"use client"

// REACT & NEXT
import { useState } from "react"
import Link from "next/link"
// ICONS
import MenuIcon from "../../public/icons/menuIcon"
import XmarkIcon from "../../public/icons/xmarkIcon"


export default function MenuComponent() {

    // GET BASE URL
    const BASE = process.env.NEXT_PUBLIC_BASE_URL || "/"

    const linkClasses = "text-white hover:text-gray-500"

    // STATES
    const [isOpen, setIsOpen] = useState(false)

    // TOGGLE MENU
    const toggleMenu = () => setIsOpen(!isOpen)

    return (

        <div className="relative">

            <button
                onClick={toggleMenu}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                {isOpen ? (
                    <XmarkIcon/>
                ) : (
                    <MenuIcon/>
                )}

            </button>

            <div
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 z-50`}
            >
                <button
                onClick={toggleMenu}
                className="mb-4 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                >
                    <XmarkIcon/>
                </button>

                <nav>
                <ul className="space-y-4">
                    <li>
                    <Link href={`${BASE}/portfolio`} className={linkClasses}>Portfolio</Link>
                    </li>
                    <li>
                    <Link href={`${BASE}/caps`} className={linkClasses}>Caps</Link>
                    </li>
                    <li>
                    <Link href={`${BASE}/philosophy`} className={linkClasses}>Philosophy</Link>
                    </li>
                    <li>
                    <Link href={`${BASE}/film`} className={linkClasses}>Film</Link>
                    </li>
                    <li>
                    <Link href={`${BASE}/music`} className={linkClasses}>Music</Link>
                    </li>
                    <li>
                    <Link href={`${BASE}/software`} className={linkClasses}>Software</Link>
                    </li>
                    <li>
                    <Link href={`${BASE}/book`} className={linkClasses}>Book</Link>
                    </li>
                    <li>
                    <Link href={`${BASE}/travelling`} className={linkClasses}>Travelling</Link>
                    </li>
                </ul>
                </nav>
            </div>

        </div>
    )
}