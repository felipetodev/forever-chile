import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;

  div {
    font-size: 70px;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  @media(max-width: 875px) {
    div {
      font-size: 50px;
    }
  }
  @media(max-width: 565px) {
    div {
      font-size: 40px;
    }
  }
`;

export const First = styled.div`
  display: flex;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    visibility: hidden;
    top: 50%;
    right: -210px;
    bottom: 0;
    height: 8px;
    width: 200px;
    background-color: #052cab;
  }
  @media(max-width: 875px) {
    &::after {
      right: -198px;
      width: 215px;
    }
  }
  @media(max-width: 875px) {
    flex-direction: column;
    text-align: center;
    &::after {
      right: -190px;
      width: 205px;
    }
  }
  @media(max-width: 565px) {
    &::after {
      right: -150px;
      width: 150px;
    }
  }
`;
export const Second = styled.div`
  display: flex;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    visibility: hidden;
    top: 50%;
    left: -295px;
    bottom: 0;
    height: 8px;
    width: 285px;
    background-color: #052cab;
  }
  @media(max-width: 875px) {
    flex-direction: column;
    text-align: center;
    &::after {
      left: -271px;
      width: 251px;
    }
  }
  @media(max-width: 565px) {
    &::after {
      left: -150px;
      width: 170px;
    }
  }
`;

export const HoverWrapper = styled.div`
  &:hover div {
    &.hover-one {
      margin-right: 200px;
      &::after {
        visibility: visible;
      }
    }
    &.hover-two {
      margin-left: 300px;
      &::after {
        visibility: visible;
      }
    }
  }

  @media(max-width: 565px) {
    &:hover div {
      &.hover-one {
        margin-right: 150px;
        text-align: start;
      }
      &.hover-two {
        margin-left: 150px;
        text-align: end;
      }
    }
  }
`;
