import { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";
import ListOfWorks from "../components/ListOfWorks";
import Footer, { FooterMobile } from "../components/Footer";
import WorkMobileSelector from "../components/WorkMobileSelector";
import Modal from "../components/Modal";

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;

  ._1 {
    width: 100%;
  }
  ._2 {
    width: 100%;
    position: relative;
    min-height: 10px;
    &::before {
      content: "";
      position: absolute;
      right: -10px;
      top: 0;
      height: 5px;
      width: 5px;
      border-radius: 9999px;
      border: 1px solid #707070;
    }
  }
  ._3 {
    min-width: 270px;
    @media (max-width: 1194px) {
      min-width: 210px;
    }
    @media (max-width: 1070px) {
      // min-width: 150px;
      display: none;
    }
    @media (max-width: 830px) {
      min-width: 124px;
    }
  }
`;

const Heading = styled.h1`
  max-width: 615px;
  font-size: 50px;
`;

const Navigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  margin-right: 240px;
  li {
    cursor: pointer;
    list-style: none;
    &.active {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        z-index: 5;
        left: 0; 
        right: 0; 
        bottom: -20px;
        margin-left: auto; 
        margin-right: auto; 
        width: 8px;
        height: 8px;
        border-radius: 9999px;
        background: #052CAB;
      }
    }
  }

  @media (max-width: 1194px) {
    margin-right: 200px;
  }
  @media (max-width: 1070px) {
    margin-right: 150px;
    display: none;
  }
`;

const menuList = ["All", "Films", "Multimedia", "Advertising", "3D & Videogames", "Editorial", "Industrial (soon)"]

const WorkPage = () => {
  const [workSection, setWorkSection] = useState("all");
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(modalIsOpen)
  return (
    <>
      <Header isAbout />
      <Container>
        <div className="_1" />
        <div className="_2" />
        <div className="_3" />
      </Container>
      <Layout>
        <Heading>
          We deliver and achieve the best combination of results for each
          spectator.
        </Heading>
      </Layout>
      <Layout>
        <Navigation className="_1">
          {menuList.map(item => (
            <li key={item} className={item.toLowerCase() === workSection ? "active" : ""} onClick={() => setWorkSection(item?.toLowerCase())}>
              {item}
            </li>
          ))}
        </Navigation>
        <div className="_3"></div>
      </Layout>
      <WorkMobileSelector menu={menuList} workSection={workSection} onWorkSelection={setWorkSection} />
      <ListOfWorks workSection={workSection} onClick={() => setIsOpen(true)} />
      <Footer />
      <FooterMobile />
      <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}  />
    </>
  );
};

export default WorkPage;
