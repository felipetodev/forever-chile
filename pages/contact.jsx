import Header from "../components/Header";
import styled from "styled-components";
import Form from "../components/Form";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid red;
  width: min(1400px, 90%);
  margin: 0 auto;
`

const ContactPage = () => {
  return (
    <>
      <Header isAbout />
      <Container>
        <Form />
      </Container>
    </>
  )
}

export default ContactPage