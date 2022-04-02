import Image from "next/image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 4;
  justify-content: space-evenly;
  align-items: center;
  background-color: #052CAB;
  width: 100%;
  height: 50vh;
  margin-top: 180px;
  
  div {
    background: none;
  }

  @media(max-width: 996px) {
    text-align: center;
    flex-direction: column;
    height: auto;
    margin-top: 100px;
  }
`;

const BannerTitle = styled.div`
  font-size: clamp(15px,3.5vw,34px);
  h2 {
    color: #1A1A1A;
    background: none;
  }
  @media(max-width: 996px) {
    margin-bottom: 50px;
  }
`

const ImageContainer = styled.div`
  width: 150px;
  height: 100px;
  position: relative;
  img {
    background: transparent;
    object-fit: scale-down;
  }
  @media(max-width: 996px) {
    &:not(:last-child) {
      margin-bottom: 80px;
    }
  }
`

const Collective = () => {
  return (
    <Container>
      <BannerTitle>
        <h2>
          The<br />
          Collective:
        </h2>
      </BannerTitle>
      <ImageContainer>
        <Image layout="fill" src="/chiloecine.png" alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image layout="fill" src="/Grupo-137.png" alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image layout="fill" src="/denise-lira.png" alt="" />
      </ImageContainer>
    </Container>
  )
}

export default Collective;