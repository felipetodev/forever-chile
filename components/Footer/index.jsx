import { Container, FooterStyled, IntroStyled, LogoStyled } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <LogoStyled>
          <span>Copyright © 2021 forever-chile.</span>
          <span>All Rights Reserved FOREVER CHILE</span>
          <span>contact@forever-chile.com</span>
          <span>Design and development Sebastian Hanson Studio</span>
        </LogoStyled>
        <IntroStyled>
          +569-9330-7139 +569-9793-7881<br/>
          César Cascabel 4369 Apt. 1022, Las Condes, Santiago - 7550372, Chile.
          <br/>
          <br/>
          +1-646-652-6162
          1330 Avenue of the Americas Suite 23A, New York, NY-10019, USA.
        </IntroStyled>
        <div className="footer-logo">
          Denise Lira Logo
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
