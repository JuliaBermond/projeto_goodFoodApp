import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./db/mongoConnection.js";
import { mealsRouter } from "./routes/meals.route.js";
import { ordersRouter } from "./routes/orders.route.js";

dotenv.config();

const app = express();
app.use(cors()); //Permitir que o frontend faça requiições para o back;
app.use(express.json()); //Habilita o express para o uso de json no corpo da requisição;
app.use(express.static("public")); //Permissão de servir arquivos estáticos;
app.use("/api/orders", ordersRouter);
app.use("/api/meals", mealsRouter);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
