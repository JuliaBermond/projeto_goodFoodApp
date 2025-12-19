import Form from "@/components/shared/Form";
import { createAMealFormFields } from "@/data/siteData";
import useMealsStore from "@/stores/mealsStore_";
import { Box } from "@chakra-ui/react";

const CreateMeal = () => {
  const createMeal = useMealsStore((state) => state.createMeal);
  const createMealMessage = useMealsStore((state) => state.createMealMessage)

  function handleForm(formData) {
    createMeal({
      name: formData.nome,
      price: Number(formData.valor),
      description: formData.resumo,
      image: formData.imagem,
    });
  }

  return (
    <Box color={"gray.900"}>
      <Form formFields={createAMealFormFields} onClickFunc={handleForm}></Form>
      {createMealMessage && <Box>{createMealMessage}</Box>}
    </Box>
  );
};

export default CreateMeal;
