"use server"

import { prisma } from "@/lib/prisma"

export default async function GetProjectsAll() {

    try {
        
        const projects = await prisma.project.findMany({
            include: {
                ProjectImages: true,
                ProjectLinks: true,
                ProjectTechnologies: {
                    include: {
                        technology: true
                    }
                }
            }
        })

        if(projects.length === 0) 
        return {status: 404, message: "Projeler bulunamadı"}

        return {status: 200, data: projects}

    } catch (error) {
        
        if(error instanceof Error) return {status: 500, message: "Projeler getirilirken bir hata oluştu", details: error.message}
    }

}