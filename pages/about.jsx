import Header from "../components/Header";
import styled from "styled-components";
import Image from "next/image";

const AboutTitle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 2;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "h2 empty1"
    "empty2 parragraph";
  margin-right: 150px;

  h2 {
    width: 100%;
    min-width: 400px;
    font-size: 30px;
    grid-area: h2;
    margin: 0;
  }
  & .empty1 {
    grid-area: empty1;
    display: none;
  }
  & .empty2 {
    display: none;
    grid-area: empty2;
  }
  p {
    font-size: 18px;
    min-width: 490px;
    color: #e6e6e6;
    margin: 0;
    grid-area: parragraph;
  }

  @media (max-width: 1333px) {
    h2 {
      min-width: 350px;
    }
    p {
      min-width: 400px;
    }
  }
`;

const TeamStyled = styled.div`
  border: 1px solid red;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  padding-left: 10%;
  padding-right: 30%;

  .img-container {
    width: 100%;
  }

  img {
    object-fit: cover;
    display: block;
  }
`;

const Years = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    background: transparent url("/line.png") 0% 0% repeat padding-box;
    top: -15px;
    right: 0;
    left: 0;
    height: 1px;
    width: 100%;
  }
`;

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <AboutTitle>
          <h2>
            We deliver and achieve the best combination of results for each
            spectator.
          </h2>
          <div className="empty1">empty</div>
          <div className="empty2">empty2</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AboutTitle>
      </div>
      <div>
        <TeamStyled>
          <div className="img-container">
            <Image
              height={500}
              width={590}
              src="/team_01.png"
              alt="Denise Lira"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 12 }}>
                <h3>Denise Lira-Ratinoff</h3>
                <span style={{ fontSize: 13 }}>Visual Artist. Photographer.</span>
              </div>
              <p style={{ fontSize: 14 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[1, 2, 3].map((el) => (
                  <Years key={el}>
                    <span>Consectetur adipiscing</span>
                    <span>2002</span>
                  </Years>
                ))}
              </div>
            </div>
          </div>
          <div className="img-container">
            <Image
              height={500}
              width={590}
              src="/team_02.png"
              alt="Denise Lira"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 12 }}>
                <h3>Patricio Aguilar Díaz</h3>
                <span style={{ fontSize: 13 }}>Visual Artist. Photographer.</span>
              </div>
              <p style={{ fontSize: 14 }}>
                Habitant morbi tristique senectus et. Ornare lectus sit amet est
                placerat. Quisque id diam vel quam. Neque convallis a cras
                semper auctor neque vitae tempus quam. A lacus vestibulum sed
                arcu non odio euismod lacinia at. Rutrum quisque non tellus orci
                ac auctor augue mauris augue. Justo nec ultrices dui sapien eget
                mi. Tortor posuere ac ut consequat semper viverra.
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[1, 2, 3].map((el) => (
                  <Years key={el}>
                    <span>Consectetur adipiscing</span>
                    <span>2002</span>
                  </Years>
                ))}
              </div>
            </div>
          </div>
        </TeamStyled>
      </div>
      <div style={{ height: "70vh" }} />
    </>
  );
};

export default About;
