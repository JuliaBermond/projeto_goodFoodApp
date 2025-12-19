import Order from "../models/order.model.js";

export async function createOrder(req, res) {
  const { buyer, items } = req.body;
  // validação
  if (!buyer || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      error: true,
      data: null,
      message: "Necessário preencher todos os campos",
    });
  }

  // cálculo do valor total
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  try {
    const novoPedido = await Order.create({
      buyer,
      items,
      totalPrice,
    });

    return res.status(201).json({
      error: false,
      data: novoPedido,
      message: "Pedido criado com sucesso!",
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      data: null,
      message: "Erro ao criar o pedido. Tente novamente",
      errorMessage: e.message,
    });
  }
}

export async function editStatusOrder(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  const allowedStatuses = [
    "pending",
    "preparing",
    "ready",
    "delivered",
    "cancelled",
  ];

  if (!status) {
    return res.status(400).json({
      error: true,
      data: null,
      message: "É necessário informar o status para atualizar o pedido.",
    });
  }

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      error: true,
      data: null,
      message: `Status inválido. Status permitidos: ${allowedStatuses.join(
        ", "
      )}`,
    });
  }

  try {
    const pedido = await Order.findById(id);

    if (!pedido) {
      return res.status(404).json({
        error: true,
        data: null,
        message: "Pedido não encontrado.",
      });
    }

    // atualiza o status
    pedido.status = status;
    await pedido.save();

    return res.status(200).json({
      error: false,
      data: pedido,
      message: "Status do pedido atualizado com sucesso!",
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      data: null,
      message: "Erro ao atualizar status do pedido. Tente novamente.",
      errorMessage: e.message,
    });
  }
}

export async function getAllOrders(req, res) {
  try {
    const allOrders = await Order.find();
    return res.status(200).json({
      error: false,
      data: allOrders,
      message: "",
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      data: null,
      message: "Erro ao retornar pedidos",
      errorMessage: e.message,
    });
  }
}
