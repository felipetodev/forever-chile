import Header from "../components/Header";
import Form from "../components/Form";
import FormImage from "../components/FormImage";
import Footer, { FooterMobile } from "../components/Footer";
import styled from "styled-components";
import { GET_CONTACT_ENTRY } from "../queries/getContactEntry";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: min(1400px, 90%);
  margin: 0 auto;
  @media (max-width: 950px) {
    width: auto;
    display: flex;
    flex-direction: column;
  }
`;

const Spacing = styled.div`
  min-height: 20vh;
  @media (max-width: 500px) {
    display: none;
  }
`;

const ContactPage = ({ page = {} }) => {
  const { formMessage, footer = {} } = page;
  return (
    <>
      <Header noDot isAbout isWork isContact />
      <Container>
        <FormImage />
        <Form submitMessage={formMessage} />
      </Container>
      <Spacing />
      <Footer footer={footer} style={{ overflow: "hidden" }} />
      <FooterMobile />
    </>
  );
};

export default ContactPage;

export async function getStaticProps() {
  const { contentful } = require("../contentful/service");
  const page = await contentful(
    "contact",
    "contactPageCollection",
    GET_CONTACT_ENTRY
  );

  return {
    props: {
      page,
    },
  };
}
