import { Container, AboutTitle } from "./styles";

const AboutDescription = ({ title, description }) => {
  return (
    <Container>
      <AboutTitle>
        <div className="top-header">
          <h2>{title}</h2>
        </div>
        <div className="sub-header">
          <h3>{description}</h3>
        </div>
      </AboutTitle>
    </Container>
  );
};

export default AboutDescription;
