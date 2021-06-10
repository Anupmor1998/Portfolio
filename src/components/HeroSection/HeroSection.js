import { Image } from '@chakra-ui/image';
import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import './HeroSection.css';
import { Link } from 'react-scroll';
function HeroSection() {
  return (
    <Box className='hero'>
      <Box className='left-half-hero'>
        <Heading className='heading1' as='h1' size='3xl'>
          Hy! I'm
        </Heading>
        <Heading className='heading2' as='h1' size='4xl'>
          Anup Mor
        </Heading>
        <Box>
          <Link smooth={true} to='contact'>
            <button className='btn'>Contact Me</button>
          </Link>
          <button
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1UqOM0v3-8W-a6hklwmxgDJk988eJ25U5/view?usp=sharing',
                '_blank'
              )
            }
            className='btn'
          >
            My Resume
          </button>
        </Box>
      </Box>

      <Box className='right-half-hero'>
        <Image
          className='hero-img'
          src='https://ik.imagekit.io/anupmor302/Businessman-amico_oBZnVtVM4.svg'
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
