"use client";
import React from "react";
import { Stack, Text, Center, Link, HStack, Img } from "@chakra-ui/react";
import { Menu, MenuItem } from "@/components/Menu";

function App() {
  return (
    <div>
      <Center>
        <Menu>
          <MenuItem item="Title One">
            <HStack spacing={5} alignItems="start">
              <Stack spacing={1}>
                <Text color="gray.800" fontWeight={600}>
                  Heading
                </Text>
                <Link color="gray.600">Link One</Link>
                <Link color="gray.600">Link Two</Link>
                <Link color="gray.600">Link Three</Link>
                <Link color="gray.600">Link Four</Link>
              </Stack>
              <Stack spacing={2}>
                <Text color="gray.800" fontWeight={600}>
                  Showcase
                </Text>
                <Img
                  h="6.4rem"
                  w="8rem"
                  bg="whiteAlpha.50"
                  src="/secondary.avif"
                  objectFit="cover"
                  rounded="xl"
                  cursor="pointer"
                  alt="Beverage Can"
                />
              </Stack>
            </HStack>
          </MenuItem>
          <MenuItem item="Title Two">
            <Stack spacing={1}>
              <Link color="gray.600">Link One</Link>
              <Link color="gray.600">Link Two</Link>
              <Link color="gray.600">Link Three</Link>
              <Link color="gray.600">Link Four</Link>
            </Stack>
          </MenuItem>
          <MenuItem item="Title Three">
            <Stack spacing={1}>
              <Link color="gray.600">Link One</Link>
              <Link color="gray.600">Link Two</Link>
              <Link color="gray.600">Link Three</Link>
              <Link color="gray.600">Link Four</Link>
            </Stack>
          </MenuItem>
        </Menu>
      </Center>
    </div>
  );
}

export default App;
