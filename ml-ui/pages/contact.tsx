import Header from '../components/header'
import Container from '../components/container'



const Contact = () => {
  return (
      <Container>
        <Header title='Contact Us | Muslim League'/> 
        <h2 className='text-2xl m-8 font-bold text-center md:text-4xl text-primary'> Contact Us </h2>
        <div className='text-center p-5 m-5 rounded-xl bg-gray'>
            <h3 className='font-bold text-xl'> Vale Sports Club</h3>
            <h4> Middletown, CT 06457 </h4>
            <p className='pt-5'> Please direct all questions and concerns to our email to: </p>
            <p className='font-bold'> muslimleaguect@gmail.com</p>

       </div>


      </Container>
  )
}

export default Contact 
