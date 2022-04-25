import Layout from "../Layout";
import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  position: relative;
  // margin-top: 200px;
  // padding-bottom: 200px;
  z-index: 4;
`;

export const LayoutStyled = styled(Layout)`
  h2 {
    font-size: 50px;
    font-weight: bold;
    margin-top: 200px;
  }
  @media (max-width: 740px) {
    .div3 {
      display: none;
    }
  }
  @media (max-width: 675px) {
    h2 {
      margin-top: 0px;
    }
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 30px;
    }
  }
`;

export const Col = styled.div`
  display: flex;
  width: 100%;
  font-size: clamp(20px, 3.5vw, 3rem);
  @media (max-width: 400px) {
    justify-content: center;
  }
`;

export const NavigationList = styled.ul`
  background: none;

  & li {
    display: block;
    user-select: none;
    margin: 30px 0;
    & span {
      background: none;
      position: relative;
      z-index: 4;
      display: block;

      &:hover:before {
        width: 100%;
      }
    }
  }

  li:hover span {
    color: transparent;
  }

  li:hover .image-container {
    visibility: visible;
    opacity: 1;
  }

  .image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -75px;
    left: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: all 0.7s ease-in-out;
    img {
      background: none;
    }
  }

  @media (max-width: 740px) {
    justify-content: center;
    padding: 0;
    li {
      span {
        &::before {
          display: none;
        }
      }
    }
    .image-container {
      display: none;
    }
  }
`;
