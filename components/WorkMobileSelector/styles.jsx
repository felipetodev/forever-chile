import styled from "styled-components";
import Layout from "../Layout";

export const MobileLayout = styled(Layout)`
  display: none;
  padding-top: 50px;
  @media (max-width: 1070px) {
    display: flex;
    z-index: 5;
  }
`

export const WorkSelect = styled.div`
  padding: 10px 0px;
  width: 100%;
  position: relative;
  user-select: none;
  z-index: 5;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    background-color: #525252;
    height: 1px;
    width: 100%;
  }

  div {
    text-transform: capitalize;
    cursor: pointer;
  }
  span {
    cursor: pointer;
    pointer-events: all;
    margin: 10px 0px;
    position: relative;
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      background-color: #525252;
      height: 1px;
      width: 100%;
    }
  }
`;

export const Options = styled.div`
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 4;
  width: 100%;
  pointer-events: none;
`;
