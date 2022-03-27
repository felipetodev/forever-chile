import Image from "next/image";
import { Col, LayoutStyled, Container, NavigationList } from "./styles";

const columnOne = [
  "Films",
  "Photography",
  "Advertising",
  "Art Direction",
  "SFX",
  "Production",
  "Postproduction",
];

const columnTwo = [
  "Design",
  "Editorial",
  "3D & Videogames",
  "Multimedia",
  "Installations",
  "Public Art",
  "Industrial (soon)",
];

const WhatWeDo = () => {
  return (
    <Container>
      <LayoutStyled>
        <h2>What we do</h2>
      </LayoutStyled>
      <LayoutStyled>
        <Col>
          <NavigationList>
            {columnOne &&
              columnOne.map(section => (
                <li key={section}>
                  <div
                    style={{
                      position: "relative",
                      background: "transparent",
                    }}
                  >
                    <span data-text={section}>{section}</span>
                    <div className="image-container">
                      <Image
                        quality={100}
                        layout="fixed"
                        width={589}
                        height={466}
                        src="/films.png"
                        alt={section}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </NavigationList>
        </Col>
        <Col>
          <NavigationList>
            {columnTwo &&
              columnTwo.map(section => (
                <li key={section}>
                  <div
                    style={{
                      position: "relative",
                      background: "transparent",
                    }}
                  >
                    <span data-text={section}>{section}</span>
                    <div className="image-container">
                      <Image
                        quality={100}
                        layout="fixed"
                        width={589}
                        height={466}
                        src="/films.png"
                        alt={section}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </NavigationList>
        </Col>
        <div className="div3"></div>
      </LayoutStyled>
    </Container>
  );
};

export default WhatWeDo;
