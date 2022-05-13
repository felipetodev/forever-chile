import Header from "../components/Header";
import Form from "../components/Form";
import FormImage from "../components/FormImage";
import Footer, { FooterMobile } from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: min(1400px, 90%);
  margin: 0 auto;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const Spacing = styled.div`
  min-height: 20vh;
  @media (max-width: 500px) {
    min-height: 20px;
  }
`;

const ContactPage = () => {
  return (
    <>
      <Header noDot isAbout isWork isContact />
      <Container>
        <FormImage />
        <Form />
      </Container>
      <Spacing />
      <Footer />
      <FooterMobile />
    </>
  );
};

export default ContactPage;
