import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled(motion.div)`
  position: relative;
  display: flex;
  transition: all 300ms ease;
  h1 {
    margin-top: 200px;
    margin-left: 10%;
    background: none;
  }
  &:hover {
    .triangle {
      top: -10%;
      left: 16%;
      transform: rotate(-5deg);
    }
    .square {
      top: 100px;
      left: 52%;
      transform: rotate(35deg);
    }
    .circle {
      bottom: -40px;
      left: 80px;
      transform: rotate(35deg);
    }
  }
  @media (max-width: 1300px) {
    h1 {
      margin-top: 190px;
      font-size: 30px;
    }
    &:hover {
      .triangle {
        top: -1%;
        left: 16%;
        transform: rotate(-5deg);
      }
      .square {
        top: 160px;
        left: 55%;
      }
      .circle {
        bottom: 40px;
        left: 60px;
        transform: rotate(35deg);
      }
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 25px;
    }
    &:hover {
      .circle {
        bottom: 20px;
        left: 60px;
        transform: rotate(35deg);
      }
      .square {
        left: 60%;
      }
    }
  }
  @media (max-width: 950px) {
    min-height: 600px;
    margin-left: 15%;
    h1 {
      margin-right: 80px;
    }
    &:hover {
      .square {
        top: 150px;
        left: 260px;
      }
      .circle {
        bottom: 100px;
        left: 30px;
        transform: rotate(35deg);
      }
    }
  }
  @media (max-width: 600px) {
    margin-left: 10%;
    h1 {
      font-size: 20px;
    }
    &:hover {
      .triangle {
        top: 1%;
        left: 10%;
      }
      .square {
        top: 150px;
        left: 200px;
      }
      .circle {
        bottom: 140px;
        left: 30px;
        transform: rotate(30deg);
      }
    }
  }
  @media (max-width: 500px) {
    margin-left: 0px;
  }
`;

export const Triangle = styled(motion.div)`
  transition: all 200ms ease;
  overflow: hidden;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 70px;
  left: 40px;
  background: none;
  z-index: 1;
  @media (max-width: 1300px) {
    width: 150px;
    height: 150px;
    top: 100px;
  }
  @media (max-width: 1000px) {
    left: 30px;
  }
  @media (max-width: 600px) {
    left: 18px;
  }
`;

export const Square = styled(motion.div)`
  transition: all 200ms ease;
  overflow: hidden;
  width: 400px;
  height: 400px;
  position: absolute;
  top: -10px;
  left: 150px;
  background: none;
  @media (max-width: 1300px) {
    width: 300px;
    height: 300px;
    top: 40px;
    left: 120px;
  }
  @media (max-width: 1000px) {
    left: 135px;
  }
  @media (max-width: 600px) {
    width: 230px;
    height: 230px;
    left: 100px;
    top: 80px;
  }
`;

export const Circle = styled(motion.div)`
  transition: all 200ms ease;
  overflow: hidden;
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: -80px;
  left: 30px;
  background: none;
  @media (max-width: 1300px) {
    width: 250px;
    height: 250px;
    bottom: -10px;
    left: 10px;
  }
  @media (max-width: 950px) {
    bottom: 50px;
  }
  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
    left: 35px;
    bottom: 120px;
  }
`;
