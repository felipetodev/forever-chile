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

const teamMembers = {
  Denise: {
    name: "Denise Lira-Ratinoff",
    src: "/team_01.png",
    title: "Visual Artist. Photographer.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  Patricio: {
    name: "Patricio Aguilar Díaz",
    src: "/team_02.png",
    title: "Visual Artist. Photographer.",
    description:
      "Habitant morbi tristique senectus et. Ornare lectus sit amet est placerat. Quisque id diam vel quam. Neque convallis a cras semper auctor neque vitae tempus quam. A lacus vestibulum sed arcu non odio euismod lacinia at. Rutrum quisque non tellus orci ac auctor augue mauris augue. Justo nec ultrices dui sapien eget mi. Tortor posuere ac ut consequat semper viverra.",
  },
};

const About = ({ page }) => {
  const { mainTitle, description, teamCollection = {} } = page;
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
      <AboutHero />
      <TrashDesignMobile />
      <Collective />
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
