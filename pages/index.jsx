import Header from "../components/Header";
import Footer from "../components/Footer";
import FullHeroCarousel from "../components/FullHeroCarousel";
import styled from "styled-components"

const MenuStyled = styled.div`
  position: absolute;
  background-color: red;
  right: 0;
  top: 0;
  width: 821px;
  height: 100%;
  z-index: 999999999;
`

export default function Home() {
  return (
    <div>
      <Header />
      <FullHeroCarousel />
      <div className="mobile-description">
        We are a team of professionals from different artistic areas that unite
        to deliver and achieve the best combination of results for each
        spectator.
      </div>
      <Footer />
      <div className="footer-mobile">
        <div>
          DENISE LIRA-RATINOFF
        </div>
        <div>CHILOE CINE LOGO</div>
      </div>
    </div>
  );
}
