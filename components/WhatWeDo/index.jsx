import styled from "styled-components";
import Image from "next/image";

const MediaQueries = styled.div`
  position: relative;
  display: flex;
  width: min(1400px, 90%);
  margin: 0 auto;

  .div1 {
    width: 100%;
  }
  .div2 {
    width: 100%;
  }
  .div3 {
    min-width: 270px;
    @media (max-width: 1194px) {
      min-width: 210px;
    }
    @media (max-width: 1070px) {
      min-width: 150px;
    }
    @media (max-width: 830px) {
      min-width: 124px;
    }
  }

  .img-container {
    &:first-child {
      margin-right: 50px;
    }
  }

  img {
    object-fit: cover;
    display: block;
    background: none;
  }
`;

const NavigationList = styled.ul`
  background: none;

  & li {
    display: block;
    user-select: none;
    margin: 30px 0;
    & span {
      background: none;
      position: relative;
      z-index: 4;
      display: block;

      &::before {
        content: attr(data-text);
        width: 0;
        color: crimson;
        font-weight: 400;
        -webkit-text-stroke: 1px; // <--- works in mac (?)
        overflow: hidden;
        position: absolute;
        transition: all 1s cubic-bezier(0.84, 0, 0.08, 0.99);
      }

      &:hover:before {
        width: 100%;
      }
    }
  }

  li:hover .image-container {
    visibility: visible;
    opacity: 1;
  }

  .image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -75px;
    left: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: all 0.7s ease-in-out;
  }
`;

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
]

const WhatWeDo = () => {
  return (
    <div style={{ marginTop: 200, paddingBottom: 200, position: "relative", zIndex: 4 }}>
      <MediaQueries>
        <h2>What we do</h2>
      </MediaQueries>
      <MediaQueries>
        <div style={{ width: "100%", fontSize: 40 }}>
          <div style={{ display: "flex", gap: 100 }}>
            <NavigationList>
              {columnOne &&
                columnOne.map((section, idx) => (
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
          </div>
        </div>
        <div style={{ width: "100%", fontSize: 40 }}>
          <div style={{ display: "flex", gap: 100 }}>
            <NavigationList>
              {columnTwo &&
                columnTwo.map((section, idx) => (
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
          </div>
        </div>
        <div className="div3"></div>
      </MediaQueries>
    </div>
  );
};

export default WhatWeDo;
