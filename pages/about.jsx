import Header from "../components/Header";
import styled from "styled-components";
import WhatWeDo from "../components/WhatWeDo";
import AboutHero from "../components/AboutHero";
import Collective from "../components/Collective";
import HoverBanner from "../components/HoverBanner";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import Layout from "../components/Layout";

const AboutTitle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 2;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "h2 empty1"
    "empty2 parragraph";
  margin-right: 150px;

  h2 {
    width: 100%;
    min-width: 400px;
    font-size: 30px;
    grid-area: h2;
    margin: 0;
  }
  & .empty1 {
    grid-area: empty1;
    display: none;
  }
  & .empty2 {
    display: none;
    grid-area: empty2;
  }
  p {
    font-size: 18px;
    min-width: 490px;
    color: #e6e6e6;
    margin: 0;
    grid-area: parragraph;
  }

  @media (max-width: 1333px) {
    h2 {
      min-width: 350px;
    }
    p {
      min-width: 400px;
    }
  }
`;

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

const About = () => {
  return (
    <>
      <Header isAbout />
      <div className="container">
        <AboutTitle>
          <h2>
            We deliver and achieve the best combination of results for each
            spectator.
          </h2>
          <div className="empty1">empty</div>
          <div className="empty2">empty2</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AboutTitle>
      </div>

      <div style={{ marginTop: 200 }}>
        <Layout>
          <h2>Meet the founders</h2>
        </Layout>
        <Layout isFounders>
          {Object.entries(teamMembers).map(([key, value]) => (
            <TeamCard
              key={key}
              name={value.name}
              src={value.src}
              title={value.title}
              description={value.description}
            />
          ))}
          <div className="div3" />
        </Layout>
      </div>

      <WhatWeDo />
      <AboutHero />
      <Collective />
      <HoverBanner />
      <Footer />
    </>
  );
};

export default About;
