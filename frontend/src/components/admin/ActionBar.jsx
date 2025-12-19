import { Box, Button, Separator, Stack, Text, VStack } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

const ActionBar = () => {
  return (
    <Box h="100vh" w="100%" bg="gray.900" color="white" px={6} py={8}>
      <Stack spacing={8}>
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" letterSpacing="wide">
            🍽 GOOD FOOD
          </Text>
          <Text fontSize="sm" color="gray.400">
            Painel Administrativo
          </Text>
        </Box>

        <Separator />

        <VStack spacing={3} align="stretch">
          <Text
            fontSize="xs"
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Gestão
          </Text>

          <Button
            as={NavLink}
            to="/admin"
            _hover={{ bg: "gray.700" }}
            justifyContent="flex-start"
            whiteSpace="normal"
            variant="outline"
            h="auto"
            py={3}
          >
            📊 Dashboard
          </Button>

          <Button
            as={NavLink}
            to="/admin/orders"
            _hover={{ bg: "gray.700" }}
            justifyContent="flex-start"
            whiteSpace="normal"
            variant="outline"
            h="auto"
            py={3}
          >
            📦 Pedidos
          </Button>

          <Button
            as={NavLink}
            to="/admin/foods"
            variant="outline"
            h={"auto"}
            whiteSpace="normal"
            py={3}
            justifyContent="flex-start"
            _hover={{ bg: "gray.700" }}
          >
            🍔 Menu
          </Button>

          <Button
            as={NavLink}
            to="/admin/foods/new"
            variant="outline"
            h={"auto"}
            whiteSpace="normal"
            py={3}
            justifyContent="flex-start"
            _hover={{ bg: "gray.700" }}
          >
            ➕ Criar Alimento
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default ActionBar;
