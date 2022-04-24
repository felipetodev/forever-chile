import styled from "styled-components";

export const AboutTitle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 2;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "h2 empty1"
    "empty2 parragraph";
  margin-right: 150px;
  z-index: 4;
  position: relative;
  padding-top: 30px;

  h2 {
    width: 100%;
    min-width: 400px;
    font-size: 38px;
    grid-area: h2;
    margin: 0;
  }
  & .empty1 {
    grid-area: empty1;
    display: none;
  }
  & .empty2 {
    display: none;
    grid-area: empty2;
  }
  p {
    font-size: 20px;
    min-width: 400px;
    color: #e6e6e6;
    margin: 0;
    grid-area: parragraph;
  }

  @media (max-width: 1194px) {
    display: flex;
    flex-direction: column;
    h2 {
      margin-bottom: 40px;
      font-size: 50px;
    }
    p {
      margin-left: 30%;
    }
  }

  @media (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    p {
      min-width: 100%;
      margin-left: 0;
    }
  }
  @media (max-width: 830px) {
    width: 95%;
  }
  @media (max-width: 400px) {
    font-size: 30px;
    min-width: 100%;
    h2 {
      min-width: 100%;
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;
