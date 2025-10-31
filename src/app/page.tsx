"use client";

import Navbar from "../components/Navbar";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  CardBody,
  Card,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Flex
        minH="calc(100vh - 64px)"
        bgGradient="linear(to-br, green.400, green.200)"
        align="center"
        justify="center"
        px={5}
        py={10}
        direction="column"
        gap={8}
      >
        <Container maxW="4xl">
          <VStack
            spacing={8}
            textAlign="center"
            bg="white"
            opacity={0.9}
            p={12}
            borderRadius="2xl"
            shadow="2xl"
            border="1px"
            borderColor="green.200"
          >
            <Heading
              as="h1"
              size="2xl"
              color="green.500"
              fontWeight="bold"
              textShadow="sm"
              m={0}
            >
              Welcome to Mind Mentor
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              opacity={0.9}
              m={0}
              fontWeight="medium"
            >
              Your personal mental health companion
            </Text>
          </VStack>
        </Container>

        <Container maxW="4xl">
          <Card>
            <CardBody>
              <Text>Your personal mental health companion</Text>
            </CardBody>
          </Card>
        </Container>
      </Flex>
    </Box>
  );
}
