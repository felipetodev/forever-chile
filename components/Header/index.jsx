import { Container, HeaderStyled, IntroStyled, LogoStyled, Nav } from "./Header.styles";
import Image from 'next/image'
import Menu from "../Menu";

const Header = ({ logo, description, }) => {
  return (
    <HeaderStyled>
      <Container>
        <LogoStyled>
          <Image src='/Grupo-137.png' width="135" height="77px" alt="logo" />
        </LogoStyled>
        <IntroStyled>
          {description}
        </IntroStyled>
        <Nav>
          <Menu />
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
