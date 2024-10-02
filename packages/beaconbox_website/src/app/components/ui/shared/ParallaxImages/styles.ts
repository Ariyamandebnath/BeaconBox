import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ParallaxWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Scroller = styled(motion.div)`
  display: inline-block;
  white-space: nowrap;
`;

export const TextSpan = styled.span`
  display: inline-block;
  padding-right: 30px; /* Space between repeated elements */
  font-size: 2rem; /* Adjust based on design */
  font-weight: bold;
  color: #000; /* Customize text color */
`;
