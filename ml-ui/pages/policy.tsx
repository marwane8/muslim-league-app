import NextLink from 'next/link';

import Header from '../components/header'
import Container from '../components/container'

const Policy = () => {
  return (
    <div> 
      <Header title='Policy | Muslim League CT'/> 
      <Container>
      <div>

        <h2 className='text-2xl m-8 text-primary font-bold text-center md:text-4xl'> League Policy </h2>
        <div className='text-center p-5 m-5 rounded-xl bg-gray'>

            <p> The following policy and rules are implemented for team registration and all offical games. </p>
            
            <div className='py-1 flex justify-between m-auto w-40'>
              <button className="px-2 py-1 rounded-md bg-black">
                  <a className="font-bold text-white"> Policy </a>
              </button>
              <button className="px-2 py-1 rounded-md bg-black">
                  <a className="font-bold text-white"> Rules </a>
              </button>
            </div>
       </div>


      </div>
      </Container>
   </div>
  )
}

export default Policy 
