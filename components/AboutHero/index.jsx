import Image from "next/image";
import Layout from "../Layout";
import {
  BannerContainer,
  OverlapText,
  RightImage,
  TextContainer,
  LayoutStyled,
  RightImageMobile,
} from "./styles";

const trashImage = () => (
  <Image
    quality={100}
    className="timeisnow"
    layout="fill"
    height={270}
    width={270}
    src="/trash.png"
    alt="Trash is a design error"
  />
);

export const TrashDesignMobile = () => (
  <RightImageMobile>{trashImage()}</RightImageMobile>
);

const AboutHero = ({ description }) => {
  return (
    <div>
      <Layout>
        <h2>Why we do it</h2>
      </Layout>
      <BannerContainer>
        <Image
          layout="fill"
          width={100}
          height={700}
          src="/waves.png"
          alt="Why we do it"
        />
        <OverlapText>
          <Image
            className="timeisnow"
            layout="fill"
            height={610}
            width={884}
            src="/timeisnow.png"
            alt="Why we do it"
          />
        </OverlapText>
        <div style={{ position: "relative", zIndex: 4 }}>
          <RightImage>{trashImage()}</RightImage>
        </div>
      </BannerContainer>
      <LayoutStyled>
        <TextContainer>
          <p>
            {description}
          </p>
        </TextContainer>
        <div style={{ background: "none" }} className="div3" />
      </LayoutStyled>
    </div>
  );
};

export default AboutHero;
