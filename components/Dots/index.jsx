import styled from "styled-components";
import { MaxContainer } from "../Layout/styles";

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;

  ._1 {
    width: 100%;
  }
  ._2 {
    width: 100%;
    position: relative;
    min-height: 10px;
    &::after {
      content: "";
      position: absolute;
      right: -23px;
      top: -9px;
      height: 8px;
      width: 8px;
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
      // min-width: 150px;
      display: none;
    }
    @media (max-width: 830px) {
      min-width: 124px;
    }
  }

  &.about-dot-top {
    ._2 {
      &::after {
        top: 0;
      }
    }
    ._3 {
      @media (max-width: 1070px) {
        display: flex;
        min-width: 150px;
      }
      @media (max-width: 830px) {
        display: none;
      }
    }
  }
  &.about-dot-bottom {
    ._2 {
      &::after {
        top: 0;
      }
    }
    ._3 {
      @media (max-width: 1070px) {
        display: flex;
        min-width: 150px;
      }
      @media (max-width: 830px) {
        display: none;
      }
    }
  }
  &.last-dot {
    z-index: 4;
    ._2 {
      &::after {
        top: -190px;
      }
    }
    @media (max-width: 1070px) {
      ._2 {
        &::after {
          right: 128px;
        }
      }
    }
    @media (max-width: 830px) {
      display: none;
    }
  }
  &.home-dot {
    /* Horrible Dot Patch */
    ._2 {
      &::before {
        content: "";
        position: absolute;
        left: -45px;
        top: -9px;
        height: 8px;
        width: 8px;
        border-radius: 9999px;
        border: 1px solid #707070;
      }
      @media (max-width: 1950px) {
        &::before {
          left: -55px;
        }
      }
      @media (max-width: 1850px) {
        &::before {
          left: -65px;
        }
      }
      @media (max-width: 1750px) {
        &::before {
          left: -75px;
        }
      }
      @media (max-width: 1650px) {
        &::before {
          left: -85px;
        }
      }
      @media (max-width: 1550px) {
        &::before {
          left: -95px;
        }
      }
      @media (max-width: 1450px) {
        &::before {
          left: -101px;
        }
      }
      @media (max-width: 1350px) {
        &::before {
          left: -110px;
        }
      }
      @media (max-width: 1250px) {
        &::before {
          left: -125px;
        }
      }
      @media (max-width: 1194px) {
        &::before {
          left: -155px;
        }
      }
      @media (max-width: 1180px) {
        &::before {
          left: -160px;
        }
      }
      @media (max-width: 1070px) {
        &::before {
          display: none;
        }
      }
      /* Horrible Patch */
    }

    @media (max-width: 400px) {
      z-index: 4;
      ._2 {
        &::after {
          top: -9.5px;
          right: 94px;
        }
      }
    }
  }
  @media (min-width: 2000px) {
    &.home-dot {
      display: none;
    }
  }
  @media (max-width: 400px) {
    &.about-dot-top {
      margin-top: 20px;
    }
  }
`;

const Dots = ({ isHome, dotTop, dotBottom, lastDot, ...props }) => {
  const isDot = dotTop
    ? "about-dot-top"
    : dotBottom
    ? "about-dot-bottom"
    : lastDot
    ? "last-dot"
    : isHome
    ? "home-dot"
    : null;
  return (
    <MaxContainer>
      <Container className={isDot} {...props}>
        <div className="_1" />
        <div className="_2" />
        <div className="_3" />
      </Container>
    </MaxContainer>
  );
};

export default Dots;
