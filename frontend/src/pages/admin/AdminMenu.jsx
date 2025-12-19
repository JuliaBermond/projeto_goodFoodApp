import MealList from "@/components/shared/MealList";
import useMealsStore from "@/stores/mealsStore_";
import { useEffect } from "react";

const AdminMenu = () => {
  const getMeals = useMealsStore((store) => store.getMeals);

  useEffect(() => {
    getMeals();
  }, []);

  return <MealList isAdmin={true} />;
};

export default AdminMenu;
