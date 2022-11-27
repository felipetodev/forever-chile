import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  margin: 0 auto;
  padding-left: 180px;

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

  @media (max-width: 1070px) {
    padding-left: 0px;
  }
`;

export const NewContainer = styled(Container)`
  min-height: 50vh;
  padding-top: 80px;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
  position: relative;
  margin-bottom: 40px;
  .work-description {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    h3 {
      font-size: 20px;
    }
    span {
      opacity: 0.5;
      font-size: 16px;
    }
  }
  span {
    position: unset !important;
    img {
      width: 100% !important;
      position: relative !important;
      height: 261px !important;
    }
    &:hover {
      filter: contrast(1.2) saturate(1.1);
    }
  }
  @media (max-width: 1920px) {
    span {
      img {
        height: 220px !important;
      }
    }
  }
  @media (max-width: 840px) {
    .work-description {
      flex-direction: column;
    }
    span {
      img {
        height: 186px !important;
      }
    }
  }
  @media (max-width: 400px) {
    span {
      img {
        height: 169px !important;
      }
    }
  }
`;

export const VideoContainer = styled(motion.div)`
  cursor: pointer;
  ${ContainerStyles};
`;

export const PdfContainer = styled(motion.a)`
  ${ContainerStyles};
`;
