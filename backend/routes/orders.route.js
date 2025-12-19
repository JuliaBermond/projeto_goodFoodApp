import express from "express";
import {
  createOrder,
  editStatusOrder,
  getAllOrders,
} from "../controllers/orderController.js";
export const ordersRouter = express.Router();

//cliente
ordersRouter.post(`/placeorder`, createOrder);

//admin
ordersRouter.patch(`/order/editstatus/:id`, editStatusOrder);
ordersRouter.get(`/all`, getAllOrders);
