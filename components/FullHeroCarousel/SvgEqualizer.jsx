import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const activeEqualizer = css`
  @keyframes short-active-eq {
    0% {
      height: 8px;
    }

    50% {
      height: 4px;
    }

    100% {
      height: 8px;
    }
  }

  @keyframes tall-active-eq {
    0% {
      height: 16px;
    }

    50% {
      height: 6px;
    }

    100% {
      height: 16px;
    }
  }
`;

const disableEqualizer = css`
  @keyframes short-disable-eq {
    0% {
      height: 3px;
    }

    50% {
      height: 4px;
    }

    100% {
      height: 2px;
    }
  }

  @keyframes tall-disable-eq {
    0% {
      height: 3px;
    }

    50% {
      height: 6px;
    }

    100% {
      height: 3px;
    }
  }
`;

const SVGEqualizerStyled = styled(motion.svg)`
  ${disableEqualizer};
  background: transparent;
  .eq-bar {
    transform: scale(1, -1) translate(0, -24px);
  }

  .eq-bar--1 {
    animation-name: short-disable-eq;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-delay: 0.17s;
  }

  .eq-bar--1 {
    animation-name: short-disable-eq;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-delay: 0.17s;
  }

  .eq-bar--2 {
    animation-name: tall-disable-eq;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-delay: 0.17s;
  }

  .eq-bar--3 {
    animation-name: short-disable-eq;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-delay: 0.34s;
  }

  &.eq-active {
    ${activeEqualizer};
    .eq-bar--1 {
      animation-name: short-active-eq;
    }
    .eq-bar--2 {
      animation-name: tall-active-eq;
    }
    .eq-bar--3 {
      animation-name: short-active-eq;
    }
  }
`;

const SVGEqualizer = ({ on }) => {
  return (
    <SVGEqualizerStyled
      className={on ? "eq-active" : null}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <rect className="eq-bar eq-bar--1" x="4" y="4" width="3.7" height="8" />
      <rect
        className="eq-bar eq-bar--2"
        x="10.2"
        y="4"
        width="3.7"
        height="16"
      />
      <rect
        className="eq-bar eq-bar--3"
        x="16.3"
        y="4"
        width="3.7"
        height="11"
      />
    </SVGEqualizerStyled>
  );
};

export default SVGEqualizer;
