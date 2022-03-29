import Header from "../components/Header";
import Footer, { FooterMobile } from "../components/Footer";
import FullHeroCarousel from "../components/FullHeroCarousel";

export default function Home() {
  return (
    <div>
      <Header
        description="We are a team of professionals from different artistic areas that unite
          to deliver and achieve the best combination of results for each
          spectator."
      />
      <FullHeroCarousel />
      <div
        className="mobile-description"
        style={{ position: "relative", zIndex: 4 }}
      >
        We are a team of professionals from different artistic areas that unite
        to deliver and achieve the best combination of results for each
        spectator.
      </div>
      {/* DIVISOR LINE */}
      <div
        style={{
          position: "relative",
          height: "40px",
          backgroundColor: "#1A1A1A",
          zIndex: 4,
        }}
      >
        <div style={{ position: "absolute", zIndex: 4 }}></div>
      </div>
      <Footer />
      <FooterMobile />
    </div>
  );
}
