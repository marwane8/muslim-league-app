import Link from "next/link"
import React from "react"

const Navbar = () => (
    <nav className="flex p-2 h-14 bg-primary rounded-b-2xl">
        <div className="ml-3 text-3xl font-bold text-white grow">Logo</div>
        
        <ul className="flex items-center justify-end mr-3 space-x-5 text-white grow">
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about">
                   About 
                </Link>
            </li>
            <li>
                <Link href="/test">
                    Teams 
                </Link>
            </li>
        </ul>

    </nav>
)

export default Navbar