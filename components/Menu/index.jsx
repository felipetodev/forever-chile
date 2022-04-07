import { useState } from "react";
import styled from "styled-components";
import Link from "next/link"

const InstagramIcon = () => (
  <svg
    height={35}
    width={35}
    fill="#E6E6E6"
    focusable="false"
    viewBox="0 0 24 24"
    tabIndex="-1"
    title="Instagram"
  >
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
  </svg>
);

const BurgerStyled = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: ${({ open }) => (open ? "" : "0")};
  position: ${({ open, isAbout }) => (open || isAbout ? "fixed" : "absolute")};
  z-index: ${({ open }) => (open ? 7 : 4)};
  background-color: transparent;

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

  @media (max-width: 830px) {
    width: 124px;
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
            left: 4px;
            bottom: 0;
            height: 5px;
            width: 5px;
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
`;

const MenuStyled = styled.div`
  position: fixed;
  background-color: #1a1a1a;
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
    text-align: right;
    font-size: 45px;
    width: 300px;
    &:hover {
      color: red;
    }
    &:not(:last-child) {
      margin-bottom: 40px;
    }

    &:last-child {
      margin-top: 40px;
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
  }
`;

const HamburgerMenu = styled.div`
  position: absolute;
  background: none;
  top: 70px;
  width: 40px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: width 1s ease-in-out;

  .wrapper-menu .open {
    transform: rotate(-45deg);
    color: red;
    background-color: red;
  }

  .line-menu {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 2px;
  }

  &.open {
    .start {
      align-self: flex-end !important;
      width: 100px !important;
    }
  }

  @media (max-width: 830px) {
    position: fixed;
    top: 55px;
  }
`;

const NavContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: ${({ open }) => (open ? "" : "0")};
  position: ${({ open, isAbout }) => (open || isAbout ? "fixed" : "absolute")};
  z-index: ${({ open }) => (open ? 7 : 5)};
  background-color: transparent;

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
  }
`

/*
  function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }
*/

const Menu = ({ isAbout }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerStyled open={open} isAbout={isAbout} />
      <NavContainer open={open} isAbout={isAbout}>
        <HamburgerMenu
          onClick={() => setOpen(!open)}
          className={open ? "open" : ""}
        >
          <div className="line-menu start" />
          <div className="line-menu end"></div>
        </HamburgerMenu>
      </NavContainer>
      <MenuStyled open={open}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <a
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </MenuStyled>
    </>
  );
};

export default Menu;
