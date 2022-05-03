import Header from "../components/Header";
import Footer, { FooterMobile } from "../components/Footer";
import FullHeroCarousel from "../components/FullHeroCarousel";
import Dots from "../components/Dots";
import { GET_HOME_ENTRY } from "../queries/getHomeEntry";
import Head from "next/head";

export default function Home({ page = {} }) {
  const { description, homeVideosCollection = {} } = page;
  return (
    <>
      <Head>
        <title>Forever | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Header
        noDot
        description={
          description ||
          "We are a team of professionals from different artistic areas that unite to deliver and achieve the best combination of results for each spectator."
        }
      />
      <Dots isHome />
      <div
        className="mobile-description"
        style={{ position: "relative", zIndex: 4 }}
      >
        {description}
      </div>
      <FullHeroCarousel videosCollection={homeVideosCollection} />
      {/* DIVISOR LINE */}
      <div
        style={{
          position: "relative",
          height: "40px",
          backgroundColor: "#1A1A1A",
          zIndex: 5,
        }}
      >
        <div style={{ position: "absolute", zIndex: 4 }}></div>
      </div>
      <Footer />
      <FooterMobile />
    </>
  );
}

export async function getStaticProps() {
  const { contentful } = require("../contentful/service");
  const page = await contentful("home", "homePageCollection", GET_HOME_ENTRY);

  return {
    props: {
      page,
    },
  };
}
