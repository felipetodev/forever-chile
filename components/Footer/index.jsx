import Image from "next/image";
import {
  Container,
  FooterMobileStyled,
  FooterStyled,
  IntroStyled,
  LogoStyled,
} from "./styles";
import { MaxContainer } from "../Layout/styles";

const Footer = ({ footer, isWork, style }) => {
  return (
    <MaxContainer style={style}>
      <FooterStyled className={isWork ? "is-work-footer" : null}>
        <Container>
          <LogoStyled>
            <span>{footer?.copyright}</span>
            <span>All Rights Reserved FOREVER CHILE</span>
            <span>{footer?.email}</span>
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
            <span>{footer?.primaryNumber}</span>
            <a
              href={footer?.primaryGoogleAddressUrl}
              target="_blank"
              rel="noreferrer"
            >
              {footer?.primaryAddress}
            </a>
            <span style={{ marginTop: "30px" }}>{footer?.secondaryNumber}</span>
            <a
              href={footer?.secondaryGoogleAddressUrl}
              target="_blank"
              rel="noreferrer"
            >
              {footer?.secondaryAddress}
            </a>
          </IntroStyled>
          <div className="footer-logo">
            <a
              href="https://www.deniseliraratinoff.com"
              target="_blank"
              rel="noreferrer"
              className="denise-logo"
            >
              <Image
                objectFit="contain"
                layout="fill"
                src="/denise_logo.svg"
                alt="Denise Lira"
              />
            </a>
            <a
              href="https://www.chiloecine.com"
              target="_blank"
              rel="noreferrer"
              className="chiloe-logo"
            >
              <Image
                objectFit="contain"
                layout="fill"
                src="/chiloecine.png"
                alt="Chiloe Cine"
              />
            </a>
          </div>
        </Container>
      </FooterStyled>
    </MaxContainer>
  );
};

export default Footer;

export const FooterMobile = () => (
  <FooterMobileStyled>
    <a
      href="https://www.deniseliraratinoff.com"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        objectFit="contain"
        height={13}
        width={146}
        src="/denise_logo.svg"
        alt="Denise Lira"
      />
    </a>
    <a href="https://www.chiloecine.com" target="_blank" rel="noreferrer">
      <Image
        objectFit="contain"
        height={81}
        width={88}
        src="/chiloecine.png"
        alt="Chiloe Cine"
      />
    </a>
  </FooterMobileStyled>
);
