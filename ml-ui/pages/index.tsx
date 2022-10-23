import type { NextPage } from 'next'
import Header from '../components/header'
import Container from '../components/container'
import Image from 'next/image'
import NextLink from 'next/link'

import championpic from '../public/champions.jpg' 

const MiniStats = () => {
  
  const data = [
    {
      team: "Top Akhs",
      win: 8,
      loss: 0
    },
    {
      team: "Springfield",
      win: 7,
      loss: 1
    },
    {
      team: "The Moors",
      win: 6,
      loss: 2
    },
    {
      team: "Young Sahabs",
      win: 5,
      loss: 3
    },
    {
      team: "Mali Word",
      win: 4,
      loss: 4
    },
    {
      team: "The Akatsuki",
      win: 3,
      loss: 5
    },
    {
      team: "Islam Dunk",
      win: 2,
      loss: 6
    },
    {
      team: "The Bulls",
      win: 1,
      loss: 7
    },

  ]
  
  return(
    <div className='m-5 shadow-sm bg-primary rounded-xl'>
      <table className="w-full text-left table-fixed">
        <thead className='text-white'>
          <tr >
            <th className= 'w-40 px-6 py-3'>Team</th>
            <th className='px-3 py-3'>W</th>
            <th className='px-3 py-3'>L</th>
          </tr>
        </thead>
        <tbody>
          { data.map((teams,index) => (
            <tr key={index} className={index%2 ? "bg-white hover:text-primary hover:font-bold " : "bg-gray hover:text-primary hover:font-bold "} > 
              <td className='px-3 py-4'> {teams.team} </td>
              <td className='px-3 py-4'> {teams.win}  </td>
              <td className='px-3 py-4'> {teams.loss} </td>
            </tr>
         ))}
        </tbody>
      </table>
    </div>
  )
}

const Home: NextPage = () => {
  return (

    <div className=''> 
      <Header /> 

      <div className='flex items-end bg-right bg-no-repeat lg:bg-right py-7 bg-[length:700px] sm:bg-cover bg-prayer_img h-[300px] sm:h-[600px]'>
        <Container>
         <h1 className='my-2 text-4xl font-extrabold text-white md:text-7xl'>The Muslim League</h1>
          <p className='mt-3 font-bold text-white text-l md:text-xl'>Uniting muslim athletes across CT.</p>
        </Container> 
      </div>
      <Container>
        <div className='p-5 my-5 rounded-2xl lg:grid lg:gap-5 lg:grid-cols-3 bg-gray'>
          <div className='mb-5'>
            <h2 className='mb-3 text-xl font-bold text-gray-500 md:mb-5 md:text-2xl'> Your 2022 Champs, Top Akhs! </h2>
            <p className='hidden text-xl sm:block' > 
              Top Akhs defeat The Springfield Rockets in close battle.
              Top Akhs defend there tile and are now back to back Muslim League champions.
            </p>
            <p className='hidden mt-5 text-xl lg:block'> Thank you to all the teams who participated for a another great Season! </p>
          </div>
          <div className='col-span-2 max-w-[800px] '>
          <Image
                src={championpic}
                className="rounded-2xl"
                alt="Picture of Championship Team"
                width="1265px"
                height="843px"
          />
         </div>
        </div>


        <h2 className='text-2xl font-bold text-center md:text-4xl'> 2022 Season Recap </h2>
        <div className='m-auto md:grid max-w-5xl md:grid-cols-2 '> 

          <div className='row-span-2'>
            <MiniStats/>
          </div> 
          <div className='flex flex-col justify-center py-5 min-h-[160px] items-center m-5 rounded-xl bg-award_img bg-cover bg-center bg-no-repeat'> 
            <h1 className='w-3/5 text-center font-bold my-3 text-white text-xl'> SEASON AWARD WINNERS </h1>
             <NextLink href='/about'>
                <button className="px-2 w-1/3 text-center py-1 hover:bg-gradient-to-r from-primary to-secondary  rounded-md bg-primary-500 font-bold text-white">
                  <a className="font-bold text-white"> AWARDS </a>
                </button>
             </NextLink>
          </div>

          <div className='flex flex-col justify-center min-h-[160px] py-5 items-center m-5 rounded-xl bg-scoring_img bg-cover bg-top bg-no-repeat'> 
            <h1 className='w-3/5 text-center font-bold my-3 text-white text-xl'> OUR LEAGUE LEADERS </h1>
             <NextLink href='/about'>
                <button className="px-2 min-w-fit w-1/3 text-center py-1 hover:bg-gradient-to-r hover:from-secondary  hover:to-primary rounded-md bg-black font-bold  text-white">
                  <a className="font-bold py-2 text-white"> LEADERBOARDS</a>
                </button>
             </NextLink>
          </div>
        </div>

        <h2 className='text-2xl font-bold text-center md:text-4xl'> 2023 Season Coming Soon! </h2>
        <div className='p-5 m-5 rounded-xl bg-gray'>
          <p className='text-xl'> 
            Details for the 2023  Season will roll out early next year Inshallah.
            <span className='hidden pl-1 sm:inline'>
              Comeback for updates and visit our social media for the latest content.
            </span>
         

          </p>
       </div>
      </Container>


   </div>
  )
}

export default Home
