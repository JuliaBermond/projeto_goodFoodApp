import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartList: [],
  checkOut: false,
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cartList.find((p) => p._id === item._id);
      if (existingItem) {
        return {
          cartList: state.cartList.map((p) =>
            p._id === item._id ? { ...p, amount: (p.amount || 1) + 1 } : p
          ),
        };
      } else {
        return {
          cartList: [...state.cartList, { ...item, amount: 1 }],
        };
      }
    });
  },

  addOneMoreToCart: (id) =>
    set((state) => ({
      cartList: state.cartList.map((p) =>
        p._id === id ? { ...p, amount: p.amount + 1 } : p
      ),
    })),

  excludeOneFromCart: (id) =>
    set((state) => ({
      cartList: state.cartList
        .map((p) => (p._id === id ? { ...p, amount: p.amount - 1 } : p))
        .filter((p) => p.amount > 0),
    })),

  clearCart: () => set({ cartList: [] }),

  acceptCart: () => set({ checkOut: true }),

  totalPrice: () => {
    return get().cartList.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );
  },
}));

export default useCartStore;
