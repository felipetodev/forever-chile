import { useEffect } from "react";
import CloseModalIcon from "./SVGModal"
import {
  ArtDirection,
  CloseModal,
  Container,
  Description,
  ImageContainer,
  Left,
  ModalDescription,
  ModalStyled,
  Title,
} from "./styles";

const Modal = ({ modalIsOpen, setIsOpen }) => {
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
        <ImageContainer>
          <img src="modal.png" alt="modal" />
        </ImageContainer>
        <ModalDescription>
          <Left>
            <Title>
              <h3>Poesía sin fin</h3>
              <span>Alejandro Jodorowsky</span>
            </Title>
            <ArtDirection>Art Direction, SFX.</ArtDirection>
          </Left>
          <Description>
            Habitant morbi tristique senectus et. Ornare lectus sit amet est
            placerat. Quisque id diam vel quam. Neque convallis a cras semper
            auctor neque vitae tempus quam. A lacus vestibulum sed arcu non odio
            euismod lacinia at. Rutrum quisque non tellus orci ac auctor augue
            mauris augue. Justo nec ultrices dui sapien eget mi. Tortor posuere
            ac ut consequat semper viverra.
          </Description>
        </ModalDescription>
        <CloseModal onClick={closeModal}>
          <CloseModalIcon />
        </CloseModal>
      </Container>
    </ModalStyled>
  );
};

export default Modal;
