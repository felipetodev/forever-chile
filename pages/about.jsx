import Header from "../components/Header";
import WhatWeDo from "../components/WhatWeDo";
import AboutHero, { TrashDesignMobile } from "../components/AboutHero";
import Collective from "../components/Collective";
import HoverBanner from "../components/HoverBanner";
import Footer, { FooterMobile } from "../components/Footer";
import TeamCard from "../components/TeamCard";
import Layout from "../components/Layout";
import { FoundersContainer } from "../styles";
import AboutDescription from "../components/AboutDescription";
import Dots from "../components/Dots";
import { GET_ABOUT_ENTRY } from "../queries/getAboutEntry";

const About = ({ page }) => {
  const {
    mainTitle,
    description,
    teamCollection = {},
    videoBannerDescription,
    blueBannerTitle,
  } = page;
  return (
    <>
      <Header isAbout />
      <AboutDescription title={mainTitle} description={description} />
      <FoundersContainer>
        <Layout>
          <h2>Meet the founders</h2>
        </Layout>
        <Layout isFounders>
          {teamCollection?.items?.map((team) => (
            <TeamCard
              key={team?.sys?.id}
              name={team?.fullName}
              src={team?.image.url}
              title={team?.title}
              description={team?.description}
              timeline={team?.timelineCollection}
            />
          ))}
          <div className="div3" />
        </Layout>
      </FoundersContainer>
      <Dots style={{ marginTop: "200px" }} />
      <WhatWeDo />
      <Dots style={{ marginBottom: "100px" }} />
      <AboutHero description={videoBannerDescription} />
      <TrashDesignMobile />
      <Collective title={blueBannerTitle} />
      <HoverBanner />
      <Footer />
      <FooterMobile />
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
