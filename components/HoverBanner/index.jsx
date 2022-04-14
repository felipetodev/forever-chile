import { useRef } from "react";
import Link from "next/link";
import { Container, First, HoverWrapper, Second } from "./styles";
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const HoverBanner = () => {
  const hoverBannerRef = useRef(null)
  const [isIntersecting] = useIntersectionObserver({
    elementRef: hoverBannerRef,
    freezeOnceVisible: true,
    threshold: 0.85
  });
  console.log(isIntersecting)
  return (
    <Container ref={hoverBannerRef}>
      <Link href="/contact">
        <a>
          <HoverWrapper className={isIntersecting ? "is-intersecting" : null}>
            <First className="hover-one">
              <div>{"Let's start"}&nbsp;</div>
              <div>a project</div>
            </First>
            <Second className="hover-two">
              <div>that last&nbsp;</div>
              <div>forever.</div>
            </Second>
          </HoverWrapper>
        </a>
      </Link>
    </Container>
  );
};

export default HoverBanner;
