import { Box } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { SimpleGrid, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import "./Projects.css";
import { gitData } from "../GitData/gitData.js";

function Projects() {
  return (
    <Box id="project">
      <Heading className="project-heading" size="3xl" color="#fca311">
        Projects
      </Heading>

      <SimpleGrid
        columns={[1, 1, 1, 3]}
        spacingX="40px"
        spacingY="40px"
        marginTop="4rem"
      >
        {gitData.map((data) => (
          <Box
            key={data.id}
            className="card"
            backgroundColor="#fca311"
            onClick={() => window.open(data.url, "_blank")}
          >
            <Heading className="project-title" as="h6" textAlign="center">
              {data.title}
            </Heading>
            <Text noOfLines={3} className="project-desc">
              {data.description}
            </Text>
            <Spacer />
            <Text className="techstack">{data.techstack}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <button
        className=" btn button"
        onClick={() => window.open("https://github.com/anupmor1998", "_blank")}
      >
        More Projects
      </button>
    </Box>
  );
}

export default Projects;
