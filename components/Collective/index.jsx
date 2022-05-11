import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Container, BannerTitle, SwiperStyled, ImageContainer } from "./styles";
import useMediaQuery from "../../hooks/useMediaQuery";
import "swiper/css";

const MQ = "(max-width: 675px)";

const CollectiveImage = ({ image, title }) => (
  <ImageContainer>
    <Image objectFit="contain" layout="fill" src={image} alt={title} />
  </ImageContainer>
);

const Collective = ({ title, brands }) => {
  const sliderWrap = brands.items.length > 3;
  const isMobile = useMediaQuery(MQ);
  return (
    <Container className={sliderWrap ? "collective-slider" : null}>
      <BannerTitle>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </BannerTitle>
      {isMobile || sliderWrap ? (
        <>
          {brands?.items?.map && (
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
                  <CollectiveImage image={image?.url} title={title} />
                </SwiperSlide>
              ))}
            </SwiperStyled>
          )}
        </>
      ) : (
        <>
          {brands?.items?.map(({ sys, title, image }) => (
            <CollectiveImage key={sys?.id} image={image?.url} title={title} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Collective;
