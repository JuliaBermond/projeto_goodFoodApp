import Meal from "../models/meal.model.js";

export async function createMeal(req, res) {
  const { name, price, description, image } = req.body;

  if (!name || !price || !description || !image) {
    return res.status(400).json({
      error: true,
      data: null,
      message: "Preencha todos os campos",
    });
  }

  try {
    const newProduct = await Meal.create({
      name,
      price,
      description,
      image,
    });

    return res.status(201).json({
      error: false,
      data: newProduct,
      message: "Produto criado com sucesso",
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      data: null,
      message: "Erro ao criar produto",
      errorMessage: e.message,
    });
  }
}

export async function excludeMeal(req, res) {
  const { id } = req.params;

  try {
    const produto = await Meal.findById(id);

    if (!produto) {
      return res.status(404).json({
        error: true,
        data: null,
        message: "Produto não encontrado",
      });
    }

    await Meal.findByIdAndDelete(id);

    return res.status(200).json({
      error: false,
      data: null,
      message: "Produto excluído com sucesso",
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      data: null,
      message: "Erro ao excluir produto",
      errorMessage: e.message,
    });
  }
}

export async function editMeal(req, res) {
  const { id } = req.params;
  const updatedFields = req.body;

  const allowedFields = ["name", "price", "description", "image"];

  try {
    const produto = await Meal.findById(id);

    if (!produto) {
      return res.status(404).json({
        error: true,
        data: null,
        message: "Produto não encontrado",
      });
    }

    // valida campos inválidos
    const invalidFieldExists = Object.keys(updatedFields).some(
      (field) => !allowedFields.includes(field)
    );

    if (invalidFieldExists) {
      return res.status(400).json({
        error: true,
        data: null,
        message: "Campos inválidos enviados",
      });
    }

    const updatedProduct = await Meal.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true }
    );

    return res.status(200).json({
      error: false,
      data: updatedProduct,
      message: "Produto atualizado com sucesso",
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      data: null,
      message: "Erro ao editar produto",
      errorMessage: e.message,
    });
  }
}

export async function getAllMeals(req, res) {
  try {
    const allProducts = await Meal.find({});
    return res.status(200).json({
      error: false,
      data: allProducts,
      message: "",
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      data: null,
      message: "Erro ao buscar produtos",
      errorMessage: e.message,
    });
  }
}
