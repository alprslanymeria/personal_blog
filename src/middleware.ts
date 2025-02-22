import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest){

    // CHECK USER-ID
    const cookies = req.cookies
    const userId = cookies.get('userId')?.value

    if(!userId){

        // CREATE NEW USER-ID
        const newUserId = Math.random().toString(36).substring(7)

        // CREATE NEW COOKIE
        const response = NextResponse.next()

        response.cookies.set('userId', newUserId , {

            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 365
        })

        return response
    }

    // PASS TO NEXT MIDDLEWARE
    return NextResponse.next()
}

export const config = { matcher: '/:path*'}