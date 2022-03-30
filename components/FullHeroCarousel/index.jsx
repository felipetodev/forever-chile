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

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = [{ url: "/video2.mp4", autoPlay: true }, { url: "/video.mp4" }];

const getActiveSlide = () => {
  const activeSlider = document.querySelector(".swiper-slide-active").lastChild
  if (activeSlider) activeSlider.play()
}

const FullHeroCarousel = () => {
  const [index, setIndex] = useState(null)
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.defaultMuted = true;
  }, [])

  useEffect(() => {
    getActiveSlide()
  }, [index])

  return (
    <FullHeroStyled>
      <Swiper
        onTransitionStart={e => setIndex(e.realIndex)}
        effect="fade"
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {videos.map((video, idx) => (
          <SwiperSlide key={video.url}>
            <Video ref={videoRef} id={`player${idx}`} playsInline muted loop>
              <source src={video.url} type="video/mp4" />
            </Video>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container>
        <LogoStyled />
        <IntroStyled>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>Aftershock</h2>
            <span>Chiloé Films</span>
            <span>Special Effects, Set Design, Set Construction.</span>
          </div>
        </IntroStyled>
      </Container>
    </FullHeroStyled>
  );
};

export default FullHeroCarousel;
