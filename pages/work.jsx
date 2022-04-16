import { useState, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";
import ListOfWorks from "../components/ListOfWorks";
import Footer, { FooterMobile } from "../components/Footer";
import WorkMobileSelector from "../components/WorkMobileSelector";
import Dots from "../components/Dots";
import Modal from "../components/Modal";
import MenuList from "../components/MenuList";
import { GET_WORK_ENTRY } from "../queries/getWorkEntry";

const Heading = styled.h1`
  max-width: 615px;
  font-size: 50px;
  @media (max-width: 1070px) {
    margin-right: 6.2222%;
  }
  @media (max-width: 400px) {
    margin: 0 auto;
    width: min(800px, 100%);
  }
`;

const getURLParams = () => {
  let params = new URLSearchParams(document.location.search);
  let categorySearched = params.get("category");
  return categorySearched?.toLowerCase();
};

const WorkPage = ({ page = {} }) => {
  const { description, workVideosCollection = [] } = page;
  const [workSection, setWorkSection] = useState("all");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalWork, setModalWork] = useState(null);

  useEffect(() => {
    const searchParam = getURLParams();
    if (typeof searchParam === "string") {
      setWorkSection(searchParam);
    }
  }, []);

  const getArrayOfCategories = workVideosCollection?.items?.map(
    (item) => item?.category
  );
  const categories = [...new Set(getArrayOfCategories)];
  return (
    <>
      <Header noDot isAbout isWork />
      <Dots />
      <Layout>
        <Heading>
          {description ||
            "We deliver and achieve the best combination of results for each spectator."}
        </Heading>
      </Layout>
      <MenuList
        categories={categories}
        workSection={workSection}
        setWorkSection={setWorkSection}
      />
      <WorkMobileSelector
        categories={categories}
        workSection={workSection}
        onWorkSelection={setWorkSection}
      />
      <ListOfWorks
        workSection={workSection}
        workVideos={workVideosCollection?.items}
        setIsOpen={setIsOpen}
        setModalWork={setModalWork}
      />
      <Modal
        modalIsOpen={modalIsOpen}
        infoModal={modalWork}
        setIsOpen={setIsOpen}
      />
      {/* DIVISOR LINE */}
      <div
        style={{
          position: "relative",
          height: "150px",
          backgroundColor: "#1A1A1A",
          zIndex: 4,
        }}
      >
        <div style={{ position: "absolute", zIndex: 4 }}></div>
      </div>
      <Footer isWork />
      <FooterMobile />
    </>
  );
};

export default WorkPage;

export async function getStaticProps() {
  const { contentful } = require("../contentful/service");
  const page = await contentful("work", "workPageCollection", GET_WORK_ENTRY);

  return {
    props: {
      page,
    },
  };
}
