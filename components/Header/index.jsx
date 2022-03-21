import { Container, HeaderStyled, IntroStyled, LogoStyled, Nav } from "./Header.styles";
import Image from 'next/image'
import Menu from "../Menu";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <LogoStyled>
          <Image src='/Grupo-137.png' width="135" height="77px" alt="logo" />
        </LogoStyled>
        <IntroStyled>
          We are a team of professionals from different artistic areas that unite
          to deliver and achieve the best combination of results for each
          spectator.
        </IntroStyled>
        <Nav>
          <Menu />
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
