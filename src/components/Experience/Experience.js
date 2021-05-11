import { Box } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { SimpleGrid, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import "./Experience.css";
import { expData } from "../GitData/expData";
import { Image } from "@chakra-ui/image";

function Experience() {
  return (
    <Box id="achievements">
      <Heading className="exp-heading" size="3xl">
        Work Experience
      </Heading>

      <SimpleGrid
        columns={[1, 1, 1, 3]}
        spacingX="40px"
        spacingY="40px"
        marginTop="4rem"
      >
        {expData.map((data) => (
          <Box
            key={data.id}
            className="card"
            backgroundColor="#fca311"
            onClick={() => window.open(data.url, "_blank")}
          >
            <Heading className="exp-title" as="h6" size="md" textAlign="center">
              {data.title}
            </Heading>
            <Image className="card-img" src={data.image} />
            <Spacer />
            <Text className="company" textAlign="center" color="gray.600">
              {data.company}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Experience;
