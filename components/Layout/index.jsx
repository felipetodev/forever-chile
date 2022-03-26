import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  width: min(1400px, 90%);
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

  @media(max-width: 729px) {
    flex-direction: ${({ isFounders }) => isFounders ? "column" : ""};

    .div1 {
      width: ${({ isFounders }) => isFounders ? "90%" : ""};
      margin-bottom: ${({ isFounders }) => isFounders ? "80px" : ""};
    }
  }
`;

const Layout = ({ children, isFounders }) => {
  return <Container isFounders={isFounders}>{children}</Container>;
};

export default Layout;
