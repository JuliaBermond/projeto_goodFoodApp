import mongoose from "mongoose";

// Subdocumento para o comprador
const buyerInfoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  endereco: {
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
  },
});

// Subdocumento para itens do pedido
const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
});

const orderSchema = new mongoose.Schema({
  buyer: { type: buyerInfoSchema, required: true }, // dados do cliente
  items: [orderItemSchema], // produtos do pedido
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "preparing", "ready", "delivered", "cancelled"],
    default: "pending",
  },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;
