"use server"

import {prisma} from "@/lib/prisma"

export default async function CreateSubscriber(prevState : any, formData : FormData) {

    try {

        // GET EMAIL
        const email = formData.get("email") as string

        // CREATE SUBSCRIBER
        await prisma.subscriber.create({
            data: {
                email: email,
            }
        })

        return {status: 200}
        
    } catch (error) {
       
        if(error instanceof Error) return {status: 500, message: "Subscriber oluşturulurken bir hata oluştu", details: error.message}
    }
}