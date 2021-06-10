import { Box } from '@chakra-ui/layout';
import { Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import './Contact.css';
import { AiFillEnvironment } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Image } from '@chakra-ui/image';
function Contact() {
  return (
    <Box id='contact'>
      <Heading className='contact-heading' size='3xl'>
        Contact Me
      </Heading>
      <Text className='contact-desc'>
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
      </Text>
      <Text className='contact-skills'>
        Co-Founder at Code Warriors | Computer Engineer | Machine Learning
        Enthusiastic | Data Science | React JS Developer
      </Text>
      <Box className='user-section'>
        <Box className='user-info'>
          <Text className='location' d='flex' marginTop='2rem'>
            <AiFillEnvironment className='icon' />
            &nbsp; Surat, India
          </Text>
          <Box className='icon-box'>
            <span
              className='social'
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/anup-mor-81aa34183/',
                  '_blank'
                )
              }
            >
              <FaLinkedinIn className='social-icon' />
            </span>
            <span
              className='social'
              onClick={() =>
                window.open('https://twitter.com/Anup_302', '_blank')
              }
            >
              <FaTwitter className='social-icon' />
            </span>
            {/* <span className="social">
              <FaGoogle className="social-icon" />
            </span> */}
            <span
              className='social'
              onClick={() =>
                window.open('https://github.com/anupmor1998', '_blank')
              }
            >
              <FaGithub className='social-icon' />
            </span>
            <span
              className='social'
              onClick={() =>
                window.open('https://www.instagram.com/anupmor/', '_blank')
              }
            >
              <FaInstagram className='social-icon' />
            </span>
          </Box>
        </Box>
        <Image
          className='user-img'
          src='https://ik.imagekit.io/anupmor302/anup_pic_kOs6dcTLJV.png'
        />
      </Box>
    </Box>
  );
}

export default Contact;
