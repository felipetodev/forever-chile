import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper";
import {
  FullHeroStyled,
  Video,
  AudioButton,
  Container,
  LogoStyled,
  IntroStyled,
} from "./styles";
import { SVGAudioMutedIcon, SVGAudioPlayIcon } from "./icons";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const getActiveSlide = () => {
  const activeSlider = document.querySelector(
    ".swiper-slide-active"
  )?.lastChild;
  if (activeSlider) activeSlider.play();
  return activeSlider;
};

const getUrlModalPath = (video, idx) => {
  return video && video[idx]
    ? `/work?category=${video[idx]?.filmCategory?.toLowerCase()}&project=${
        video[idx]?.title
      }`
    : "/work";
};

const FullHeroCarousel = ({ videosCollection = {} }) => {
  const { items = [] } = videosCollection;
  const [index, setIndex] = useState(0);
  const [videoMute, setVideoMute] = useState(false);
  const [videoDuration, setVideoDuration] = useState(8000);
  const videoRef = useRef(null);

  useEffect(() => {
    const actualSlider = getActiveSlide();
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current = actualSlider;
      setVideoDuration(videoRef.current.duration * 1000 - 1000);
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = !videoMute;
      videoRef.current.volume = 0.5;
    }
  }, [index]);

  useEffect(() => {
    getActiveSlide();
  }, [index]);

  const handleAudio = () => {
    setVideoMute(!videoMute);
    if (videoRef.current) videoRef.current.muted = videoMute;
  };

  const modalPath = getUrlModalPath(items, index);

  return (
    <FullHeroStyled>
      <Swiper
        onTransitionStart={(e) => setIndex(e.realIndex)}
        effect="fade"
        style={{ width: "100%" }}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        speed={500}
        loop={true}
        autoplay={{
          delay: videoDuration,
          // disableOnInteraction: false,
        }}
      >
        {items &&
          items.map((item) => (
            <SwiperSlide
              key={item?.video?.sys?.id}
              style={{ minWidth: "100%" }}
            >
              <Video
                ref={videoRef}
                id={item?.video?.sys?.id}
                playsInline
                muted
                loop
              >
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
          <Link href={modalPath}>
            <a style={{ display: "flex", flexDirection: "column" }}>
              <h2>{items[index]?.title}</h2>
              <span>{items[index]?.filmName}</span>
              <span>{items[index]?.filmDescription}</span>
            </a>
          </Link>
        </IntroStyled>
        <AudioButton>
          <button
            onClick={handleAudio}
            className={videoMute ? "is-enabled" : "muted"}
            title={videoMute ? "Pause audio" : "Play audio"}
          >
            {!videoMute ? (
              <>
                <SVGAudioMutedIcon />
                <span>Unmuted</span>
              </>
            ) : (
              <SVGAudioPlayIcon />
            )}
          </button>
        </AudioButton>
      </Container>
    </FullHeroStyled>
  );
};

export default FullHeroCarousel;
