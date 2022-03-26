import styled from "styled-components";
import Image from "next/image";

const MediaQueries = styled.div`
  position: relative;
  background: none;
  display: flex;
  width: min(1400px, 90%);
  margin: 0 auto;

  .div1 {
    width: 100%;
  }
  .div2 {
    width: 100%;
  }
  .div3 {
    min-width: 270px;
    @media (max-width: 1194px) {
      min-width: 210px;
    }
    @media (max-width: 1070px) {
      min-width: 150px;
    }
    @media (max-width: 830px) {
      min-width: 124px;
    }
  }

  .img-container {
    &:first-child {
      margin-right: 50px;
    }
  }

  img {
    object-fit: cover;
    display: block;
  }
`;

const BannerContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;

  img {
    object-fit: cover;
    background: none !important;
  }
`;

const OverlapText = styled.div`
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

const RightImage = styled.div`
border: 1px solid red;
  position: absolute;
  right: 6%;
  bottom: -50px;
  background: transparent;

  img {
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: none;
  margin-top: 60px;
  p {
    max-width: 400px;
    background: none;
  }
`

const AboutHero = () => {
  return (
    <div>
      <MediaQueries>
        <h2>Why we do it</h2>
      </MediaQueries>
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
              layout="fixed"
              height={270}
              width={270}
              src="/trash.png"
              alt="Trash is a design error"
            />
          </RightImage>
        </div>
      </BannerContainer>
      <MediaQueries>
        <TextContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TextContainer>
        <div style={{ background: "none" }} className="div3" />
      </MediaQueries>
    </div>
  );
};

export default AboutHero;
