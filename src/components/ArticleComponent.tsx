"use client"

// REACT & NEXT
import Link from "next/link"
// TYPES
import { BlogPostWithRelations } from "@/types/projectExt"

export default function ArticleComponent({blogPost} : {blogPost: BlogPostWithRelations | undefined}) {

    // GET INFOS
    const author = blogPost?.author
    const content = blogPost?.content
    const date = blogPost?.createdAt
    const tags = blogPost?.blogPostTags

    return (

        <div className="p-6 bg-white">

            {/* AUTHOR AND DATE */}
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700">🖊️ Yazar:</span>
                    <span className="text-gray-600">{author}</span>
                </div>
                <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">📅 Tarih:</span>
                    <span className="text-gray-600">
                        {date ? new Date(date).toLocaleDateString() : "Unknown Date"}
                    </span>
                </div>
            </div>

            {/* TAGS */}
            <div className="tags mb-4">
                {tags && tags.length > 0 ? (

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (

                            <div

                                key={tag.tag.id}
                                className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200"
                            >
                                #{tag.tag.name}
                            </div>

                        ))}
                    </div>

                ) : (

                    <span className="text-gray-500">Etiket bulunamadı.</span>
                )}
            </div>

            {/* CONTENT */}
            <div className="content text-lg leading-relaxed">
                <p className="text-justify text-gray-800">{content}</p>
            </div>
        </div>
    )
}