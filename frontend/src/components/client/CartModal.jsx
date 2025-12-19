import { useState } from "react";

import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Portal,
  VStack,
} from "@chakra-ui/react";

import useCartStore from "@/stores/cartStore_";
import { useOrderStore } from "@/stores/orderStore_";

import Form from "../shared/Form";
import CartItems from "./CartItems";

import {
  concludePurchaseBuyerFields,
  confirmedModalClient,
} from "@/data/siteData";

import ConfirmedModal from "./ConfirmedModal";

const CartModal = () => {
  const [open, setOpen] = useState(false);

  const cartList = useCartStore((state) => state.cartList);
  const clearCart = useCartStore((state) => state.clearCart);
  const acceptCart = useCartStore((state) => state.acceptCart);

  const createOrder = useOrderStore((state) => state.createOrder);
  const setClient = useOrderStore((state) => state.setClient);
  const isOrderPlaced = useOrderStore((state) => state.isOrderPlaced);
  const setIsOrderPlaced = useOrderStore((state) => state.setIsOrderPlaced);

  function handleForm(formData) {
    setClient(formData);
    acceptCart();

    createOrder(formData, cartList);
    clearCart();
    setOpen(false);
  }

  return (
    <VStack spacing={4} alignItems="center" w="100%">
      <CartItems />

      <ConfirmedModal
        confirmedModalData={confirmedModalClient}
        open={isOrderPlaced}
        onOpenChange={(v) => setIsOrderPlaced(v.open)}
      />

      {cartList.length > 0 && (
        <>
          <Box display="flex" mt={2}>
            <Button
              variant="solid"
              size="sm"
              w="50%"
              bg="white"
              onClick={clearCart}
            >
              Limpar Carrinho
            </Button>

            <Drawer.Root
              size="md"
              open={open}
              onOpenChange={(e) => setOpen(e.open)}
            >
              <Drawer.Trigger asChild>
                <Button variant="solid" size="sm" bg="white" mx={2}>
                  Finalizar
                </Button>
              </Drawer.Trigger>

              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content>
                    <Drawer.Body>
                      <Form
                        formFields={concludePurchaseBuyerFields}
                        onClickFunc={handleForm}
                      />
                    </Drawer.Body>

                    <Drawer.CloseTrigger asChild>
                      <CloseButton
                        size="sm"
                        position="absolute"
                        top={2}
                        right={2}
                      />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </Box>
        </>
      )}
    </VStack>
  );
};

export default CartModal;
