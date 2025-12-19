import useMealsStore from "@/stores/mealsStore_";
import { useEffect } from "react";
import MealList from "@/components/shared/MealList";

export default function MenuPage() {
  const getMeals = useMealsStore((state) => state.getMeals);;

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <MealList isAdmin={false}/>
    </>
  );
}
