import styled from "styled-components";
import ReactModal from "react-modal";

ReactModal.setAppElement("#modal-root");

export const ModalStyled = styled(ReactModal)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: none;
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1200px, 90%);
  height: 100vh;
  margin: 0 auto;
  background: none;
  @media(min-width: 2000px) {
    width: 100%;
  }
  @media (max-width: 1194px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  min-height: 80vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1194px) {
    margin-top: 130px;
    min-height: 300px;
    max-height: 400px;
  }
`;

export const ModalDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 30px;
  height: 20vh;
  gap: 50px;

  @media(min-width: 2000px) {
    width: 100%;
    max-width: min(2000px, 100%);
    margin: 0 auto;
    margin-top: 50px;
  }

  @media (max-width: 1194px) {
    width: min(1200px, 90%);
    margin: 0 auto;
    margin-top: 30px;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-width: 45%;
  font-size: 14px;
  @media (max-width: 1194px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Title = styled.div`
  span {
    opacity: 0.5;
  }
  @media (max-width: 1194px) {
    margin-bottom: 10px;
    h3 {
      margin-bottom: 12px;
    }
  }
`;

export const ArtDirection = styled.div`
  opacity: 0.5;
  @media (max-width: 1194px) {
    padding-top: 10px;
    border-top: 1px solid #525252;
    width: 100%;
  }
`;

export const Description = styled.div``;

export const CloseModal = styled.div`
  position: absolute;
  top: 2%;
  left: 4%;
  padding: 4px 8px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  cursor: pointer;
`;
