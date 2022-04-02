import styled from "styled-components";

export const FooterStyled = styled.div`
  display: flex;
  font-size: 13px;
  position: relative;
  align-items: center;
  min-height: 230px;
  margin-left: 40px;
  overflow: hidden;
  z-index: 4;
  // Tablet view
  @media (max-width: 1070px) {
    min-height: 160px;
    margin-right: 80px;
    margin-left: 80px;
    padding-bottom: 20px;
  }

  @media (max-width: 675px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  // Mobile view
  @media (max-width: 400px) {
    min-height: auto;
    text-align: start;
    font-size: 13px;
    margin-right: 35px;
    margin-left: 35px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;

  .footer-logo {
    width: 240px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding-left: 50px;
    padding-top: 100px;

    img {
      display: block;
      object-fit: cover;
    }

    &::before {
      content: "";
      position: absolute;
      background: transparent url("/line.png") 0% 0% repeat padding-box;
      top: 0;
      left: -30px;
      height: 100%;
      width: 1px;
      visibility: ${({ open }) => (open ? "hidden" : "visible")};
    }
  }

  // Tablet Landscape view
  @media (max-width: 1194px) {
    .footer-logo {
      width: 180px;
      padding-left: 25px;
    }
  }

  @media (max-width: 1070px) {
    grid-template-columns: 1fr 1.5fr;
    padding-left: 20px;
    gap: 20px;
    font-size: 12px;

    &::before {
      content: "";
      position: absolute;
      background: transparent url("/line.png") 0% 0% repeat padding-box;
      top: 0;
      left: 0;
      height: 100%;
      width: 1px;
    }

    .footer-logo {
      display: none;
    }
  }

  // Mobile view
  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    position: relative;
    z-index: 4;

    .footer-logo {
      display: none;
    }

    &::before {
      top: 0;
    }
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  max-width: 400px;
  gap: 4px;
  margin-right: 25px;

  @media (max-width: 1070px) {
    padding-left: 0px;
  }
`;

export const IntroStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 570px;

  &::before {
    content: "";
    position: absolute;
    background: transparent url("/line.png") 0% 0% repeat padding-box;
    top: -40px;
    left: -30px;
    height: 1000px;
    width: 1px;
  }

  // Tablet view
  @media (max-width: 1070px) {
    min-width: auto;
    margin-right: 100px;
    &::before {
      display: none;
    }
  }
`;

export const FooterMobileStyled = styled.div`
  display: none;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  z-index: 4;

  @media (max-width: 400px) {
    display: flex;
  }
`;
