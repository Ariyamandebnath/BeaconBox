'use client';

import { motion, MotionProps } from 'framer-motion';
import styled from '@emotion/styled';
import { ContentContainer } from './components/ui/layout/ContentContainer';

// Define the animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const hoverVariants = {
  hover: {
    rotate: [0, 3, -3, 0],
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const iconHoverVariants = {
  hover: {
    x: [0, 10, -10, 0],
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Define types for motion props
type MotionDivProps = MotionProps & React.HTMLProps<HTMLDivElement>;

// Styled components with Framer Motion props
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 40px 20px;
  background: url('') no-repeat center center;
  background-size: cover;
`;

const Card = styled(motion.div)<MotionDivProps>`
  position: relative;
  background: transparent;
  border: 3px solid black;
  border-radius: 15px;
  padding: 40px 20px;
  width: 65%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); // Optional: shadow for card
  min-height: 60vh; // Ensures the card extends downward
`;

const CashIcon = styled(motion.img)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: auto;
`;

const DollarSign = styled(motion.span)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: black; // Adjusted to fit the card design
  margin-bottom: 16px;
  line-height: 1.2;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.7); // Slightly faded for contrast
  width: 70%;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;
`;

export default function Home() {
  return (
    <ContentContainer>
      <MainContainer>
        <Card
          variants={hoverVariants}
          initial="hidden"
          animate="show"
          whileHover="hover"
        >
          <CashIcon
            src="./images/dollar-bill.png"
            alt="Cash Bundle Icon"
            variants={iconHoverVariants}
            initial="hidden"
            animate="show"
            whileHover="hover"
          />
          <DollarSign
            variants={iconHoverVariants}
            initial="hidden"
            animate="show"
            whileHover="hover"
          >
            $
          </DollarSign>
          <HeroTitle variants={titleVariants} initial="hidden" animate="show">
            The Future of Digital Wallets
          </HeroTitle>
          <HeroSubtitle variants={textVariants}>
            Decentralizing your transactions and ensuring top-notch security for
            all your digital assets. Experience seamless and secure financial
            management with BeaconBox.
          </HeroSubtitle>
        </Card>
      </MainContainer>
    </ContentContainer>
  );
}
