"use client"

// REACT & NEXT
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
// STORE
import { GlobalStore } from "@/store/globalStore"
// COMPONENTS
import NavbarComponent from "@/components/NavbarComponent"
import ContainerComponent from "@/components/ContainerComponent"
import ShareComponent from "@/components/ShareComponent"
import CommentComponent from "@/components/CommentComponent"
// TYPES
import { BlogPostWithRelations } from "@/types/projectExt"

export default function DetailPage() {

    // GET ID SLUG
    const params = useParams()
    const id = params.id as string

    // STORE
    const {AllBlogPosts} = GlobalStore()

    // STATE
    const [blogPost, setBlogPost] = useState<BlogPostWithRelations | undefined>(undefined)

    // USEEFFECT
    useEffect(() => {

        // GET BLOG POST
        setBlogPost(AllBlogPosts.find((post) => post.id === Number(id)))

    }, [id, AllBlogPosts])

    // LINKS
    const links = [<nav/>]

    return (

        <>
            <div className="relative w-full h-[500px]">
                <Image
                    src={blogPost?.imageUrl || ""}
                    alt="Blog Image"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                <div className="absolute top-0 left-0 right-0 z-10">
                    <NavbarComponent links={links}/>
                </div>
            </div>

            <div className="container mx-auto max-w-screen-xl px-4">
                <h1 className="text-center text-[#FFC96B] text-2xl mt-4 font-bold md:text-4xl">{blogPost?.header}</h1>
                <ContainerComponent blogPost={blogPost}/>
                <ShareComponent/>
                <CommentComponent blogId={id}/>
            </div>
        </>
    )
}