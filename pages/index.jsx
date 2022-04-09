import Header from "../components/Header";
import Footer, { FooterMobile } from "../components/Footer";
import FullHeroCarousel from "../components/FullHeroCarousel";
import Dots from "../components/Dots";
import { GET_HOME_ENTRY } from "../queries/getHomeEntry";

export default function Home({ page = {} }) {
  const { description, videosCollection } = page;
  return (
    <div>
      <Header
        noDot
        description={
          description ||
          "We are a team of professionals from different artistic areas that unite to deliver and achieve the best combination of results for each spectator."
        }
      />
      <Dots />
      <FullHeroCarousel videosCollection={videosCollection} />
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

export async function getStaticProps() {
  const { contentful } = require("../contentful/service");
  const page = await contentful("home", GET_HOME_ENTRY);

  return {
    props: {
      page,
    },
  };
}
