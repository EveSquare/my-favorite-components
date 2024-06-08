"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Button } from "@chakra-ui/react";

const Home = () => {
  const links = ["buttons", "fonts"];

  return (
    <Box>
      {links.map((link) => (
        <Link key={link} href={`/${link}`}>
          <Button>{link}</Button>
        </Link>
      ))}
    </Box>
  );
};

export default Home;
