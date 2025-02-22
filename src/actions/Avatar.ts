"use server"

import { prisma } from "@/lib/prisma"

export async function GetAvatarImages(){

    try {
        
        const avatars = await prisma.avatar.findMany()

        if(!avatars) return {status: 404, message: "No avatars found"}

        return {status: 200, data: avatars}

    } catch (error) {
        
        if(error instanceof Error) return {status: 500, message: "Avatars alınırken bir hata oluştu", details: error.message}
    }
}