import { useRouter } from "next/router";

const {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} = require("@chakra-ui/react");

const ErrorModal = ({ isOpen }) => {
  const router = useRouter();
  const { onClose } = useDisclosure();

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="12rem" rounded={false}>
          <ModalHeader>An Error Occurred</ModalHeader>
          <ModalBody pb={6}>{isOpen.message}</ModalBody>

          <ModalFooter>
            <Button
              bgColor="#082c54"
              mr={3}
              onClick={() => router.reload()}
              variant="unstyled"
              w="5rem"
              color="whiteAlpha.900"
            >
              Reload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ErrorModal;
