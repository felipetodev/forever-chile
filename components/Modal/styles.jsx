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
  width: min(1200px, 85%);
  height: auto;
  margin: 0 auto;
  background: none;

  @media (min-width: 2000px) {
    width: 100%;
  }
  @media (max-width: 1194px) {
    width: min(1200px, 80%);
  }
  @media (max-width: 834px) {
    width: 100%;
    overflow-y: scroll;
  }
`;

export const IframeContainer = styled.div`
  height: fit-content;
  width: 100%;
  div {
    z-index: 5;
  }
  @media (max-width: 834px) {
    margin-top: 70px;
  }
`;

export const ModalDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 30px;
  background: none;
  gap: 50px;

  @media (min-width: 2000px) {
    width: 100%;
    max-width: min(2000px, 100%);
    margin: 0 auto;
    margin-top: 80px;
  }

  @media (max-width: 1194px) {
    width: min(1200px, 90%);
    margin: 0 auto;
    margin-top: 30px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-width: 45%;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #525252;
  background: none;

  @media (max-width: 1194px) {
    border-bottom: none;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Title = styled.div`
  background: none;
  h3 {
    background: none;
  }
  span {
    background: none;
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
  background: none;
  @media (max-width: 1194px) {
    padding-top: 10px;
    border-top: 1px solid #525252;
    width: 100%;
  }
`;

export const Description = styled.div`
  background: transparent;
  height: 100%;
  margin-bottom: 50px;
`;

export const CloseModal = styled.div`
  position: absolute;
  top: 2%;
  left: 4%;
  cursor: pointer;
  background-color: transparent;
  svg {
    background: transparent;
    transition: transform 0.2s ease-in-out;
  }
  svg:hover {
    transform: scale(1.04);
  }
  @media (max-width: 1194px) {
    top: 1%;
    svg {
      width: 24px;
    }
  }

  @media (max-width: 834px) {
    top: 15px;
  }
`;
