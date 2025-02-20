"use client"

// REACT & NEXT
import Link from "next/link"
import { useEffect, useState } from "react"
// ACTIONS
import GetProjectsAll from "@/actions/Project"
// COMPONENTS
import NavbarComponent from "@/components/NavbarComponent"
import ShowErrorComponent from "@/components/ShowErrorComponent"
import IntroComponent from "@/components/IntroComponent"
import ProjectsComponent from "@/components/ProjectsComponent"
// STORE
import { GlobalStore } from "@/store/globalStore"

export default function PortfolioPage() {

    const linkClasses = "text-[#FFC96B] font-bold hover:text-gray-500 text-2xl underline"

    // NAVBAR LINKS
    const links = [
        <nav className="hidden md:flex space-x-4">
            <Link key="portfolio" href="/portfolio" className={linkClasses}>PORTFOLIO</Link>
        </nav>
    ]

    // STATES
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>("")
    const [errorDetails, setErrorDetails] = useState<string>("")

    // STORE
    const {setProjects} = GlobalStore()

    useEffect(() => {

        const GET = async () => {

            // GET PROJECTS
            const response = await GetProjectsAll()

            if(response?.status == 500) {
                setError(response?.message || "")
                setErrorDetails(response?.details || "")
                setIsLoading(false)
                return
            }

            setProjects(response?.data)
            setIsLoading(false)
        }

        GET()

    }, [])

    if(isLoading) return <></>
    
    if(error && error !== "") return <ShowErrorComponent error={error} errorDetails={errorDetails}/>
    
    return (

        <div className="container mx-auto max-w-screen-xl">
            <NavbarComponent links={links}/>
            <IntroComponent/>
            <ProjectsComponent/>
        </div>

    )
}