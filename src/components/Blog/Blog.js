import { Box } from "@chakra-ui/layout";
import { SimpleGrid, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import "./Blog.css";
import { blogData } from "../GitData/blogData.js";

function Blog() {
  return (
    <Box id="blogs">
      <Heading className="blog-heading" size="3xl">
        My Blogs
      </Heading>

      <SimpleGrid
        columns={[1, 1, 1, 3]}
        spacingX="40px"
        spacingY="40px"
        marginTop="4rem"
      >
        {blogData.map((data) => (
          <Box
            key={data.id}
            className="card"
            backgroundColor="#fca311"
            onClick={() => window.open(data.url, "_blank")}
          >
            <Heading as="h6" size="md" textAlign="center" margin="1rem">
              {data.title}
            </Heading>
            <Text noOfLines={2}>{data.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Blog;
