import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BurgerStyled,
  HamburgerContainer,
  HamburgerMenu,
  MenuStyled,
  NavContainer,
} from "./styles";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";

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

const Menu = ({ isAbout, hasDot, isHome, isContact }) => {
  const drawerRef = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const onClickOutside = () => setOpen(false);
  const onClickBurgerMenu = () => setOpen(!open);
  useOutsideClickHandler({
    ref: drawerRef,
    onClick: onClickOutside,
    includeEl: false,
  });
  useOutsideClickHandler({ ref: menuRef, onClick: onClickBurgerMenu });

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <BurgerStyled
        className={hasDot ? "menu-dot" : null}
        open={open}
        isAbout={isAbout}
        isHome={isHome}
        isContact={isContact}
      />
      <NavContainer open={open} isAbout={isAbout} isHome={isHome}>
        <HamburgerContainer ref={menuRef}>
          <HamburgerMenu className={open ? "open" : "closed"}>
            <motion.div className="line-menu start" />
            <div className="line-menu end"></div>
          </HamburgerMenu>
        </HamburgerContainer>
      </NavContainer>
      <MenuStyled open={open} ref={drawerRef}>
        <motion.ul>
          <li>
            <Link href="/">
              <a onClick={handleCloseMenu}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a onClick={handleCloseMenu}>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onClick={handleCloseMenu}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={handleCloseMenu}>Contact</a>
            </Link>
          </li>
          <li>
            <a
              onClick={handleCloseMenu}
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
              className="instagram"
            >
              <InstagramIcon />
            </a>
          </li>
        </motion.ul>
      </MenuStyled>
    </>
  );
};

export default Menu;
