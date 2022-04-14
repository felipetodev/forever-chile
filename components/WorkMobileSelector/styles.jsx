import styled from "styled-components";
import { NewContainer } from "../ListOfWorks/styles"

export const MobileLayout = styled(NewContainer)`
  min-height: auto;
  z-index: 5;
  display: none;
  @media (max-width: 834px) {
    display: flex;
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
    outline: 1px solid #1A1A1A;
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
