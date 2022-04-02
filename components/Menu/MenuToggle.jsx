import styled from "styled-components";

const HamburgerMenu = styled.div`
  border: 1px solid red;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
  position: relative;
  z-index: 9999;

  &.wrapper-menu.open {
    transform: rotate(-45deg);  
  }

  &.line-menu {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 6px;
  }

  &.line-menu.half {
    width: 50%;
  }

  &.line-menu.start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }

  &.open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
  }

  &.line-menu.end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }

  &.open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
  }
`;

export const MenuToggle = () => (
  <HamburgerMenu className="wrapper-menu">
    <div className="line-menu half start"></div>
    <div className="line-menu"></div>
    <div className="line-menu half end"></div>
  </HamburgerMenu>
);
