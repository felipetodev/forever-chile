import { Container, HeaderStyled, IntroStyled, LogoStyled, Nav } from "./styles";
import Image from 'next/image'
import Menu from "../Menu";

const Header = ({ isAbout, logo, description, }) => {
  return (
    <HeaderStyled>
      <Container>
        <LogoStyled>
          <Image objectFit="cover" src='/Grupo-137.png' width="135" height="77px" alt="logo" />
        </LogoStyled>
        <IntroStyled>
          {description}
        </IntroStyled>
        <Nav>
          <Menu isAbout={isAbout} />
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
