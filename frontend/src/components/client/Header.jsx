import { Box, Image } from "@chakra-ui/react";

export default function Header({ headerImg }) {
  return (
    <Box
      flex="0.3"
      display="flex"
      bg="orange.400"
      color="white"
      minW="100%"
      minH="60px"
      py={8}
      px={6}
      boxShadow="md"
      fontSize={["40px", "60px", "80px", "120px"]}
      alignItems="center"
      justifyContent="space-around"
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
      }}
    >
      <Box
        position="relative"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        lineHeight="0.9"
      >
        <Box display="flex" position="relative">
          GOOD
        </Box>
        <Box display="flex" position="relative">
          F
          <Box as="span" position="relative" display="inline-block">
            OO
            <Box
              position="absolute"
              top="75%"
              left="52%"
              transform="translateX(-50%)"
              width="1.2em"
              height="0.6em"
              borderBottom="0.22em solid black"
              borderRadius="0 0 1.2em 1.2em"
            />
          </Box>
          D
        </Box>
      </Box>
      <Image
        src={headerImg}
        borderRadius="full"
        alt="Logo"
        w={{ base: "120px", md: "180px", lg: "200px" }}
        h="auto"
        objectFit="cover"
      />
    </Box>
  );
}
