import styled from "styled-components";

export const MaxContainer = styled.div`
  max-width: min(2000px, 100%);
  margin: 0 auto;
  &.is-home-container {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: min(1400px, 90%);
  padding-left: 180px;
  margin: 0 auto;

  .div1 {
    width: 100%;
  }
  .div2 {
    width: 100%;
  }
  .div3 {
    min-width: 270px;
    @media (max-width: 1194px) {
      min-width: 210px;
    }
    @media (max-width: 1070px) {
      min-width: 150px;
    }
    @media (max-width: 830px) {
      min-width: 124px;
    }
  }

  .img-container {
    &:first-child {
      margin-right: 50px;
    }
  }

  img {
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1070px) {
    padding-left: 0%;
    margin-left: 80px;
  }

  @media (max-width: 675px) {
    flex-direction: ${({ isFounders }) => (isFounders ? "column" : "")};
    margin-left: 50px;

    .div1 {
      width: ${({ isFounders }) => (isFounders ? "90%" : "")};
      margin-bottom: ${({ isFounders }) => (isFounders ? "80px" : "")};
    }
  }

  @media (max-width: 400px) {
    margin-left: 0;
    margin: 0 auto;
    width: min(800px, 84%);
    .div1 {
      width: 100%;
    }
    .img-container {
      &:first-child {
        margin-right: 0;
      }
    }
  }
`;
