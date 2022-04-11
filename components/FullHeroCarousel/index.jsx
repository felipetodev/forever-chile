import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import {
  FullHeroStyled,
  Video,
  Container,
  LogoStyled,
  IntroStyled,
} from "./styles";
import { useRouter } from "next/router";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const getActiveSlide = () => {
  const activeSlider = document.querySelector(".swiper-slide-active")?.lastChild;
  if (activeSlider) activeSlider.play();
};

const FullHeroCarousel = ({ videosCollection = {} }) => {
  const { items = [] } = videosCollection;
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
    }
  }, []);

  useEffect(() => {
    getActiveSlide();
  }, [index]);

  const onWorkClicked = () => {
    if (items[index]?.filmCategory) {
      router.push(`/work?category=${items[index]?.filmCategory}`);
    } else {
      router.push("/work");
    }
  };

  return (
    <FullHeroStyled>
      <Swiper
        onTransitionStart={(e) => setIndex(e.realIndex)}
        effect="fade"
        style={{ width: "100%" }}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {items &&
          items.map((item, idx) => (
            <SwiperSlide
              key={item?.video?.sys?.id}
              style={{ minWidth: "100%" }}
            >
              <Video ref={videoRef} id={`player${idx}`} playsInline muted loop>
                <source
                  src={item?.video?.url}
                  alt={item?.video?.title}
                  type="video/mp4"
                />
              </Video>
            </SwiperSlide>
          ))}
      </Swiper>
      <Container>
        <LogoStyled />
        <IntroStyled>
          <div
            onClick={onWorkClicked}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2>{items[index]?.title}</h2>
            <span>{items[index]?.filmName}</span>
            <span>{items[index]?.filmDescription}</span>
          </div>
        </IntroStyled>
      </Container>
    </FullHeroStyled>
  );
};

export default FullHeroCarousel;
