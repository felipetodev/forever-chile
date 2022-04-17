import styled, { createGlobalStyle } from "styled-components";

export const FoundersContainer = styled.div`
  margin-top: 170px;
  @media(max-width: 400px) {
    margin-top: 100px;
  }
`;

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Pragmatica', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    background: #1A1A1A;
    color: #E6E6E6;
  }

  .app {
    max-width: min(2000px, 100%);
    margin: 0 auto;
    overflow-y: hidden;
    position: relative;
    z-index: 1;
  }

  .app .works-spacing {
    margin-left: 4%;
  }

  h3 {
    margin: 0;
  }

  span, img {
    background: transparent;
  }

  .ReactModal__Content {
    background: none;
  }

  .ReactModal__Body--open {
    inset: 0;
    overflow: visible;
    // position: relative;
    width: 100%;
    height: 100%;
  }

  .ReactModal__Overlay {
    z-index: 1000;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    background: inherit !important;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
    overflow-y: scroll;
    backdrop-filter: saturate(50%) blur(20px) !important;
    background: rgba(0, 0, 0, 0.5) !important;
    @media (max-width: 834px) {
      background: inherit !important;
    }
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .container {
    width: min(800px, 90%);
    margin: 0 auto;
  }

  @media (max-width: 1070px) {
    .container {
      margin-left: 80px;
      width: auto;
      max-width: 800px;
    }
  }

  @media (max-width: 675px) {
    .container {
      margin-left: 50px;
    }
  }

  @media (max-width: 400px) {
    .container {
      width: min(800px, 84%);
      margin: 0 auto;
    }
  }

  .swiper-pagination {
    background: none;
    text-align: start !important;
    margin-left: 80px;
    z-index: 2;
    bottom: 2vw !important;
  }

  .swiper-pagination-bullet {
    background: none;
    padding: 4px;
    border: 1px solid #E6E6E6;
  }

  .swiper-pagination-bullet-active {
    outline: none;
    border: 1px solid transparent !important;
    background: #E6E6E6 !important;
  }

  .mobile-description {
    display: none;
    font-size: 28px;
    padding-top: 70px;
    padding-bottom: 70px;
    margin-left: 35px;
    margin-right: 35px;
  }

  @media(max-width: 1070px) {
    .swiper-pagination {
      margin-left: 80px;
    }
  }

  @media(max-width: 675px) {
    .swiper-pagination {
      margin-left: 45px;
    }
  }

  @media(max-width: 400px) {
    .mobile-description {
      display: inline-block;
    }
    .swiper-pagination {
      margin-left: 30px;
      margin-bottom: 1vh;
    }
  }
`;
