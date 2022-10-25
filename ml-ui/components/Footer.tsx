import React from "react";

import NextLink from 'next/link';

import Container from "./container";
import { useAuth } from "../context/AuthContext";

import Fblogo from '../public/facebook.svg'
import Iglogo from '../public/instagram.svg'

const LoginButton = () => ( 

            <NextLink href='/admin'>
              <button className="px-2 py-1 rounded-md bg-black">
                  <a className="font-bold text-white"> Admin </a>
              </button>
            </NextLink>
) 

function LogoutButton() {
  const { logout } = useAuth();
  return (
    <button className="px-2 py-1 rounded-md bg-primary-400 font-bold text-white"
      onClick={logout}>
      Logout
    </button>


  )

}
export default function Footer() {
  const { user } = useAuth();
  

  
  
  const goToInsta = () => {document.location.href="https://www.instagram.com/muslimleaguect/"}
  const goToFacebook = () => {document.location.href="https://www.facebook.com/MuslimLeagueCT"}

  return (
    <footer className="border-t border-gray-100 max-auto bg-gray"> 
        <Container>
          <div className="flex justify-between pt-3 m-auto w-20 g-red"> 
            <button onClick={goToInsta}>
              <Iglogo className="w-[30px]"/>
            </button>
            <button onClick={goToFacebook}>
              <Fblogo className="w-[30px]"/>
            </button>
          </div>

            <h3 className="text-center">Muslim League CT est. 2020</h3>
           <div className="flex pb-1 m-auto w-64 justify-between">
            <NextLink href='/about'>
                <a className="font-bold text-primary"> About Us</a>
            </NextLink>
             <NextLink href='/policy'>
                <a className="font-bold text-primary"> Policy </a>
            </NextLink>
              <NextLink href='/contact'>
                <a className="font-bold text-primary"> Contact Us </a>
            </NextLink>
      
           </div>

         <div className="pb-5 text-center">
          {user ? <LogoutButton/> : <LoginButton/> }
         </div>
           
        </Container>
        
</footer>
)
  
} 