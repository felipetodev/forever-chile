import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import {
  FullHeroStyled,
  Video,
  AudioButton,
  Container,
  LogoStyled,
  IntroStyled,
} from "./styles";
import { useRouter } from "next/router";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SVGAudioMutedIcon = (props) => (
  <svg
    style={{ background: "none" }}
    height={14}
    width={14}
    {...props}
    viewBox="0 0 14 14"
  >
    <g>
      <path
        d="M1.58564 4.41446L1 5.00011V9.00011L2 10.0001H4.64922L9.3753 13.781L10.4403 13.2691L5.18938 8.0182C5.12733 8.00623 5.06393 8.00011 5 8.00011L3 8.00011L3 6.00011H3.17129L1.58564 4.41446Z"
        fill="currentColor"
      ></path>
      <path
        d="M9 6.17197V3.08073L7.28265 4.45461L5.85973 3.0317L9.37531 0.219238L11 1.00011L11 8.17197L9 6.17197Z"
        fill="currentColor"
      ></path>
      <path
        d="M0.646447 0.64666C0.841709 0.451398 1.15829 0.451398 1.35355 0.64666L13.3536 12.6467C13.5488 12.8419 13.5488 13.1585 13.3536 13.3538C13.1583 13.549 12.8417 13.549 12.6464 13.3538L0.646447 1.35377C0.451184 1.1585 0.451184 0.841922 0.646447 0.64666Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </g>
  </svg>
);

const SVGAudioPlayIcon = () => (
  <svg style={{ background: "none" }} viewBox="0 8 19.1 4">
    <g>
      <path
        d="M9.6,15.6l-0.6,0.8l1.6-0.8H9.6z M9.6,3.6h1L8.9,2.8L9.6,3.6z M4.6,7.6v1c0.2,0,0.4-0.1,0.6-0.2L4.6,7.6z M1.6,7.6v-1l-1,1H1.6z M1.6,11.6h-1l1,1V11.6z M4.6,11.6l0.6-0.8c-0.2-0.1-0.4-0.2-0.6-0.2V11.6z M10.6,15.6v-12h-2v12H10.6z M8.9,2.8l-5,4l1.2,1.6l5-4L8.9,2.8z M4.6,6.6h-3v2h3V6.6z M3.9,12.3l5,4l1.2-1.6l-5-4L3.9,12.3z M1.6,12.6h3v-2h-3V12.6z M0.6,7.6v4h2v-4H0.6z"
        fill="currentColor"
      ></path>
      <path
        d="M15.6,15.6c3.3-3.3,3.3-8.7,0-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
      <path
        d="M13,13c1.9-1.9,1.9-5,0-6.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </g>
  </svg>
);

const getActiveSlide = () => {
  const activeSlider = document.querySelector(
    ".swiper-slide-active"
  )?.lastChild;
  if (activeSlider) activeSlider.play();
};

const FullHeroCarousel = ({ videosCollection = {} }) => {
  const { items = [] } = videosCollection;
  const [index, setIndex] = useState(0);
  const [videoMute, setVideoMute] = useState(false);
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

  const handleAudio = () => {
    setVideoMute(!videoMute);
    videoRef.current.muted = videoMute;
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
        <AudioButton>
          <button
            onClick={handleAudio}
            className={videoMute ? "is-enabled" : "muted"}
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
