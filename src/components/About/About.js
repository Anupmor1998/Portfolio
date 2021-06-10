import { Image } from '@chakra-ui/image';
import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import './About.css';

function About() {
  return (
    <Box id='about' className='global-padding'>
      <Heading className='about-heading' as='h1' size='3xl'>
        About Me
      </Heading>
      <Box className='about'>
        <Box className='left-half-about'>
          <Image
            className='about-img'
            src='https://ik.imagekit.io/anupmor302/about_lLOk9mnAo.svg'
            background='transparent'
          />
        </Box>
        <Box className='right-half-about'>
          <Text className='about-details'>
            Hi, my name is Anup Mor, I am a very passionate person and do
            everything with equal and high energy. I am curious by nature and
            try to learn at least one new thing every day. I am certified in
            Python and DataScience and love coding. I like facing new challenges
            because they are the best teacher. I try to surround myself with
            great minds as they teach a lot. Experienced in machine learning and
            computer vision. Passionate about learning and applying data science
            to solve real-world problems. Always looking for new ways to improve
            processes using ML and AI.
          </Text>
          <Box className='tech'>
            <div className='inner-tech'>
              <span
                className='iconify tech-logo'
                data-icon='logos:firebase'
                data-inline='false'
              ></span>
              <p className='tech-title'>Firebase</p>
            </div>
            <div className='inner-tech'>
              <span
                className='iconify tech-logo'
                data-icon='logos:nodejs-icon'
                data-inline='false'
              ></span>
              <p className='tech-title'>Node Js</p>
            </div>
            <div className='inner-tech'>
              <span
                className='iconify tech-logo'
                data-icon='logos:javascript'
                data-inline='false'
              ></span>
              <p className='tech-title'>JavaScript</p>
            </div>
            <div className='inner-tech'>
              <span
                className='iconify tech-logo'
                data-icon='vscode-icons:file-type-html'
                data-inline='false'
              ></span>
              <p className='tech-title'>HTML</p>
            </div>
            <div className='inner-tech'>
              {' '}
              <span
                className='iconify tech-logo'
                data-icon='vscode-icons:file-type-css'
                data-inline='false'
              ></span>
              <p className='tech-title'>CSS</p>
            </div>
            <div className='inner-tech'>
              <span
                className='iconify tech-logo'
                data-icon='logos:python'
                data-inline='false'
              ></span>
              <p className='tech-title'>Python</p>
            </div>
            <div className='inner-tech'>
              <span
                className='iconify tech-logo'
                data-icon='logos:git-icon'
                data-inline='false'
              ></span>
              <p className='tech-title'>Git</p>
            </div>
            <div className='inner-tech'>
              <span
                className='iconify tech-logo'
                data-icon='logos:tensorflow'
                data-inline='false'
              ></span>
              <p className='tech-title'>Tensorflow</p>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
