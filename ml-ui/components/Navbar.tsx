import Link from "next/link"
import React from "react"

import { useState } from 'react'

import Menu from '../public/menu.svg'
import Close from '../public/close.svg'
import Basketball from '../public/basketball.svg'

export default function Navbar() {
    

    const [open, setOpen] = useState<boolean>(false)
    const [subMenu, setSubMenu] = useState<string>('opacity-0 top-[-200px]')

    const toggleMenu = () => {
        if(open) {
            setOpen(false);
            setSubMenu('opacity-0 top-[-200px]');
        } else {
            setOpen(true);
            setSubMenu('bg-primary rounded-b-lg top-[32px]')
        }
    }

    const pages = [
        {
            name: 'Standings',
            link: '/'
        },
        {
            name: 'Awards',
            link: '/about'
        },
        {
            name: 'Teams',
            link: '/teams'
        },

        {
            name: 'About',
            link: '/example'
        },
    ]

    return (
        <div className="bg-primary">
        <nav className="container p-1 max-w-screen-xl md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
                <span className="flex items-center font-bold text-white text-xl">
                    <Link href='/'>
                         <div>
                         <Basketball className="w-10 mx-2 cursor-pointer hover:text-primary-500 duration-500" />
                        </div>
                    </Link>
                    The Muslim League
               </span>

               <div onClick={() => toggleMenu()}>
                 {open ? <Close className="cursor-pointer text-white md:hidden block w-7"/> : <Menu className="cursor-pointer text-white md:hidden block w-7"/> }
                </div> 

            </div>

            <ul className={`md:flex my-4 pb-3 md:my-0 md:items-center tansition-all absolute ease-in duration-500 md:bg-primary md:opacity-100 md:static  ${subMenu}`}>

                { pages.map((page,index) => (
                <li key={index} onClick={() => toggleMenu()} className="mx-3 border-b pt-3 pb-1 pr-9 md:pb-0 md:pr-0 md:border-none md:my-0 text-lg font-bold text-white hover:text-primary-500 duration-500">
                    <Link href={page.link}>
                        {page.name}
                    </Link>
                </li>
 
                ))}
            
            </ul>
        </nav>
        </div>
    )    
}
    