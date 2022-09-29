import React from "react"

const Navbar = () => (
    <nav className="flex p-2 h-14 bg-green rounded-b-2xl">
        <div className="ml-3 text-3xl font-bold text-t-primary grow">Logo</div>
        
        <ul className="flex items-center justify-end mr-3 space-x-5 grow text-t-primary">
            <li>Home</li>
            <li>About</li>
            <li>Players</li>
        </ul>
    </nav>
)

export default Navbar