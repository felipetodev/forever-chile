import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  margin: 0 auto;

  ._1 {
    width: 100%;
  }
  ._2 {
    width: 100%;
    position: relative;
    min-height: 10px;
    &::before {
      content: "";
      position: absolute;
      right: -10px;
      top: 0;
      height: 5px;
      width: 5px;
      border-radius: 9999px;
      border: 1px solid #707070;
    }
  }
  ._3 {
    min-width: 270px;
    @media (max-width: 1194px) {
      min-width: 210px;
    }
    @media (max-width: 1070px) {
      min-width: 150px;
      // display: none;
    }
    @media (max-width: 830px) {
      min-width: 124px;
    }
  }
`;

export const NewContainer = styled(Container)`
  min-height: 50vh;
  padding-top: 80px;
  // border: 1px solid red;
  @media (max-width: 1070px) {
    margin-left: 80px;
    margin-right: 6.2222%;
    & .margin-left {
      display: none;
    }
    & ._3 {
      display: none;
    }
  }
  @media (max-width: 675px) {
    margin-left: 50px;
  }
  @media (max-width: 400px) {
    width: min(800px, 84%);
    margin: 0 auto;
  }
`;

export const Heading = styled.h1`
  max-width: 615px;
  font-size: 50px;
`;

export const Navigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  margin-right: 240px;
  li {
    list-style: none;
  }

  @media (max-width: 1194px) {
    margin-right: 200px;
  }
  @media (max-width: 1070px) {
    margin-right: 150px;
  }
  @media (max-width: 830px) {
    min-right: 100px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  margin-right: 2px;
  width: 100%;

  @media (max-width: 1194px) {
    grid-gap: 16px;
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerStyles = css`
  width: 100%;
  margin-bottom: 40px;
  .work-description {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    span {
      opacity: 0.5;
      font-size: 14px;
    }
  }
  span {
    position: unset !important;
    img {
      width: 100% !important;
      position: relative !important;
      height: 250px !important;
    }
    &:hover {
      filter: hue-rotate(220deg);
    }
  }
  @media (max-width: 840px) {
    .work-description {
      flex-direction: column;
    }
    span {
      max-height: 186px !important;
    }
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const VideoContainer = styled(motion.div)`
  cursor: pointer;
  ${ContainerStyles};
`;

export const PdfContainer = styled(motion.a)`
  ${ContainerStyles};
`;
