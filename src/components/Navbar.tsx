"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Stack,
  Text,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  InfoIcon,
  SettingsIcon,
  PhoneIcon,
  StarIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("green.200", "gray.600");
  const hoverBg = useColorModeValue("green.50", "gray.700");

  if (!mounted) {
    return (
      <Box bg={bg} shadow="lg" borderBottom="1px" borderColor={borderColor}>
        <Container maxW="7xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Box>
              <Link href="/">
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="green.500"
                  _hover={{ color: "green.600" }}
                  transition="colors 0.2s"
                >
                  Mind Mentor
                </Text>
              </Link>
            </Box>
            <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="green"
                  size="sm"
                  _hover={{ bg: hoverBg }}
                >
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  colorScheme="green"
                  size="sm"
                  _hover={{ bg: hoverBg }}
                >
                  About
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="ghost"
                  colorScheme="green"
                  size="sm"
                  _hover={{ bg: hoverBg }}
                >
                  Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  colorScheme="green"
                  size="sm"
                  _hover={{ bg: hoverBg }}
                >
                  Contact
                </Button>
              </Link>
            </HStack>
            <IconButton
              size="md"
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: "none" }}
              variant="ghost"
              colorScheme="green"
            />
          </Flex>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg={bg} shadow="lg" borderBottom="1px" borderColor={borderColor}>
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Box>
            <Link href="/">
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="green.500"
                _hover={{ color: "green.600" }}
                transition="colors 0.2s"
              >
                Mind Mentor
              </Text>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
            <Link href="/">
              <Button
                variant="ghost"
                colorScheme="green"
                size="sm"
                _hover={{ bg: hoverBg }}
                transition="all 0.2s"
              >
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="ghost"
                colorScheme="green"
                size="sm"
                _hover={{ bg: hoverBg }}
                transition="all 0.2s"
              >
                About
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="ghost"
                colorScheme="green"
                size="sm"
                _hover={{ bg: hoverBg }}
                transition="all 0.2s"
              >
                Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                colorScheme="green"
                size="sm"
                _hover={{ bg: hoverBg }}
                transition="all 0.2s"
              >
                Contact
              </Button>
            </Link>
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onToggle}
            variant="ghost"
            colorScheme="green"
            _hover={{ bg: hoverBg }}
            transition="all 0.2s"
          />
        </Flex>

        {/* Mobile Navigation Menu */}
        <Box
          display={{ md: "none" }}
          overflow="hidden"
          maxH={isOpen ? "300px" : "0px"}
          transition="max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in-out"
          opacity={isOpen ? 1 : 0}
        >
          <Box
            pb={4}
            borderTop="1px"
            borderColor={borderColor}
            bg={bg}
            shadow="xl"
            borderRadius="0 0 12px 12px"
          >
            <Stack as="nav" spacing={1} p={4}>
              <Link href="/" onClick={onToggle}>
                <Button
                  variant="ghost"
                  colorScheme="green"
                  size="md"
                  width="full"
                  justifyContent="flex-start"
                  leftIcon={<StarIcon />}
                  _hover={{
                    bg: hoverBg,
                    transform: "translateX(8px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  borderRadius="lg"
                >
                  Home
                </Button>
              </Link>
              <Link href="/about" onClick={onToggle}>
                <Button
                  variant="ghost"
                  colorScheme="green"
                  size="md"
                  width="full"
                  justifyContent="flex-start"
                  leftIcon={<InfoIcon />}
                  _hover={{
                    bg: hoverBg,
                    transform: "translateX(8px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  borderRadius="lg"
                >
                  About
                </Button>
              </Link>
              <Link href="/services" onClick={onToggle}>
                <Button
                  variant="ghost"
                  colorScheme="green"
                  size="md"
                  width="full"
                  justifyContent="flex-start"
                  leftIcon={<SettingsIcon />}
                  _hover={{
                    bg: hoverBg,
                    transform: "translateX(8px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  borderRadius="lg"
                >
                  Services
                </Button>
              </Link>
              <Link href="/contact" onClick={onToggle}>
                <Button
                  variant="ghost"
                  colorScheme="green"
                  size="md"
                  width="full"
                  justifyContent="flex-start"
                  leftIcon={<PhoneIcon />}
                  _hover={{
                    bg: hoverBg,
                    transform: "translateX(8px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  borderRadius="lg"
                >
                  Contact
                </Button>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
