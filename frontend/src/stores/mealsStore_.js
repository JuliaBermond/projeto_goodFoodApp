import { create } from "zustand";
import { api } from "../services/api";

const useMealsStore = create((set) => ({
  mealsList: [],
  loading: false,
  error: false,
  message: "",
  createMealMessage: "",
  clearMessage: () => set({ message: "", createMealMessage: "" }),

  // Buscar refeições
  getMeals: async () => {
    set({ loading: true, error: false, message: "" });

    try {
      const response = await api.get("/meals/all");

      set({
        mealsList: response.data.data,
        loading: false,
        error: false,
        message: response.data.message,
      });
    } catch (e) {
      set({
        error: true,
        loading: false,
        message: e.response?.data?.message || "Erro ao carregar refeições",
      });
    }
  },

  // Editar refeição
  editMeal: async (id, updatedFields) => {
    set({ loading: true, error: false, message: "" });

    try {
      const response = await api.patch(`/meals/edit/${id}`, updatedFields);

      set((state) => ({
        mealsList: state.mealsList.map((meal) =>
          meal._id === id ? response.data.data : meal
        ), //atualizando a lista do zustand.
        loading: false,
        error: false,
        message: response.data.message,
      }));
    } catch (e) {
      set({
        error: true,
        loading: false,
        message: e.response?.data?.message || "Erro ao editar refeição",
      });
    }
  },

  // Criar refeição
  createMeal: async (mealObj) => {
    console.log("ENVIANDO PARA CREATE:", mealObj);

    set({ loading: true, error: false, message: "" });

    try {
      const response = await api.post("/meals/create", mealObj);

      set((state) => ({
        mealsList: [...state.mealsList, response.data.data],
        loading: false,
        error: false,
        createMealMessage: response.data.message,
      }));
    } catch (e) {
      set({
        error: true,
        loading: false,
        createMealMessage:
          e.response?.data?.message || "Erro ao criar refeição",
      });
    }
  },

  //Excluir refeição
  deleteMeal: async (id) => {
    try {
      const response = await api.delete(`/meals/exclude/${id}`);

      set((state) => ({
        loading: false,
        error: false,
        message: response.data?.message || "Refeição excluída",
        mealsList: state.mealsList.filter((meal) => meal._id !== id),
      }));
    } catch (e) {
      set({
        loading: false,
        error: true,
        message: e.response?.data?.message || "Erro ao excluir refeição",
      });
    }
  },
}));

export default useMealsStore;
