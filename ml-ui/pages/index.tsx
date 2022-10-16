import type { NextPage } from 'next'

import Header from '../components/header'
import Container from '../components/container'

const Home: NextPage = () => {
  return (
    <div> 
      <Header /> 
      <Container>
      <div className='h-96'>
        <h1 className='py-10 mt-4 text-4xl font-bold text-center rounded-md grow bg-primary'> Welcome to the Muslim League </h1>
      </div>
      </Container>
   </div>
  )
}

export default Home
