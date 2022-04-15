import { useEffect, useRef } from "react";
import Image from "next/image";
import Layout from "../Layout";
import {
  Video,
  BannerContainer,
  OverlapText,
  RightImage,
  TextContainer,
  LayoutStyled,
  RightImageMobile,
  Spacing,
} from "./styles";

const trashImage = () => (
  <Image
    quality={100}
    loading="lazy"
    className="timeisnow"
    layout="fill"
    src="/trashis.svg"
    alt="Trash is a design error"
  />
);

export const TrashDesignMobile = () => (
  <RightImageMobile>{trashImage()}</RightImageMobile>
);

const AboutHero = ({ videoBanner = {}, description }) => {
  return (
    <div>
      <Layout>
        <h2>Why we do it</h2>
      </Layout>
      <BannerContainer>
        <Video
          id={videoBanner?.title}
          preload="true"
          autoPlay
          playsInline
          muted
          loop
        >
          <source
            src={videoBanner?.url}
            alt={videoBanner?.title}
            type="video/mp4"
          />
        </Video>
        <OverlapText>
          <Image
            loading="lazy"
            className="timeisnow"
            layout="fill"
            src="/thetimeisnow.svg"
            alt="Why we do it"
          />
        </OverlapText>
        <div style={{ position: "relative", zIndex: 4 }}>
          <RightImage>{trashImage()}</RightImage>
        </div>
      </BannerContainer>
      <LayoutStyled>
        <TextContainer>
          <p>{description}</p>
        </TextContainer>
        <div style={{ background: "none" }} className="div3" />
      </LayoutStyled>
      <Spacing />
    </div>
  );
};

export default AboutHero;
