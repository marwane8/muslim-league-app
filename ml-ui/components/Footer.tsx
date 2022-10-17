import React from "react";

import NextLink from 'next/link';

import Container from "./container";
import { useAuth } from "../context/AuthContext";

const LoginButton = () => ( 
             <button className="px-2 py-1 rounded-md bg-secondary">
             <NextLink href='/admin'>
                <a className="font-bold text-white"> Admin </a>
            </NextLink>
             </button>
) 

function LogoutButton() {
  const { logout } = useAuth();
  return (
    <button className="px-2 py-1 rounded-md bg-secondary font-bold text-white"
      onClick={logout}>
      Logout
    </button>


  )

}
export default function Footer() {
  const { user } = useAuth();
  
  return (
    <footer className="border-t border-gray-100 max-auto bg-gray"> 
        <Container>

         <div className="py-10 text-center">
          {user ? <LogoutButton/> : <LoginButton/> }

          <h1> This is the foot </h1>
         </div>
        </Container>
        
</footer>
)
  
} 