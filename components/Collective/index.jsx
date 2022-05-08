import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styled from "styled-components";
import useMediaQuery from "../../hooks/useMediaQuery";
import "swiper/css";

const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 4;
  justify-content: space-evenly;
  align-items: center;
  background-color: #052cab;
  width: 100%;
  height: 50vh;
  padding: 0 6%;

  div {
    background: none;
  }

  @media (max-width: 996px) {
    text-align: center;
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 740px) {
    margin-top: 180px;
  }
`;

const BannerTitle = styled.div`
  font-size: clamp(25px, 3vw, 50px);
  h2 {
    color: #1a1a1a;
    background: none;
  }
  @media (max-width: 996px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const ImageContainer = styled.div`
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

const images = [
  {
    name: "chiloe",
    url: "/chiloecine.png",
  },
  {
    name: "grupo137",
    url: "/logo/forever-logo.svg",
  },
  {
    name: "denise",
    url: "/denise_logo.svg",
  },
];

const MQ = "(max-width: 675px)";

const Collective = ({ title, brands }) => {
  const isMobile = useMediaQuery(MQ);
  return (
    <Container>
      <BannerTitle>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </BannerTitle>
      {isMobile ? (
        <Swiper
          loop
          grabCursor
          style={{ width: "100%" }}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {brands?.items?.map(({ sys, title, image }) => (
            <SwiperSlide key={sys?.id} style={{ paddingBottom: "50px" }}>
              <ImageContainer>
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={image?.url}
                  alt={title}
                />
              </ImageContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          {brands?.items?.map(({ sys, title, image }) => (
            <ImageContainer key={sys?.id}>
              <Image
                objectFit="contain"
                layout="fill"
                src={image?.url}
                alt={title}
              />
            </ImageContainer>
          ))}
        </>
      )}
    </Container>
  );
};

export default Collective;
