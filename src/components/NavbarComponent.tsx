"use client"

// REACT & NEXT
import { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
// COMPONENTS
import MenuComponent from "./MenuComponent"

// GET BASE URL
const BASE = process.env.BASE_URL || "/"

export default function NavbarComponent({links} : {links: JSX.Element[]}) {
    return (

        <header className="container mx-auto max-w-screen-xl flex items-center justify-between p-4">
            <div className="relative w-24 h-12">
                <Link href={BASE}>
                    <Image
                        src={"/images/logo.png"}
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </Link>
            </div>
            {links}
            <div>
                <MenuComponent/>
            </div>
        </header>
    )
}