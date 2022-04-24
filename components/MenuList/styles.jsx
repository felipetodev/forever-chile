import Layout from "../Layout";
import styled from "styled-components";

export const Container = styled(Layout)`
  @media (max-width: 1250px) {
    position: relative;
    z-index: 5;
    padding-right: 6.2222% !important;
  }
`

export const Navigation = styled.ul`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0;
  margin-right: 240px;
  padding-top: 130px;
  li {
    font-size: 20px;
    cursor: pointer;
    list-style: none;
    position: relative;
    margin-right: 100px;
    text-align: center;
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

  @media (max-width: 1070px) {
    position: relative;
    z-index: 5;
    justify-content: space-between !important;
    margin: 0;
    li {
      margin: 0;
    }
  }
  @media (max-width: 834px) {
    margin-right: 150px;
    display: none;
  }
`;
