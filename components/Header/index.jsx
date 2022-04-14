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

const Header = ({ noDot, isAbout, hasDot, isWork, isContact, description }) => {
  return (
    <HeaderStyled isAbout={isAbout}>
      <Container>
        <LogoStyled>
          <Link href="/">
            <a>
              <Image
                objectFit="cover"
                src="/forever-logo.svg"
                width="135"
                height="77px"
                alt="forever collective"
              />
            </a>
          </Link>
        </LogoStyled>
        <IntroStyled hasDot={hasDot} className={noDot ? "remove-dot" : null} isWork={isWork}>
          {description}
        </IntroStyled>
        <Nav isAbout={isAbout}>
          <Menu isAbout={isAbout} hasDot={hasDot} isContact={isContact} />
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
