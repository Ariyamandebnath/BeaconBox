'use client';

import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ContentContainer } from './components/ui/layout/ContentContainer';
import { Theme } from '@/app/components/ui/theme/theme';

export const dynamic = 'force-dynamic';

// Define the animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

// Styled components
const HeroSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  padding: 50px 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Theme.text.color.primary};
  margin-bottom: 20px;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${Theme.text.color.secondary};
  max-width: 600px;
`;

export default function Home() {
  return (
    <ContentContainer>
      <HeroSection
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <HeroTitle variants={textVariants}>
          The Future of Digital Wallets
        </HeroTitle>
        <HeroSubtitle variants={textVariants}>
          Decentralizing your transactions and ensuring top-notch security for
          all your digital assets. Experience seamless and secure financial
          management with BeaconBox.
        </HeroSubtitle>
      </HeroSection>
    </ContentContainer>
  );
}
