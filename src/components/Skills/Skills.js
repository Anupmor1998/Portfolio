import { Image } from "@chakra-ui/image";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import React from "react";
import skills from "../../images/skills.svg";
import "./Skills.css";
function Skills() {
  return (
    <Box id="skills" className="global-padding">
      <Heading className="skill-heading" as="h1" size="3xl">
        Skills
      </Heading>

      <Box className="skills">
        <Box className="left-half-skills">
          <Stack spacing={5}>
            <Heading color="#fff" size="md">
              Machine Learning
            </Heading>
            <Progress
              hasStripe
              isAnimated
              className="progress"
              colorScheme="yellow"
              value={80}
            />

            <Heading color="#fff" size="md">
              Deep Learning
            </Heading>
            <Progress
              hasStripe
              isAnimated
              className="progress"
              colorScheme="yellow"
              value={90}
            />
            <Heading color="#fff" size="md">
              React JS
            </Heading>
            <Progress
              hasStripe
              isAnimated
              className="progress"
              colorScheme="yellow"
              value={60}
            />
            <Heading color="#fff" size="md">
              Python
            </Heading>
            <Progress
              hasStripe
              isAnimated
              className="progress"
              colorScheme="yellow"
              value={70}
            />
          </Stack>
        </Box>
        <Box className="right-half-skills">
          <Image src={skills} background="transparent" />
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
