import { useEffect, useState } from "react";
import {
  Container,
  HeaderStyled,
  IntroStyled,
  LogoStyled,
  Nav,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";
import { motion } from "framer-motion";
import { MaxContainer } from "../Layout/styles";

const spin = {
  repeat: Infinity,
  ease: "linear",
  duration: 7,
};

const DEFAULT_BG_ANIMATION = 1;
const getIndexMaxLength = (idx) => (idx - 1 === 0 ? 9 : idx - 1);

const Header = ({ noDot, isAbout, hasDot, isWork, isContact, description }) => {
  const [svgIndex, setSvgIndex] = useState(DEFAULT_BG_ANIMATION);

  useEffect(() => {
    let idx = 0;
    const animationLogo = setInterval(() => {
      if (idx === 9) idx = 0;
      idx++;
      setSvgIndex(idx);
    }, 1200);
    return () => clearInterval(animationLogo);
  }, []);

  useEffect(() => {
    const indexRemove = getIndexMaxLength(svgIndex);
    document
      .querySelector(`.img-animation-${indexRemove}`)
      .classList.remove("is-active");
    const spinSVG = document.querySelector(`.img-animation-${svgIndex}`);
    spinSVG.classList.add("is-active");
  }, [svgIndex]);

  return (
    <MaxContainer>
      <HeaderStyled isAbout={isAbout} isWork={isWork}>
        <Container>
          <LogoStyled>
            <Link href="/">
              <a>
                <Image
                  objectFit="contain"
                  src="/logo/forever-chile-logo.svg"
                  width="135"
                  height="75px"
                  alt="Forever Collective"
                  title="Logo Forever"
                />
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    className={`img-animation img-animation-${i + 1}`}
                    key={i}
                  >
                    <motion.img
                      animate={{ rotate: 360 }}
                      transition={spin}
                      src={`/logo/f${i + 1}.svg`}
                    />
                  </div>
                ))}
              </a>
            </Link>
          </LogoStyled>
          <IntroStyled
            hasDot={hasDot}
            className={noDot ? "remove-dot" : null}
            isWork={isWork}
          >
            {description}
          </IntroStyled>
          <Nav isAbout={isAbout}>
            <Menu isAbout={isAbout} hasDot={hasDot} isContact={isContact} />
          </Nav>
        </Container>
      </HeaderStyled>
    </MaxContainer>
  );
};

export default Header;
