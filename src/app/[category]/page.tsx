"use client"

// REACT & NEXT
import { useState , useEffect} from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
// STORE
import { GlobalStore } from "@/store/globalStore"
// ACTIONS
import GetCategoryAll from "@/actions/Category"
// COMPONENTS
import ShowErrorComponent from "@/components/ShowErrorComponent"
import NavbarComponent from "@/components/NavbarComponent"
import BlogComponent from "@/components/BlogComponent"

export default function CategoryPage() {

    // GET CATEGORY SLUG
    const params = useParams()
    const category = params.category as string

    const linkClasses = "text-[#FFC96B] font-bold hover:text-gray-500 text-2xl underline"

    // NAVBAR LINKS
    const links = [
        <nav className="hidden md:flex space-x-4">
            <Link key={category} href={`/${category}`} className={linkClasses}>{category.toUpperCase()}</Link>
        </nav>
    ]

    // STATES
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>("")
    const [errorDetails, setErrorDetails] = useState<string>("")

    // STORE
    const {setAllBlogPosts, setUniqueBlogPosts, setCategory} = GlobalStore()

    useEffect(() => {

        const GET = async () => {

            // GET BLOGPOSTS BY CATEGORY & GET ALL CATEGORIES
            const response = await GetCategoryAll(category)

            if(response?.status == 500) {
                setError(response?.message || "")
                setErrorDetails(response?.details || "")
                setIsLoading(false)
                return
            }

            if(response?.categories && response?.allBlogPosts) {

                setAllBlogPosts(response.allBlogPosts)
                setUniqueBlogPosts(response.uniqueBlogPosts)
                setCategory(category)
                setIsLoading(false)
            }
        }

        GET()

    }, [])

    if(isLoading) return <></>
    
    if(error && error !== "") return <ShowErrorComponent error={error} errorDetails={errorDetails}/>
    
    return (

        <div className="container mx-auto max-w-screen-xl">
            <NavbarComponent links={links}/>
            <BlogComponent/>
        </div>
    )
}