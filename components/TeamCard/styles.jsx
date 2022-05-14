import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 12px;

  h3 {
    font-size: 20px;
  }

  span {
    font-size: 16px;
    opacity: 0.5;
  }

  @media(max-width: 1130px) {
    flex-direction: column;
  }
`;

export const Paragraph = styled.div`
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 1rem;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Years = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    background: #E6E6E6;
    opacity: 0.4;
    top: -15px;
    right: 0;
    left: 0;
    height: 1px;
    width: 100%;
  }
`;
