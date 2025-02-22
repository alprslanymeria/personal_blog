"use client"

// REACT & NEXT
import Link from "next/link"
import Image from "next/image"
// STORE
import { GlobalStore } from "@/store/globalStore"
// TYPES
import { BlogPostWithRelations } from "@/types/projectExt"

export default function BlogContentsComponent({currentContents} : {currentContents : BlogPostWithRelations[]}) {

    // STORE
    const {Category} = GlobalStore()

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {currentContents.map((post) => (
                <Link
                    key={post.id}
                    href={`/${Category}/${post.id}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                >
                    <div>
                        <Image
                            src={post.imageUrl}
                            alt={post.header}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.header}</h2>
                        <p className="text-gray-600 text-sm">{post.summary}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}