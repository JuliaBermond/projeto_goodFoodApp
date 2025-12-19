import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const TextArea = ({ content }) => {
  const { title, text, image } = content;

  return (
    <Grid
      w="100%"
      maxW="1200px"
      mx="auto"
      gap={6}
      templateRows={{ base: "auto auto", md: image ? "auto 1fr" : "auto" }}
      templateColumns={{ base: "1fr", md: image ? "1fr 1fr" : "1fr" }}
      alignItems="center"
      whiteSpace="pre-line"
    >
      <GridItem
        colSpan={{ base: 1, md: image ? 2 : 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
        >
          {title}
        </Box>
      </GridItem>

      <GridItem>
        <Box
          textAlign="justify"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="taller"
        >
          {text}
        </Box>
      </GridItem>

      {image && (
        <GridItem>
          <Image
            src={image}
            alt={title}
            rounded="md"
            fit="cover"
            w="100%"
            h={{ base: "200px", md: "100%" }}
          />
        </GridItem>
      )}
    </Grid>
  );
};

export default TextArea;
