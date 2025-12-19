import useCartStore from "@/stores/cartStore_";
import { Box, Button, ButtonGroup, DataList, Text } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItems = () => {
  const cartList = useCartStore((state) => state.cartList);
  const addOneMoreToCart = useCartStore((state) => state.addOneMoreToCart);
  const excludeOneFromCart = useCartStore((state) => state.excludeOneFromCart);

  // Soma total de todos os itens
  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  return (
    <Box bg="white" p={4} borderRadius="md" boxShadow="sm" w="full" mx="auto">

      {cartList.length > 0 && (
        <Box
          display="flex"
          justifyContent="space-between"
          px={2}
          py={2}
          fontWeight="bold"
          color="gray.700"
          borderBottom="1px solid #ddd"
          mb={2}
        >
          <Text w="35%" textAlign="left">Produto</Text>
          <Text w="15%" textAlign="center">Qtd.</Text>
          <Text w="25%" textAlign="center">Total</Text>
          <Text w="25%" textAlign="center">Ações</Text>
        </Box>
      )}

      <DataList.Root
        orientation="horizontal"
        divideY="1px"
        display="flex"
        justifyContent="space-between"
        w="100%"
      >
        {cartList.length === 0 ? (
          <Box width="80%" padding="4" color="black" textAlign="justify">
            Você ainda não adicionou nenhum item ao seu carrinho.
          </Box>
        ) : (
          cartList.map((item) => (
            <DataList.Item
              key={item._id}
              pt="2"
              flex="1"
              w="full"
              textAlign="center"
              justifyContent="space-between"
            >
              <DataList.ItemLabel
                color="grey.900"
                fontWeight="bold"
                w="35%"
                textAlign="left"
              >
                {item.name}
              </DataList.ItemLabel>

              <Box w="15%" color="gray.900" fontWeight="bold" textAlign="center">
                <Text>{item.amount}x</Text>
              </Box>

              <Box w="25%" color="gray.900" fontWeight="bold" textAlign="center">
                <Text>R${(item.price * item.amount).toFixed(2)}</Text>
              </Box>

              <ButtonGroup
                w="25%"
                size="sm"
                variant="solid"
                justifyContent="center"
              >
                <Button onClick={() => addOneMoreToCart(item._id)}>
                  <FaPlus />
                </Button>
                <Button onClick={() => excludeOneFromCart(item._id)}>
                  <FaMinus />
                </Button>
              </ButtonGroup>
            </DataList.Item>
          ))
        )}
      </DataList.Root>

      {cartList.length > 0 && (
        <Box
          mt={4}
          p={3}
          borderTop="1px solid #ddd"
          display="flex"
          justifyContent="space-around"
          fontWeight="bold"
          fontSize="lg"
          color="gray.900"
        >
          <Text>Total :</Text>
          <Text textAlign="center">R${total.toFixed(2)}</Text>
        </Box>
      )}
    </Box>
  );
};

export default CartItems;
