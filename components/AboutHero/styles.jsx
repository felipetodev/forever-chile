import styled from "styled-components";

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
`;

export const RightImage = styled.div`
  border: 1px solid red;
  position: absolute;
  right: 6%;
  bottom: -50px;
  background: transparent;

  img {
    object-fit: contain;
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
`;
