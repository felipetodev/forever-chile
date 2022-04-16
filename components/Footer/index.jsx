import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Container,
  FooterMobileStyled,
  FooterStyled,
  IntroStyled,
  LogoStyled,
} from "./styles";

const Footer = ({ isWork }) => {
  const [nativeMapsApp, setNativeMapsApp] = useState(false);
  useEffect(() => {
    const userAgent =
      typeof navigator === "undefined" ? "" : navigator.userAgent;
    const isIphone = userAgent?.includes("iPhone");
    setNativeMapsApp(isIphone);
  }, []);
  return (
    <FooterStyled className={isWork ? "is-work-footer" : null}>
      <Container>
        <LogoStyled>
          <span>Copyright © 2021 forever-chile.</span>
          <span>All Rights Reserved FOREVER CHILE</span>
          <span>contact@forever-chile.com</span>
          <span style={{ marginTop: "30px" }}>
            <a
              href="https://www.sebastianhansonstudio.com"
              target="_blank"
              rel="noreferrer"
            >
              Design and development{" "}
              <span className="hover">Sebastian Hanson Studio</span>
            </a>
          </span>
        </LogoStyled>
        <IntroStyled>
          <span>+569-9330-7139 +569-9793-7881</span>
          <a
            href={
              nativeMapsApp
                ? "https://maps.apple.com/?address=C%C3%A9sar%20Cascabel%204369,%20Las%20Condes,%20Chile&ll=-33.423054,-70.581238&q=C%C3%A9sar%20Cascabel%204369&_ext=EiYp/yTjzLm2QMAxWinaK4ulUcA5gU+9cJO1QMBBHvA01NqkUcBQBA%3D%3D"
                : "https://goo.gl/maps/a29zZrUXiTgthMMRA"
            }
            target="_blank"
            rel="noreferrer"
          >
            César Cascabel 4369 Apt. 1022, Las Condes, Santiago - 7550372,
            Chile.
          </a>
          <span style={{ marginTop: "30px" }}>+1-646-652-6162</span>
          <a
            href={
              nativeMapsApp
                ? "https://maps.apple.com/?address=1330%20Sixth%20Ave,%20FL%2023,%20New%20York,%20NY%20%2010019,%20United%20States&ll=40.761968,-73.978413&q=1330%20Sixth%20Ave,%20FL%2023&_ext=EiYpimNu+fRgREAxzyGpeP9+UsA5CDmUVRtiREBBDR3xJz1+UsBQBA%3D%3D&t=m"
                : "https://goo.gl/maps/TeBATtpueDLLGUrz6"
            }
            target="_blank"
            rel="noreferrer"
          >
            1330 Avenue of the Americas Suite 23A, New York, NY-10019, USA.
          </a>
        </IntroStyled>
        <div className="footer-logo">
          <Image
            height={100}
            width={100}
            src="/chiloecine.png"
            alt="chiloe-cine"
          />
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

export const FooterMobile = () => (
  <FooterMobileStyled>
    <div>
      <Image
        objectFit="scale-down"
        height={13}
        width={146}
        src="/denise-lira.png"
        alt="chiloe-cine"
      />
    </div>
    <div>
      <Image
        objectFit="scale-down"
        height={81}
        width={88}
        src="/chiloecine.png"
        alt="chiloe-cine"
      />
    </div>
  </FooterMobileStyled>
);
