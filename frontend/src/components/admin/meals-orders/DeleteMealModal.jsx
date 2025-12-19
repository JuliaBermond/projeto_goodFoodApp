import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Text,
} from "@chakra-ui/react";
import useMealsStore from "@/stores/mealsStore_";

const DeleteMealModal = ({ open, setOpen, mealId }) => {
  const deleteMeal = useMealsStore((state) => state.deleteMeal);

  function handleDelete() {
    deleteMeal(mealId);
    setOpen(false);
  }

  return (
    <Dialog.Root
      role="alertdialog"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content colorPalette="red">
            <Dialog.Header>
              <Dialog.Title>Excluir refeição</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <Text>
                Tem certeza que deseja excluir esta refeição?
                <br />
                <strong>Essa ação não pode ser desfeita.</strong>
              </Text>
            </Dialog.Body>

            <Dialog.Footer>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>

              <Button colorPalette="red" onClick={handleDelete}>
                Excluir
              </Button>
            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default DeleteMealModal;
