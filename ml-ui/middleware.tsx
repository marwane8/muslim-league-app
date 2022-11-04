import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { JWT_KEY } from "./utils/fetch-models";


export async function middleware(request: NextRequest) {
    const secret = JWT_KEY;
    const token = request.cookies.get('token');
    
    if (request.nextUrl.pathname.startsWith('/login')){
        if(token==="") return NextResponse.next()

        if(token) {
            try {
                await jwtVerify(token, new TextEncoder().encode(secret))
                return NextResponse.redirect(new URL('/admin', request.url));
            } catch(e) {
                return NextResponse.next();
            }
        }            
    }

    if (request.nextUrl.pathname.startsWith('/admin')){
        console.log("runnning admin middleware")
        if(token === undefined) {
            return NextResponse.redirect(new URL('/login', request.url) )
        } else {
            try {
                const { payload } = await jwtVerify(token, new TextEncoder().encode(secret))
                if (!payload.admin) {
                    //TODO: Make a not an admin page
                    return console.log('Not an Admin')
                }
            } catch(e) {
                return NextResponse.redirect(new URL('/login', request.url) )
            }
        }
    }
}

export const config = {
    matcher: ['/admin/:path*','/login']
}