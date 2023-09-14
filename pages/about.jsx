import Head from "next/head";
import Header from "../components/Header";
import WhatWeDo from "../components/WhatWeDo";
import AboutHero, { TrashDesignMobile } from "../components/AboutHero";
import Collective from "../components/Collective";
import HoverBanner from "../components/HoverBanner";
import Footer, { FooterMobile } from "../components/Footer";
import TeamCard from "../components/TeamCard";
import Layout from "../components/Layout";
import { FoundersContainer } from "../styles/globals";
import AboutDescription from "../components/AboutDescription";
import Dots from "../components/Dots";
import { GET_ABOUT_ENTRY } from "../queries/getAboutEntry";

const About = ({ page }) => {
  const {
    mainTitle,
    description,
    categoriesColumn1Collection = {},
    categoriesColumn2Collection = {},
    collectiveBannerCollection = {},
    videoBanner = {},
    teamCollection = {},
    videoBannerDescription,
    blueBannerTitle,
    footer = {},
  } = page;
  return (
    <>
      <Head>
        <title>Forever Chile | ABOUT</title>
      </Head>
      <Header isAbout hasDot />
      <AboutDescription title={mainTitle} description={description} />
      <FoundersContainer>
        <Layout>
          <h2 style={{ fontSize: "30px", fontWeight: 500 }}>
            Meet the founders
          </h2>
        </Layout>
        <Layout isFounders>
          {teamCollection?.items?.map((team) => (
            <TeamCard
              key={team?.sys?.id}
              name={team?.fullName}
              src={team?.image.url}
              discipline={team?.discipline}
              description={team?.description}
              timeline={team?.timelineCollection}
            />
          ))}
          <div className="div3" />
        </Layout>
      </FoundersContainer>
      <Dots dotTop />
      <WhatWeDo
        firstColumnItems={categoriesColumn1Collection}
        secondColumnItems={categoriesColumn2Collection}
      />
      <Dots dotBottom style={{ marginBottom: "100px" }} />
      <AboutHero
        videoBanner={videoBanner}
        description={videoBannerDescription}
      />
      <Dots lastDot />
      <TrashDesignMobile />
      <Collective title={blueBannerTitle} brands={collectiveBannerCollection} />
      <HoverBanner />
      <Footer footer={footer} />
      <FooterMobile footer={footer} />
    </>
  );
};

export default About;

export async function getStaticProps() {
  const { contentful } = require("../contentful/service");
  const page = await contentful(
    "about",
    "aboutPageCollection",
    GET_ABOUT_ENTRY
  );

  return {
    props: {
      page,
    },
  };
}
