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
  const { imageRowOne = {}, imageRowTwo = {} } = footer ?? {};
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
              href={imageRowOne.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="denise-logo"
            >
              {imageRowOne.image.url && (
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={imageRowOne.image.url}
                  alt={imageRowOne.image.title}
                />
              )}
            </a>
            <a
              href={imageRowTwo.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="chiloe-logo"
            >
              {imageRowTwo.image.url && (
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={imageRowTwo.image.url}
                  alt={imageRowTwo.image.title}
                />
              )}
            </a>
          </div>
        </Container>
      </FooterStyled>
    </MaxContainer>
  );
};

export default Footer;

export const FooterMobile = ({ footer }) => {
  const { imageRowOne = {}, imageRowTwo = {} } = footer ?? {};
  return (
    <FooterMobileStyled>
      <a href={imageRowOne.imageUrl} target="_blank" rel="noreferrer">
        {imageRowOne.image?.url && (
          <Image
            objectFit="contain"
            height={13}
            width={146}
            src={imageRowOne.image?.url}
            alt={imageRowOne.image?.title}
          />
        )}
      </a>
      <a href={imageRowTwo.imageUrl} target="_blank" rel="noreferrer">
        {imageRowTwo.image?.url && (
          <Image
            objectFit="contain"
            height={81}
            width={88}
            src={imageRowTwo.image?.url}
            alt={imageRowTwo.image?.title}
          />
        )}
      </a>
    </FooterMobileStyled>
  );
};
