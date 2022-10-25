import React from "react"
import Container from "../components/container"

import Header from '../components/header'

export default function Award() {
    

    const players = [
        {
            award: 'MVP',
            name: 'Kyle Walker'
        },
        {
            award: 'Scoring Leader',
            name: 'Ralph'
        },
        {
            award: 'Rebound Leader',
            name: 'Kabar'
        },
        {
            award:'DPOY',
            name: 'Abdullah'
        },
        {
            award: 'Class Act',
            name: 'Mohammed'
        },
    ]

    return (
       <Container>
            <Header title='Awards | Muslim League CT'/> 
            <h2 className='text-2xl m-8 text-primary font-bold text-center md:text-4xl'> Awards </h2>
            <div className="flex flex-wrap justify-center max-w-xl m-auto gap-10 mb-10">
                { players.map((player,index) => (

                <div key={index}className=" rounded-xl pb-1 text-center overflow-hidden bg-gray   shadow-lg w-[250px]"> 
                    <div className="h-[315px] bg-gray ">
                        Picture 
                    </div>     
                    <h2 className="font-bold text-primary text-lg">{player.award}</h2> 
                    <p> {player.name}</p>
                </div>
                ))}
            </div>
       </Container>     
    )    
}
