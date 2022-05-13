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

const DEFAULT_BG_ANIMATION = "/logo/f1.svg";

const Header = ({
  noDot,
  isAbout,
  hasDot,
  isWork,
  isContact,
  description,
}) => {
  const [svg, setSvg] = useState(DEFAULT_BG_ANIMATION);

  useEffect(() => {
    let idx = 0;
    const animationLogo = setInterval(() => {
      if (idx === 9) idx = 0;
      idx++;
      setSvg(`/logo/f${idx}.svg`);
    }, 1200);
    return () => clearInterval(animationLogo);
  }, []);

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
                <div className="img-animation">
                  <motion.img
                    animate={{ rotate: 360 }}
                    transition={spin}
                    src={svg}
                  />
                </div>
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
