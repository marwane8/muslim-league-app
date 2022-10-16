
import Header from '../components/header'
import Container from '../components/container'

const About = () => {
  return (
    <div> 
      <Header title='About Us | Muslim League'/> 
      <Container>
      <div className='h-96'>
        <h1 className='py-10 mt-4 text-4xl font-bold text-center rounded-md grow bg-secondary'> About US </h1>
      </div>
      </Container>
   </div>
  )
}

export default About 
