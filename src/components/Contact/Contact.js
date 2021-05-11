import { Box } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/layout";
import React from "react";
import "./Contact.css";
import { AiFillEnvironment } from "react-icons/ai";
import anup from "../../images/anup_pic.png";
import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Image } from "@chakra-ui/image";
function Contact() {
  return (
    <Box id="contact">
      <Heading className="contact-heading" size="3xl">
        Contact Me
      </Heading>
      <Text className="contact-desc">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
      </Text>
      <Text className="contact-skills">
        Co-Founder at Code Warriors | Computer Engineer | Machine Learning
        Enthusiastic | Data Science | React JS Developer
      </Text>
      <Box className="user-section">
        <Box className="user-info">
          <Text className="location" d="flex" marginTop="2rem">
            <AiFillEnvironment className="icon" />
            &nbsp; Surat, India
          </Text>
          <Box className="icon-box">
            <span className="social">
              <FaLinkedinIn className="social-icon" />
            </span>
            <span className="social">
              <FaTwitter className="social-icon" />
            </span>
            <span className="social">
              <FaGoogle className="social-icon" />
            </span>
            <span className="social">
              <FaGithub className="social-icon" />
            </span>
            <span className="social">
              <FaInstagram className="social-icon" />
            </span>
          </Box>
        </Box>
        <Image className="user-img" src={anup} />
      </Box>
    </Box>
  );
}

export default Contact;
