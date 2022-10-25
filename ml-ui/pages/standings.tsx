import React from "react"
import Container from "../components/container"

import Header from '../components/header'



export default function Standings() {
  const data = [
    {
      team: "Top Akhs",
      win: 8,
      loss: 0,
      diff: 90
    },
    {
      team: "Springfield",
      win: 7,
      loss: 1,
      diff: 30


    },
    {
      team: "The Moors",
      win: 6,
      loss: 2,
      diff: 10
    },
    {
      team: "Young Sahabs",
      win: 5,
      loss: 3,
      diff: -10
    },
    {
      team: "Mali Word",
      win: 4,
      loss: 4,
      diff: -15
    },
    {
      team: "The Akatsuki",
      win: 3,
      loss: 5,
      diff: -24
    },
    {
      team: "Islam Dunk",
      win: 2,
      loss: 6,
      diff: -40
    },
    {
      team: "The Bulls",
      win: 1,
      loss: 7,
      diff: 62
    },

  ]
   return(
    <Container>
    <Header title='Standings | Muslim League CT'/> 
    <h2 className='text-2xl m-4 text-primary font-bold text-center md:text-4xl'> Standings </h2>
    <div className='m-auto max-w-[600px] mb-5 shadow-lg overflow-hidden rounded-xl'>
      <table className="text-left w-full table-fixed">
        <thead className='bg-primary text-white'>
          <tr >

            <th className='px-3 py-3 w-12 pl-1 border'>POS</th>
            <th className= 'w-40 px-6 py-3'>Team</th>
            <th className='px-3 py-3'>W</th>
            <th className='px-3 py-3'>L</th>
            <th className='px-2 py-3'>+/-</th>
          </tr>
        </thead>
        <tbody>
          { data.map((teams,index) => (
            <tr key={index} className={index%2 ? "bg-white hover:text-primary hover:font-bold " : "bg-gray hover:text-primary hover:font-bold "} > 
              <td className='px-3 py-4 font-bold bg-primary border text-white'> {index+1} </td>
              <td className='px-3 py-4'> {teams.team} </td>
              <td className='px-3 py-4'> {teams.win}  </td>
              <td className='px-3 py-4'> {teams.loss} </td>
              <td className='px-2 py-4'> {teams.diff} </td>
            </tr>
         ))}
        </tbody>
      </table>
    </div>
</Container>
  )
}
