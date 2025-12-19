import { create } from "zustand";
import { api } from "@/services/api.js";

export const useOrderStore = create((set) => ({
  orders: [], 
  // order: null, 
  client: null,
  loading: false,
  error: null,
  isOrderPlaced: false,
  message: "",
  setClient: (client) => {
    set({ client: client });
  },
  setIsOrderPlaced: (value) => set({ isOrderPlaced: value }),

  updateOrderInList: (updatedOrder) => {
    set((state) => {
      const exists = state.orders.some((p) => p._id === updatedOrder._id);

      return {
        orders: exists
          ? state.orders.map((p) =>
              p._id === updatedOrder._id ? updatedOrder : p
            )
          : [...state.orders, updatedOrder],
      };
    });
  },

  // Criar pedido
  createOrder: async (buyer, cartList) => {
    set({ loading: true, error: null, message: "" });

    // Ajustando o buyer com endereço aninhado
    const buyerFixed = {
      nome: buyer.nome,
      telefone: buyer.telefone,
      endereco: {
        rua: buyer.rua,
        numero: buyer.numero,
        bairro: buyer.bairro,
        cep: buyer.cep,
      },
    };

    const items = cartList.map((item) => ({
      productId: item._id,
      name: item.name,
      quantity: item.amount,
      price: item.price,
    }));

    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    try {
      const response = await api.post("orders/placeorder", {
        buyer: buyerFixed,
        items,
        totalPrice,
      });

      set({
        loading: false,
        error: false,
        message: response.data?.message || "Pedido feito com sucesso!",
        isOrderPlaced: true,
      });

      useOrderStore.getState().updateOrderInList(response.data.data);
    } catch (e) {
      set({
        error: true,
        loading: false,
        message: e.response?.data?.message || "Erro ao criar pedido.",
      });
    }
  },

  // Editar status
  editStatusOrder: async (id, status) => {
    set({ loading: true, error: null, message: "" });

    try {
      const response = await api.patch(`/orders/order/editstatus/${id}`, {
        status,
      });

      set({
        loading: false,
        error: false,
        message: response.data?.message || "Status atualizado!",
      });

      useOrderStore.getState().updateOrderInList(response.data.data);
    } catch (e) {
      set({
        error: true,
        loading: false,
        message: e.response?.data?.message || "Erro ao alterar status.",
      });
    }
  },

  // Buscar todos os pedidos
  getAllOrders: async () => {
    set({ loading: true, error: null, message: "" });

    try {
      const response = await api.get("/orders/all");
      const lista = response.data?.data || [];

      set({
        orders: lista,
        loading: false,
        error: false,
        message: response.data?.message || "Pedidos carregados com sucesso!",
      });

      return lista;
    } catch (e) {
      set({
        loading: false,
        error: true,
        message: e.response?.data?.message || "Erro ao buscar pedidos.",
      });
      return [];
    }
  },
}));
