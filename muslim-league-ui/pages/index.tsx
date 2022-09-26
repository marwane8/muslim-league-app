import type { NextPage } from 'next'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div> 
      <Header title='Muslim League'/> 
      <div className='h-96 bg-t-primary'>
        <h1 className='text-4xl font-bold text-center grow bg-bg-primary'> Welcome to the Muslim League </h1>
      </div>
    </div>
  )
}

export default Home
