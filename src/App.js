import { Box, ChakraProvider, Image } from '@chakra-ui/react';
import './App.css';
import About from './components/About/About';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Particle from './components/Particles/Particle';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import Top from './components/Top/Top';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  });
  return (
    <ChakraProvider>
      <Box className='bg'>
        <Particle />
        {loading ? (
          <div className='loader-bg'>
            <Image
              className='loader'
              src='https://ik.imagekit.io/anupmor302/loader_D9KH1nidn.svg'
            />
          </div>
        ) : (
          <div className='relative'>
            <Top />
            <NavBar />
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Blog />
            <Contact />
            <Footer />
          </div>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
