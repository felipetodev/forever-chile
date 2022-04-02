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

const Header = ({ isAbout, description }) => {
  return (
    <HeaderStyled isAbout={isAbout}>
      <Container>
        <LogoStyled>
          <Link href="/">
            <a>
              <Image
                objectFit="cover"
                src="/Grupo-137.png"
                width="135"
                height="77px"
                alt="forever collective"
              />
            </a>
          </Link>
        </LogoStyled>
        <IntroStyled>{description}</IntroStyled>
        <Nav isAbout={isAbout}>
          <Menu isAbout={isAbout} />
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
