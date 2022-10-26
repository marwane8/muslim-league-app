import Image from 'next/image'
import NextLink from 'next/link'

import championpic from '/public/champions.jpg' 

import Header from '../components/header'
import Container from '../components/container'
import { getStandings } from '../utils/api/team-api'
import { TeamData } from '../utils/fetch-models'


type Props = {
  standings: TeamData[]
} 

const Home = ({standings}: Props) => {

  return (
    <> 
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
        <div className='max-w-5xl m-auto md:grid md:grid-cols-2 '> 

          <div className='row-span-2'>
            <MiniStats standings={standings}/>
          </div> 
          <div className='flex flex-col justify-center py-5 min-h-[160px] items-center m-5 rounded-xl bg-award_img bg-cover bg-center bg-no-repeat'> 
            <h1 className='w-3/5 my-3 text-xl font-bold text-center text-white'> SEASON AWARD WINNERS </h1>
             <NextLink href='/awards'>
                <button className="w-1/3 px-2 py-1 font-bold text-center text-white rounded-md hover:bg-gradient-to-r from-primary to-secondary bg-primary-500">
                  <a className="font-bold text-white"> AWARDS </a>
                </button>
             </NextLink>
          </div>

          <div className='flex flex-col justify-center min-h-[160px] py-5 items-center m-5 rounded-xl bg-scoring_img bg-cover bg-top bg-no-repeat'> 
            <h1 className='w-3/5 my-3 text-xl font-bold text-center text-white'> OUR LEAGUE LEADERS </h1>
             <NextLink href='/standings'>
                <button className="w-1/3 px-2 py-1 font-bold text-center text-white bg-black rounded-md min-w-fit hover:bg-gradient-to-r hover:from-secondary hover:to-primary">
                  <a className="py-2 font-bold text-white"> STANDINGS </a>
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
   </>
  )
}

export async function getServerSideProps() {

  let standings_data =  [
    {
      id: 1,
      name: "Team 1",
      wins: 8,
      loss: 0
    },
    {
      id: 2,
      name: "Team 2",
      wins: 7,
      loss: 1
    }
  ]

  try {
    standings_data = await getStandings(3)
  } catch (e) {
    console.error('Unable to get data')
  }
  return { props: {standings: standings_data}}
}

const MiniStats = ({standings}: Props) => {
  
  return(
    <div className='m-5 overflow-hidden shadow-sm rounded-xl'>
      <table className="w-full text-left table-fixed">
        <thead className='text-white bg-primary'>
          <tr >
            <th className= 'w-40 px-6 py-3'>Team</th>
            <th className='px-3 py-3'>W</th>
            <th className='px-3 py-3'>L</th>
          </tr>
        </thead>
        <tbody>
          { standings.map((teams,index) => (
            <tr key={index} className={index%2 ? "bg-white hover:text-primary hover:font-bold " : "bg-gray hover:text-primary hover:font-bold "} > 
              <td className='px-3 py-4'> {teams.name} </td>
              <td className='px-3 py-4'> {teams.wins}  </td>
              <td className='px-3 py-4'> {teams.loss} </td>
            </tr>
         ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
