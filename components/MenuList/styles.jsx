import Layout from "../Layout";
import styled from "styled-components";

export const Container = styled(Layout)`
  width: auto;
  padding-left: 180px;
  margin-left: 4%;
  @media (max-width: 1250px) {
    position: relative;
    z-index: 5;
    padding-right: 6.2222% !important;
  }
  @media (max-width: 1070px) {
    padding-left: 80px;
    margin-left: 0px;
  }
  @media (max-width: 675px) {
    padding-left: 50px;
  }
  @media (max-width: 400px) {
    padding-left: 0px;
    width: min(800px,84%);
    margin: 0 auto;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px 10px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  padding-top: 130px;

  li {
    min-width: fit-content;
    font-size: 20px;
    cursor: pointer;
    list-style: none;
    position: relative;
    margin-right: 80px;
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
      -webkit-text-stroke: 1px;
      -webkit-text-stroke-color: inherit;
      &::after {
        background: #052cab;
        visibility: visible;
      }
    }
  }

  @media (max-width: 1450px) {
    gap: 30px 5px;
    li {
      font-size: 18px;
      margin-right: 6%;
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
