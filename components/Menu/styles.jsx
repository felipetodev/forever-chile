import styled from "styled-components";
import { motion } from "framer-motion";

export const BurgerStyled = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: ${({ open }) => (open ? "" : "0")};
  position: ${({ open, isAbout }) => (open || isAbout ? "fixed" : "absolute")};
  z-index: ${({ open }) => (open ? 7 : 4)};
  background-color: transparent;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    background: transparent url("/line.png") 0% 0% repeat padding-box;
    left: -30px;
    top: 0;
    height: 100%;
    width: 1px;
    visibility: ${({ open }) => (open ? "hidden" : "visible")};
  }

  // Tablet Landscape view
  @media (max-width: 1194px) {
    width: 180px;
  }

  // Tablet view
  @media (max-width: 1070px) {
    width: 150px;
    position: fixed;
    right: 0;
    &::before {
      left: 0;
    }
  }

  @media (min-width: 830px) {
    ${({ isContact }) =>
      isContact
        ? `
      &::before {
        display: none;
      }  
    `
        : ""}
  }

  @media (max-width: 830px) {
    width: 124px;
    pointer-events: none;
    ${({ isAbout }) => (isAbout ? "height: 15vh;" : "")};
    ${({ isAbout }) => (isAbout ? "position: static;" : "")};
    &::before {
      ${({ isAbout }) => (isAbout ? "height: 15vh;" : "")};
    }
    &::after {
      ${({ isAbout, open }) =>
        isAbout
          ? `
            content: '';
            position: absolute;
            left: 11px;
            bottom: 0;
            height: 8px;
            width: 8px;
            border-radius: 9999px;
            border: 1px solid #707070;
            visibility: ${open ? "hidden" : "visible"};
          `
          : ""};
    }
  }

  // Mobile view
  @media (max-width: 400px) {
    width: 115px;
  }

  /* &.menu-dot {
    &::after {
      content: "";
      position: absolute;
      top: 150px;
      left: -17px;
      height: 8px;
      width: 8px;
      border-radius: 9999px;
      z-index: 4;
      border: 1px solid #707070;
      visibility: ${({ open }) => (open ? "hidden" : "visible")};
    }
    @media (max-width: 1070px) {
      &::after {
        left: 13px;
      }
    }
    @media (max-width: 1070px) {
      &::after {
        top: 119px;
      }
    }
    @media (max-width: 400px) {
      &::after {
        left: -20px;
      }
    }
  } */
`;

export const MenuStyled = styled.div`
  position: fixed;
  background-color: #1a1a1a;
  transition: transform 300ms ease;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  right: 0;
  top: 0;
  bottom: 0;
  width: 621px; // <---------------
  height: 100%;
  z-index: 6;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    list-style: none;
  }

  li {
    background: none;
    text-align: right;
    font-size: 45px;
    width: 300px;
    a {
      width: 100%;
      height: 100%;
      padding: 4px;
    }
    a:hover {
      color: #052cab;
    }
    &:not(:last-child) {
      margin-bottom: 40px;
    }

    &:last-child {
      margin-top: 40px;
    }
  }

  li:last-child {
    svg {
      &:hover {
        fill: #052cab;
      }
      outline: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    background: transparent url("/line.png") 0% 0% repeat padding-box;
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
  }

  // Tablet view
  @media (max-width: 1070px) {
    width: 400px;
    li {
      text-align: center;
      font-size: 35px;
      margin-right: 30px;
    }
  }

  // Mobile view
  @media (max-width: 400px) {
    width: 100%;
    &::before {
      display: none;
    }
  }
`;

export const HamburgerContainer = styled.div`
  padding: 10px;
  background: none;
  position: fixed;
  top: 60px;
  z-index: 9999;
  pointer-events: all;
  cursor: pointer;

  @media (max-width: 830px) {
    padding: 15px;
    top: 50px;
  }
  @media (max-width: 400px) {
    top: 42px;
    margin-left: 2%;
  }
`

export const HamburgerMenu = styled(motion.div)`
  background: none;
  width: 40px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 1s ease-in-out;

  .line-menu {
    transition: all 300ms ease;
    align-self: flex-end !important;
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 2px;
  }

  &.open {
    .start {
      align-self: flex-end !important;
      width: 150px !important;
    }
  }

  &.closed {
    .start {
      width: 40px;
    }
  }
`;

export const NavContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: ${({ open }) => (open ? "" : "0")};
  position: ${({ open, isAbout }) => (open || isAbout ? "fixed" : "absolute")};
  z-index: 10;
  background-color: transparent;
  pointer-events: none;

  @media (max-width: 1194px) {
    width: 180px;
  }

  // Tablet view
  @media (max-width: 1070px) {
    width: 150px;
    position: fixed;
    right: 0;
    top: -10px;
  }
  @media (max-width: 830px) {
    width: 120px;
    pointer-events: none;
  }
`;
