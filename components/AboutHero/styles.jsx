import styled from "styled-components";
import Layout from "../Layout";

export const BannerContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;

  img {
    object-fit: cover;
    background: none !important;
  }
`;

export const OverlapText = styled.div`
  position: relative;
  background: none;
  width: 40%;
  height: 100%;

  span {
    left: 40% !important;
    bottom: -350px !important;
  }
  img {
    object-fit: contain;
  }
  @media (max-width: 834px) {
    width: 45%;
    span {
      left: 25% !important;
      bottom: -380px !important;
    }
  }

  @media (max-width: 740px) {
    width: 100%;

    span {
      max-width: 300.6px;
      max-height: 435.52px;
      min-width: 200.6px;
      min-height: 335.52px;

      top: 100% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
    }
  }
`;

export const RightImage = styled.div`
  position: absolute;
  right: 6%;
  bottom: -90px;
  background: transparent;
  height: 270px;
  width: 270px;

  img {
    object-fit: contain;
  }
  @media (max-width: 740px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: none;
  margin-top: 40px;
  p {
    max-width: 400px;
    background: none;
  }

  @media (max-width: 1090px) {
    margin-top: 100px;
  }
  @media (max-width: 834px) {
    justify-content: center;
    margin-top: 150px;
    margin-left: 10%;
  }
  @media (max-width: 740px) {
    margin-top: 200px;
    margin-left: 0;
  }
`;

export const LayoutStyled = styled(Layout)`
  background: none;
  @media (max-width: 834px) {
    .div3 {
      display: none;
    }
  }
`;