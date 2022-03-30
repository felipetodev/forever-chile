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

  h2 {
    width: 100%;
    min-width: 400px;
    font-size: 30px;
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
    font-size: 18px;
    min-width: 490px;
    color: #e6e6e6;
    margin: 0;
    grid-area: parragraph;
  }

  @media (max-width: 1333px) {
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
`;
