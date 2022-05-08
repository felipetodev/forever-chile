import Image from "next/image";
import { Col, LayoutStyled, Container, NavigationList } from "./styles";

const WhatWeDo = ({ firstColumnItems, secondColumnItems }) => {
  return (
    <Container>
      <LayoutStyled>
        <h2>What we do</h2>
      </LayoutStyled>
      <LayoutStyled>
        <Col>
          <NavigationList>
            {firstColumnItems?.items?.map((section) => (
              <li key={section?.sys?.id}>
                <div
                  style={{
                    position: "relative",
                    background: "transparent",
                  }}
                >
                  <span>{section?.title}</span>
                  <div className="image-container">
                    {section?.image?.url && (
                      <Image
                        layout="fill"
                        className="work-image"
                        objectFit="cover"
                        src={section?.image?.url}
                        alt={section?.title}
                      />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </NavigationList>
        </Col>
        <Col>
          <NavigationList>
            {secondColumnItems?.items?.map((section) => (
              <li key={section?.sys?.id}>
                <div
                  style={{
                    position: "relative",
                    background: "transparent",
                  }}
                >
                  <span>{section?.title}</span>
                  <div className="image-container">
                    {section?.image?.url && (
                      <Image
                        layout="fill"
                        className="work-image"
                        objectFit="cover"
                        src={section?.image?.url}
                        alt={section?.title}
                      />
                    )}
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
