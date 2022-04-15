import CloseModalIcon from "./SVGModal";
import {
  ArtDirection,
  CloseModal,
  Container,
  Description,
  IframeContainer,
  Left,
  ModalDescription,
  ModalStyled,
  Title,
} from "./styles";

const Modal = ({ modalIsOpen, setIsOpen, infoModal }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <ModalStyled
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      closeTimeoutMS={200}
      shouldCloseOnEsc
    >
      <Container>
        <IframeContainer>
          <div dangerouslySetInnerHTML={{ __html: infoModal?.vimeoEmbedUrl }} />
        </IframeContainer>
        <ModalDescription>
          <Left>
            <Title>
              <h3>{infoModal?.title}</h3>
              <span>{infoModal?.client}</span>
            </Title>
            <ArtDirection>{infoModal?.discipline}</ArtDirection>
          </Left>
          <Description>{infoModal?.description}</Description>
        </ModalDescription>
        <CloseModal onClick={closeModal}>
          <CloseModalIcon />
        </CloseModal>
      </Container>
    </ModalStyled>
  );
};

export default Modal;
