import express from "express";
import {
  createMeal,
  editMeal,
  excludeMeal,
  getAllMeals,
} from "../controllers/mealController.js";
export const mealsRouter = express.Router();

//admin
mealsRouter.post("/create", createMeal);
mealsRouter.delete("/exclude/:id", excludeMeal);
mealsRouter.patch("/edit/:id", editMeal);

//admin e cliente
mealsRouter.get("/all", getAllMeals);
