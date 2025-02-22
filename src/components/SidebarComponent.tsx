"use client"

// REACT & NEXT
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
// STORE
import { GlobalStore } from "@/store/globalStore"

export default function SidebarComponent({articleHeight} : {articleHeight: number}) {

    // STORE
    const {AllBlogPosts} = GlobalStore()

    // STATES
    const [randomBlogs, setRandomBlogs] = useState<any[]>([])

    // CALCULATE BLOGS COUNT TO SHOW
    const blogsToShow = Math.max(Math.floor(articleHeight / 200), 0)

    // GET RANDOM BLOGS
    const getRandomItems = (arr : any , num : any) => {

        let shuffled = [...arr].sort(() => 0.5 - Math.random())
        
        return shuffled.slice(0, num)
    }

    useEffect(() => {

        setRandomBlogs(getRandomItems(AllBlogPosts, blogsToShow))

    }, [blogsToShow])

    return (
        <>
            {randomBlogs.length > 0 && (
                <>
                    {["md:hidden", "hidden md:block"].map((visibility, index) => (
                        <div key={index} className={`sidebar p-4 rounded-md shadow-md ${visibility}`}>
                            <div className={index === 0 ? "carousel flex space-x-4" : "space-y-6"}>
                                {randomBlogs.map((blog) => (
                                    <div
                                        key={blog.id}
                                        className={`${
                                            index === 0 ? "carousel-item flex-shrink-0 w-72 h-48" : ""
                                        } relative border p-2 rounded-lg shadow-md`}
                                    >
                                        <Link
                                            href={`/${blog.category}/${blog.id}`}
                                            className="block hover:shadow-lg transition-shadow duration-200"
                                        >
                                            <p className="text-md text-center text-gray-800 mb-2">
                                                {blog.header}
                                            </p>
                                            {blog.imageUrl && (
                                                <Image
                                                    src={blog.imageUrl || "/images/fallback.png"}
                                                    alt={blog.header}
                                                    className="w-full object-cover rounded-md mb-2"
                                                    width={300}
                                                    height={300}
                                                />
                                            )}
                                            <hr className="border-gray-300" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}