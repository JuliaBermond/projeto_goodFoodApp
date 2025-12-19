import useCartStore from "@/stores/cartStore_";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = ({ buttonContent }) => {
  const cartItems = useCartStore((state) => state.cartList);

  return (
    <Box
      w="100%"
      bg="orange.400"
      px={4}
      py={3}
      boxShadow="sm"
      transition="all 0.3s ease"
      style={{
        fontWeight: 900,
      }}
    >
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2} gap={3}>
        {buttonContent.map(({ id, text, linkTo, icon: Icon }) => {
          let isCartButton = linkTo.toLowerCase().includes("cart");

          return (
            <Flex align="center" gap={2} key={id}>
              <Button
                as={Link}
                to={linkTo}
                w="100%"
                variant="surface"
                rounded="l3"
                fontSize={{ base: "10px", lg: "16px" }}
                fontWeight="bold"
              >
                <Icon />
                <Text display="flex" alignItems="center">
                  {text}
                  {isCartButton && cartItems.length > 0 && (
                    <Text
                      as="span"
                      colorScheme="red"
                      borderRadius="full"
                      ml={2}
                    >
                      ({cartItems.length})
                    </Text>
                  )}
                </Text>
              </Button>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default NavBar;
