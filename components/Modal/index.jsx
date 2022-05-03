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
import { useRouter } from "next/router";

const Modal = ({ modalIsOpen, infoModal }) => {
  const router = useRouter();

  return (
    <ModalStyled
      isOpen={modalIsOpen}
      onRequestClose={() => router.push("/work", undefined, { shallow: true })}
      closeTimeoutMS={200}
      onAfterOpen={() => {
        document.querySelector("html").style.overflowY = "hidden";
      }}
      onAfterClose={() => {
        document.querySelector("html").style.overflowY = "";
      }}
      // shouldCloseOnOverlayClick
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
        <CloseModal onClick={() => router.push("/work", undefined, { shallow: true })}>
          <CloseModalIcon />
        </CloseModal>
      </Container>
    </ModalStyled>
  );
};

export default Modal;
