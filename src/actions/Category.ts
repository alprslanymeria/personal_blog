"use server"

import { prisma } from "@/lib/prisma"
import { CategoryWithRelations } from "@/types/projectExt"

export default async function GetCategoryAll(category : string) {

    try {
        
        const categories : CategoryWithRelations[] = await prisma.category.findMany({
            include: {
                blogPosts: {
                    include: {
                        blogPostTags: {
                            include: {
                                tag: true
                            }
                        }
                    }
                }
            }
        })

        const uniqueCategory = await prisma.category.findFirst({
            where: {
                name: category
            },
            include : {
                blogPosts : {
                    include : {
                        blogPostTags : {
                            include : {
                                tag : true
                            }
                        }
                    }
                }
            }
        })

        if(categories.length === 0) 
        return {status: 404, message: "Kategoriler bulunamadı"}

        const allBlogPosts = categories.flatMap(
            
            category => category.blogPosts.map(blog => ({...blog, category: category.name}))
        )
    
        return {status: 200, categories: categories, allBlogPosts: allBlogPosts, uniqueBlogPosts: uniqueCategory?.blogPosts}

    } catch (error) {
        
        if(error instanceof Error) return {status: 500, message: "BlogPosts getirilirken bir hata oluştu", details: error.message}
    }
}