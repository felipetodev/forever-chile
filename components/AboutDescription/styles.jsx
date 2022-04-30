import Layout from "../Layout";
import styled from "styled-components";

export const Container = styled(Layout)`
`

export const AboutTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .top-header {
    position: relative;
    margin-right: 30%;
    z-index: 4;
    h2 {
      font-size: 50px;
    }
    @media (max-width: 1070px) {
      margin-right: 0px;
    }
  }
  .sub-header {
    margin-left: 30%;
    margin-right: 25%;
    h3 {
      font-size: 20px;
      font-weight: normal;
    }
    @media (max-width: 1070px) {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
  @media (max-width: 1194px) {
    margin-right: 210px;
  }
  @media (max-width: 1070px) {
    margin-right: 150px;
  }
  @media (max-width: 830px) {
    margin-right: 124px;
  }
  @media (max-width: 675px) {
    margin-right: 50px;
  }
  @media (max-width: 400px) {
    margin: 0;
    .top-header {
      h2 {
        font-size: 30px;
      }
    }
    .sub-header {
      h3 {
        font-size: 16px;
      }
    }
  }
`;
