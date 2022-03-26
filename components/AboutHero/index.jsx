import Image from "next/image";
import Layout from "../Layout";
import {
  BannerContainer,
  OverlapText,
  RightImage,
  TextContainer,
  LayoutStyled
} from "./styles";

const AboutHero = () => {
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
          <RightImage>
            <Image
              quality={100}
              className="timeisnow"
              layout="fill"
              height={270}
              width={270}
              src="/trash.png"
              alt="Trash is a design error"
            />
          </RightImage>
        </div>
      </BannerContainer>
      <LayoutStyled>
        <TextContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TextContainer>
        <div style={{ background: "none" }} className="div3" />
      </LayoutStyled>
    </div>
  );
};

export default AboutHero;
