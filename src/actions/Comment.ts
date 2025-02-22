"use server"

import { prisma } from "@/lib/prisma"
import { cookies } from "next/headers"

export async function GetCommentsById(blogId : string) {

    try {

        const blogPost = await prisma.blogPost.findFirst({
            where: {
                id: Number(blogId)
            },
            include: {
                comments: true
            }
        })

        if (!blogPost) return {status : 404, message : "Blog Post not found"}

        const comments = blogPost.comments

        return {status : 200, data: comments}
        
    } catch (error) {
        
        if (error instanceof Error) return {status : 500, message : "Comments getirilirken bir hata oluştu", details: error.message}
    }
}

export async function CreateComment(prevState : any, formData : FormData) {

    try {

        // GET FORM DATA'S
        const content = formData.get("content") as string
        const selectedAvatar = formData.get("selectedAvatar") as string
        const blogId = formData.get("blogId") as string

        // GET COOKIE INFO
        // const cookieStore = await cookies()
        // const userId = cookieStore.get("user-id")

        // CREATE COMMENT
        await prisma.comment.create({
            data: {
                blogPostId: Number(blogId),
                cookieId: "user123",
                content: content,
                avatar: selectedAvatar,
                isDeleted: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        })

        return {status: 200}
        
    } catch (error) {

        if (error instanceof Error) return {status: 500, message: "Comment eklenirken bir hata oluştu", details: error.message}
        
    }

}