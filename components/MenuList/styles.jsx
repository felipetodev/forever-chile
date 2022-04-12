import styled from "styled-components";

export const Navigation = styled.ul`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0;
  margin-right: 240px;
  li {
    cursor: pointer;
    list-style: none;
    position: relative;
    margin-right: 100px;
    &::after {
      transition: background 300ms ease-in-out;
      content: "";
      position: absolute;
      z-index: 5;
      left: 0;
      right: 0;
      bottom: -20px;
      margin-left: auto;
      margin-right: auto;
      width: 8px;
      height: 8px;
      border-radius: 9999px;
      background: transparent;
      visibility: hidden;
    }
    &.active {
      &::after {
        background: #052cab;
        visibility: visible;
      }
    }
  }

  @media (max-width: 1194px) {
    margin-right: 200px;
  }
  @media (max-width: 1070px) {
    margin-right: 150px;
    display: none;
  }
`;
