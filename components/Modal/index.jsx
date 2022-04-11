import { useEffect } from "react";
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
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      className="Modal"
    >
      <Container>
        <IframeContainer>
          <iframe
            // style={{ position: "absolute", top: 0, left: 0 }}
            src={infoModal.vimeoUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
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
