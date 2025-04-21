import {useEffect} from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar';
function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  },[])
  return (

    <main className='bg-gray-950'>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Feedback/>
      <Footer />
    </main>
  )
}

export default App
