import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About/About";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Particle from "./components/Particles/Particle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ChakraProvider>
      <Box className="bg">
        <Particle />
        <NavBar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
