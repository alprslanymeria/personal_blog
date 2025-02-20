"use client"

// REACT & NEXT
import { useState, useEffect } from "react"
import Link from "next/link"
// STORE
import { GlobalStore } from "@/store/globalStore"
// ACTIONS
import GetCapsAll from "@/actions/Caps"
// COMPONENTS
import ShowErrorComponent from "@/components/ShowErrorComponent"
import NavbarComponent from "@/components/NavbarComponent"
import CapsComponent from "@/components/CapsComponent"

export default function CapsPage() {

    const linkClasses = "text-[#FFC96B] font-bold hover:text-gray-500 text-2xl underline"

    // NAVBAR LINKS
    const links = [
        <nav className="hidden md:flex space-x-4">
            <Link key="caps" href="/caps" className={linkClasses}>CAPS</Link>
        </nav>
    ]

    // STATES
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>("")
    const [errorDetails, setErrorDetails] = useState<string>("")

    // STORE
    const {setCaps} = GlobalStore()

    useEffect(() => {

        const GET = async () => {

            // GET CAPS
            const response = await GetCapsAll()

            if(response?.status == 500) {
                setError(response?.message || "")
                setErrorDetails(response?.details || "")
                setIsLoading(false)
                return
            }

            setCaps(response?.data)
            setIsLoading(false)
        }

        GET()

    }, [])

    if(isLoading) return <></>
    
    if(error && error !== "") return <ShowErrorComponent error={error} errorDetails={errorDetails}/>

    return (

        <div className="container mx-auto max-w-screen-xl">
            <NavbarComponent links={links}/>
            <CapsComponent/>
        </div>
    )
}