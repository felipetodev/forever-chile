import { Container, First, HoverWrapper, Second } from "./styles";

const HoverBanner = () => {
  return (
    <Container>
      <HoverWrapper>
        <First className="hover-one">
          <div>{"Let's start"}&nbsp;</div>
          <div>a project</div>
        </First>
        <Second className="hover-two">
          <div>that last&nbsp;</div>
          <div>forever.</div>
        </Second>
      </HoverWrapper>
    </Container>
  );
};

export default HoverBanner;
