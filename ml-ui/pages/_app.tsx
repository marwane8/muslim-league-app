import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/AuthContext';
function MyApp({ Component, pageProps }: AppProps) {
  return (
      
      <AuthProvider>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </AuthProvider>

  );
}

export default MyApp
