import { create } from "zustand";

export const buyerDataStore = create((set) => ({
  buyer: {
    nome: "",
    email: "",
    telefone: "",
    endereco: {
      rua: "",
      numero: "",
      bairro: "",
      cep: "",
    },
  },
  setBuyer: (buyerData) => set({ buyer: { ...buyerData } }),
}));
