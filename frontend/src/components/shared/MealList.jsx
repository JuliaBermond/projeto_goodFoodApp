import { useState } from "react";
import { Button, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useOrderStore from "@/stores/cartStore_";
import useMealsStore from "@/stores/mealsStore_";
import DeleteMealModal from "../admin/meals-orders/DeleteMealModal";
import SearchItem from "./SearchItem";

const MealList = ({ isAdmin }) => {
  const addToCart = useOrderStore((state) => state.addToCart);
  const mealsList = useMealsStore((store) => store.mealsList);
  const deleteMeal = useMealsStore((store) => store.deleteMeal);

  const [searchItem, setSearchItem] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [mealIdToDelete, setMealIdToDelete] = useState(null);

  const renderList = searchItem
    ? mealsList.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    : mealsList;

  return (
    <>
      <SearchItem
        searchTerm={searchItem}
        setSearchTerm={setSearchItem}
        placeholder="Busque por um alimento"
      />
      <SimpleGrid
        columns={{ base: 1, md: 4, lg: 5 }}
        spacing={0.5}
        gap={3}
        m={4}
      >
        {renderList.map((item, index) => (
          <Card.Root key={item._id} maxW="sm" overflow="hidden">
            <Image src={item.image} alt={item.name} fit="contain" />

            <Card.Body gap="1" p={4}>
              <Card.Title>{item.name}</Card.Title>
              <Card.Description>{item.description}</Card.Description>

              <Text
                textStyle="xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="1"
              >
                R$ {item.price}
              </Text>
            </Card.Body>

            {!isAdmin && (
              <Card.Footer gap="2">
                <Button onClick={() => addToCart(item)} variant="solid">
                  Add to cart
                </Button>
              </Card.Footer>
            )}

            {isAdmin && (
              <Card.Footer gap="5">
                <Button
                  colorPalette="red"
                  onClick={() => {
                    setMealIdToDelete(item._id);
                    setShowDeleteModal(true);
                  }}
                >
                  Excluir
                </Button>
              </Card.Footer>
            )}
          </Card.Root>
        ))}

        <DeleteMealModal
          open={showDeleteModal}
          setOpen={setShowDeleteModal}
          mealId={mealIdToDelete}
        />
      </SimpleGrid>
    </>
  );
};

export default MealList;
