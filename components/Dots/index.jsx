import styled from "styled-components";

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
    @media (max-width: 400px) {
      z-index: 4;
      ._2 {
        &::after {
          right: 90px;
        }
      }
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
    <Container className={isDot} {...props}>
      <div className="_1" />
      <div className="_2" />
      <div className="_3" />
    </Container>
  );
};

export default Dots;
