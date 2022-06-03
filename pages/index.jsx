import Header from "../components/Header";
import Footer, { FooterMobile } from "../components/Footer";
import FullHeroCarousel from "../components/FullHeroCarousel";
import Dots from "../components/Dots";
import { HomeSpaceing } from "../styles/globals";
import { GET_HOME_ENTRY } from "../queries/getHomeEntry";

export default function Home({ description, homeVideosCollection, footer }) {
  return (
    <>
      <Header isHome noDot description={description} />
      <Dots isHome />
      <div
        className="mobile-description"
        style={{ position: "relative", zIndex: 4 }}
      >
        {description}
      </div>
      <FullHeroCarousel videosCollection={homeVideosCollection} />
      <HomeSpaceing />
      <Footer footer={footer} style={{ overflow: "hidden" }} />
      <FooterMobile />
    </>
  );
}

export async function getStaticProps() {
  const { contentful } = require("../contentful/service");
  const page = await contentful("home", "homePageCollection", GET_HOME_ENTRY);
  const { description, homeVideosCollection = {}, footer = {} } = page;

  return {
    props: {
      description,
      homeVideosCollection,
      footer,
    },
  };
}
