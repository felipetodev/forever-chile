import styled from "styled-components";

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
    &::after {
      content: "";
      position: absolute;
      right: -16px;
      top: -3px;
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

const Dots = (props) => {
  return (
    <Container {...props}>
      <div className="_1" />
      <div className="_2" />
      <div className="_3" />
    </Container>
  );
};

export default Dots;
