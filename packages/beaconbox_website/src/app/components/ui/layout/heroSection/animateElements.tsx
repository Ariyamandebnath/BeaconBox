import styled from '@emotion/styled';
import { motion, MotionProps} from 'framer-motion';




type MotionDivProps = MotionProps & React.HTMLProps<HTMLDivElement>;
export const MainContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 150px 20px;
  background: url('./images/BrushStroke.jpg') no-repeat center center;
  background-size: 100% 890px;
  background-blend-mode: overlay;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    opacity:0.22 ; // Adjust the opacity value here
  }
`;

export const Card = styled(motion.div)<MotionDivProps>`
  position: relative;
  background: #fff;
  border: 3px solid black;
  border-radius: 15px;
  padding: 50px 20px;
  width: 55%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); // Optional: shadow for card
  min-height: 55vh;

  
`;

export const CashIcon = styled(motion.img)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: auto;
`;

export const DollarSign = styled(motion.span)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

