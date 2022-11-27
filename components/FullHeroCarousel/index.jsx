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
import SVGEqualizer from "./SvgEqualizer";
import { motion } from "framer-motion";

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

const iOSDevice = () =>
  navigator.userAgent.includes("iPhone") ||
  navigator.userAgent.includes("iPad");

const FullHeroCarousel = ({ videosCollection = {} }) => {
  const { items = [] } = videosCollection;
  const [index, setIndex] = useState(0);
  const [videoMute, setVideoMute] = useState(false);
  const [videoDuration, setVideoDuration] = useState(8000);
  const [btnDisable, setBtnDisable] = useState(false);
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
      if (iOSDevice()) {
        return;
      }
      videoRef.current.muted = !videoMute;
      // videoRef.current.volume = 0.5;
    }
  }, [index]);

  useEffect(() => {
    if (iOSDevice()) setVideoMute(false);
    getActiveSlide();
  }, [index]);

  const fadeIn = () => {
    setBtnDisable(true);
    const fadeAudio = setInterval(() => {
      if (!videoRef.current) return null;
      const fadePoint =
        videoRef.current.duration - 5 - videoRef.current.duration;
      if (
        videoRef.current.currentTime >= fadePoint &&
        videoRef.current.volume <= 0.9
      ) {
        videoRef.current.volume += 0.075;
      }

      if (videoRef.current.volume >= 0.9) {
        clearInterval(fadeAudio);
        videoRef.current.volume = 1;
        setBtnDisable(false);
      }
    }, 100);
  };

  const fadeOut = () => {
    setBtnDisable(true);
    const fadeAudio = setInterval(() => {
      if (!videoRef.current) return null;
      const fadePoint = videoRef.current.duration;
      if (
        videoRef.current.currentTime < fadePoint &&
        videoRef.current.volume >= 0.1
      ) {
        videoRef.current.volume -= 0.2;
      }

      if (videoRef.current.volume <= 0.1) {
        clearInterval(fadeAudio);
        videoRef.current.volume = 0;
        setBtnDisable(false);
      }
    }, 100);
  };

  const handleAudio = () => {
    setVideoMute(!videoMute);
    if (!videoMute) {
      if (videoRef.current) videoRef.current.volume = 0;
      fadeIn();
      if (videoRef.current) videoRef.current.muted = videoMute;
    }
    if (videoMute) {
      if (iOSDevice()) {
        if (videoRef.current) videoRef.current.volume = 0;
        if (videoRef.current) videoRef.current.muted = videoMute;
        return;
      }
      fadeOut();
    }
  };

  return (
    <FullHeroStyled>
      <Swiper
        onTransitionStart={(e) => setIndex(e.realIndex)}
        effect="fade"
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        speed={500}
        loop={true}
        autoplay={{
          delay: videoDuration,
          disableOnInteraction: false,
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
          <Link
            href={{
              pathname: "/work",
              query: {
                category: items[index]?.filmCategory,
                project: items[index]?.title,
              },
            }}
          >
            <motion.a
              href="/work"
              alt="works-project"
              key={items[index]?.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h2>{items[index]?.title}</h2>
              <span>{items[index]?.filmName}</span>
              <span>{items[index]?.filmDescription}</span>
            </motion.a>
          </Link>
        </IntroStyled>
        <AudioButton>
          <button
            onClick={handleAudio}
            disabled={btnDisable}
            className="is-enabled"
            title={videoMute ? "Pause audio" : "Play audio"}
          >
            <SVGEqualizer on={videoMute} />
          </button>
        </AudioButton>
      </Container>
    </FullHeroStyled>
  );
};

export default FullHeroCarousel;
