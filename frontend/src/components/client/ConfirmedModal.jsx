import { Dialog, Portal, Button, CloseButton } from "@chakra-ui/react";

const ConfirmedModal = ({ confirmedModalData, open, onOpenChange }) => {
  return (
    <Dialog.Root size={{ mdDown: "md" }} open={open} onOpenChange={onOpenChange} placement={"bottom"}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{confirmedModalData.title}</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <p>{confirmedModalData.msgToUser}</p>
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Fechar</Button>
              </Dialog.ActionTrigger>
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

export default ConfirmedModal;
