import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  DataList,
  Grid,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useOrderStore } from "@/stores/orderStore_";
import { ITEMS_PER_PAGE, STATUS_OPTIONS } from "@/data/siteData.js";


const AllOrders = () => {
  const getAllOrders = useOrderStore((state) => state.getAllOrders);
  const orders = useOrderStore((state) => state.orders);
  const editStatusOrder = useOrderStore((state) => state.editStatusOrder);

  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("");

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  //  FILTRO POR STATUS
  const filteredOrders = useMemo(() => {
    if (statusFilter === "all") return orders;
    return orders.filter((order) => order.status === statusFilter);
  }, [orders, statusFilter]);

  //  PAGINAÇÃO
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredOrders.slice(start, end);
  }, [filteredOrders, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter]);

  return (
    <Box>
      <ButtonGroup mb={6} isAttached flexWrap="wrap">
        {STATUS_OPTIONS.map((status) => (
          <Button
            key={status.value}
            onClick={() => setStatusFilter(status.value)}
            bg={statusFilter === status.value ? "orange" : "gray"}
            variant={statusFilter === status.value ? "solid" : "outline"}
            mb={2}
          >
            {status.label}
          </Button>
        ))}
      </ButtonGroup>

      {paginatedOrders.length === 0 && <Text>Nenhum pedido encontrado</Text>}

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {paginatedOrders.map((order) => (
          <Box key={order._id} p={4} borderWidth="1px" borderRadius="md">
            <DataList.Root orientation="horizontal">
              <DataList.Item>
                <DataList.ItemLabel>Comprador</DataList.ItemLabel>
                <DataList.ItemValue>{order.buyer?.nome}</DataList.ItemValue>
              </DataList.Item>

              <DataList.Item>
                <DataList.ItemLabel>Telefone</DataList.ItemLabel>
                <DataList.ItemValue>{order.buyer?.telefone}</DataList.ItemValue>
              </DataList.Item>

              <DataList.Item>
                <DataList.ItemLabel>Endereço</DataList.ItemLabel>
                <DataList.ItemValue>
                  {order.buyer?.endereco?.rua}, {order.buyer?.endereco?.numero}{" "}
                  – {order.buyer?.endereco?.bairro}
                </DataList.ItemValue>
              </DataList.Item>

              <DataList.Item>
                <DataList.ItemLabel>Status</DataList.ItemLabel>
                <DataList.ItemValue>
                  <select
                    value={order.status}
                    onChange={(e) => editStatusOrder(order._id, e.target.value)}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "8px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#FFF",
                      fontSize: "14px",
                      fontWeight: 500,
                      cursor: "pointer",
                      outline: "none",
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1px solid #ED8936")
                    }
                    onBlur={(e) =>
                      (e.target.style.border = "1px solid #E2E8F0")
                    }
                  >
                    <option value="pending">Pendente</option>
                    <option value="preparing">Preparando</option>
                    <option value="ready">Pronto</option>
                    <option value="delivered">Entregue</option>
                    <option value="cancelled">Cancelado</option>
                  </select>
                </DataList.ItemValue>
              </DataList.Item>

              <DataList.Item>
                <DataList.ItemLabel>Total</DataList.ItemLabel>
                <DataList.ItemValue>R$ {order.totalPrice}</DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>

            <Box mt={4}>
              <Text fontWeight="bold" mb={2}>
                Itens
              </Text>

              {order.items.map((item) => (
                <Text key={item._id} pl={2}>
                  • {item.name} — {item.quantity}x (R$ {item.price})
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </Grid>

      {totalPages > 1 && (
        <HStack mt={6} justify="center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              size="sm"
              onClick={() => setCurrentPage(index + 1)}
              variant={currentPage === index + 1 ? "solid" : "outline"}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default AllOrders;
