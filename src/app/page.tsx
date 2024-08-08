"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Button } from "@chakra-ui/react";

const Home = () => {
  const links = ["buttons", "fonts", "global-menu"];

  return (
    <Box>
      {links.map((link) => (
        <Box key={link} my="md" mx="md">
          <Link href={`/${link}`}>
            <Button>{link}</Button>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
