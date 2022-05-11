import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styled from "styled-components";
import useMediaQuery from "../../hooks/useMediaQuery";
import "swiper/css";

const Container = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
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
    padding-bottom: 50px;
  }
  @media (max-width: 740px) {
    margin-top: 180px;
    padding-bottom: 0px;
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
    margin-bottom: 30px;
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

const SwiperStyled = styled(Swiper)`
  &::before,
  &::after {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      to(rgba(5, 44, 171, 20%))
    );
    background: linear-gradient(
      to right,
      #052cab 0%,
      rgba(5, 44, 171, 0) 100%
    );
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
    transition-timing-function : linear !important;
  }
`;

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
          {brands.items.length > 3 ? (
            <SwiperStyled
              loop
              style={{ width: "100%" }}
              slidesPerView="auto"
              speed={7000}
              allowTouchMove={false}
              freeMode={{
                enabled: true,
                sticky: false,
              }}
              modules={[Autoplay]}
              autoplay={{ delay: 0 }}
            >
              {brands?.items?.map(({ sys, title, image }) => (
                <SwiperSlide key={sys?.id}>
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
            </SwiperStyled>
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
        </>
      )}
    </Container>
  );
};

export default Collective;
