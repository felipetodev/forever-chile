import styled from "styled-components"

export const FullHeroStyled = styled.div`
  display: flex;
  position: relative;
  max-height: 70vh;

  // Tablet view
  @media(max-width: 1070px) {
    min-height: 55vh;
  }

  // Mobile view
  @media(max-width: 400px) {
    min-height: 400px;
  }
`

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

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

    // Tablet view
  @media(max-width: 1070px) {
    grid-template-columns: 1fr;
    margin-left: 0px;
    right: 0;
  }
`

export const LogoStyled = styled.div`
  padding-left: 40px;
  background: none;

  // Mobile view
  @media(max-width: 400px) {
    padding-left: 100px;
  }
`

export const IntroStyled = styled.div`
  position: relative;
  color: transparent;
  min-width: 570px;
  background: none;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    background: transparent url('/line.png') 0% 0% repeat padding-box;
    left: -30px;
    top: -800px;
    height: 1200px;
    width: 1px;
  }

  div {
    background: none !important;
    writing-mode: vertical-rl;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    white-space: nowrap;
    margin-bottom: 20px;
    cursor: pointer;

    h2 {
      position: relative;
      transition: transform 150ms ease;
      margin-right: -4px;
    }

    span {
      transition: visibility 60ms ease-out;
    }

    & > * {
      background: none;
    }
    &:hover {
      h2::after {
        content:'SEE PROJECT';
        top: 0;
        right: 40px;
        font-size: 12px;
        position: absolute;
      }
      h2 {
        transform: scale(1.3) translateY(39.5px);
      }
      span {
        visibility: hidden;
      }
    }
  }

  // Tablet view
  @media(max-width: 1070px) {
    min-width: 100%;
    div {
      margin-right: 20px;
      h2 {
        font-size: 16px;
      }
      span {
        font-size: 12px;
      }
    }
    &::before {
      display: none;
    }
  }

  // Mobile view
  @media(max-width: 400px) {
    pointer-events: none;
    div {
      // margin-right: 20px;
      margin-bottom: 20px;
      h2 {
        font-size: 12px;
      }
      span {
        font-size: 10px;
      }
    }
  }
`