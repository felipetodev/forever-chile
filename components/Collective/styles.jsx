import { Swiper } from "swiper/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
  z-index: 4;
  justify-content: space-evenly;
  align-items: center;
  background-color: #052cab;
  width: 100%;
  height: 50vh;
  min-height: 400px;
  padding: 0 10%;

  div {
    background: none;
  }

  &.collective-slider {
    padding-right: 0px;
    padding-left: 10%;
  }

  @media (max-width: 996px) {
    text-align: center;
    flex-direction: column;
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 50px;
    &.collective-slider {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  @media (max-width: 740px) {
    margin-top: 180px;
    gap: 0px;
  }
`;

export const BannerTitle = styled.div`
  font-size: clamp(25px, 3vw, 50px);
  h2 {
    color: #1a1a1a;
    background: none;
  }
  @media (max-width: 996px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  span {
    position: unset !important;
    img {
      position: relative !important;
      height: 90px !important;
    }
  }
  @media (max-width: 996px) {
    &:not(:last-child) {
      margin-bottom: 80px;
    }
  }
  @media (max-width: 675px) {
    margin: 0 auto;
    span {
      position: unset !important;
      img {
        position: relative !important;
        height: 90px !important;
      }
    }
  }
`;

export const SwiperStyled = styled(Swiper)`
  &::before,
  &::after {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      to(rgba(5, 44, 171, 20%))
    );
    background: linear-gradient(to right, #052cab 0%, rgba(5, 44, 171, 0) 80%);
    content: "";
    height: 175px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  &::after {
    right: 0;
    top: 0;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .swiper-slide {
    max-width: 400px !important;
  }

  .swiper-wrapper {
    transition-timing-function: linear !important;
  }

  @media (max-width: 740px) {
    .swiper-slide {
      max-width: 350px !important;
    }
  }

  @media (max-width: 400px) {
    .swiper-slide {
      max-width: 300px !important;
    }
  }
`;
