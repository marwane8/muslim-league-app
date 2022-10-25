
import Header from '../components/header'
import Container from '../components/container'

const About = () => {
  return (
    <div> 
      <Header title='About Us | Muslim League CT'/> 
      <Container>
        <h2 className='text-2xl text-primary m-5 font-bold text-center md:text-4xl'> Muslim League CT </h2>
        <div className='p-5 m-5 rounded-xl bg-gray'>
          <p className='text-xl'> 
          Muslim League CT is an inturmural basketball league for Muslims in Connecticut. 
          Founded in 2020, our league is devoted to giving the community a chance to gather as brothers and play basketball as a means to stay united.
          </p>
          <p className='text-xl pt-2'> 
           <span className='font-bold'> Our Mission </span> is to unit the Ummah through sports! 
          </p>

       </div>
      </Container>
   </div>
  )
}

export default About 
