import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  min-height: ${({ isWork }) => (isWork ? "25vh" : "30vh")};
  margin-left: 40px;

  // Tablet view
  @media (max-width: 1070px) {
    position: relative;
    min-height: ${({ isAbout }) => (isAbout ? "20vh" : "380px")};
    margin-left: 80px;
  }

  @media (max-width: 675px) {
    margin-left: 50px;
  }

  // Mobile view
  @media (max-width: 400px) {
    min-height: 120px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;

  // Tablet view
  @media (max-width: 1070px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LogoStyled = styled.div`
  background: none !important;
  padding-left: 40px;
  z-index: 99;
  position: relative;

  a {
    position: fixed;
    top: 70px;
    background: none !important;
  }

  // Tablet view
  @media (max-width: 1070px) {
    padding: 0px;
    position: fixed;
    top: 30px;
    left: 80px;

    img {
      background: none;
      width: 106px !important;
      height: 56.33px !important;
    }
  }

  @media (max-width: 830px) {
    left: 80px;
    a {
      top: 55px;
    }
  }

  @media (max-width: 675px) {
    left: 50px;
  }

  // Mobile view
  @media (max-width: 400px) {
    a {
      top: 35px;
    }
    left: 9%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;

  // Tablet view
  @media (max-width: 1070px) {
    position: absolute;
    top: 40px;
    right: 20px;
  }

  @media (max-width: 830px) {
    ${({ isAbout }) =>
      isAbout
        ? `
          top: 0;
          right: 0;
        `
        : ""};
  }
`;

export const IntroStyled = styled.div`
  position: relative;
  min-width: 570px;
  font-size: 30px;
  padding-right: 2%;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    background: transparent url("/line.png") 0% 0% no-repeat padding-box;
    left: -30px;
    top: -150px;
    height: 500px;
    width: 1px;
  }

  &::after {
    content: "";
    position: absolute;
    left: -49px;
    bottom: -30px;
    height: 8px;
    width: 8px;
    border-radius: 9999px;
    border: 1px solid #707070;
  }

  &.remove-dot {
    &&::after {
      display: none;
    }
  }

  ${({ isWork }) =>
    isWork
      ? `
    &::before {
      display: none !important;
    }
  `
      : ""}

  // Tablet Landscape view
  @media (max-width: 1194px) {
    padding-right: 120px;
  }

  // Tablet view
  @media (max-width: 1070px) {
    max-width: 700px;
    margin-top: 100px;
    line-height: 40px;
    margin-right: 20px;

    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
  }

  @media (max-width: 834px) {
    min-width: auto;
    width: 100%;
    margin-right: 100px;
  }
  @media (max-width: 760px) {
    width: 97%;
  }

  @media (max-width: 830px) {
    margin-top: 130px;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;
