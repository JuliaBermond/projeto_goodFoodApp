import { Center, Image } from "@chakra-ui/react";

const DefaultElement = () => {
  return (
    <Center pt={250}>
      <Image
        src="./logo.png"
        boxSize="300px"
        borderRadius="full"
        fit="cover"
        alt="goodfood-logo"
      />
    </Center>
  );
};

export default DefaultElement;
