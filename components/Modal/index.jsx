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
import Link from "next/link";
import { useRouter } from "next/router";

const Modal = ({ modalIsOpen, setIsOpen, infoModal }) => {
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOnCloseRequest = () => {
    router.replace("/work", undefined, { shallow: true });
    setIsOpen(false);
  };

  return (
    <ModalStyled
      isOpen={modalIsOpen}
      onRequestClose={handleOnCloseRequest}
      closeTimeoutMS={200}
      onAfterOpen={() => {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = "fixed";
      }}
      onAfterClose={() => {
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }}
      // shouldFocusAfterRender={false}
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
        <Link href="/work" replace scroll={false}>
          <a>
            <CloseModal onClick={closeModal}>
              <CloseModalIcon />
            </CloseModal>
          </a>
        </Link>
      </Container>
    </ModalStyled>
  );
};

export default Modal;
