import styled from "styled-components";

export const FullHeroStyled = styled.div`
  display: flex;
  position: relative;
  max-height: 70vh;

  // Tablet view
  @media (max-width: 1070px) {
    min-height: 55vh;
  }

  // Mobile view
  @media (max-width: 400px) {
    min-height: 400px;
  }
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  align-items: flex-end;
  margin-left: 40px;
  top: 0;
  bottom: 0;
  background: none;
  overflow: hidden;

  @media (min-width: 2000px) {
    width: 100%;
  }

  // Tablet view
  @media (max-width: 1070px) {
    grid-template-columns: 1fr;
    margin-left: 0px;
    right: 0;
  }
`;

export const LogoStyled = styled.div`
  padding-left: 40px;
  background: none;

  // Mobile view
  @media (max-width: 400px) {
    padding-left: 100px;
  }
`;

export const IntroStyled = styled.div`
  position: relative;
  color: transparent;
  min-width: 570px;
  background: none;
  z-index: 1;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    background: #E6E6E6;
    opacity: 0.4;
    left: -30px;
    top: -800px; // <-- increase 100vh
    height: 1200px;
    width: 1px;
  }

  a {
    background: none !important;
    writing-mode: vertical-rl;
    -webkit-transform: rotate(180deg);
    white-space: nowrap;
    margin-bottom: 2vw;
    cursor: pointer;
    pointer-events: all;

    h2 {
      position: relative;
      transition: all 150ms ease-in-out;
      margin-right: -4px;
    }

    span {
      transition: visibility 60ms ease-out;
    }

    & > * {
      background: none;
    }
    &:hover {
      h2 {
        margin-right: -10px;
        font-size: 35px;
      }
      h2::after {
        content: "SEE PROJECT";
        top: 0;
        right: 50px;
        font-size: 16px;
        position: absolute;
      }
      /* h2 {
        transform: scale(1.3) translateY(39.5px);
      } */
      span {
        visibility: hidden;
      }
    }
  }

  @media (min-width: 2000px) {
    &::before {
      content: none;
    }
  }

  // Tablet view
  @media (max-width: 1070px) {
    min-width: 100%;
    margin-right: 12px;
    a {
      height: 300px;
      &:hover {
        h2 {
          margin-right: -5px;
          font-size: 30px;
        }
        h2::after {
          font-size: 14px;
        }
      }
      h2 {
        font-size: 18px;
      }
      span {
        font-size: 14px;
      }
    }
    &::before {
      display: none;
    }
  }

  // Mobile view
  @media (max-width: 400px) {
    a {
      height: fit-content;
      // margin-right: 20px;
      margin-bottom: 20px;
      h2 {
        margin-right: 0;
        font-size: 12px;
      }
      span {
        font-size: 10px;
      }
      &:hover {
        h2 {
          margin-right: 0px;
          font-size: 13px;
          &::after {
            display: none;
          }
        }
        span {
          visibility: visible;
        }
      }
    }
  }
`;

export const AudioButton = styled.div`
  position: relative;
  z-index: 4;
  button {
    position: absolute;
    right: 2vw;
    bottom: 2vw;
    border: 0;
    box-sizing: border-box;
    margin: 0;
    z-index: 20;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
    min-width: 40px;
    height: 40px;
    font-size: 14px;
    line-height: 1em;
    color: inherit;
    background: transparent;
    border-radius: 2.5em;
    cursor: pointer;
    pointer-events: auto;
    width: 40px;
    padding: 0 0.7em;
    font-size: 18px;
    svg {
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      height: 1em;
      width: auto;
      max-width: 1em;
      display: block;
      fill: currentColor;
      pointer-events: none;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }
  @media (max-width: 1070px) {
    button {
      right: 20px;
      span {
        display: none;
      }
    }
  }
  @media (max-width: 400px) {
    position: absolute;
    button {
      bottom: 6px;
      left: 55px;
    }
  }
`;
