import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import styled from "styled-components";
import ListOfWorks from "../components/ListOfWorks";
import Footer, { FooterMobile } from "../components/Footer";
import WorkMobileSelector from "../components/WorkMobileSelector";
import Dots from "../components/Dots";
import Modal from "../components/Modal";
import MenuList from "../components/MenuList";
import { GET_WORK_ENTRY } from "../queries/getWorkEntry";
import { useRouter } from "next/router";
import { Container } from "../components/MenuList/styles";
import { MaxContainer } from "../components/Layout/styles";

const Heading = styled.h1`
  max-width: 615px;
  font-size: 50px;
  @media (max-width: 1070px) {
    margin-right: 6.2222%;
    margin-bottom: 0px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
    margin: 0 auto;
    margin-top: 70px;
    width: min(800px, 100%);
  }
`;

const WorksSpacing = styled.div`
  position: relative;
  height: 150px;
  background-color: #1a1a1a;
  z-index: 5;
  @media (max-width: 400px) {
    display: none;
  }
`;

const WorkPage = ({ page = {} }) => {
  const { description, workVideosCollection = [], footer = {} } = page;
  const [workSection, setWorkSection] = useState("all");
  const [modalWork, setModalWork] = useState(null);
  const { query } = useRouter();
  const hasParams = Boolean(query.category);

  useEffect(() => {
    if (hasParams) {
      setWorkSection(query.category.toLowerCase());
    }
  }, [hasParams]);

  const getArrayOfCategories = workVideosCollection?.items?.map(
    (item) => item?.category
  );
  const categories = [...new Set(getArrayOfCategories)];
  return (
    <>
      <Head>
        <title>Forever Chile | WORK</title>
      </Head>
      <Header noDot isAbout isWork />
      <Dots />
      <MaxContainer>
        <Container>
          <Heading>{description}</Heading>
        </Container>
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
          setModalWork={setModalWork}
        />
      </MaxContainer>
      <Modal
        modalIsOpen={Boolean(query.project)}
        infoModal={modalWork}
      />
      <WorksSpacing />
      <Footer isWork footer={footer} />
      <FooterMobile footer={footer} />
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
