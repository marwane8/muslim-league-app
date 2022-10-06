import React from "react";

import type { NextPage } from "next";
import NextLink from 'next/link';

const Footer: NextPage = () => (
    <footer> 
        <NextLink href='/admin'>
            <a className="font-bold text-green"> Admin Page</a>
        </NextLink>
        <h1> This is the foot </h1>
         
    </footer>
)

export default Footer