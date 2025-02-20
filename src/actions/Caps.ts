"use server"

import { prisma } from "@/lib/prisma"

export default async function GetCapsAll() {

    try {

        const caps = await prisma.capsImage.findMany()

        if(caps.length === 0) 
        return {status: 404, message: "Capsler bulunamadı"}

        return {status: 200, data: caps}
        
    } catch (error) {
        
        if(error instanceof Error) return {status: 500, message: "Capsler getirilirken bir hata oluştu", details: error.message}
    }
}