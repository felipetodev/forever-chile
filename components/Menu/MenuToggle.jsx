import { motion } from "framer-motion"
import styled from "styled-components"

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="red"
    strokeLinecap="round"
    {...props}
  />
);

const ButtonStyled = styled.button`
  cursor: pointer;
  position: absolute;
  top: 55px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const MenuToggle = () => (
  <ButtonStyled>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 6.5 L 20 6.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 13.346 L 20 13.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </ButtonStyled>
);
