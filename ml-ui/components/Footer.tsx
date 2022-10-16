import React from "react";

import NextLink from 'next/link';

import Container from "./container";

const Footer = () => (
    <footer className="border-t border-gray-100 max-auto bg-gray"> 
        <Container>

         <div className="py-10 text-center">
             <button className="px-2 py-1 rounded-md bg-secondary">
             <NextLink href='/admin'>
                <a className="font-bold text-white"> Admin </a>
            </NextLink>
 

             </button>
           <h1> This is the foot </h1>

               

         </div>
        </Container>
        
</footer>
)

export default Footer