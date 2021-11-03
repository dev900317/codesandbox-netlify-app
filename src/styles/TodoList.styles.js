import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledItem = styled(motion.li)`
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  padding: 4px 0;
`;

export const StyledList = styled(motion.ol)`
  /* list-style-type: none; */
  padding: 40px 24px;
`;

// ANIMATION
export const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
      staggerDirection: 1
    }
  }
};

export const item = {
  hidden: { x: -30, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.2, type: "spring" } },
  exit: {
    x: -30,
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "spring"
    }
  },
  hover: { scale: 1.1, originX: 0 }
};
