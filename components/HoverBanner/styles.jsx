import styled from "styled-components";
import { motion } from "framer-motion";

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

export const First = styled(motion.div)`
  display: flex;
  position: relative;
  &::after {
    transition: all 300ms ease;
    content: "";
    position: absolute;
    visibility: hidden;
    top: 50%;
    right: 0;
    bottom: 0;
    height: 8px;
    width: 1px;
    background-color: #052cab;
  }
  @media(max-width: 875px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Second = styled(motion.div)`
  display: flex;
  position: relative;
  &::after {
    transition: all 300ms ease;
    content: "";
    position: absolute;
    visibility: hidden;
    top: 50%;
    left: 0;
    bottom: 0;
    height: 8px;
    width: 1px;
    background-color: #052cab;
  }
  @media(max-width: 875px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HoverWrapper = styled(motion.div)`
  &:hover div {
    &.hover-one {
      margin-right: 200px;
      &::after {
        width: 200px;
        right: -210px;
        visibility: visible;
      }
    }
    &.hover-two {
      margin-left: 300px;
      &::after {
        width: 285px;
        left: -295px;
        visibility: visible;
      }
    }
  }

  @media(max-width: 875px) {
    &:hover div {
      &.hover-one {
        &::after {
          right: -190px;
          width: 205px;
        }
      }
      &.hover-two {
        &::after {
          left: -271px;
          width: 251px;
        }
      }
    } 
  }

  @media(max-width: 565px) {
    &:hover div {
      &.hover-one {
        margin-right: 150px;
        text-align: start;
        &::after {
          right: -150px;
          width: 150px;
        }
      }
      &.hover-two {
        margin-left: 150px;
        text-align: end;
        &::after {
          left: -150px;
          width: 170px;
        }
      }
    }
  }
`;
